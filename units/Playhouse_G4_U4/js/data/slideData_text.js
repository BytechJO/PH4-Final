var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(12, 177, 75)",
    "type":"slider",
    "playListData" : [
        {
          'audiourl': '../audios/page_36/1.mp3',
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
    "mainTitleIcon": "../images/pages/sb-icons/adv_icon_1.png",
    "mainTitleIconPos": {"right": "80px"},
    "mainTitleAudio": "../audios/page_36/READING.mp3",
    "subTitleTextLeft": "<span class='title-order'>1</span> Read about it!",
    "subTitleTextRight": "Read the story below.",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_36/1_Read_about_it.mp3",
    "numberofcolumns":  1,
    "slides": [
        {
            "parent_class_name": "",
            "mainImage": "../images/pages/news-letter/2-img-1.png",
            
            'listen': {
                "audio": ["../audios/page_36/Pg4_1.2_Adult_Lady.mp3","../audios/page_36/Pg4_1.3_Adult Lady.mp3", "../audios/page_36/Pg4_1.4_Adult Lady.mp3"],
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
            "title":"<span class='orange_text'>Realistic fiction is a story that could be real but is not.</span><br>",
            "array_text": [ 
                "<img src='../images/pages/activities/6-img-1.png' class='slide_text_img pulse'>",
                ////////////////////////////////////////////////
                "<span style='color: blue;'>A Visit to Lilly’s</span>" +
                "<br> ‘Jenny, it’s me, Lilly. Are you awake?’ <br> ‘Well, I’m talking to you!’ joked Jenny."+
                "‘I’m sorry to call so early, but I’m so excited I couldn’t wait. My relatives from Egypt will visit me next week."+
                " Would you like to meet them, Jenny?’ Lilly asked. "+
                "‘Yes, that would be wonderful! Are they the ones who live close to the Nile River?’",
                ///////////////////////////////////////////////

                "<br> ‘Yes. Do you want to learn more about the Nile River and the pyramids for your history report? The Great Pyramid of "+
                "Giza is the oldest of the Seven Wonders of the Ancient World. It was the tallest building in the world for over 3,800 years."+
                " This is taller than any other building. Many think it took 20 years to build. It was probably built by Pharaoh Khufu,’ explained Lilly.",
                //////////////////////////////////////////////
                "<br> ‘Wow! I would like to meet your visitors when they arrive. Thank you for telling me the exciting news, Lilly.’ <br>"+
                "‘OK, Jenny, I’ll see you at school on Monday.’ <br>"+
                "‘Yes, see you then, Lilly. Bye.’",
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
    "mainTitleAudio"        : "../audios/page_36/under.mp3",
    "subTitleTextLeft"      : "",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/page_36/under.mp3",
    "subTitleAudio"         : "../audios/page_36/under.mp3", 
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
