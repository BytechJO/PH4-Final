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
              "Waritsat School is opening a shop! Come shop at school "+
              "if you’ve forgotten a pencil, you're hungry for a snack "+
              "or you need a top or jumper for the school uniform. "+
              "Students from Mr. Jones’s consumer maths class will "+
              "help to run the store, and any money made will help to "+
              "pay for school trips. "+
              "The shop is in the large classroom next to the cafeteria, "+
              "and it is open one hour before school, one hour after "+
              "school and at lunch. Here are some of the ideas we’ve "+
              "had so far:  "+

              "<div class='b_box'>I don’t think you have enough "+
              "healthy things to eat. Could you "+
              "get some juices and some fruit "+
              "and nuts for snacks? "+
              "<span style='float:right;'>–The Health Nut</span> </div>"+

              "<div class='b_box'>I need notebooks as much as I need "+
              "pencils, but you don’t sell any. Do "+
              "you have enough space to get some "+
              "more school supplies at the store? "+
              "<span style='float:right;'>–Bookworm</span> </div>"+

              "<div class='c_box'>We’d love to hear your suggestions! We hope to see you at the shop soon! "+
              "<span style='float:right;'>by Jenny</span> "+
              "<span style='float:right;'>Drawing by Max</span> </div>"
             ],
             "audio": ["../audios/Pg4_1.2_Adult_Lady.mp3","../audios/Pg4_1.3_Adult Lady.mp3", "../audios/Pg4_1.4_Adult Lady.mp3"],
              "titlesAudio":[""],
              "titleTexts":[""],
              "top_image":["../images/pages/news-letter/1-news-title.png"],//
              "second_image":["../images/pages/news-letter/1-news-img.png"],
          },
          ///////////////////////////////////////////////////////////////////////////////////////////////////////// 2 //
          'listen2': {
              "text":  [
                "<br/>"+
                "Mark Martin is just 10 years old "+
                "and is the youngest student at "+
                "Waritsat School to win a national "+
                "spelling bee! "+
                "He won the school spelling bee with "+
                "the word ‘cantaloupe’ and advanced "+
                "to the National Spelling Bee. After "+
                "three days of hard work, Mark won "+
                "the National Spelling Bee with the word ‘vaquero’. "+
                "Mark was really happy to win and he got to meet Frank Brownwood, a "+
                "famous actor. Is Mark going to try to win again next year? "+
                "‘Of course,’ said Mark. ‘Except next year, I’ll be against older kids, and the "+
                "words will be harder. I’ll have to work extra hard.’ "+
                "When Mark isn’t working with words, he likes swimming, maths and the "+
                "outdoors.  "
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
                "Look at the picture below.",
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
