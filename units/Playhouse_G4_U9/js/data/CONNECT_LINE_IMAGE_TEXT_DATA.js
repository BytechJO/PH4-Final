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
    "mainTitle": "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon": "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>3</span>  Match it!",
    "subTitleTextRight"     : "Look at the pictures. Match them to the evaluations/comparisons.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "connect"               : "multiple", // single (or) multiple
    "linecolor"             : "#e0c48e",
    "path"                  : "line",
    "strokewidth"           : "4",
    "nodecolor"             : "#14ad4e",
    "nodeselectioncolor"    : '#0EB2EF',
	"ontextaudioplay": '',
    "onimgaudioplay": '',
    "questions"             : {
        "drags"             : [
            {
                "text"          : "too big",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
            {
            
                "text"          : "just as clever as",
				"image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
               
            },
            {
            
                "text"          : "aren’t enough",
                "image"         : "no",
                "audio"         : "../audios/under.mp3",
                "audioenable"   : "default", // correct (or) default
            },
        ],
        "drops"                 : [
            {
                "text"          : "",
                "image"         : "../images/pages/activities/2-img-1.png",
                "answer"        : [3],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "",
                "image"         : "../images/pages/activities/2-img-2.png",
                "answer"        : [1],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            {
                "text"          : "",
                "image"         : "../images/pages/activities/2-img-3.png",
                "answer"        : [2],
                "audio"         : "",
                "audioenable"   : "default", // correct (or) default
            },
            
        ],
    }
}               