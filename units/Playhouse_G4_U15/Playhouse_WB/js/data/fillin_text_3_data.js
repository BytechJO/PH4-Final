var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    { audiourl: "../audios/page_74/2.mp3" },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var fillin_data = {
  layout: 1,

  numinrow: [[1, 1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/word_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/word_main_title_icon.png",
  mainTitleAudio: "../audios/page_74/WORD_POWER.mp3",
  mainTitleIconPos: { right: "-18px" },
  subTitleTextLeft:
    '<span class="blue_text">2</span> <b>Find it!</b> There are words hidden in the Word Power words below. Can you find them and write them in the table?',

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/page_74/2_Find_it!_There_are_words_hidden_in_the_Word_Power_words_below_Can_you_find_them_and_write.mp3",

  image: "",
  image: "../images/pages/activities/detective.png",
  imageposition: "back",

  defaultAnswer: 0,

  numbering: "none",
  numberstartfrom: 1,

  options: [],

  parentClassName: "word_power_activity",

  questions: [
    {
      singleword: false,

      // 5 [_] = 5 inputs
      text: "detective[_][_][_][_][_]",

      textaudios: [""],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["", "", "", "", ""],
      alternateanswer: [[], [], [], [], []],

      strictcase: "no",
      strictorder: "no",

      maxlength: 20,
      type: "text",
    },

    {
      singleword: false,
      text: "investigate[_][_][_][_][_]",

      textaudios: [""],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["", "", "", "", ""],
      alternateanswer: [[], [], [], [], []],

      strictcase: "no",
      strictorder: "no",

      maxlength: 20,
      type: "text",
    },

    {
      singleword: false,
      text: "guilty[_][_][_][_][_]",

      textaudios: [""],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["", "", "", "", ""],
      alternateanswer: [[], [], [], [], []],

      strictcase: "no",
      strictorder: "no",

      maxlength: 20,
      type: "text",
    },

    {
      singleword: false,
      text: "innocent[_][_][_][_][_]",

      textaudios: [""],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["", "", "", "", ""],
      alternateanswer: [[], [], [], [], []],

      strictcase: "no",
      strictorder: "no",

      maxlength: 20,
      type: "text",
    },
  ],
};
