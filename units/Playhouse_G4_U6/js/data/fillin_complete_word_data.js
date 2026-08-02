var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(12, 177, 75)",
  "type":"text",
  "playListData" : [
    {
      'audiourl': '../audios/demoo.mp3',
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
  ]
}
var fillin_data = {
  "layout"                : 1,
  "numinrow"              : [[1,1,1]],
  "mainTitle"             : "../images/pages/sb-icons/phonics.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "70px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>1</span>  Write the missing letters to make these words rhyme.",
  "subTitleTextRight"     : "",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/under.mp3",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  // "defaultAnswer": [],
  "options": [],
  "optionsAudios":[],
  "questions":
    [
      {
        "singleword": false,
        "text": "[_]ake",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/word_1.png",
        "answer": ["o"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "sn[_]",
        "textFront":"",
        "textaudios": ["../audios/under.mp3"],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/word_2.png",
        "answer": ["ake"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 10,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "snow[_]ake",
        "textFront":"",
        "textaudios": [""],
        "textEndAudio":"",
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "../images/pages/activities/word_3.png",
        "answer": ["fl"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no    
        "strictorder": "yes", // yes (or) no              
        "maxlength": 10,
        "type": "text", // text (or) number
      },
    
    ],

  }