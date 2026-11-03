(function () {
 const lessons = {"1":{"text":"What was the first thing you did last summer? Was there something you looked forward to? Did you go to the swimming pool? Talk about last summer.","audio":"../../../audios/listen-and-say.mp3"},"2":{"text":"Do you like the weekends? What do people do at the weekend? Does your family do anything special at the weekend? What did your family do last weekend?","audio":"../../../audios/listen-and-say.mp3"},"3":{"text":"Have you ever been to a carnival? What was it like? Share your story with the class.","audio":"../../../audios/listen-and-say.mp3"},"4":{"text":"Do you like to have guests at your house? Have you had a visitor recently? Talk to your friend about it!","audio":"../../../audios/listen-and-say.mp3"},"5":{"text":"Do you know something that is really big? How about something that is really small? Where is the coldest place you know?","audio":"../../../audios/listen-and-say.mp3"},"6":{"text":"Do you live in a small town or in a city? In a flat or in a house? Talk to your friends about it. Where do they live?","audio":"../../../audios/listen-and-say.mp3"},"7":{"text":"Have you ever seen a waterfall? Do you prefer the country or the city? Which do you think is more beautiful, a forest or a meadow?","audio":"../../../audios/listen-and-say.mp3"},"8":{"text":"Have you ever been to the zoo? Have you ever seen any of these animals? Circle the animals you have seen.","audio":"../../../audios/listen-and-say.mp3"},"9":{"text":"Do you like to shop? Where do you usually shop? Do you like to buy clothes? What kind of clothes do you usually buy?","audio":"../../../audios/listen-and-say.mp3"},"10":{"text":"What do you do in your free time? Do your parents have any free time? Are your parents’ free-time activities the same as yours? Write down your free-time activities. Then circle the activities you like the most.","audio":"../../../audios/listen-and-say.mp3"},"11":{"text":"Do you have a garden? What are your favourite vegetables? If you had a garden, what would be in it?","audio":"../../../audios/listen-and-say.mp3"},"12":{"text":"Have you been to a hospital before? Have you ever visited someone in hospital? Do you think it’s important to visit friends who are in hospital?","audio":"../../../audios/listen-and-say.mp3"},"13":{"text":"Do you know how to cook? Do you have a favourite recipe? Have you ever made a mistake following a recipe? Who usually cooks in your family?","audio":"../../../audios/listen-and-say.mp3"},"14":{"text":"What do you do every morning? What are you doing right now? What will you be doing in three hours?","audio":"../../../audios/listen-and-say.mp3"},"15":{"text":"Have you ever had a problem you couldn’t figure out? Have you ever had something disappear but never found out where it went?","audio":"../../../audios/listen-and-say.mp3"}};
 const unit = Number(location.pathname.match(/Playhouse_G4_U(\d+)/)?.[1]);
 const lesson = lessons[unit]; if (!lesson) return;
 const voice = new Audio();
 function stop(modal) { voice.pause(); voice.currentTime = 0; if (window.theAudio && theAudio.pause) theAudio.pause(); modal.querySelectorAll('audio,video').forEach(m=>m.pause()); }
 function build(modal) {
  if (modal.dataset.introPages) return;
  const body = modal.querySelector('.modal-body'); if (!body || !body.children.length) return;
  modal.dataset.introPages = 'true'; modal.classList.add('intro-paged-popup');
  const read = document.createElement('section'); read.className = 'intro-read-page';
  while (body.firstChild) read.appendChild(body.firstChild);
  const listen = document.createElement('section'); listen.className = 'intro-listen-page';
  const banner = document.createElement('h2'); banner.className = 'intro-word-power'; banner.innerHTML = '<img src="../../../images/intro/word-power.svg" alt="Word Power">';
  const play = document.createElement('button'); play.type='button'; play.className='intro-listen-play'; play.innerHTML='<img src="../../../images/intro/listen-and-say.svg" alt="1 Listen and say.">'; play.setAttribute('aria-label','Play Listen and say');
  play.addEventListener('click',()=>{stop(modal);voice.src=lesson.audio;voice.play().catch(()=>{});});
  const paragraph=document.createElement('p'); paragraph.className='intro-listen-prompt';paragraph.textContent=lesson.text;
  listen.append(banner,play,paragraph);body.append(listen,read);
  const nav=document.createElement('nav');nav.className='intro-popup-nav';nav.setAttribute('aria-label','Word Power pages');
  const back=document.createElement('button'),next=document.createElement('button'),status=document.createElement('span');
  back.type=next.type='button';back.textContent='‹ Back';next.textContent='Next ›';status.setAttribute('aria-live','polite');nav.append(back,status,next);body.after(nav);
  function show(index) {stop(modal);listen.hidden=index!==0;read.hidden=index!==1;back.disabled=index===0;next.disabled=index===1;status.textContent=(index+1)+' / 2';body.scrollTop=0;}
  back.addEventListener('click',()=>show(0));next.addEventListener('click',()=>show(1));modal.showIntroPage=()=>show(0);show(0);
 }
 $(document).on('show.bs.modal','.readHilightsPanel_1',function(){build(this);this.showIntroPage?.();});
 $(document).on('hide.bs.modal','.readHilightsPanel_1',function(){stop(this);});
})();
