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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it!',
    "subTitleTextRight"     : "Read the statement and add a question tag.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : 1,
    "leftList"              : '',
    "image"                 :"",
    "questions": [{
            "textfront": "The suspect is guilty.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The suspect is guilty, isn’t he?"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "The thief didn’t take their jewellery.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["The thief didn't take their jewellery, did he?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "William will find his missing watch.",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["William will find his missing watch, won't he?"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
       
    ]
}