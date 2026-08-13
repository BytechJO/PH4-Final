var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_77/2.mp3",
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

var fillin_data = {
  layout: 1,

  numinrow: [[1, 1]],

  mainTitle: "../images/pages/sb-icons/conv_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",

  mainTitleIconPos: {
    right: "90px",
  },

  mainTitleAudio: "../audios/page_77/CONVERSATION.mp3",

  subTitleTextLeft:
    "<span class='title-order'>2</span> " + "<b>Listen to it!</b>",

  subTitleTextRight:
    "Listen to the story. What do Jan and Karen buy? " +
    "Write what they buy on the lines below.",

  subTitleIcons: [""],

  subTitleAudio: "../audios/page_77/2_Listen_to_it!.mp3",

  title_position: "under",

  numbering: "none",

  numberstartfrom: 1,

  options: [],

  optionsAudios: [],

  image: "no",

  imageposition: "back",

  text: "",

  textAudio: "",

  parentClassName: "shopping_bags_activity",

  questions: [
    // =====================================================
    // JAN
    // =====================================================
    {
      name: "",

      image: "../images/pages/activities/jan-shopping-bag.png",

      answer: [
        "black denim trousers",
        "nylon bag",
        "polyester top",
        "top with long sleeves and a collar",
      ],

      alternateanswer: [
        // black denim trousers
        [
          "denim trousers",
          "black trousers",
          "black denim pants",
          "denim pants",
        ],

        // nylon bag
        ["a nylon bag", "nylon", "one nylon bag"],

        // polyester top
        ["a polyester top", "polyester", "one polyester top"],

        // top with long sleeves and a collar
        [
          "polyester top with long sleeves and a collar",
          "a polyester top with long sleeves and a collar",
          "a top with long sleeves and a collar",
          "long sleeves and a collar",
          "top with long sleeves",
          "long sleeve top with a collar",
        ],
      ],

      strictcase: "no",

      strictorder: "no",

      maxlength: 50,

      type: "text",
    },

    // =====================================================
    // KAREN
    // =====================================================
    {
      name: "",

      image: "../images/pages/activities/karen-shopping-bag.png",

      answer: ["nylon bag", "wool socks", "new shoes", "polyester top"],

      alternateanswer: [
        // nylon bag
        ["a nylon bag", "nylon", "one nylon bag"],

        // wool socks
        [
          "socks made of wool",
          "2 pairs of wool socks",
          "two pairs of wool socks",
          "two pairs of socks",
          "2 pairs of socks",
          "woollen socks",
        ],

        // new shoes
        [
          "shoes",
          "new shoes for my sister",
          "shoes for my sister",
          "a pair of shoes",
        ],

        // polyester top
        ["a polyester top", "polyester", "one polyester top"],
      ],

      strictcase: "no",

      strictorder: "no",

      maxlength: 50,

      type: "text",
    },
  ],
};
