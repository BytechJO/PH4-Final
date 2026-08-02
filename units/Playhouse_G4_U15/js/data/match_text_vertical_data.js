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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Match it!",
    "subTitleTextRight"     : "Match the <span class='red_text'> question tag </span> with its statement.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "image"                 : "../images/pages/activities/6-img-1.png",
    "rightImage"            : "",
    "rightText"             : [],
    "rightTextAudio"        : [],
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "#0cb14b",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#0cb14b",
    "nodeselectioncolor"    : '#0cb14b', 
    "questions"             : {
        "drags"             : [
            {
            
                "text"          : "Mary will solve the mystery,",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "The police are going to investigate the crime,",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "The suspect won’t be found guilty,",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default  
            },
            {
            
                "text"          : "Anne’s sister was innocent,",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default 
            }
        ],
        "drops"                 : [
            {
                "text"          : "will he?",
                "image"         : "no",
                "answer"        : [3],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "won’t she?",
                "image"         : "no",
                "answer"        : [1],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "wasn’t she?",
                "image"         : "no",
                "answer"        : [4],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "aren’t they?",
                "image"         : "no",
                "answer"        : [2],
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ]
    }
}               