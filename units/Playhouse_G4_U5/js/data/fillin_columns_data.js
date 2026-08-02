var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(12, 177, 75)",
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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "65px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write about it',
    "subTitleTextRight"     : "Look at the pictures and write a ‘<span class='red_text'>how</span>’ question. You can use the adjectives in the box",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 :"",
    "options"               :["big","long","deep","<del>hot</del>"],
    "optionsAudios"         :[],
    "questions": [{
            "textfront": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/3-img-1.png",
            "answer": ["How hot is the soup?"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/3-img-2.png",
            "answer": ["How deep is it?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/3-img-3.png",
            "answer": ["How big is it?"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}