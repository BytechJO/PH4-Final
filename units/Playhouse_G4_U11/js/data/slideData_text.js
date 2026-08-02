var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(12, 177, 75)",
    "type":"slider",
    "playListData" : [
        {
          'audiourl': '../audios/page_100/1.mp3',
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
    "mainTitleAudio": "../audios/page_100/READING.mp3",
    "subTitleTextLeft": "<span class='title-order'>1</span> Read about it!",
    "subTitleTextRight": "Read the fable about Peter Rabbit and circle the food that Mr. McGregor had in his garden. "+
                         "Underline the clothes that Peter lost during his adventure.",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_100/1_Read_about_it!.mp3",
    "numberofcolumns":  1,
    "slides": [
        {
            "parent_class_name": "",
            "mainImage": "../images/pages/news-letter/2-img-1.png",
            
            'listen': {
                "audio": ["../audios/page_100/Pg4_1.2_Adult_Lady.mp3","../audios/page_100/Pg4_1.3_Adult Lady.mp3", "../audios/page_100/Pg4_1.4_Adult Lady.mp3"],
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
            "title":"",
            "array_text": [ 
                " <img src='../images/pages/activities/4-img-1.png' class='inner_img pulse'>",
                ////////////////////////////////////////////////
                "Once upon a time there lived four little rabbits called Flopsy, Mopsy, Cotton-tail and Peter. They lived in a"+ 
                "sandbank, underneath the root of a very big fir tree. ‘Now, my dears,’ said old Mrs. Rabbit, their mother, ‘you"+ 
                "may go into the fields, but don’t go into Mr. McGregor’s garden. Your father was put in a pie by Mrs. McGregor.’"+
                "Then old Mrs. Rabbit took a basket and her umbrella and went to the baker’s.",
                ///////////////////////////////////////////////
                "Flopsy, Mopsy and Cotton-tail, who were good little bunnies, went to gather blackberries, but Peter, who was very"+
                "naughty, ran straight to Mr. McGregor’s garden by going under the gate!"+
                "First he ate some lettuce, French beans and some radishes, and then he went further to look for some parsley.",
                //////////////////////////////////////////////
                "But round the end of a cucumber frame, he met Mr. McGregor!"+
                "Mr. McGregor was planting cabbages, but he jumped up and ran after Peter, waving a rake and calling out, ‘Stop thief!’"+
                "Peter was very frightened. He had forgotten the way back to the gate. He lost one of his shoes amongst the cabbages and"+ 
                "his other shoe amongst the potatoes.",
                //////////////////////////////////////////////
                "Peter ran on four legs and went faster. Unfortunately, he ran into a gooseberry net and got caught by the large buttons"+ 
                "on his jacket. It was a blue jacket with brass buttons, quite new."+
                "Peter shed big tears, but some friendly sparrows flew to him and implored him to exert himself."+
                "Mr. McGregor came with a sieve, which he intended to trap Peter, but Peter wriggled out just in time, leaving his jacket"+
                "behind him. Does Peter get back home? Read The Tale of Peter Rabbit by Beatrix Potter to find out!",
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
    "mainTitleAudio"        : "../audios/page_100/under.mp3",
    "subTitleTextLeft"      : "",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/page_100/under.mp3",
    "subTitleAudio"         : "../audios/page_100/under.mp3", 
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
