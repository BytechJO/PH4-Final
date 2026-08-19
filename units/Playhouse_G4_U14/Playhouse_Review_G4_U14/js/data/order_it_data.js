var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(12, 177, 75)",

  type: "text",

  playListData: [],
};

var fillin_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "0px",
  },

  mainTitleAudio: "",

  subTitleTextLeft: "<span class='order_it_num'>3</span> <b>Order it!</b>",

  subTitleTextRight:
    "<b>Write the ordinal number that tells where the people are in line.</b>",

  subTitleAudio: "",

  // =====================================================
  // FULL PEOPLE IMAGE
  // حط هون مسار الصورة الكاملة الموجودة عندك
  // =====================================================

  image: "../images/pages/order_people.png",

  // =====================================================
  // QUESTIONS
  //
  // left = مكان السهم / الإجابة بالنسبة للصورة
  //
  // الأول default
  // =====================================================

  questions: [
    {
      answer: ["first"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",

      default: true,

      left: "8.5%",
    },

    {
      answer: ["third"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",

      default: false,

      left: "20%",
    },

    {
      answer: ["seventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",

      default: false,

      left: "41%",
    },

    {
      answer: ["eleventh"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",

      default: false,

      left: "59%",
    },

    {
      answer: ["fifteenth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",

      default: false,

      left: "77%",
    },

    {
      answer: ["twentieth"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 12,

      type: "text",

      default: false,

      left: "95%",
    },
  ],
};
