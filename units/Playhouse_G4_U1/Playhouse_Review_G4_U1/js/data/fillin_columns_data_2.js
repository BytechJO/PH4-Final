var fillin_data = {    
    "layout"                : 1,
    "numinrow"              : [[1,1,1]],
    "mainTitle": "",
    "mainTitleIcon": "",
    "mainTitleIconPos": {"right": "-20px"},
    "mainTitleAudio": "../audios/under.mp3",
    "subTitleTextLeft"      : '<span class="title-order">1</span> Read it and write it! If Ian started his holiday on Monday, then write about where he was and what he did each day.',
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/under.mp3",
    "defaultAnswer"         : -1,
    "leftList"              : '',
    "image"                 :"",
    "options"               :[],
    "optionsAudios"         : ["","","","","","",""],
    "questions": [
        {
            "textfront": "On Monday, Ian was . . .",
            "leftText": "<span style='background-color: lightyellow;'>I had a great time when I was out of town. "+
                        "The first day my family and I were at the "+
                        "beach. I swam a lot in the ocean, and we "+
                        "were at our friend’s house for dinner. I was "+
                        "hungry after swimming a lot, so the dinner "+
                        "was delicious.</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/u11.png",
            "answer": ["swam at a friend's house"],
            "strictcase": "no", // yes (or) no              
            "type": "text", // text (or) number
        },
        {
            "textfront": "On Tuesday, Ian was . . .",
            "leftText": "<span style='background-color: lightblue;'>The next day, we were at a beautiful park "+
                        "near the hotel. There was a place for a "+
                        "picnic, and there were many fun things to "+
                        "play on. We walked for a long time. "+
                        "We were also at the swimming pool that "+
                        "day after dinner. We got to swim when it "+
                        "was dark outside.</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/u12.png",
            "answer": ["at a beautiful park played and walked at the pool swamk"],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        },
        {
            "textfront": "On Wednesday, Ian was . . .",
            "leftText": "<span style='background-color: lightpink;'>On our last day, we were at the beach "+
                        "again. We wanted to enjoy the ocean "+
                        "before we left. That night, we were at the "+
                        "mall to buy a few things for relatives and "+
                        "friends. I was very glad to have such a "+
                        "nice holiday.</span>",
            "audio": "../audios/under.mp3",
            "audioenable": "default", // correct (or) default
            "image": "../images/pages/activities/u13.png",
            "answer": ["at the beach."],
            "strictcase": "no", // yes (or) no 
            "type": "text", // text (or) number
        }
    ]
}