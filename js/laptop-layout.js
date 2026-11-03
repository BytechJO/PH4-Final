/* Measure the actual fixed bars: SB, WB and Review use different heights. */
(()=>{
 function sync(){
  const root=document.documentElement;
  const height=s=>{const e=document.querySelector(s);return e?e.getBoundingClientRect().height:0};
  root.style.setProperty('--lesson-header',height('header')+'px');
  root.style.setProperty('--lesson-footer',height('footer')+'px');
  root.style.setProperty('--lesson-controls',height('.func_ctrls')+'px');
 }
 function start(){sync();const observer=new ResizeObserver(sync);for(const e of document.querySelectorAll('header,footer,.sub_footer'))observer.observe(e);window.addEventListener('resize',sync);}
 document.readyState==='loading'?document.addEventListener('DOMContentLoaded',start):start();
})();
