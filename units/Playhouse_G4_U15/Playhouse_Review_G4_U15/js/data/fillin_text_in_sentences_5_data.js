var fillin_data = {
  layout: 1,

  numinrow: [[1], [1], [1], [1], [1]],

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    "<span class='green_text'>3</span> Finish it! <span class='green'>Complete the chart about pronouns. Take the letters underlined in red, unscramble them and find out what Detective Dan’s favourite thing is!</span>",

  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",

  image: "",
  imageposition: "back",

  defaultAnswer: 1,

  numbering: "none",
  numberstartfrom: 1,

  options: [],

  questions: [
    // =====================================================
    // HEADER
    // =====================================================

    {
      singleword: false,
      text: "Subject",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "Object",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "Possessive",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // I / ME / MINE
    // =====================================================

    {
      singleword: false,
      text: "I",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "me",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["m", "i", "n", "e"],

      // m أحمر
      redInputs: [0],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // YOU / YOU / YOURS
    // =====================================================

    {
      singleword: false,
      text: "[_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["y", "o", "u"],

      // y أحمر
      redInputs: [0],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["y", "o", "u"],

      // y أحمر
      redInputs: [0],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "yours",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // HE / HIM / HIS
    // =====================================================

    {
      singleword: false,
      text: "he",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "him",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["h", "i", "s"],

      // s أحمر
      redInputs: [2],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // SHE / HER / HERS
    // =====================================================

    {
      singleword: false,
      text: "[_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["s", "h", "e"],

      // ما في أحمر
      redInputs: [],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["h", "e", "r"],

      // e و r أحمر
      redInputs: [1, 2],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "hers",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // IT / IT / ITS
    // =====================================================

    {
      singleword: false,
      text: "it",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "it",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["i", "t", "s"],

      // t أحمر
      redInputs: [1],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // WE / US / OURS
    // =====================================================

    {
      singleword: false,
      text: "[_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["w", "e"],
      redInputs: [],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["u", "s"],
      redInputs: [],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "ours",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // THEY / THEM / THEIRS
    // =====================================================

    {
      singleword: false,
      text: "they",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "them",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",
      answer: [""],
      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    {
      singleword: false,
      text: "[_][_][_][_][_][_]",
      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["t", "h", "e", "i", "r", "s"],
      redInputs: [],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },

    // =====================================================
    // FINAL ANSWER
    // =====================================================

    {
      singleword: false,

      text: "His favourite thing: [_][_][_][_][_][_][_]",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],
      audio: "",
      audioenable: "default",
      image: "",

      answer: ["m", "y", "s", "t", "e", "r", "y"],

      // كل خطوط Mystery حمراء
      redInputs: [0, 1, 2, 3, 4, 5, 6],

      alternateanswer: [[]],
      strictcase: "no",
      strictorder: "yes",
      maxlength: 200,
      type: "",
    },
  ],
};
