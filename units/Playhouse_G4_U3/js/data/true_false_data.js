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
var mcq_data = {   
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "-18px"},
    "subTitleTextLeft"      : '<span class="title-order">2</span> You do it!',
    "subTitleTextRight"     : "Answer <span class='red_text'>True</span> or <span class='red_text'>False</span>.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/under.mp3",
    "activityheading"       : "",
    "activityheading_audio" : "../audios/under.mp3",
    "activitysubheading"    : "",
    "activityicon"          : "../images/icons/hand_icon.png",    
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    // "rightImage"            : "../images/pages/activities/adv_2_right-background.png",
    // "rightText"             : ["<span class='right_title'>Find in the story:</span>","<span class='orange_text'>✓</span> It looks small","<span class='orange_text'>✓</span> I visited Japan","<span class='orange_text'>✓</span> It was so exciting!"],
    // "rightTextAudio"        : ["../audios/under.mp3","../audios/under.mp3","../audios/under.mp3"],
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "image"                 : "",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "<b>1</b> &nbsp;  The Carnival of Cultures is in Boise, Idaho.",
            "options"               : ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
            
        },
        {
            "question"              : "<b>2</b> &nbsp;  The carnival is famous because it brings in rides from many cities around the world.",
            "options"               : ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>3</b> &nbsp; The carnival was started to help with world peace.",
            "options"               :  ["True","False"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>4</b> &nbsp; The first Carnival of Cultures was in the year 2000.",
            "options"               :  ["True","False"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        }
    ]
}