var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/demoo.mp3",
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
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "70px" },
  mainTitleAudio: "../audios/page_127/G_GRAMMAR_PRACTICE.mp3",
  subTitleTextLeft:
    "<span class='title-order'>2</span> Talk about it!",

  subTitleTextRight:
    "Talk to a friend and say what Susan will do and won’t do.",

  subTitleIcons: [""],

  subTitleAudio: "",

  slides: [
    {
      // =================================================
      // NEW LAYOUT
      // =================================================

      layout: "activity_schedule",

      // =================================================
      // TABLE TITLE
      // =================================================

      tableTitle: "Susan’s Activity Schedule",

      // =================================================
      // ACTIVITIES
      // =================================================

      activities: [
        {
          title: "Visiting a<br>Friend",

          image: "../images/pages/activities/9.png",
        },

        {
          title: "Skating",

          image: "../images/pages/activities/10.png",
        },

        {
          title: "Shopping",

          image: "../images/pages/activities/11.png",
        },

        {
          title: "Studying",

          image: "../images/pages/activities/12.png",
        },

        {
          title: "Riding a<br>bike",

          image: "../images/pages/activities/13.png",
        },

        {
          title: "Reading",

          image: "../images/pages/activities/5.png",
        },
      ],

      // =================================================
      // DAYS
      // true = show check
      // false = empty
      // =================================================

      days: [
        {
          day: "Sunday",

          checks: [true, false, false, false, false, true],
        },

        {
          day: "Monday",

          checks: [false, true, false, true, false, false],
        },

        {
          day: "Tuesday",

          checks: [false, false, false, true, false, false],
        },

        {
          day: "Wednesday",

          checks: [false, true, false, true, false, false],
        },

        {
          day: "Thursday",

          checks: [false, false, false, true, false, true],
        },

        {
          day: "Friday",

          checks: [true, false, false, false, true, true],
        },

        {
          day: "Saturday",

          checks: [false, false, false, false, true, true],
        },
      ],
    },
  ],
};
