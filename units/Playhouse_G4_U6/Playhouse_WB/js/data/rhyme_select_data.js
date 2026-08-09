var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(53, 130, 180)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_32/1.mp3",
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

var rhyme_select_data = {
  layout: 1,

  /* =========================================
     HEADER
  ========================================= */
  mainTitle: "../images/pages/sb-icons/spilling.jpg",
  mainTitleIcon: "../images/pages/sb-icons/readwrite_main_title_icon.png",
  mainTitleIconPos: { right: "-35px" },
  mainTitleAudio: "../audios/page_32/PHONICS_AND_SPELLING.mp3",
  subTitleTextLeft:
    '<span class="blue_text">1</span> Listen to it! Say the words that each picture shows and write them on the lines. Then circle the two words that rhyme in each set.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "",
  /* =========================================
     GROUPS
  ========================================= */

  groups: [
    /* =========================================
       GROUP A
    ========================================= */

    {
      label: "A",

      correctRhymes: [0, 2],

      items: [
        /* 1 - TOWN */

        {
          image: "../images/pages/activities/4-img-1.png",

          prefix: "",

          answer: "town",

          defaultText: "town",

          readonly: true,
        },

        /* 2 - CROWD */

        {
          image: "../images/pages/activities/4-img-2.png",

          prefix: "c",

          answer: "rowd",

          fullWord: "crowd",

          readonly: false,
        },

        /* 3 - CLOWN */

        {
          image: "../images/pages/activities/4-img-3.png",

          prefix: "c",

          answer: "lown",

          fullWord: "clown",

          readonly: false,
        },
      ],
    },

    /* =========================================
       GROUP B
    ========================================= */

    {
      label: "B",

      correctRhymes: [0, 1],

      items: [
        /* 1 - POOL */

        {
          image: "../images/pages/activities/4-img-4.png",

          prefix: "p",

          answer: "ool",

          fullWord: "pool",

          readonly: false,
        },

        /* 2 - SCHOOL */

        {
          image: "../images/pages/activities/4-img-5.png",

          prefix: "s",

          answer: "chool",

          fullWord: "school",

          readonly: false,
        },

        /* 3 - SPOON */

        {
          image: "../images/pages/activities/4-img-6.png",

          prefix: "s",

          answer: "poon",

          fullWord: "spoon",

          readonly: false,
        },
      ],
    },
  ],
};
