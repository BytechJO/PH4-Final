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

var fillin_data = {
  layout: 1,

  numinrow: [[1], [1], [1]],

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleAudio: "../audios/page_62/GRAMMAR.mp3",

  mainTitleIconPos: {
    right: "70px",
  },

  subTitleTextLeft: "<span class='title-order'>3</span> <b>You do it!</b>",

  subTitleTextRight:
    "Write one of the adjectives from the chart in each sentence.",

  subTitleIcons: [""],

  subTitleAudio: "../audios/under.mp3",

  image: "../images/pages/activities/3-img-1.png",

  imageposition: "back",

  numbering: "number",

  numberstartfrom: "1",

  options: [],

  questions: [
    /* =========================================
       1 - Example
    ========================================= */

    {
      singleword: false,

      text: "That cake was bad. I think it was the [*] cake I have ever tasted.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["worst"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",

      defaultAnswer: "worst",
    },

    /* =========================================
       2
    ========================================= */

    {
      singleword: false,

      text: "These flowers are all beautiful, but I think this one is the [*] of all.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["most beautiful"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    /* =========================================
       3
    ========================================= */

    {
      singleword: false,

      text: "They are all well known, but of the Sahara Desert, the Grand Canyon and Victoria Falls, which do you think is the [*]?",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["most amazing"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },
  ],
};
