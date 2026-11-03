/* Shared fixes adapted from G1–G3; no answer keys or lesson audio are replaced. */
(()=>{
 const body=document.body;body.classList.add('g4-lesson');
 const intro=/\/playhouse_intro\.html$/.test(location.pathname);if(intro)body.classList.add('g4-intro');
 const main=document.querySelector('.mainContent');
 if(intro&&main){const s=getComputedStyle(body);Object.assign(main.style,{backgroundImage:s.backgroundImage,backgroundSize:s.backgroundSize,backgroundPosition:s.backgroundPosition,backgroundRepeat:'no-repeat'});body.style.backgroundImage='none';}
 let pending=false;
 function visible(e){const r=e.getBoundingClientRect();return r.width>0&&r.height>0&&getComputedStyle(e).display!=='none';}
 function fit(){pending=false;
  document.querySelectorAll('.mainContent .modal').forEach(e=>body.appendChild(e));
  if(intro)document.querySelectorAll('.mainContent .read_highlights_wrap,.mainContent .subFooterNav').forEach(e=>body.appendChild(e));
  const header=document.querySelector('header'),footer=document.querySelector('footer');let top=header?.getBoundingClientRect().bottom||100,bottom=footer?.getBoundingClientRect().top||innerHeight;
  if(intro&&main){main.style.height=innerHeight+'px';main.style.marginTop=top+'px';main.style.setProperty('--g4-intro-scale',Math.min(1,Math.max(200,bottom-top-8)/innerHeight));}
  document.querySelectorAll('.sub_footer').forEach(e=>{if(visible(e)&&e.getBoundingClientRect().top>top)bottom=Math.min(bottom,e.getBoundingClientRect().top)});
  if(!intro)document.querySelectorAll('.content_wrap').forEach(c=>{c.style.setProperty('--g4-available',Math.max(180,bottom-c.getBoundingClientRect().top-10)+'px');});
  if(!intro)document.querySelectorAll('.options').forEach(a=>{
   if(a.querySelector('canvas,.ui-draggable,.ui-droppable,.gdd_word,.dragPoint,.dropPoint,[draggable=true],.neo-video-player')||/drag|linedraw|draw/i.test(a.dataset.type||a.dataset.activity||''))return;
   a.classList.add('g4-scale');a.style.setProperty('--g4-scale',Math.min(1,Math.max(.72,Math.min(innerWidth/1600,innerHeight/950))));
  });
  document.querySelectorAll('#monitor').forEach(frame=>{const v=frame.querySelector('video');if(!v)return;const c=frame.closest('.content_wrap'),ratio=v.videoWidth&&v.videoHeight?v.videoWidth/v.videoHeight:16/9;const y=frame.getBoundingClientRect().top+(c?.scrollTop||0);const width=Math.min(1100,innerWidth*.82,Math.max(150,bottom-y-45)*ratio);frame.style.setProperty('--g4-video-width',width+'px');frame.style.setProperty('--g4-video-ratio',ratio);});
 }
 function queue(){if(!pending){pending=true;requestAnimationFrame(()=>requestAnimationFrame(fit));}}
 addEventListener('resize',queue);addEventListener('load',queue);document.addEventListener('loadedmetadata',queue,true);document.addEventListener('fullscreenchange',queue);document.fonts?.ready.then(queue);
 new MutationObserver(queue).observe(body,{childList:true,subtree:true});const observer=new ResizeObserver(queue);document.querySelectorAll('header,footer,.sub_footer,.act_head_group,.options').forEach(e=>observer.observe(e));queue();[300,1200,2600].forEach(ms=>setTimeout(queue,ms));
 const $=window.jQuery,popup=document.querySelector('#feedbackPopup');
 if($&&popup&&typeof window.showFeedback==='function'){
  popup.classList.remove('fade');
  const stop=()=>popup.querySelectorAll('video').forEach(v=>{v.pause();try{v.currentTime=0}catch{}v.style.display='none'});
  window.showFeedback=function(show,correct){if(typeof window.stopPlaying==='function')window.stopPlaying();stop();if(!show){$(popup).modal('hide');return;}let status=popup.querySelector('.feedback-status');if(!status){status=document.createElement('p');status.className='feedback-status';status.setAttribute('role','status');popup.querySelector('.modal-body').appendChild(status)}status.textContent=correct?'Good job!':'Try again!';popup.setAttribute('aria-label',status.textContent);const v=popup.querySelector(correct?'#video_1':'#video_2');if(v){v.style.display='block';v.play()?.catch(()=>{})}$(popup).modal('show');};
  $(popup).on('hidden.bs.modal.g4Laptop',stop);
  $(document).on('click.g4Laptop','.checkBtn',function(){if(this.classList.contains('disabled'))return;setTimeout(()=>document.querySelector('.resetBtn')?.classList.remove('disabled'),0)});
 }
 if($)document.addEventListener('keydown',e=>{if(e.key==='Escape')$('.modal.show').modal('hide');});
})();



window.g4ScreenshotRoutes=["units/Playhouse_G4_U1/Playhouse_WB/views/WB_U1_Q6.html","units/Playhouse_G4_U1/Playhouse_WB/views/WB_U1_Q7.html","units/Playhouse_G4_U1/Playhouse_WB/views/WB_U1_Q10.html","units/Playhouse_G4_U2/views/SB_G4_U2_P14_3.html","units/Playhouse_G4_U2/Playhouse_WB/views/WB_G4_U2_P13_2.html","units/Playhouse_G4_U3/Playhouse_WB/views/fillin_text_letters.html","units/Playhouse_G4_U4/Playhouse_Review_G4_U4/views/wordsearch_P56_3.html","units/Playhouse_G4_U4/Playhouse_WB/views/free_fillin_on_image.html","units/Playhouse_G4_U4/Playhouse_WB/views/fillin_text_P21_1_2.html","units/Playhouse_G4_U4/Playhouse_WB/views/fillin_text_P17_3.html","units/Playhouse_G4_U4/Playhouse_WB/views/slide_7.html","units/Playhouse_G4_U4/Playhouse_WB/views/fillin_textarea.html","units/Playhouse_G4_U5/views/fillin_number_image.html","units/Playhouse_G4_U5/views/circle_word_in_sentence.html","units/Playhouse_G4_U5/views/fillin_number_image_2.html","units/Playhouse_G4_U5/Playhouse_Review_G4_U5/views/fillin_square.html","units/Playhouse_G4_U5/Playhouse_WB/views/drag_drop_text.html","units/Playhouse_G4_U6/views/fillin_number_image.html","units/Playhouse_G4_U6/views/fillin_text_3.html","units/Playhouse_G4_U6/views/fillin_complete_word.html","units/Playhouse_G4_U6/Playhouse_WB/views/Square_puzzle.html","units/Playhouse_G4_U6/Playhouse_WB/views/slide_2.html","units/Playhouse_G4_U7/views/multiple_choice_with_fillin.html","units/Playhouse_G4_U7/views/slide_8_2_phonics.html","units/Playhouse_G4_U7/views/WB_G4_U2_P12_2.html","units/Playhouse_G4_U7/Playhouse_Review_G4_U7/views/fillin_text_in_sentences_4.html","units/Playhouse_G4_U8/Playhouse_WB/views/fillin_text_1.html","units/Playhouse_G4_U9/Playhouse_WB/views/circle_word_in_sentence.html","units/Playhouse_G4_U12/Playhouse_Review_G4_U12/views/conversation_board.html","units/Playhouse_G4_U12/Playhouse_WB/views/writing_doctor.html","units/Playhouse_G4_U12/Playhouse_WB/views/fillin_box_text_with_img.html","units/Playhouse_G4_U14/Playhouse_WB/views/fillin_text.html"];
(()=>{
 const body=document.body, route=decodeURI(location.pathname).replace(/^\//,''),n=window.g4ScreenshotRoutes.indexOf(route)+1;
 if(/\/Playhouse_Review_G4_/.test(location.pathname))body.classList.add('g4-review');
 if(!n)return;
 body.classList.add('g4-user-page','g4-fix-'+n);
 if([13,15,18,20].includes(n))body.classList.add('g4-picture-cards');
 function fit(){
  if(n===6)document.querySelectorAll('.fillin_set').forEach(row=>{let count=0;for(const e of row.children){if(e.matches('input'))count++;else if(e.querySelector('b'))break;}row.style.setProperty('--g4-letter-indent',(6-count)*26+'px')});
  const area=document.querySelector('.options')||document.querySelector('.activity-content'),content=document.querySelector('.content_wrap');
  if(n===10&&area){const illustration=document.querySelector('.image-container');if(illustration&&illustration.parentElement!==area)area.appendChild(illustration);}
  let bottom=document.querySelector('footer')?.getBoundingClientRect().top||innerHeight;
  const controls=document.querySelector('.sub_footer');if(controls&&controls.getBoundingClientRect().height>0)bottom=Math.min(bottom,controls.getBoundingClientRect().top);
  if(content)bottom=Math.min(bottom,content.getBoundingClientRect().bottom);
  const available=area?Math.max(160,bottom-area.getBoundingClientRect().top+(content?.scrollTop||0)-18):300;
  body.style.setProperty('--g4-exercise-height',available+'px');
  if(n===29){body.style.setProperty('--g4-board-scale',Math.min(.9,Math.max(.45,(available-85)/590),Math.max(.45,(innerWidth-470)/650)));}
  if(n===7||n===21){
   const matrix=document.querySelector('.wordmatrix'),rows=matrix?.querySelectorAll('.ws_row');
   if(rows?.length){const cell=Math.min(32,Math.max(16,Math.floor((available-8)/rows.length)));
    matrix.querySelectorAll('.ws_col').forEach(e=>{e.style.setProperty('width',cell+'px','important');e.style.setProperty('height',cell+'px','important');e.style.setProperty('font-size',Math.max(16,cell*.73)+'px','important')});
    const holder=matrix.closest('.wordmatrix_holder');if(holder){holder.style.setProperty('height',rows.length*cell+'px','important');holder.style.setProperty('width',rows[0].children.length*cell+'px','important');}
    if(matrix.dataset.g4Cell!==String(cell)){matrix.dataset.g4Cell=String(cell);if(window.theActivity?.setSizes)window.theActivity.setSizes();}
   }
  }
 }
 let queued=false;function queue(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;fit()})}
 new MutationObserver(queue).observe(body,{childList:true,subtree:true});
 const observer=new ResizeObserver(queue);document.querySelectorAll('header,footer,.content_wrap,.act_head_group').forEach(e=>observer.observe(e));
 addEventListener('resize',queue);addEventListener('load',queue);document.fonts?.ready.then(queue);[100,700,1800].forEach(t=>setTimeout(queue,t));
})();

window.g4New14Routes=["units/Playhouse_G4_U3/Playhouse_Review_G4_U3/views/fillin_text_in_sentences.html","units/Playhouse_G4_U3/Playhouse_WB/views/fillin_text_letters.html","units/Playhouse_G4_U4/views/Group_work_reading.html","units/Playhouse_G4_U4/Playhouse_Review_G4_U4/views/fill_in_text_under_sentences.html","units/Playhouse_G4_U4/Playhouse_WB/views/free_fillin_on_image.html","units/Playhouse_G4_U5/views/Group_work_reading_2.html","units/Playhouse_G4_U6/Playhouse_Review_G4_U6/views/fillin_text_in_sentences_under_ques.html","units/Playhouse_G4_U6/Playhouse_WB/views/Square_puzzle.html","units/Playhouse_G4_U6/Playhouse_WB/views/fillin_text_4.html","units/Playhouse_G4_U8/views/multiple_choice.html","units/Playhouse_G4_U9/Playhouse_Review_G4_U9/views/conversation_board.html","units/Playhouse_G4_U10/views/circle_word_in_sentence.html","units/Playhouse_G4_U13/views/slide_without_background_2.html","units/Playhouse_G4_U15/Playhouse_Review_G4_U15/views/match_text_vertical.html"];
(()=>{
const n=(window.g4New14Routes||[]).indexOf(decodeURI(location.pathname).replace(/^\//,''))+1;if(!n)return;
document.body.classList.add('g4-new14','g4-n14-'+n);
function fit(){const a=document.querySelector('.options'),c=document.querySelector('.content_wrap');if(!a||!c)return;const end=Math.min(...['.sub_footer','footer'].map(s=>document.querySelector(s)).filter(e=>e&&e.getBoundingClientRect().height).map(e=>e.getBoundingClientRect().top));const h=Math.max(180,end-a.getBoundingClientRect().top+c.scrollTop-18);document.body.style.setProperty('--g4-new-height',h+'px');}
window.addEventListener('resize',fit);window.addEventListener('load',fit);setTimeout(fit,800);setTimeout(fit,2000);
})();
(()=>{
if(!document.body.classList.contains('g4-new14'))return;
let pending=false;
function fit(){
 pending=false;
 const a=document.querySelector('.options'),c=document.querySelector('.content_wrap');if(!a||!c||document.body.classList.contains('g4-n14-14')||document.body.classList.contains('g4-n14-8'))return;
 a.style.setProperty('zoom','1','important');
 const top=a.getBoundingClientRect().top+c.scrollTop;
 const bottom=Math.min(c.getBoundingClientRect().bottom,...['.sub_footer','footer'].map(s=>document.querySelector(s)).filter(e=>e&&e.getBoundingClientRect().height).map(e=>e.getBoundingClientRect().top));
 const h=Math.max(a.scrollHeight,a.getBoundingClientRect().height);
 const scale=Math.min(1,Math.max(.65,(bottom-top-12)/h));
 a.style.setProperty('zoom',String(scale),'important');
}
function queue(){if(!pending){pending=true;requestAnimationFrame(fit)}}
window.addEventListener('resize',queue);window.addEventListener('load',queue);
new MutationObserver(queue).observe(document.querySelector('.options')||document.body,{childList:true,subtree:true});
document.fonts.ready.then(queue);setTimeout(queue,1000);setTimeout(queue,2400);
})();
(()=>{
if(!document.body.classList.contains('g4-new14'))return;
function trim(){for(const [s,props] of [['.content_wrap',{'padding-bottom':'0px'}],['.activity_area',{'height':'auto','min-height':'0px'}]]){const e=document.querySelector(s);if(e)for(const[k,v]of Object.entries(props))e.style.setProperty(k,v,'important')}}
window.addEventListener('resize',()=>setTimeout(trim,350));setTimeout(trim,2800);setTimeout(trim,3600);
})();
