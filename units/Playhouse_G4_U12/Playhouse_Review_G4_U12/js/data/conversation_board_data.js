var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(38, 184, 86)",

  type: "text",

  playListData: [],
};

var conversation_board_data = {
  layout: 1,

  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "",

  subTitleTextLeft: "",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "",

  // =====================================================
  // PAGE TITLE
  // =====================================================

  pageTitle: "A Pronoun Parade!",

  activityNumber: "1",

  activityText: "Play it!",

  // =====================================================
  // TOP ROW
  // =====================================================

  topRow: [
    {
      type: "start",

      text: "Start",
    },

    {
      text: "him",

      theme: "pink",
    },

    {
      text: "it",

      theme: "blue",
    },

    {
      text: "we",

      theme: "cyan",
    },

    {
      text: "them",

      theme: "green",
    },

    {
      text: "her",

      theme: "orange",
    },
  ],

  // =====================================================
  // DIAGONAL PATH
  // من فوق لتحت
  // =====================================================

  path: [
    {
      text: "me",

      theme: "red",
    },

    {
      text: "you",

      theme: "yellow",
    },

    {
      text: "I",

      theme: "cyan",
    },

    {
      text: "she",

      theme: "yellow",
    },

    {
      text: "they",

      theme: "green",
    },

    {
      text: "it",

      theme: "orange",
    },

    {
      text: "I",

      theme: "peach",
    },

    {
      text: "he",

      theme: "red",
    },
  ],

  // =====================================================
  // BOTTOM ROW
  // =====================================================

  bottomRow: [
    {
      text: "you",

      theme: "purple",
    },

    {
      text: "us",

      theme: "blue",
    },

    {
      text: "him",

      theme: "cyan",
    },

    {
      text: "they",

      theme: "green",
    },

    {
      text: "us",

      theme: "orange",
    },

    {
      type: "finish",

      text: "Finish!",
    },
  ],

  // =====================================================
  // INSTRUCTIONS BOX
  // =====================================================

  instructions: {
    title: "You need:",

    need: "a coin",

    stepsTitle: "Steps:",

    steps: ["flip the coin", "heads = 1 space", "tails = 2 spaces"],

    footer: "Give a sentence for each pronoun.",
  },
};
