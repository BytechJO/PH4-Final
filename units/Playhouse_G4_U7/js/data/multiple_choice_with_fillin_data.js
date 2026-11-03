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
    "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "70px"},
    "mainTitleAudio"        : "../audios/page_63/GRAMMAR_PRACTICE.mp3",
    "subTitleTextLeft"      : "<span class='title-order'>1</span> Circle it!",
    "subTitleTextRight"     : "Look at each set of picture and circle your favorite one. Use words from the word box to describe it with more/most.",
    "subTitleIcons"         : [],
    "subTitleAudio"         : "../audios/qa_instructions/p063_q1.mp3",
    "select"                : "multiple", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "showicon"              : "true",
	"image"                 : "",
    "images"                : [],
	"numbering"             : "number", // "alphabet" (or) "number"
    "numberstartfrom"       :  1,
    "questions"             :
    [
        {
            "question": "",
            "answer": [2,4,8,12],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"When he found him in his garden, he ran away from him",
            "options": [
                {
                    "text": "",
                    "image": "../images/pages/activities/img2.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "",
                    "image": "../images/pages/activities/img3.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "",
                    "image": "../images/pages/activities/img4.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        },

        {
            "question": "",
            "answer": [1,6,8,11],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"She likes to eat it. It is for her.",
            "options": [
                {
                    "text": "",
                    "image": "../images/pages/activities/img5.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "",
                    "image": "../images/pages/activities/img6.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "",
                    "image": "../images/pages/activities/img7.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        },
        {
            "question": "",
            "answer": [1,5,6,8,9],            
            "audio": "",
            "audioenable": "default", // correct (or) default
            "fillinanswer":"We have it. He bought us it.",
            "options": [
                {
                    "text": "",
                    "image": "../images/pages/activities/img8.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "",
                    "image": "../images/pages/activities/img9.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                },
                {
                    "text": "",
                    "image": "../images/pages/activities/img10.PNG",
                    "audio": "no",
                    "audioenable": "default", // correct (or) default
                    "needspaceafter": 'no'
                }
            ]
        }      
    ]
}
// Open response: reviewed by the teacher; no single fixed answer.
mcq_data.manualReview = true;
mcq_data.defaultAnswer = 0;
mcq_data.questions.forEach(function(q) { q.answer = []; q.fillinanswer = ''; });
