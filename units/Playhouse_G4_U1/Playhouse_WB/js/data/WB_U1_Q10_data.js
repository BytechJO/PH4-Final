var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_8/2.mp3",
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
  layout: 3,

  numinrow: [[1, 1, 1]],

  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "../images/pages/activities/WRITING.jpg",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "90px",
  },

  mainTitleAudio: "../audios/page_8/WRITING.mp3",

  subTitleTextLeft: "<span class='title-order'>2</span> <b>Think about it!</b>",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_8/2_Think_about_it!.mp3",

  // =====================================================
  // CONTENT
  // =====================================================

  defaultAnswer: 1,

  questions: [
    {
      textbefore: "1 &nbsp; Where did Maya go on holiday?",

      textafter: "",

      audio: "../audios/page_8/under.mp3",

      audioenable: "default",

      image: "no",

      answer: ["test"],

      strictcase: "no",

      maxlength: 300,

      type: "text",
    },

    {
      textbefore: "2 &nbsp; What did she do there?",

      textafter: "",

      audio: "../audios/page_8/under.mp3",

      audioenable: "default",

      image: "no",

      answer: ["a"],

      strictcase: "no",

      maxlength: 300,

      type: "text",
    },

    {
      textbefore: "3 &nbsp; Why was she happy to go home?",

      textafter: "",

      audio: "../audios/page_8/under.mp3",

      audioenable: "default",

      image: "no",

      answer: ["a"],

      strictcase: "no",

      maxlength: 300,

      type: "text",
    },
  ],
};

// WB8: written comprehension; remove test/a placeholder keys
fillin_data.manualReview = true;
fillin_data.questions.forEach(q => { q.answer = []; });
