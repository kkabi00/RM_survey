
function qs(name, fallback=''){
  const u = new URLSearchParams(location.search);
  return u.get(name) || fallback;
}
const LANG = ['ko','en','zh'].includes(qs('lang','ko')) ? qs('lang','ko') : 'ko';
const SCENARIO = qs('s','sns');
const COND = qs('c','c1');
function getOrCreateParticipantId(){
  const fromUrl = qs('pid','').trim();
  if(fromUrl) return fromUrl;
  try{
    const key = 'rm_participant_id';
    const saved = localStorage.getItem(key);
    if(saved) return saved;
    const generated = 'P-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,8);
    localStorage.setItem(key, generated);
    return generated;
  }catch(err){
    return 'P-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,8);
  }
}
const PARTICIPANT_ID_AUTO = getOrCreateParticipantId();
const FAST = qs('fast','') === '1';
const D = window.EXP_DATA;
const UI = window.EXP_UI || {};
document.documentElement.lang = LANG;
const S = D.scenarios[SCENARIO];
const C = D.conds[COND];
// Google Apps Script를 웹앱으로 배포한 뒤, shared/data.js의 배포 URL을 갱신합니다.
const GOOGLE_SHEETS_WEB_APP_URL = window.GOOGLE_SHEETS_WEB_APP_URL || '';
function enc(v){return encodeURIComponent(v)}
function pathTo(app){
  return `../../${app}/${SCENARIO}/index.html?s=${enc(SCENARIO)}&c=${enc(COND)}&pid=${enc(PARTICIPANT_ID_AUTO)}&lang=${enc(LANG)}${FAST?'&fast=1':''}`;
}
function rootPath(app,scenario=SCENARIO,cond=COND){
  return `apps/${app}/${scenario}/index.html?s=${enc(scenario)}&c=${enc(cond)}&pid=${enc(PARTICIPANT_ID_AUTO)}&lang=${enc(LANG)}${FAST?'&fast=1':''}`;
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

function getScenarioOutcomeMeta(){
  const aaLevel = C.aa === 'high' ? 'HighAA' : 'LowAA';
  const ptsLevel = C.pts === 'high' ? 'HighPTS' : 'LowPTS';
  const guiltLevel = C.pts === 'high' ? 'HighGuilt' : 'LowGuilt';
  const fallback = {
    high: {
      scenario_type: 'high_pts',
      title_text: '',
      caption_text: '',
      visibility_setting: '',
      views: '',
      likes: '',
      comments: '',
      shares: '',
      follower_gain: '',
      result_text: S.highOutcome || '',
      video_asset: S.videoHigh || ''
    },
    low: {
      scenario_type: 'low_pts',
      title_text: '',
      caption_text: '',
      visibility_setting: '',
      views: '',
      likes: '',
      comments: '',
      shares: '',
      follower_gain: '',
      result_text: S.lowOutcome || '',
      video_asset: S.videoLow || ''
    }
  };
  const outcome = (S.outcomes && S.outcomes[C.pts]) || fallback[C.pts];
  const base = {
    condition: COND,
    aa_level: aaLevel,
    pts_level: ptsLevel,
    guilt_level: guiltLevel,
    scenario_type: outcome.scenario_type || fallback[C.pts].scenario_type,
    title_text: outcome.title_text || '',
    caption_text: outcome.caption_text || '',
    visibility_setting: outcome.visibility_setting || '',
    views: outcome.views || '',
    likes: outcome.likes || '',
    comments: outcome.comments || '',
    shares: outcome.shares || '',
    follower_gain: outcome.follower_gain || '',
    start_image_asset: S.startImageRoot || S.startImage || '',
    video_asset: outcome.video_asset || fallback[C.pts].video_asset,
    result_text: outcome.result_text || fallback[C.pts].result_text
  };
  const selectionFields = {
    selected_direction_id: '',
    selected_direction_label: '',
    direction_intensity: '',
    direction_expected_views: '',
    direction_expected_followers: '',
    selected_editing_id: '',
    selected_editing_label: '',
    editing_intensity: '',
    editing_expected_views: '',
    editing_expected_followers: '',
    selected_title_id: '',
    selected_title_label: '',
    title_intensity: '',
    title_expected_views: '',
    title_expected_followers: '',
    selected_caption_id: '',
    selected_caption_label: '',
    caption_intensity: '',
    caption_expected_views: '',
    caption_expected_followers: '',
    selected_visibility_id: '',
    selected_visibility_label: '',
    visibility_intensity: '',
    visibility_expected_views: '',
    visibility_expected_followers: '',
    stimulation_score: '',
    total_expected_views: '',
    total_expected_followers: ''
  };
  const meta = {...base, ...selectionFields};
  try{
    const saved = JSON.parse(localStorage.getItem('rm_survey_sns_meta') || '{}');
    if(saved && saved.scenario === SCENARIO && saved.condition === COND){
      Object.keys(selectionFields).forEach(key=>{
        if(saved[key] !== undefined) meta[key] = saved[key];
      });
      if(COND === 'c3'){
        if(saved.selected_title_label) meta.title_text = saved.selected_title_label;
        if(saved.selected_caption_label) meta.caption_text = saved.selected_caption_label;
        if(saved.selected_visibility_label) meta.visibility_setting = saved.selected_visibility_label;
        meta.result_text = 'AI 영상은 지인 A를 웃음거리로 만드는 방식으로 생성되었습니다. 영상 속 A는 실제로 하지 않은 우스꽝스럽고 민망한 행동을 하는 것처럼 보이며, 사람들은 이를 보고 웃거나 조롱하는 반응을 보입니다.';
      }
    }
  }catch(err){}
  return meta;
}

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
