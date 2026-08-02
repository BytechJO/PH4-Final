var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(12, 177, 75)",
    "type":"slider",
    "playListData" : [
        {
          'audiourl': '../audios/page_108/1.mp3',
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
var reading_data = {
    "mainTitle": "../images/pages/sb-icons/reading.png",
    "mainTitleIcon": "../images/pages/sb-icons/phonics_3_icon.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio": "../audios/page_108/READING.mp3",
    "subTitleTextLeft": "<span class='title-order'>1</span> Read about it!",
    "subTitleTextRight": "Read the play below.",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_108/1_Read_about_it!.mp3",
    "numberofcolumns":  1,
    "slides": [
        {
            "parent_class_name": "",
            "mainImage": "../images/pages/news-letter/2-img-1.png",
            
            'listen': {
                "audio": ["../audios/page_108/Pg4_1.2_Adult_Lady.mp3","../audios/page_108/Pg4_1.3_Adult Lady.mp3", "../audios/page_108/Pg4_1.4_Adult Lady.mp3"],
                "titlesAudio":[""],
                "titleTexts":[""],
                "top_image":["../images/pages/news-letter/1-conv-img.png"],
                "second_image":[""],
                "questions": [
                  {
                      "question"              : "",
                      "image"                 : "",
                      "answer"                : [1],
                      "audio"                 : "no",
                      "audioenable"           : "default", // correct (or) default
                      "options"               : [
                          {
                              "text"          : "<b>a</b> &nbsp; Eric’s job as an anchorman",
                              "image"         : "",
                              "audio"         : "no",
                              "audioenable"   : "default", // correct (or) default
                          },
                          {
                              "text"          : "<b>b</b> &nbsp; Eric only works on weekdays.",
                              "image"         : "",
                              "audio"         : "no",
                              "audioenable"   : "default", // correct (or) default
                          },
                          {
                              "text"          : "<b>c</b> &nbsp; All the people who work with Eric.",
                              "image"         : "",
                              "audio"         : "no",
                              "audioenable"   : "default", // correct (or) default
                          },
                          
                      ]
                  },
              ]
            },
            //////////////////////////////////////////////////////////////////////////////////////////////////////
            "title":"<span class='orange_text'>A Hospital Visit</span>",
            "array_text": [ 
                "<br><span class='intro-title'>Meet the characters:</span><br>"+
                "<div class='intro d-flex flex-wrap'>"+
                "<img src='../images/pages/activities/2-img-1.png' class='inner_img pulse'>"+
                "<img src='../images/pages/activities/2-img-2.png' class='inner_img pulse'>"+
                "<img src='../images/pages/activities/2-img-3.png' class='inner_img pulse'>"+
                "<img src='../images/pages/activities/2-img-4.png' class='inner_img pulse'>"+
                "<img src='../images/pages/activities/2-img-5.png' class='inner_img pulse'>"+
                "</div>",
                ////////////////////////////////////////////////
                "<br><span class='red_text'>Setting One:</span> &nbsp;"+
                "Larry and Sam are walking home from football practice together. "+
                "Krista and Carla run up to them from across the street."+
                "<br><span class='green_text'>KRISTA:</span> &nbsp; "+ 
                "(in a very excited, worried voice) Larry, Sam, did you hear about Joyce?"+
                "<br><span class='green_text'>CARLA:</span> &nbsp; "+ 
                "Joyce fell off her horse today and now she’s in hospital!"+
                "<br><span class='green_text'>SAM:</span> &nbsp; "+ 
                "(suddenly concerned) Oh no! Is she okay?"+
                "<br><span class='green_text'>CARLA:</span> &nbsp; "+ 
                "Her mum said she’s okay, but her ankle might be broken.",
                ///////////////////////////////////////////////
                "<br><span class='green_text'>KRISTA:</span> &nbsp; "+ 
                "Carla and I are going to visit her tonight at seven. If you want to come, maybe we could go together."+
                "<br><span class='green_text'>LARRY:</span> &nbsp; "+ 
                "We’ll check with our parents. If it’s okay, we can meet you at the main entrance of the hospital. We can buy a get well card from the hospital gift store."+
                "<br><span class='red_text'>Setting Two:</span> &nbsp;"+
                "Later, the friends meet at the hospital as planned. They get a card and take it to Joyce’s room. ",
                //////////////////////////////////////////////
                "<br><span class='green_text'>CARLA AND KRISTA:</span> &nbsp; "+ 
                "(knocking, then entering slowly) Joyce, it’s us! Sam and Larry are here, too!"+
                "<br><span class='green_text'>JOYCE:</span> &nbsp; "+ 
                "Oh, I’m so glad you came! It’s nice to have visitors."+
                "<br><span class='green_text'>LARRY:</span> &nbsp; "+ 
                "(handing her the card) We were sorry to hear about your accident. How are you feeling?"+
                "<br><span class='green_text'>JOYCE:</span> &nbsp; "+ 
                "(smiling and opening card) Better, now that you’re here. Thanks so much for the card!",
            ],
        },
    ]
}

var mcq_data = {    
    "layout"                : 1,
    "numinrow"              : [[1]],
    "mainTitle"             : "../images/pages/sb-icons/conv_main_title.png",
    "mainTitleIcon"         : "../images/pages/sb-icons/conv_main_title_icon.png",
    "mainTitleIconPos"      : {"right": "90px"},
    "mainTitleAudio"        : "../audios/page_108/under.mp3",
    "subTitleTextLeft"      : "",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/page_108/under.mp3",
    "subTitleAudio"         : "../audios/page_108/under.mp3", 
    "select"                : "single", // single (or) multiple
    "shape"                 : "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
    "bgcolor"               : "none",
    "image"                 : "",
    "numbering"             : "number",
    "numberstartfrom"       :  1, 
    "numberofcolumns"       :  1,
    "title"                 : "What is the main idea of this text?",
    "questions"             : [
        {
            "question"              : "",
            "image"                 : "",
            "answer"                : [1],
            "audio"                 : "no",
            "audioenable"           : "default", // correct (or) default
            "options"               : [
                {
                    "text"          : "<b>a</b> &nbsp; Eric’s job as an anchorman",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>b</b> &nbsp; Eric only works on weekdays.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                {
                    "text"          : "<b>c</b> &nbsp; All the people who work with Eric.",
                    "image"         : "",
                    "audio"         : "no",
                    "audioenable"   : "default", // correct (or) default
                },
                
            ]
        },
    ]
}
