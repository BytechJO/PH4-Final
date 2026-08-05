var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_25/4.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var listen_tch_data = {
  layout: 1,
  numinrow: [[1]],

  mainTitle: "../images/pages/sb-icons/phonics_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleIconPos: {
    right: "90px",
  },

  mainTitleAudio: "../audios/page_25/PHONICS_AND_SPELLING.mp3",

  subTitleTextLeft: '<span class="title-order">4</span> Listen to it',

  subTitleTextRight:
    "Listen to the ‘<span class='red'>tch</span>’ words in the story. Tick the words you hear. Then write them in the correct columns",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  words: [
    "ditch",
    "scratched",
    "latch",
    "match",
    "hutch",
    "switched",
    "itch",
    "catch",
    "butcher",
    "kitchen",
    "watching",
    "crutches",
  ],

  heardWords: [
    "ditch",
    "scratched",
    "latch",
    "switched",
    "itch",
    "catch",
    "butcher",
    "kitchen",
    "watching",
    "crutches",
  ],

  columns: [
    {
      key: "atch",
      title: "atch",
      slots: 4,
      answers: ["scratched", "latch", "catch", "watching"],
    },
    {
      key: "utch",
      title: "utch",
      slots: 4,
      answers: ["butcher", "crutches"],
    },
    {
      key: "itch",
      title: "itch",
      slots: 4,
      answers: ["ditch", "switched", "itch", "kitchen"],
    },
  ],
};
