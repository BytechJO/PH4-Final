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

  numinrow: [[1]],

  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "../images/pages/sb-icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_129/PHONICS_AND_SPELLING.mp3",

  subTitleTextLeft: "<span class='title-order'>2</span> Watch for it!",

  subTitleTextRight:
    "Find the pattern of ordinal numbers and finish the calendar.",

  subTitleIcons: [],

  subTitleAudio: "",

  // =====================================================
  // CALENDAR
  // =====================================================

  calendarTitle: "DECEMBER",

  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  // =====================================================
  // DEFAULT CELLS
  //
  // الخانات الموجودة جاهزة بالكامل
  // =====================================================

  defaultAnswer: [
    1, 2, 3, 4, 5, 6, 7,

    8, 9, 10, 11, 12, 13, 14,

    15,

    17,

    20, 21, 22,

    24, 25,

    28, 29, 30,
  ],

  // =====================================================
  // QUESTIONS
  // =====================================================

  questions: [
    // =================================================
    // 1
    // =================================================

    {
      number: "1st",

      prefix: "",

      suffix: "",

      answer: ["first"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 2
    // =================================================

    {
      number: "2nd",

      prefix: "",

      suffix: "",

      answer: ["second"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 3
    // =================================================

    {
      number: "3rd",

      prefix: "",

      suffix: "",

      answer: ["third"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 4
    // =================================================

    {
      number: "4th",

      prefix: "",

      suffix: "",

      answer: ["fourth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 5
    // =================================================

    {
      number: "5th",

      prefix: "",

      suffix: "",

      answer: ["fifth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 6
    // =================================================

    {
      number: "6th",

      prefix: "",

      suffix: "",

      answer: ["sixth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 7
    // =================================================

    {
      number: "7th",

      prefix: "",

      suffix: "",

      answer: ["seventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 8
    // =================================================

    {
      number: "8th",

      prefix: "",

      suffix: "",

      answer: ["eighth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 9
    // =================================================

    {
      number: "9th",

      prefix: "",

      suffix: "",

      answer: ["ninth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 10
    // =================================================

    {
      number: "10th",

      prefix: "",

      suffix: "",

      answer: ["tenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 11
    // =================================================

    {
      number: "11th",

      prefix: "",

      suffix: "",

      answer: ["eleventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 12
    // =================================================

    {
      number: "12th",

      prefix: "",

      suffix: "",

      answer: ["twelfth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 13
    // =================================================

    {
      number: "13th",

      prefix: "",

      suffix: "",

      answer: ["thirteenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 14
    // =================================================

    {
      number: "14th",

      prefix: "",

      suffix: "",

      answer: ["fourteenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 15
    // =================================================

    {
      number: "15th",

      prefix: "",

      suffix: "",

      answer: ["fifteenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 16
    //
    // sixteen + th
    // =================================================

    {
      number: "16th",

      prefix: "sixteen",

      suffix: "",

      answer: ["th"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 4,

      type: "text",
    },

    // =================================================
    // 17
    // =================================================

    {
      number: "17th",

      prefix: "",

      suffix: "",

      answer: ["seventeenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 18
    //
    // eighteen + th
    // =================================================

    {
      number: "18th",

      prefix: "eighteen",

      suffix: "",

      answer: ["th"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 4,

      type: "text",
    },

    // =================================================
    // 19
    // =================================================

    {
      number: "19th",

      prefix: "",

      suffix: "",

      answer: ["nineteenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 20
    // =================================================

    {
      number: "20th",

      prefix: "",

      suffix: "",

      answer: ["twentieth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 21
    // =================================================

    {
      number: "21st",

      prefix: "",

      suffix: "",

      answer: ["twenty-first"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 25,

      type: "text",
    },

    // =================================================
    // 22
    // =================================================

    {
      number: "22nd",

      prefix: "",

      suffix: "",

      answer: ["twenty-second"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 25,

      type: "text",
    },

    // =================================================
    // 23
    //
    // twenty- + third
    // =================================================

    {
      number: "23rd",

      prefix: "twenty-",

      suffix: "",

      answer: ["third"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },

    // =================================================
    // 24
    // =================================================

    {
      number: "24th",

      prefix: "",

      suffix: "",

      answer: ["twenty-fourth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 25,

      type: "text",
    },

    // =================================================
    // 25
    // =================================================

    {
      number: "25th",

      prefix: "",

      suffix: "",

      answer: ["twenty-fifth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 25,

      type: "text",
    },

    // =================================================
    // 26
    //
    // twenty- + sixth
    // =================================================

    {
      number: "26th",

      prefix: "twenty-",

      suffix: "",

      answer: ["sixth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },

    // =================================================
    // 27
    //
    // twenty- + seventh
    // =================================================

    {
      number: "27th",

      prefix: "twenty-",

      suffix: "",

      answer: ["seventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",
    },

    // =================================================
    // 28
    // =================================================

    {
      number: "28th",

      prefix: "",

      suffix: "",

      answer: ["twenty-eighth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 25,

      type: "text",
    },

    // =================================================
    // 29
    // =================================================

    {
      number: "29th",

      prefix: "",

      suffix: "",

      answer: ["twenty-ninth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 25,

      type: "text",
    },

    // =================================================
    // 30
    // =================================================

    {
      number: "30th",

      prefix: "",

      suffix: "",

      answer: ["thirtieth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 20,

      type: "text",
    },

    // =================================================
    // 31
    //
    // thirty- + first
    // =================================================

    {
      number: "31st",

      prefix: "thirty-",

      suffix: "",

      answer: ["first"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },
  ],
};
