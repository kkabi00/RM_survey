
function qs(name, fallback=''){
  const u = new URLSearchParams(location.search);
  return u.get(name) || fallback;
}
const SCENARIO = qs('s','sns');
const COND = qs('c','c1');
const FAST = qs('fast','') === '1';
const D = window.EXP_DATA;
const S = D.scenarios[SCENARIO];
const C = D.conds[COND];
function enc(v){return encodeURIComponent(v)}
function pathTo(app){
  return `../../${app}/${SCENARIO}/index.html?s=${enc(SCENARIO)}&c=${enc(COND)}${FAST?'&fast=1':''}`;
}
function rootPath(app,scenario=SCENARIO,cond=COND){
  return `apps/${app}/${scenario}/index.html?s=${enc(scenario)}&c=${enc(cond)}${FAST?'&fast=1':''}`;
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
function setMeta(){
  document.querySelectorAll('[data-scenario-label]').forEach(e=>e.textContent=S.label);
  document.querySelectorAll('[data-cond-label]').forEach(e=>e.textContent=C.name);
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
