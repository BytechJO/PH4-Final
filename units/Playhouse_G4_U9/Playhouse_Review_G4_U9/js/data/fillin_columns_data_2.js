var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
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
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="blue_text">2</span> Put it together! Use the words in the boxes to make sentences.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "options"               :[],
    "optionsAudios"         : ["","","","","","","","","","","","",""],
    "questions": [
        {
            "textfront": "<span class='square' style='background-color: orange'>shirts</span>"+
                         "<span class='square' style='background-color: lightblue'>too small</span>"+
                         "<span class='square' style='background-color: lightgray'>are</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["dances chooses"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "<span class='square' style='background-color: lightgreen'>as_as</span>"+
                         "<span class='square' style='background-color: palevioletred'>soft</span>"+
                         "<span class='square' style='background-color: orange'>cotton</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["helps likes writes"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "<span class='square' style='background-color: lightgray'>have</span>"+
                         "<span class='square' style='background-color: orange'>enough</span>"+
                         "<span class='square' style='background-color: lightblue'>socks</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "",
            "answer": ["opens sings blows"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        }
    ]
}