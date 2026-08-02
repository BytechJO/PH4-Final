var stereo_data = {
    "audio":"",
    "exist":false,
    "bgColor_rgb":"rgb(12, 177, 75)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/page_56/1.mp3',
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

var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/page_56/GRAMMAR.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Circle it!",
    "subTitleTextRight"     : "Look at the pictures. Circle and write the best adverb of degree in the blank.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/page_56/1_Finish_it!_Write_the_correct_pronoun_in_the_blank.mp3",
    "activityicon"          : "../images/icons/hand_icon.png",    
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "numbering"             : "number",
    "numberstartfrom"       : 1, 
    "numberofcolumns"       :  1,
    "image"                 : "no",
    "imageposition"         :"back",
    "questions"             : [
        {
            "question"              : "His car [_] works.",
            "options"               : [["really","hardly","so"]],          
            "answer"                : [2],
			"inputbox"				:"yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default 
            
        },
        {
            "question"              : "This hot dog is [_] spicy to eat!",
            "options"               : [["too","hardly","kind of"]],
            "answer"                : [1],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
        {
            "question"              : "Mr. Murphy is [_] sad. It’s snowing and he wanted to go to the lake today.",
            "options"               : [["a lot","barely","extremely"]],
            "answer"                : [3],
			"inputbox"				: "yes",
			"image"					: '',
            "audio"                 : "",
            "audioenable"           : "correct", // correct (or) default
            
        },
    ]
}