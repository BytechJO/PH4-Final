var snapshot_data = {
  "snapshot": [{
      "audio": ["../audios/page_60/pizza.mp3","../audios/page_60/dough.mp3","../audios/page_60/sauce.mp3","../audios/page_60/sprinkle.mp3","../audios/page_60/cheese.mp3","../audios/page_60/add.mp3","../audios/page_60/pepperoni.mp3","../audios/page_60/slice.mp3"],
      "image": ["../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png","../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png"],
      "word": ["<span>pizza</span>","<span>dough</span>","<span>sauce</span>","<span>sprinkle</span>","<span>cheese</span>","<span>add</span>","<span>pepperoni</span>","<span>slice</span>"],
      "imagePlacePos":[[1,1,1],[1,1,1],[1,0,1]]
        }
  ],"popuptitle": "What I Want To Know:"
}

var snapshotPopup_data="<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

var Popups_data = {
  "slides": [
    {
      'listen': {
        "backgroundImage": "../images/pages/page-1/1-word-background.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='green_text'>2</span> Listen again and read."],
        "titleIcons" : ["../images/pages/page-1/q-1-icon-1.png", "../images/pages/page-1/q-1-icon-1.png", "../images/pages/page-1/q-1-icon-3.png"],
        "titlesAudio" : ["../audios/page_60/2_Read.mp3"],
        "image": ["../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-1.png","../images/pages/snapshots/page-1/popup-3-elem-2.png","../images/pages/snapshots/page-1/popup-3-elem-3.png","../images/pages/snapshots/page-1/popup-3-elem-3.png"],
        "words": ["1 forest","2 lake", "3 meadow","4 island","5 sea", "6 shore","7 mountain","8 valley", "9 waterfall","10 stream"],
        "audio": ["../audios/page_60/1_forest.mp3","../audios/page_60/2_lake.mp3", "../audios/page_60/3_meadow.mp3",
                  "../audios/page_60/4_island.mp3","../audios/page_60/5_sea.mp3","../audios/page_60/6_shore.mp3",
                  "../audios/page_60/7_mountain.mp3","../audios/page_60/8_valley.mp3","../audios/page_60/9_waterfall.mp3",
                  "../audios/page_60/10_stream.mp3"]},
      'listen2': {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        "mainTitle": "../images/pages/page-1/1-title.png",
        "titleTexts" : ["<span class='green_text'>3</span> Say it."],
        "titleIcons" : ["../images/pages/page-1/q-1-icon-1.png"],
        "titleTextRight": "<span class='green_text'>Point and say.</span>",
        "titlesAudio" : ["../audios/new/sayit.mp3"],
        "image": ["../images/pages/page-1/2-img-1.png","../images/pages/page-1/2-img-2.png"],
        "audio": ["../audios/page_60/Pg5_2.2_Adult Lady.mp3","../audios/page_60/Pg5_2.3_Adult Lady.mp3"]},
    
    },
  ],
  "class_name":["","","","","","","","","","","",""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  "words"  : ["forest","lake", "meadow","island","sea", "shore","mountain","valley", "waterfall","stream"],
  "points"  : ["../images/pages/page-1/intro-1.png",
              "../images/pages/page-1/intro-2.png",
              "../images/pages/page-1/intro-3.png",
              "../images/pages/page-1/intro-4.png",
              "../images/pages/page-1/intro-5.png",
              "../images/pages/page-1/intro-6.png",
              "../images/pages/page-1/intro-7.png",
              "../images/pages/page-1/intro-8.png",
              "../images/pages/page-1/intro-9.png",
              "../images/pages/page-1/intro-10.png",
              // "../images/pages/page-1/intro-11.png",
              // "../images/pages/page-1/intro-12.png",
            ],
 "postions"  : ["left:170px; top:554px;",
                "left:334px; top:220px;",
                "left:462px; top:240px;",
                "left:911px; top:3px;",
                "left:1122px; top:201px;",
                "left:713px; top:245px;",
                "left:529px; top:360px;",
                "left:707px; top:378px;",
                "left:691px; top:524px;",
                "left:730px; top:668px;",
                // "left:508px; top:475px;",
                // "left:369px; top:569px;",
              ],
  "imagesAudio" :["../audios/page_60/1_forest.mp3","../audios/page_60/2_lake.mp3", "../audios/page_60/3_meadow.mp3",
                  "../audios/page_60/4_island.mp3","../audios/page_60/5_sea.mp3","../audios/page_60/6_shore.mp3",
                  "../audios/page_60/7_mountain.mp3","../audios/page_60/8_valley.mp3","../audios/page_60/9_waterfall.mp3",
                  "../audios/page_60/10_stream.mp3"]
}