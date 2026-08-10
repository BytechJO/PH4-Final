var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_36/2.mp3',
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
   "mainTitle"             : "../images/pages/sb-icons/grammer_main_title.png",
  "mainTitleIcon"         : "",
  "mainTitleIconPos"      : {"right": "-18px"},
  "mainTitleAudio"        : "../audios/page_36/GRAMMAR.mp3",
    "subTitleTextLeft"      : '<span class="red_text">2</span> Write it! Write the correct comparison in the blank.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_36/2_Write_it!_Write_the_correct_comparison_in_the_blank.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "defaultAnswer"         : 1,
    "numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       : 1,
    "options"               : [],
    "questions"             :
     [
        {
          "singleword": false,
          "text": "I like all the places we went, but the waterfall was the[_]<span class='blue_text'>(beautiful)</span>.",
          "textaudios": ["../audios/page_36/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["most beautiful"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no  
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "Isaac thinks that vanilla ice cream is the[_]<span class='blue_text'>(good)</span>.",
          "textaudios": ["../audios/page_36/under.mp3","../audios/page_36/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["best"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no     
          "strictorder": "yes", // yes (or) no             
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "The Great Canyon is the [_] <span class='blue_text'>(big)</span> canyon in the world, but for some",
          "textaudios": ["../audios/page_36/under.mp3","../audios/page_36/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["biggest"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "reason, the Grand Canyon is[_] <span class='blue_text'>(famous)</span> than the Great Canyon.",
          "textaudios": ["../audios/page_36/under.mp3","../audios/page_36/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "",
          "answer": ["more famous"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },       
      ]
    }