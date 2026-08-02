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
    "numinrow"              : [[1,1]],
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> Write about it!',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "Is the visit important to Joyce? ",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["Yes"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "How can you tell?",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": [""],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
    ]
}