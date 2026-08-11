var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_70/2.mp3",
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

var mcq_data = {
  layout: 1,

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_70/GRAMMAR.mp3",

  mainTitleIconPos: {
    right: "80px",
  },

  subTitleTextLeft: "<span class='title-order'>2</span> You do it!",

  subTitleTextRight: "Read and choose the correct adverb of quantity.",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_70/2_You_do_it!.mp3",

  /* =========================
       MCQ SETTINGS
    ========================= */

  select: "single",

  shape: "roundrect",

  bgcolor: "none",

  numbering: "none",

  numberstartfrom: 1,

  numberofcolumns: 1,

  /* =========================
       ANSWERS
    ========================= */

  questions: [
    // 1
    {
      answer: [1],
      audio: "no",
      audioenable: "default",

      options: [
        {
          text: "too many",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "not enough",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // 2
    {
      answer: [1],
      audio: "no",
      audioenable: "default",

      options: [
        {
          text: "fewer",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "too many",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // 3
    {
      answer: [1],
      audio: "no",
      audioenable: "default",

      options: [
        {
          text: "isn’t enough",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "isn’t more",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // 4
    {
      answer: [1],
      audio: "no",
      audioenable: "default",

      options: [
        {
          text: "more",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "too much",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },

    // 5
    {
      answer: [2],
      audio: "no",
      audioenable: "default",

      options: [
        {
          text: "enough",
          image: "",
          audio: "no",
          audioenable: "default",
        },

        {
          text: "not enough",
          image: "",
          audio: "no",
          audioenable: "default",
        },
      ],
    },
  ],

  /* =========================
       READING CONTENT
    ========================= */

  slides: [
    {
      layout: "grid_columns",

      grid_main_title: ["../images/pages/sb-icons/word_main_title.png"],

      parent_class_name: "grid_without_background_image",

      grid_main_title_text: "",

      grid_main_title_text_audio: "../audios/page_70/under.mp3",

      group_styles: "",

      audio: [
        "../audios/page_70/Pg6_2.1_Stella.mp3",

        "../audios/page_70/dough.mp3",

        "../audios/page_70/sauce.mp3",

        "../audios/page_70/sprinkle.mp3",

        "../audios/page_70/cheese.mp3",

        "../audios/page_70/add.mp3",
      ],

      word: [
        /* =====================
                   GROUP 1 IMAGE
                ===================== */

        "<img src='../images/pages/activities/3-img-1.png' class='group_img'>",

        /* =====================
                   GROUP 1 TEXT
                ===================== */

        "Baby cane toads are tadpoles. " +
          "Cane toads like to eat bugs. " +
          "Australia introduced cane toads to control the bugs, " +
          "but cane toads don’t like the bugs in Australia. " +
          "Because of their poisonous skin, birds and snakes don’t like " +
          "to eat the cane toads. So now there are " +
          "[[mcq:1|too many|not enough]] " +
          "bugs and cane toads in Australia!",

        /* =====================
                   GROUP 2 TEXT
                ===================== */

        "The baby of a giant panda is called a cub. " +
          "The giant panda is from China. " +
          "It’s an endangered animal. There are " +
          "[[mcq:2|fewer|too many]] " +
          "pandas living in the wild each year. " +
          "Zoos are giving them their favourite food, bamboo. " +
          "One problem for the panda is that there " +
          "[[mcq:3|isn’t enough|isn’t more]] " +
          "bamboo in the forests of China because people are " +
          "cutting down bamboo forests to make room for farms.",

        /* =====================
                   GROUP 2 IMAGE
                ===================== */

        "<img src='../images/pages/activities/3-img-2.png' class='group_img'>",

        /* =====================
                   GROUP 3 IMAGE
                ===================== */

        "<img src='../images/pages/activities/3-img-3.png' class='group_img'>",

        /* =====================
                   GROUP 3 TEXT
                ===================== */

        "The Haha plant grows in Hawaii, a group of islands " +
          "in the Pacific Ocean which belongs to America. " +
          "The Haha plant needs " +
          "[[mcq:4|more|too much]] " +
          "sunlight than any other plant in Hawaii. " +
          "Skyscrapers are blocking the sunlight from the Haha plant " +
          "so they are dying all over the island. Now there are " +
          "[[mcq:5|enough|not enough]] " +
          "Haha plants growing. It is now near to extinction.",
      ],

      imagePlacePos: [
        {
          colWidth: [2, 10],
          colData: [1, 1],
        },

        {
          colWidth: [10, 2],
          colData: [1, 1],
        },

        {
          colWidth: [2, 10],
          colData: [1, 1],
        },
      ],
    },
  ],
};
