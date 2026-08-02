var stereo_data = {
  "audio":"",
  "exist":false,
  "bgColor_rgb":"rgb(12, 177, 75)",
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
var reading_data = {
  "mainTitle": "",
  "mainTitleIcon": "",
  "mainTitleIconPos": {"right": "100px"},
  "mainTitleAudio": "../audios/under.mp3",
  "subTitleTextLeft": "PLAYHOUSE NEWSLETTER",
  "subTitleTextRight": "",
  "subTitleIcons": [""],
  "subTitleAudio": "../audios/under.mp3",
  "slides": [
      {
          // "layout": "adventure_images_with_text",
          "parent_class_name": "",
          
          "mainImage": "../images/pages/news-letter/1-news-title.png",
          "questionImage": "../images/pages/news-letter/1-conv-img.png",
          "starImage": "../images/pages/news-letter/2-img-2-title.png",
          "convImage": "../images/pages/news-letter/3-img-title.png",

          "titleAudio": "../audios/Pg6_2.1_Stella.mp3",
         
          'listen': {
            "text":  [
              "Welcome to the first edition of the PLAYHOUSE NEWSLETTER!<br>" +
              "This is a first of its kind newsletter, serving the neighbourhood " +
              "of Waritsat and Waritsat School. We hope to provide you with " +
              "quality information and educational activities. Each edition of " +
              "our paper this year will include an article about a student at " +
              "Waritsat School, a conversation game and any breaking news.<br>" +
              "Happy reading! "
             ],
             "audio": ["../audios/Pg4_1.2_Adult_Lady.mp3","../audios/Pg4_1.3_Adult Lady.mp3", "../audios/Pg4_1.4_Adult Lady.mp3"],
              "titlesAudio":[""],
              "titleTexts":[""],
              "top_image":["../images/pages/news-letter/1-news-title.png"],//
              "second_image":[""],
          },
          ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
          'listen2': {
              "text":  [
                "Meet Sam Jackson from Waritsat " +
                "School, who hopes to be an Olympic " +
                "swimmer in six years! Sam swam " +
                "for six hours daily. He did weight " +
                "training and ate healthy food to " +
                "keep up his energy level.<br>" +
                "Sam started swimming when he was six years old. He took lessons " +
                "at the local swimming pool. He loved swimming, so his parents got " +
                "a swimming pool for the family.<br>" +
                "In the training lessons at the swimming pool Sam learnt all the " +
                "different swimming strokes. Now, Sam practises six days a week " +
                "at the swimming pool with a special coach. He works on his times " +
                "for short races and long races, but his strength is in the long races.<br>" +
                "He is careful about his diet and gets plenty of rest to keep healthy. " +
                "He plans to continue his swimming, so he can enter the Olympics " +
                "in six more years. When he does, he plans to invite all the students " +
                "to watch him race!<br>" +
                "We wish you the best in your swimming, Sam!<br>"
              ],
              "audio": ["../audios/Pg4_1.2_Adult_Lady.mp3","../audios/Pg4_1.3_Adult Lady.mp3", "../audios/Pg4_1.4_Adult Lady.mp3"],
              "titlesAudio":[""],
              "titleTexts":["Start Student"],
              "top_image":["../images/pages/news-letter/2-img-title.png"],
              "second_image":["../images/pages/news-letter/2-img.png"],
          },
          ///////////////////////////////////////////////////////////////////////////////////////////////////////// 3 //
          'listen3': {
              "text":  [
                "Look at the picture.",
                "What doyou think they are saying?",
                "With a friend, act out the conversation! ",
              ],
              "audio": ["../audios/Pg4_1.2_Adult_Lady.mp3","../audios/Pg4_1.3_Adult Lady.mp3", "../audios/Pg4_1.4_Adult Lady.mp3"],
              "titlesAudio":[""],
              "titleTexts":[""],
              "top_image":["../images/pages/news-letter/3-img.png"],
              "second_image":["../images/pages/news-letter/3-img-title.png"],
          },
          ///////////////////////////////////////////////////////////////////////////////////////////////////////// 4 //
          'listen4': {
              "audio": ["../audios/Pg4_1.2_Adult_Lady.mp3","../audios/Pg4_1.3_Adult Lady.mp3", "../audios/Pg4_1.4_Adult Lady.mp3"],
              "titlesAudio":[""],
              "titleTexts":[""],
              "top_image":["../images/pages/news-letter/1-conv-img.png"],
              "second_image":[""],
              "questions"       :
              [
                 {
                   "singleword": false,
                   "text": "1.[_]",
                   "textEnd":"",
                   "textaudios": [],
                   "audio": "",
                   "audioenable": "default", // correct (or) default
                   "image": "",
                   "answer": ["studio"],
                   "alternateanswer": [[]],
                   "strictcase": "no", // yes (or) no  
                   "strictorder": "yes", // yes (or) no              
                   "maxlength": 500,
                   "type": "text", // text (or) number
                 },
                 {
                   "singleword": false,
                   "text": "2.[_]",
                   "textEnd":"",
                   "textaudios": [],
                   "audio": "",
                   "audioenable": "default", // correct (or) default
                   "image": "",
                   "answer": ["camera operator"],
                   "alternateanswer": [[]],
                   "strictcase": "no", // yes (or) no     
                   "strictorder": "yes", // yes (or) no             
                   "maxlength": 500,
                   "type": "text", // text (or) number
                 },
                 {
                   "singleword": false,
                   "text": "3.[_]",
                   "textEnd":"",
                   "textaudios": [],
                   "audio": "",
                   "audioenable": "default", // correct (or) default
                   "image": "",
                   "answer": ["sound engineer"],
                   "alternateanswer": [[]],
                   "strictcase": "no", // yes (or) no     
                   "strictorder": "yes", // yes (or) no             
                   "maxlength": 500,
                   "type": "text", // text (or) number
                 },
                 {
                   "singleword": false,
                   "text": "4.[_]",
                   "textEnd":"",
                   "textaudios": [],
                   "audio": "",
                   "audioenable": "default", // correct (or) default
                   "image": "",
                   "answer": ["anchor"],
                   "alternateanswer": [[]],
                   "strictcase": "no", // yes (or) no     
                   "strictorder": "yes", // yes (or) no             
                   "maxlength": 500,
                   "type": "text", // text (or) number
                 },
                 {
                   "singleword": false,
                   "text": "5.[_]",
                   "textEnd":"",
                   "textaudios": [],
                   "audio": "",
                   "audioenable": "default", // correct (or) default
                   "image": "",
                   "answer": ["live broadcast"],
                   "alternateanswer": [[]],
                   "strictcase": "no", // yes (or) no     
                   "strictorder": "yes", // yes (or) no             
                   "maxlength": 500,
                   "type": "text", // text (or) number
                 },
                
               ]
          }
      },
  ]
}
