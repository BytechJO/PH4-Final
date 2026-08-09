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

var check_data = {
  layout: 1,

  /* ===============================
     HEADER
  =============================== */

  mainTitle: "../images/pages/sb-icons/phonics.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "70px",
  },

  mainTitleAudio: "../audios/page_53/PHONICS_AND_SPELLING.mp3",

  subTitleTextLeft:
    "<span class='title-order'>2</span> Put a <span class='red'>✓</span> on the pictures that rhyme. Then write the rhyming words on the line.",

  subTitleTextRight: "",

  subTitleIcons: [""],

  subTitleAudio: "../audios/under.mp3",

  /* ===============================
     GROUPS
  =============================== */

  groups: [
    /* =====================================
       GROUP 1
       rain + plane
    ===================================== */

    {
      pictures: [
        {
          id: "rain",

          image: "../images/pages/activities/rain.png",

          word: "rain",

          correct: true,
        },

        {
          id: "plane",

          image: "../images/pages/activities/plane.png",

          word: "plane",

          correct: true,
        },

        {
          id: "building",

          image: "../images/pages/activities/building.png",

          word: "building",

          correct: false,
        },
      ],

      answerWords: ["rain", "plane"],
    },

    /* =====================================
       GROUP 2
       house + mouse
    ===================================== */

    {
      pictures: [
        {
          id: "house",

          image: "../images/pages/activities/house.png",

          word: "house",

          correct: true,
        },

        {
          id: "shoe",

          image: "../images/pages/activities/shoe.png",

          word: "shoe",

          correct: false,
        },

        {
          id: "mouse",

          image: "../images/pages/activities/mouse.png",

          word: "mouse",

          correct: true,
        },
      ],

      answerWords: ["house", "mouse"],
    },
  ],
};
