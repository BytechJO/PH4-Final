var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(53, 130, 180)",

  type: "text",

  playListData: [
    {
      audiourl: "",
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

var suffix_cross_write_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "",

  subTitleTextLeft:
    "<span class='green_text'>3</span>Fix it! <span class='green'>Add word endings to the words in the word box and write them in the correct column.</span>",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "",

  // =====================================================
  // TABLE
  // أكبر مجموعة فيها كلمتين
  // =====================================================

  maxRows: 2,

  // =====================================================
  // GROUPS
  // =====================================================

  groups: [
    // ===================================================
    // -Y
    // ===================================================

    {
      id: "y",

      title: "-y words",

      defaultAnswers: [],

      answers: ["recovery"],
    },

    // ===================================================
    // -MENT
    // ===================================================

    {
      id: "ment",

      title: "-ment words",

      defaultAnswers: [],

      answers: ["treatment", "improvement"],
    },

    // ===================================================
    // -TION
    // prescription مكتوبة من البداية
    // ===================================================

    {
      id: "tion",

      title: "-tion words",

      defaultAnswers: [
        {
          row: 0,

          answer: "prescription",

          source: "prescribe",
        },
      ],

      answers: ["prescription"],
    },

    // ===================================================
    // -ITY
    // ===================================================

    {
      id: "ity",

      title: "-ity words",

      defaultAnswers: [],

      answers: ["activity"],
    },

    // ===================================================
    // -NESS
    // ===================================================

    {
      id: "ness",

      title: "-ness words",

      defaultAnswers: [],

      answers: ["illness", "happiness"],
    },
  ],

  // =====================================================
  // WORD BOX
  // نفس ترتيب الصورة
  //
  // source  = الكلمة الظاهرة فوق
  // answer  = الكلمة بعد إضافة النهاية
  // group   = العمود الصحيح
  //
  // defaultUsed = الكلمة مشطوبة من البداية
  // =====================================================

  wordBank: [
    {
      source: "prescribe",

      answer: "prescription",

      group: "tion",

      defaultUsed: true,
    },

    {
      source: "recover",

      answer: "recovery",

      group: "y",
    },

    {
      source: "active",

      answer: "activity",

      group: "ity",
    },

    {
      source: "treat",

      answer: "treatment",

      group: "ment",
    },

    {
      source: "improve",

      answer: "improvement",

      group: "ment",
    },

    {
      source: "ill",

      answer: "illness",

      group: "ness",
    },

    {
      source: "happy",

      answer: "happiness",

      group: "ness",
    },
  ],
};
