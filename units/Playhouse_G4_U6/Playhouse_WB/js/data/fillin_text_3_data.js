var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_32/2.mp3',
      },
      {
        'url': '',
      },
      {
        'url': '',
      },
      {
        'url': '',
      }
  ],
}

var fillin_data = {
    "layout"               : 1,
    "numinrow"              : [[1], [1], [1], [1], [1]],
    "mainTitle"             : "../images/pages/sb-icons/spilling.jpg",
    "mainTitleIcon"         : "../images/pages/sb-icons/readwrite_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "-35px"},
    "mainTitleAudio"        : "../audios/page_32/PHONICS_AND_SPELLING.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> You do it! Try writing a word that rhymes with each given word.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_32/2_You_do_it!_Try_writing_a_word_that_rhymes_with_each_given_word.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 0,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        
        {
          "singleword": false,
          "text": " tall and[_]",
          "textaudios": ["../audios/page_32/under.mp3","../audios/page_32/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Paul said that I have got a large extended family."],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "hike and [_]",
          "textaudios": ["../audios/page_32/under.mp3","../audios/page_32/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["The groom said, 'That the wedding will be in May.'"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "red and [_]",
          "textaudios": ["../audios/page_32/under.mp3","../audios/page_32/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Her fiancé said, 'I like action films.'"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },  
        {
          "singleword": false,
          "text": "cat and [_]",
          "textaudios": ["../audios/page_32/under.mp3","../audios/page_32/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Ms. Donovan said that we should plant tomatoes, carrots and flowers."],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "grow and [_]",
          "textaudios": ["../audios/page_32/under.mp3","../audios/page_32/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["The groom said, 'That the wedding will be in May.'"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "ride and [_]",
          "textaudios": ["../audios/page_32/under.mp3","../audios/page_32/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["Her fiancé said, 'I like action films.'"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },             
      ]
    }
// Open response: reviewed by the teacher; no single fixed answer.
fillin_data.manualReview = true;
fillin_data.defaultAnswer = 0;
fillin_data.questions.forEach(function(q) { q.answer = []; q.fillinanswer = ''; });
