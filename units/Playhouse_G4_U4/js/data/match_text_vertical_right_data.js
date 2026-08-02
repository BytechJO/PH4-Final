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
var linedraw_data = {    
    "layout"                : 1,
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Read and match.",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "",
    "rightImage"            : "",
    "rightText"             : [],
    "rightTextAudio"        : [],
    "connect"               : "single", // single (or) multiple
    "linecolor"             : "#0cb14b",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#0cb14b",
    "nodeselectioncolor"    : '#0cb14b', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "My name is Matt.",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "Can I speak to your father?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "Do you want to watch TV?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default  
            },
            {
            
                "text"          : "May I come in?",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default 
            }
        ],
        "drops"                 : [
            {
                "text"          : "I’d be happy to get him for you.",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "Sure! Make yourself at home.",
                "image"         : "no",
                "answer"        : [4],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "It’s nice to meet you.",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "No, thanks. I don’t like TV.",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               