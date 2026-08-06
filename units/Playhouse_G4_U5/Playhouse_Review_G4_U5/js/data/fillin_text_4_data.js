var fillin_data = {
  layout: 1,

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    '<span class="title_order">4</span>' +
    '<span class="activity-title"> Unscramble it! </span>' +
    '<span class="green instruction-text">' +
    "Write the unscrambled word. Then write the numbered letters " +
    "in the blanks to make a new word." +
    "</span>",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  options: [],
  optionsAudios: [],

  /*
   * لا يوجد سؤال محلول مسبقًا.
   */
  defaultAnswer: 0,

  /*
   * الانتقال تلقائيًا للخانة التالية.
   */
  autoNext: true,

  /*
   * لا توجد صورة كبيرة في هذا السؤال.
   */
  characterImage: "",

  questions: [
    /* =====================================================
       1. poillw = pillow
       الحروف المطلوبة:
       8 = p
       5 = l
       11 = l
    ===================================================== */

    {
      text: '<span class="scrambled-word">poillw</span> [_][_][_][_][_][_]',
      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "",

      answer: ["p", "i", "l", "l", "o", "w"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["8", "", "5", "11", "", ""],
    },

    /* =====================================================
       2. gorw = grow
       10 = o
    ===================================================== */

    {
      text: '<span class="scrambled-word">gorw</span> [_][_][_][_]',
      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "",

      answer: ["g", "r", "o", "w"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "", "10", ""],
    },

    /* =====================================================
       3. wanror = narrow
       3 = a
       6 = o
    ===================================================== */

    {
      text: '<span class="scrambled-word">wanror</span> [_][_][_][_][_][_]',
      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "",

      answer: ["n", "a", "r", "r", "o", "w"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "3", "", "", "6", ""],
    },

    /* =====================================================
       4. belwo = elbow
       4 = b
    ===================================================== */

    {
      text: '<span class="scrambled-word">belwo</span> [_][_][_][_][_]',
      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "",

      answer: ["b", "e", "l", "o", "w"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "", "4", "", ""],
    },

    /* =====================================================
       5. wosh = show
       1 = s
       2 = h
       7 = w
    ===================================================== */

    {
      text: '<span class="scrambled-word">wosh</span> [_][_][_][_]',
      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "",

      answer: ["s", "h", "o", "w"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["1", "2", "", "7"],
    },

    /* =====================================================
       6. nows = snow
       9 = o
    ===================================================== */

    {
      text: '<span class="scrambled-word">nows</span> [_][_][_][_]',
      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "",

      answer: ["s", "n", "o", "w"],
      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "", "9", ""],
    },

    /* =====================================================
       Final answer:
       SHALLOW POOL
    ===================================================== */

    {
      isFinalPuzzle: true,

      title: "",

      image: "",

      /*
       * SHALLOW / POOL
       */
      groups: [7, 4],

      fixedLetters: {},

      answer: ["s", "h", "a", "l", "l", "o", "w", "p", "o", "o", "l"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      audio: "",
      audioenable: "default",
    },
  ],
};
