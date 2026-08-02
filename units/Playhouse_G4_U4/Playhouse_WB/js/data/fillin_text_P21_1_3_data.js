var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(53, 130, 180)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_21/demo.mp3',
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
    "mainTitleAudio"        : "../audios/page_21/GRAMMAR.mp3",
    "subTitleTextLeft"      : "<span class='blue_text'>2</span> Finish it! Fill in the blanks.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_21/1_You_do_it!_Write_polite_requests_and_their_short_answers.mp3",
    "image"                 : "",
    "imageposition"         : "back",// "front" (or) "back"
    "numbering"       : "number", // "alphabet" (or) "number"
    "numberstartfrom" : 1,
    "options"         : [],
    "questions"       :
     [
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/page_21/under.mp3","../audios/page_21/under.mp3"],
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/1-img-1.png",
          "answer": [],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
        {
          "singleword": false,
          "text": "[_]",
          "textaudios": ["../audios/page_21/under.mp3","../audios/page_21/under.mp3"],
          "textEnd":"",
          "textEnd_audio": "",
          "audio": "",
          "audioenable": "default", // correct (or) default
          "image": "../images/pages/activities/1-img-2.png",
          "answer": ["No I never play football at Sunset Park"],
          "alternateanswer": [[]],
          "strictcase": "no", // yes (or) no    
          "strictorder": "yes", // yes (or) no              
          "maxlength": 200,
          "type": "", // text (or) number
        },
      ]
    }