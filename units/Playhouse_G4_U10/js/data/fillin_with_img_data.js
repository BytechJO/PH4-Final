var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(12, 177, 75)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_89/3.mp3',
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
    "layout"                : 1,
    "numinrow"              : [[1,1,1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_89/CONVERSATION.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span> Listen to it!",
    "subTitleTextRight"     : "Listen and write ‘<span class='red'>good</span>’, ‘<span class='red'>not good</span>’ or ‘<span class='red'>very good</span>’ under each picture.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_89/3_Listen_to_it.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 : "",
    "questions": [{
            "textfront": "",
            "textend": "",
            "audio": "../audios/page_89/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-1.png",
            "answer": ["very good"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "textend": "",
            "audio": "../audios/page_89/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-2.png",
            "answer": ["good"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "",
            "textend": "",
            "audio": "../audios/page_89/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/2-img-3.png",
            "answer": ["not good"],
            "strictcase": "no", // yes (or) no
            "type": "text", // text (or) number
        },
    ]
}