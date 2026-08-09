var stereo_data = {
  audio: "",
  exist: false,

  bgColor_rgb: "rgb(38, 184, 86)",

  type: "text",

  playListData: [],
};

var conversation_board_data = {
  layout: 1,

  /* =========================================
     TITLE
  ========================================= */
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>1</span> Conversation <span class='green'> Ask and answer.</span>",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  titleNumber: "1",

  title: "Conversation:",

  titleGreen: "Ask and answer.",

  boyImage1: "../images/pages/activities/3.png",

  boyImage2: "../images/pages/activities/4.png",

  /* =========================================
     BOARD IMAGES
  ========================================= */

  images: {
    coin: "../images/pages/activities/0.jpg",

    forklift: "../images/pages/activities/1.png",

    skip: "../images/pages/activities/2.png",
    rules: "../images/pages/activities/4.png",
  },

  /* =========================================
     RULE BOX
  ========================================= */

  rules: [
    "You need:",
    "• a coin",
    "",
    "Steps:",
    "flip the coin",
    "heads → 1 space",
    "tails → 2 spaces",
  ],

  /* =========================================
     BOARD CELLS
  ========================================= */

  cells: [
    {
      type: "start",
      text: "Start",
    },

    {
      type: "image",
      image: "skip",
      text: "Skip a turn.",
    },

    {
      type: "yellow",
      text: "Ask your friend a question using ‘How deep’.",
    },

    {
      type: "orange",
      text: "Move forward two more spaces.",
    },

    {
      type: "image",
      image: "forklift",
      text: "Go back two spaces.",
    },

    {
      type: "yellow",
      text: "Ask your friend to make a sentence using ‘had to’.",
    },
    {
      type: "rules_image",
      image: "rules",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "image",
      image: "skip",
      text: "Skip a turn.",
    },

    {
      type: "blue",
      text: "Name a word that rhymes with ‘hiking’.",
    },

    {
      type: "yellow",
      text: "Ask your friend a question using ‘How wide’.",
    },

    {
      type: "image",
      image: "coin",
      text: "Go back to ‘How deep’ and flip again.",
    },

    {
      type: "green",
      text: "Go back two spaces.",
      image: "forklift",
    },

    {
      type: "yellow",
      text: "Ask your friend a question using ‘how long’.",
    },

    {
      type: "beige",
      text: "Go back to Start!",
    },

    {
      type: "image",
      image: "skip",
      text: "Skip a turn.",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "empty",
    },

    {
      type: "yellow",
      text: "Ask your friend to make a sentence using ‘used to’.",
    },

    {
      type: "image",
      image: "coin",
      text: "Go back to ‘How wide’ and flip again.",
    },

    {
      type: "green",
      text: "What is the opposite of freezing cold?",
    },

    {
      type: "pink",
      text: "Without looking in your book, say three -ow/-ou words. ['long o' sound]",
    },

    {
      type: "blue",
      image: "forklift",
      text: "",
    },

    {
      type: "finish",
      text: "Finish!",
    },
  ],
};
