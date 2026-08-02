  var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(12, 177, 75)",
  "type":"text",
  "playListData" : [
      {
        'audiourl': '../audios/page_36/demo.mp3',
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
  "layout"               : 1,
  "numinrow"              : [[1], [1], [1], [1], [1]],
  "mainTitle"             : "../images/pages/sb-icons/gramprac_main_title.png",
  "mainTitleIcon"         : "../images/pages/sb-icons/gram_main_title_icon.png",
  "mainTitleIconPos"      : {"right": "75px"},
  "mainTitleAudio"        : "../audios/under.mp3",
  "subTitleTextLeft"      : "<span class='title-order'>2</span> <b>Write about it</b>",
  "subTitleTextRight"     : "Using the examples above, write the correct question or answer",
  "subTitleIcons"         : [""],
  "subTitleAudio"         : "../audios/under.mp3",
  "subTitleAudio"         : "../audios/under.mp3",
  "activityheading"       : '',
  "activityheading_audio" : "",
  "main_activityheading"  :"../images/pages/activities/conversation.jpg",
  "main_activityheading_audio" : "../audios/under.mp3",
  "activitysubheading"    : "",
  "activityicon"          : "../images/icons/key_icon.png",
  "image"                 : "",
  "imageposition"         : "back",// "front" (or) "back"
  "numbering"       : "number", // "alphabet" (or) "number"
  "numberstartfrom" : 1,
  "options"         : [],
  "images"          :["../images/pages/activities/p7_3.png"],
  "questions"       :
   [
      {
        "singleword": false,
        "text": "Did you eat the cake yesterday?<span class='red'>(negative long answer)</span>[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["No, I didn't eat the cake yesterday"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 500,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "[_] &nbsp;<span class='blue'>Answer:</span>&nbsp; Yes, I drank water after the race.",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3","../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["Did you drink water after the race"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no     
        "strictorder": "yes", // yes (or) no             
        "maxlength": 500,
        "type": "text", // text (or) number
      },
      {
        "singleword": false,
        "text": "Did he read the newspaper after dinner?<span class='red'>(negative short answer)</span>[_]",
        "textEnd":"",
        "textaudios": ["../audios/under.mp3"],
        "audio": "",
        "audioenable": "default", // correct (or) default
        "image": "",
        "answer": ["No, he didn't"],
        "alternateanswer": [[]],
        "strictcase": "no", // yes (or) no  
        "strictorder": "yes", // yes (or) no              
        "maxlength": 500,
        "type": "text", // text (or) number
      },
    ]
  }