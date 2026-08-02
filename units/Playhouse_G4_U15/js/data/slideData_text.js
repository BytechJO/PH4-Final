var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(12, 177, 75)",
    "type":"slider",
    "playListData" : [
        {
          'audiourl': '../audios/page_135/1.mp3',
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
    "mainTitleAudio": "../audios/page_135/READING.mp3",
    "subTitleTextLeft": "<span class='title-order'>1</span> Read and solve it!",
    "subTitleTextRight": "Adapted from: Detective Nose Two Minute Mysteries",
    "subTitleIcons": [""],
    "subTitleAudio": "../audios/page_135/1_Read_and_solve_it!.mp3",
    "numberofcolumns":  1,
    "slides": [
        {
            "parent_class_name": "",
            "mainImage": "../images/pages/news-letter/2-img-1.png",
            
            'listen': {
                "audio": ["../audios/page_135/Pg4_1.2_Adult_Lady.mp3","../audios/page_135/Pg4_1.3_Adult Lady.mp3", "../audios/page_135/Pg4_1.4_Adult Lady.mp3"],
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
            "title":"A Lucky Break",
            "array_text": [
                "<span class='left_text'>Detective Nose went to the scene of the robbery. The police officers were inside the store"+
                "speaking with the owner. Nose decided to look for clues. The detective walked around the building. The sidewalk was "+
                "littered with broken glass from the front window where the burglar had maybe entered. ‘Well, there’s always a clue if"+ 
                "you look for it, isn’t there?’ he said to himself. He drew a quick drawing of the store and the area and went to joi the owner.</span>"+
                " <img src='../images/pages/activities/4-img-1.png' class='inner_img_right pulse'>",
                ///////////////////////////////////////////////
                "<br> ‘I don’t really have much to tell you,’ the owner said. ‘I arrived this morning to open my shop. The first thing I noticed was the"+ 
                "broken window. I then unlocked the front door. I quickly noticed what was missing, and I phoned the police.’"+
                "The detective took a look around and noticed many empty jewellery cases where the jewellery should have been. Then he asked to talk "+
                "with the police privately. They went outside.",
                //////////////////////////////////////////////
                "<br><span class='left_text'>‘He hasn’t mentioned if his jewellery was insured, has he?’ asked Mr. Nose. ‘My first guess is that it is"+ 
                "insured for quite a lot of money. I think he’s trying to cheat his insurance company out of the money.’"+
                "What led Detective Nose to believe that the store owner was trying to commit insurance fraud?</span>"+
                " <img src='../images/pages/activities/4-img-2.png' class='inner_img_right pulse'>",
                //////////////////////////////////////////////
               
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
    "mainTitleAudio"        : "../audios/page_135/under.mp3",
    "subTitleTextLeft"      : "",
    "subTitleTextRight"     : "",
    "subTitleIcons"         : [""],
    "subTitleAudio"         : "../audios/page_135/under.mp3",
    "subTitleAudio"         : "../audios/page_135/under.mp3", 
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
