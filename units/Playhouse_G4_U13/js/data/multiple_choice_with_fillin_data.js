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
    "mainTitle"             : "../images/pages/sb-icons/gram_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleAudio"        : "../audios/under.mp3",
    "mainTitleIconPos"      : {"right": "80px"},
    "subTitleTextLeft"      : "<span class='title-order'>2</span> Write about it!",
    "subTitleTextRight"     : "Circle the correct form you would use to agree with these statements. Then, write <span class='red_text'>N</span> if the statement is a negative statement or <span class='red_text'>P</span> if the statement is a positive statement.",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "subTitleAudio"         : "../audios/under.mp3",
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "showicon"              : "true",
	"image"                 : "",
	"numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       :  1,
    "questions"             :
    [
        {
            "question": "I like healthy salads for lunch.",
            "answer": [1],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"p",
            "options": [
                {
                    "text": "So do I.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "Neither do I.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
               
            ]
        },
        {
            "question": "I don’t like to walk on the beach.",
            "answer": [2],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"n",
            "options": [
                {
                    "text": "I do too.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "I don’t either.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
               
            ]
        },
        {
            "question": "He went to the concert.",
            "answer": [1],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"p",
            "options": [
                {
                    "text": "I did too.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "Neither did I.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
               
            ]
        },
        {
            "question": "I don’t like tangy oranges.",
            "answer": [2],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"n",
            "options": [
                {
                    "text": "So do I.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "I don’t either.",
                    "image": "",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                
            ]
        },
    ]
}