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
    "mainTitle"             : "../images/pages/sb-icons/reading.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleIconPos"      : {"right": "80px"},
    "mainTitleAudio"        : "../audios/page_92/READING.mp3",
    "subTitleTextLeft"      : '<span class="title-order">2</span> Answer it!',
    "subTitleTextRight"     : "Write <span class='red_text'>‘true’, ‘false’</span> or <span class='red_text'>‘I can’t tell’</span>.",
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
            "question"              : "<b>1</b> &nbsp;  Sarah has 30 students in her fourth grade class.",
            "options"               : ["True","False","I can’t tell"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default 
            
        },
        {
            "question"              : "<b>2</b> &nbsp;  Jeffrey plays basketball on t he city team.",
            "options"               : ["True","False","I can’t tell"],
            "answer"                : [1],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>3</b> &nbsp; Fencing is extremely popular in Sarah’s fourth grade class.",
            "options"               :  ["True","False","I can’t tell"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        },
        {
            "question"              : "<b>4</b> &nbsp; Four people in Sarah’s class really like eating out in their free time.",
            "options"               :  ["True","False","I can’t tell"],
            "answer"                : [2],
            "audio"                 : "../audios/under.mp3",
            "audioenable"           : "default", // correct (or) default
            
        }
    ]
}