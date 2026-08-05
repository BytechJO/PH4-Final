var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/under.mp3",
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

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: {
    right: "-18px",
  },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    '<span class="title-order">3</span> ' +
    "<b><i>Game: Who ate the biscuits?</i></b> " +
    '<span class="green">' +
    "Who was eating biscuits at 3:00 on Tuesday? Here’s what each " +
    "person was doing at 3:00 that day. Write what each person was doing. " +
    "Then for each letter that has a number, write that letter on the matching " +
    "number below. The name will tell you who did it!" +
    "</span>",

  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  options: [],
  optionsAudios: [],

  /*
   * السؤال الأول محلول وجاهز.
   */
  defaultAnswer: 1,

  /*
   * الانتقال التلقائي بين حقول الحروف.
   */
  autoNext: true,

  /*
   * صورة البنت الكبيرة.
   */
  characterImage: "../images/pages/activities/u38.png",

  questions: [
    {
      text: "Bruce [_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/u32.png",

      answer: ["was watching TV"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 200,
      type: "text",

      hint: [""],
    },

    {
      text:
        "Dennis [_][_][_] &nbsp;&nbsp; " +
        "[_][_][_][_][_][_] a video.",

      textaudios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],

      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/u33.png",

      answer: ["w", "a", "s", "t", "a", "k", "i", "n", "g"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["3", "4", "5", "2", "", "", "", "", ""],
    },

    {
      text:
        "Jerry [_][_][_] &nbsp;&nbsp; " +
        "[_][_][_][_][_][_][_] a race!",

      textaudios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],

      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/u34.png",

      answer: ["w", "a", "s", "w", "i", "n", "n", "i", "n", "g"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "", "6", "", "11", "", "", "", "", ""],
    },

    {
      text:
        "Elaine [_][_][_] &nbsp;&nbsp; " +
        "[_][_][_][_][_][_][_] <br>" +
        "<span class='question-second-line'>up a balloon.</span>",

      textaudios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],

      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/u35.png",

      answer: ["w", "a", "s", "b", "l", "o", "w", "i", "n", "g"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "", "", "", "", "7", "", "1", "", ""],
    },

    {
      text:
        "We [_][_][_][_] &nbsp;&nbsp; " +
        "[_][_][_][_][_][_] &nbsp;&nbsp; " +
        "a&nbsp;[_]a[_]el",

      textaudios: [
        "../audios/under.mp3",
        "../audios/under.mp3",
        "../audios/under.mp3",
      ],

      audio: "",
      audioenable: "default",

      image: "../images/pages/activities/u36.png",

      answer: ["w", "e", "r", "e", "r", "i", "d", "i", "n", "g", "c", "m"],

      alternateanswer: [[]],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 1,
      type: "text",

      hint: ["", "9", "", "13", "", "", "", "", "", "", "12", "10"],
    },

    /*
     * السؤال الأخير.
     * IT / WAS / SOME / MICE
     */
    {
      isFinalPuzzle: true,

      title: "Who ate the biscuits?",

      image: "../images/pages/activities/u37.png",

      /*
       * تقسيم الخانات:
       * IT / WAS / SOME / MICE
       */
      groups: [2, 3, 4, 4],

      /*
       * الحرف الثامن M ظاهر مسبقًا.
       * الترتيب يبدأ من صفر.
       */
      fixedLetters: {
        7: "m",
      },

      /*
       * الإجابة موزعة على جميع حقول السؤال الأخير.
       */
      answer: [
        "i",
        "t",

        "w",
        "a",
        "s",

        "s",
        "o",
        "m",
        "e",

        "m",
        "i",
        "c",
        "e",
      ],

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