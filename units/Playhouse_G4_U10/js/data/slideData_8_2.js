var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/demoo.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var reading_data = {
  mainTitle: "../images/pages/sb-icons/writing.png",

  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",

  mainTitleIconPos: {
    right: "90px",
  },

  mainTitleAudio: "../audios/page_94/WRITING.mp3",

  subTitleTextLeft: "<span class='title-order'>1</span> Ask about it!",

  subTitleTextRight:
    "Take a survey about your classmates’ favourite things. You can use different activities for your chart if you like.",

  subTitleIcons: [],

  subTitleAudio: "../audios/qa_instructions/p094_q1.mp3",

  slides: [
    {
      layout: "survey_reading",

      parent_class_name: "survey_reading_page",

      /* =====================================================
         PEOPLE IMAGES
      ===================================================== */

      people: [
        "../images/pages/activities/8.png",
        "../images/pages/activities/9.png",
        "../images/pages/activities/10.png",
        "../images/pages/activities/12.png",
        "../images/pages/activities/14.png",
        "../images/pages/activities/11.png",
        "../images/pages/activities/13.png",
        "../images/pages/activities/4.png",
        "../images/pages/activities/5.png",
      ],

      /* =====================================================
         TABLE
      ===================================================== */

      questions: [
        {
          number: "1",
          text: "How much do you like cricket?",
          answers: ["hardly", "somewhat", "extremely"],
        },

        {
          number: "2",
          text: "How fun is basketball?",
          answers: ["hardly", "really", "sort of"],
        },

        {
          number: "3",
          text: "Do you like surfing the internet?",
          answers: ["kind of", "a lot", "extremely"],
        },

        {
          number: "4",
          text: "How fun is online gaming?",
          answers: ["not very", "somewhat", "totally"],
        },
      ],

      /* =====================================================
         BOTTOM WRITING SECTION
      ===================================================== */

      writingBackground: "../images/pages/activities/writing-background1.png",

      writingLines: [
        "My classmates have a lot of favourite things to do. They do a lot of activities after school",
        "and at the weekends. Jeff and Mario hardly like cricket, but they really like",
      ],
    },
  ],
};
