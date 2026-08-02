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
  "numinrow"              : [[1]],
  "mainTitle"             : "../images/pages/sb-icons/phonics_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "80px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>3</span> You do it!",
  "subTitleTextRight"     : "Read and complete the conversation using the words above.",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/under.mp3",
  "ontextaudioplay"       : '',
  "onimgaudioplay"        : '',
  "numbering"             : "alphabet", // "alphabet" (or) "number"
  "numberstartfrom"       : "a",
  "image"                 : "",
  "options"               : [],
  "optionsAudios"         : [],
  "questions": 
  [
    {
      "singleword": false,
      "text": "<span class='red_text'>A:</span> &nbsp; Today we’re going on a [_] trip, so you can sit with your friend on the bus.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["field"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 0,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<span class='blue_text'>B:</span> &nbsp; Will we leave at[_]or nine o’clock?",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["eight"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 0,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<span class='red_text'>A:</span> &nbsp; At nine, and you will each [_] a name tag to wear on the trip.",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["receive"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 0,
      "type": "text", // text (or) number
    },
    {
      "singleword": false,
      "text": "<span class='blue_text'>B:</span> &nbsp; What a  [_]!  I thought we had a test today, but we have a field trip instead!",
      "textaudios": [],
      "image": "",
      "option":"",
      "audio": "../audios/in.mp3",
      "audioenable": "default", // correct (or) default
      "answer": ["relief"],
      "alternateanswer": [[]],
      "strictcase": "no", // yes (or) no  
      "strictorder": "yes", // yes (or) no              
      "maxlength": 0,
      "type": "text", // text (or) number
    },
  ]
}