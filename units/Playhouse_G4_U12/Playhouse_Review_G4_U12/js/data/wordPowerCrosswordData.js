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

var word_power_crossword_data = {
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
    "<span class='green_circle_num'>1</span> Solve it! <span class='green'>Solve the crossword puzzle using the Word Power words.</span>",

  subTitleTextRight: "",

  subTitleAudio: "",

  // =====================================================
  // GRID SIZE
  // =====================================================

  rows: 12,

  cols: 13,

  // =====================================================
  // WORDS
  //
  // row / col are 1-based
  // spaces are removed automatically
  // =====================================================

  words: [
    // =====================================================
    // DOWN
    // =====================================================

    {
      number: 1,

      direction: "down",

      answer: "patient",

      row: 1,

      col: 13,

      clue: "a person being treated by a doctor",
    },

    {
      number: 2,

      direction: "down",

      answer: "getwellcard",

      displayAnswer: "get well card",

      row: 2,

      col: 2,

      clue: "given to cheer up a sick person",
    },

    {
      number: 4,

      direction: "down",

      answer: "illness",

      row: 3,

      col: 6,

      clue: "a sickness or disease",
    },

    {
      number: 6,

      direction: "down",

      answer: "injury",

      row: 3,

      col: 11,

      clue: "a hurt or wound",
    },

    // =====================================================
    // ACROSS
    // =====================================================

    {
      number: 3,

      direction: "across",

      answer: "medicine",

      row: 3,

      col: 1,

      clue: "what you might take to get better",
    },

    {
      number: 5,

      direction: "across",

      answer: "diet",

      row: 3,

      col: 10,

      clue: "what you eat",
    },

    {
      number: 7,

      direction: "across",

      answer: "recovery",

      row: 7,

      col: 5,

      clue: "getting better after being sick",
    },

    {
      number: 8,

      direction: "across",

      answer: "cast",

      row: 9,

      col: 4,

      clue: "put on a broken bone to keep it in place",
    },
  ],
};
