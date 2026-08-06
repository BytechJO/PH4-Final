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

  numinrow: [[1], [1], [1], [1], [1], [1], [1]],

  mainTitle: "../images/pages/sb-icons/phonics_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",

  mainTitleAudio: "../audios/page_37/PHONICS_AND_SPELLING.mp3",

  mainTitleIconPos: {
    right: "88px",
  },

  subTitleTextLeft:
    '<span class="title-order">3</span> Write the correct ‘<span class="red">–ing</span>’ verb.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/under.mp3",

  image: "../images/pages/activities/note.png",

  imageposition: "back",

  numbering: "none",

  numberstartfrom: "a",

  headings: ["", "‘-ing’ verb"],

  headingsAudio: ["../audios/under.mp3", "../audios/under.mp3"],

  numOfColumns: 2,

  numOfRow: 7,

  options: [],

  optionsAudios: [],

  /*
    الصف الأول مثال:
    1 = ride
    2 = riding

    وبعده أول عمود فقط ثابت:
    3 = slide
    5 = bike
    7 = take
    9 = hike
    11 = have
    13 = make
  */
  defaultAnswer: [1, 2, 3, 5, 7, 9, 11, 13],

  questions: [
    /* =========================
       Example row
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["ride"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["riding"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    /* =========================
       slide → sliding
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["slide"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["sliding"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    /* =========================
       bike → biking
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["bike"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["biking"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    /* =========================
       take → taking
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["take"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["taking"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    /* =========================
       hike → hiking
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["hike"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["hiking"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    /* =========================
       have → having
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["have"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["having"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    /* =========================
       make → making
    ========================= */

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["make"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },

    {
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["making"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 50,
      type: "text",
    },
  ],
};
