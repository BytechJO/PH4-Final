var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_54/1.mp3",
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

var wordbreak_data = {
  layout: 1,
  mainTitle: "../images/pages/sb-icons/word_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_54/WORD_POWER.mp3",
  subTitleTextLeft:
    "<span class='blue_text'>1</span> Break it up! Find the Word Power words that have these smaller words inside them. Some words may be used more than once.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_54/1_Break_it_up!_Find_the_Word_Power_words_that_have_these_smaller_words_inside_them_Some_words.mp3",

  // =========================================================
  // PART 1
  // =========================================================

  smallWords: [
    {
      word: "mat",
      answer: ["tomatoes"],
      maxlength: 20,
      example: true,
      defaultAnswer: "tomatoes",
    },

    {
      word: "oil",
      answer: ["soil"],
      maxlength: 20,
      example: false,
    },

    {
      word: "let",
      answer: ["lettuce"],
      example: false,
      maxlength: 20,
    },

    {
      word: "bee",
      answer: ["beetroot"],
      example: false,
      maxlength: 20,
    },

    {
      word: "dish",
      answer: ["radish"],
      example: false,
      maxlength: 20,
    },

    {
      word: "toes",
      answer: ["tomatoes"],
      example: false,
      maxlength: 20,
    },

    {
      word: "we",
      answer: ["weigh"],
      example: false,
      maxlength: 20,
    },
  ],

  wordList: [
    "weigh",
    "field",
    "fence",
    "soil",
    "tomatoes",
    "lettuce",
    "beetroot",
    "parsley",
    "green beans",
    "radish",
  ],

  // =========================================================
  // PART 2
  // =========================================================

  secondInstruction:
    "For the four words that you didn’t use, try using the letters in the words to make new words. The first one is done for you.",

  secondImage: "../images/pages/activities/1.png",

  makeWords: [
    // Example
    {
      source: "parsley",

      example: true,

      exampleAnswers: ["pear", "yes", "year"],

      numberOfInputs: 3,
    },

    {
      source: "field",

      example: false,

      numberOfInputs: 3,
    },

    {
      source: "fence",

      example: false,

      numberOfInputs: 3,
    },

    {
      source: "green beans",

      example: false,

      numberOfInputs: 3,
    },
  ],
};
