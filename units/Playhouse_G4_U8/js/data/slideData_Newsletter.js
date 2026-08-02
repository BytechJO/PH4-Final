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
              "For this edition of the Playhouse Newsletter, Lilly and Jenny interviewed their science teacher, Mrs."+
              "Jenkins, about her work and her love of animals. Mrs. Jenkin’s favourite science subject is biology"+ 
              "because she can learn about animals. She grew up on a farm, where she milked"+
              "the goats every morning, learnt how to take care of calves and fed the animals. She learnt to love animals"+
              "then, and she still loves them today.<br>"+
              "<span class='green_background'>Read about the unusual animals and interesting things she has learnt:</span> <br>"+
              "<span class='green_background_small'>Tortoises</span> <br>"+
              "They live especially in the desert. If they have enough food and water, they can grow up to 70 kilograms. Many tortoises live to be 100 years old, and one was recorded to have lived to be 188!"+
              "<span class='green_background_small'>Llamas</span> <br>"+  
              "Llamas are found mostly in South America and are raised as farm animals for their hair, which is much like sheep’s wool. Llamas are like camels, but they do not have humps. They are known for spitting at people, but with correct training they usually do not."+
              "<span class='green_background_small'>Umbrella Birds</span> <br>"+  
              "They live in rainforests, mostly in South America. They have crests on their heads that look like they might be umbrellas. Sadly, because people have moved into where the umbrella birds live, there is not enough land for them, so many birds have died. Now much of the bird population is protected to keep it from becoming extinct."+
              "<span class='green_background_small'>Alligators</span> <br>"+  
              "They are large reptiles that live in swamps. While alligators are considered dangerous and fierce hunters, they aren’t usually interested in people. Their mouth muscles are very strong when biting, and they eat many different kinds of prey. Thank you, Mrs. Jenkins, for these interesting animal facts!"+
              "<span style='float: right;'><br>by Lilly and Jenny <br>Photo by Yoshi</span>",
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
                "",
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
