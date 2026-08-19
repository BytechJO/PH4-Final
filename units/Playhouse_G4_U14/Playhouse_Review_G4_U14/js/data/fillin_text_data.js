var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(12, 177, 75)",

  type: "text",

  playListData: [],
};

var fillin_data = {
  layout: 2,

  // كلهم بنفس الصف لأنهم فوق الصورة
  numinrow: [[1, 1, 1, 1, 1, 1]],

  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "",

  subTitleTextLeft: "<span class='order_num'>3</span> Order it! <span class='green'>Write the ordinal number that tells where the people are in line.</span>",

  subTitleTextRight:
    "",

  subTitleIcons: [],

  subTitleAudio: "",

  // =====================================================
  // FULL IMAGE
  // صورة الأشخاص كلها مع بعض
  // =====================================================

  image: ["../images/pages/activities/1.jpg"],

  imageposition: "back",

  // =====================================================
  // FIRST IS DEFAULT
  // =====================================================

  defaultAnswer: 1,

  numbering: "none",

  numberstartfrom: 1,

  options: [],

  optionsAudios: [],

  // =====================================================
  // QUESTIONS
  // left = مكان السؤال والسهم فوق الصورة
  // =====================================================

  questions: [
    // =========================
    // 1
    // =========================

    {
      singleword: false,

      text: "[_]",

      textback: "",

      textaudios: [],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["first"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",

      left: "5.8%",
    },

    // =========================
    // 2
    // =========================

    {
      singleword: false,

      text: "[_]",

      textback: "",

      textaudios: [],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["third"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",

      left: "14.2%",
    },

    // =========================
    // 3
    // =========================

    {
      singleword: false,

      text: "[_]",

      textback: "",

      textaudios: [],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["seventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 15,

      type: "text",

      left: "36%",
    },

    // =========================
    // 4
    // =========================

    {
      singleword: false,

      text: "[_]",

      textback: "",

      textaudios: [],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["eleventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 15,

      type: "text",

      left: "54.3%",
    },

    // =========================
    // 5
    // =========================

    {
      singleword: false,

      text: "[_]",

      textback: "",

      textaudios: [],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["fifteenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 15,

      type: "text",

      left: "75%",
    },

    // =========================
    // 6
    // =========================

    {
      singleword: false,

      text: "[_]",

      textback: "",

      textaudios: [],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["twentieth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 15,

      type: "text",

      left: "98%",
    },
  ],
};
