var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "slider",

  sliderTimes: [
    [0, 28],
    [28, 90],
  ],
  playListData: [
    {
      audiourl: "../audios/page_8/1.mp3",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
};
var reading_data = {
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "86px" },
  mainTitleAudio: "../audios/page_9/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight:
    "<span class='green_text'>Read the non-fiction story below.</span>",
  subTitleIcons: [],
  subTitleAudio: "../audios/qa_instructions/p008_q1.mp3",
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      listen: {
        audio: [
          "../audios/page_8/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_8/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_8/Pg4_1.4_Adult Lady.mp3",
        ],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-conv-img.png"],
        second_image: [""],
        questions: [
          {
            question: "",
            image: "",
            answer: [1],
            audio: "no",
            audioenable: "default", // correct (or) default
            options: [
              {
                text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
              {
                text: "<b>b</b> &nbsp; Eric only works on weekdays.",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
              {
                text: "<b>c</b> &nbsp; All the people who work with Eric.",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
            ],
          },
        ],
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////////
      title: "<span class='darkBlue_text'>Summer Time Around the World</span>",
      array_text: [
        "<br><br><span class='left_text'>Let us see what last summer was like in many different places! " +
          "In Antarctica, summertime is from December to March. If you were in Antarctica during these months, there " +
          "was at least one day when it seemed  that the sun never set. People in Antarctica knew it was summer because " +
          "it was a little above freezing (0o C).</span>" +
          " <img src='../images/pages/page-4/1-img-1.png' class='inner_img pulse'> ",

        "<br><br><span class='left_text'>The summertime in the Sahara Desert in North Africa is from June to" +
          "September, and there are at least 100 days where the temperature is over 50o C. Saharans still need a jacket " +
          " because the nights are cooler. But as soon as the sun is up, it is quickly hot again.</span>" +
          // "<br><span class='left_text'>In the past, children used to do the same work that their parents did. They used to learn the work from their parents People worked hard, but to them it was normal. It was a way of life.</span>"+
          " <img src='../images/pages/page-4/1-img-2.png' class='inner_img pulse'> ",
        ////////////////////////////////////////////////
        // "<br>Two hundred years ago, many people used to grow and cook their own food, raise their own animals, make their own clothes and move around by walking or riding on animals. In the pasr, children used to play with simpler, homemade toys. Today children play with toys ready-made toys. Life today is not what it used to be! What changes do you think you might see in your lifetime?",
      ],
    },
    // {
    //     "layout": "writing_tips",

    //     "activityheading": '',
    //     "activityheading_audio" : "../audios/page_8/under.mp3",
    //     "main_activityheading":"../images/pages/activities/conversation.jpg",
    //     "main_activityheading_audio" : "../audios/page_8/under.mp3",

    //     "background_image": "../images/pages/page-4/1-background_2.png",
    //     "top_right_image": ["../images/pages/page-4/1-img-1.png","../images/pages/page-4/1-img-2.png"],
    //     "header": "Summer Time Around the World",
    //     "inner_image": "../images/pages/snapshots/page-1/writing-tips-image.png",
    //     "paragraph": "Let us see what last summer was like in many different places! " +
    //                  "In Antarctica, summertime is from December to March. If you were in Antarctica during these months, there " +
    //                  "was at least one day when it seemed  that the sun never set. People in Antarctica knew it was summer because " +
    //                  "it was a little above freezing (0o C). The summertime in the Sahara Desert in North Africa is from June to" +
    //                  "September, and there are at least 100 days where the temperature is over 50o C. Saharans still need a jacket " +
    //                  " because the nights are cooler. But as soon as the sun is up, it is quickly hot again.",
    // },
  ],
};
