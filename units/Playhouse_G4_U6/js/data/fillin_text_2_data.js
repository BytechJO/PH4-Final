var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_53/3.mp3",
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

  mainTitle: "../images/pages/sb-icons/phonics.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleAudio: "../audios/page_53/PHONICS_AND_SPELLING.mp3",
  mainTitleIconPos: { right: "70px" },
  subTitleTextLeft: "<span class='title-order'>3</span> You try it!",
  subTitleTextRight:
    "Read and complete the poem. Then listen and check your answers.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_53/3_You_try_it!.mp3",

  image: "",
  imageposition: "back",

  /*
    صورة المحقق
    بنعرضها من الـCSS أو ممكن نستخدم image1
  */
  image1: "../images/pages/activities/53.png",

  numbering: "none",

  numberstartfrom: "a",

  options: [],

  optionsAudios: [],

  questions: [
    /* =====================================
       LINE 1
    ===================================== */

    {
      singleword: false,

      text: "Clickety, clackety, clickety clack,",

      textaudios: ["../audios/page_53/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },

    /* =====================================
       back
       hint = b
       student writes = ack
    ===================================== */

    {
      singleword: false,

      text: "I want to take my new shoes <span class='word_hint'>b</span>[_]!",

      textaudios: ["../audios/page_53/under.mp3", ""],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["ack"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 3,

      type: "text",
    },

    /* =====================================
       cat
       hint = c
       student writes = at
    ===================================== */

    {
      singleword: false,

      text: "When I sneak up and scare my <span class='word_hint'>c</span>[_],",

      textaudios: ["../audios/page_53/under.mp3", ""],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["at"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 2,

      type: "text",
    },

    /* =====================================
       LINE
    ===================================== */

    {
      singleword: false,

      text: "She hears me in two seconds flat.",

      textaudios: ["../audios/page_53/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },

    /* =====================================
       shoes
       hint = sh
       student writes = oes
    ===================================== */

    {
      singleword: false,

      text: "When I play cop and look for clues,",

      textaudios: ["../audios/page_53/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },
    {
      singleword: false,

      text: "I can only hear my noisy <span class='word_hint'>sh</span>[_].",

      textaudios: ["../audios/page_53/under.mp3", ""],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["oes"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 3,

      type: "text",
    },
    /* =====================================
       seek
       hint = s
       student writes = eek
    ===================================== */

    {
      singleword: false,

      text: "I never win at hide and <span class='word_hint'>s</span>[_],",

      textaudios: ["../audios/page_53/under.mp3", ""],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["eek"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 3,

      type: "text",
    },

    /* =====================================
       LAST LINE
    ===================================== */

    {
      singleword: false,

      text: "Because my shoes make such a loud creak.",

      textaudios: ["../audios/page_53/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 10,

      type: "text",
    },
  ],
};
