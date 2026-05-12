
function qs(name, fallback=''){
  const u = new URLSearchParams(location.search);
  return u.get(name) || fallback;
}
const LANG = ['ko','en','zh'].includes(qs('lang','ko')) ? qs('lang','ko') : 'ko';
const SCENARIO = qs('s','sns');
const COND = qs('c','c1');
const NICK = qs('nick', window.EXP_UI?.participantNickname || 'creator');
const FAST = qs('fast','') === '1';
const D = window.EXP_DATA;
const UI = window.EXP_UI || {};
document.documentElement.lang = LANG;
const S = D.scenarios[SCENARIO];
const C = D.conds[COND];
// Google Apps Script를 웹앱으로 배포한 뒤, /google_apps_script.gs의 배포 URL을 여기에 넣습니다.
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxF-iP-hX1SbjinZX6BO_bHEjXCwejwLxQe4uqs67hLgMutPg3yv5DRGUOvPvd17YP1/exec';
function enc(v){return encodeURIComponent(v)}
function pathTo(app){
  return `../../${app}/${SCENARIO}/index.html?s=${enc(SCENARIO)}&c=${enc(COND)}&nick=${enc(NICK)}&lang=${enc(LANG)}${FAST?'&fast=1':''}`;
}
function rootPath(app,scenario=SCENARIO,cond=COND){
  return `apps/${app}/${scenario}/index.html?s=${enc(scenario)}&c=${enc(cond)}&nick=${enc(NICK)}&lang=${enc(LANG)}${FAST?'&fast=1':''}`;
}
function delay(ms){ return new Promise(r => setTimeout(r, FAST ? Math.min(ms,120) : ms)); }
function humanDelay(text, base=420){ return FAST ? 80 : Math.min(1600, base + String(text).length * 28); }
function addClassLater(el, cls='show'){
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add(cls)));
}
function scrollBottom(){
  const c = document.querySelector('.content');
  if(c) c.scrollTop = c.scrollHeight;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
}
async function postSurveyToGoogleSheet(payload){
  if(!GOOGLE_SHEETS_WEB_APP_URL) return {ok:false, reason:'missing-url'};
  await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify(payload)
  });
  return {ok:true};
}
function downloadCsvFile(csv, filename){
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=filename;
  a.click();
  URL.revokeObjectURL(a.href);
}
function setMeta(){
  document.querySelectorAll('[data-scenario-label]').forEach(e=>e.textContent=S.label);
  document.querySelectorAll('[data-cond-label]').forEach(e=>e.textContent='');
}
window.addEventListener('DOMContentLoaded', setMeta);

function enableWhenScrolledToBottom(button, scrollEl=document.querySelector('.content'), threshold=16){
  if(!button || !scrollEl) return;
  button.classList.add('locked');
  button.disabled = true;
  const check = () => {
    const atBottom = scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - threshold;
    if(atBottom){
      button.classList.remove('locked');
      button.disabled = false;
    }else{
      button.classList.add('locked');
      button.disabled = true;
    }
  };
  scrollEl.addEventListener('scroll', check);
  setTimeout(check, 80);
  setTimeout(check, 400);
  setTimeout(check, 1000);
}
