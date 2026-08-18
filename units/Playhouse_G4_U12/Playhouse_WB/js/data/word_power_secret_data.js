var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(53, 130, 180)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_59/1.mp3",
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

var word_power_secret_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "../images/pages/sb-icons/word_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_59/WORD_POWER.mp3",
  subTitleTextLeft:
    "<span class='title-order'>1</span> Solve it! Unscramble each of the Word Power words. Copy the letters from the numbered boxes into the box below with the same number to find a secret message!",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_59/1_Solve_it!_Unscramble_each_of_the_Word_Power_words_Copy_the_letters_from_the_numbered_boxes.mp3",

  // =====================================================
  // WORD LIST
  // =====================================================

  wordList: [
    "patient",
    "get well card",
    "ill/illness",
    "recover",
    "medicine",
    "cast",
    "treatment",
    "diet",
    "injury",
    "prescription",
  ],

  // =====================================================
  // SIDE IMAGE
  // =====================================================

  image: "../images/pages/activities/1.jpg",

  // =====================================================
  // SCRAMBLED WORDS
  //
  // null = box without number
  // =====================================================

  questions: [
    {
      scrambled: "INPATTE",
      answer: "PATIENT",

      numbers: [15, 53, 59, 66, 63, 2, 56],
    },

    {
      scrambled: "DERALEGTL​CW",
      answer: "GETWELLCARD",

      numbers: [36, 8, 68, null, 16, 13, 14, 64, 48, 65, 34],
    },

    {
      scrambled: "LISSLNE",
      answer: "ILLNESS",

      numbers: [3, 30, 60, 22, 44, 25, 58],
    },

    {
      scrambled: "EVROCER",
      answer: "RECOVER",

      numbers: [67, 32, 71, 10, 72, 24, 70],
    },

    {
      scrambled: "CIEMENDI",
      answer: "MEDICINE",

      numbers: [38, 33, 37, 21, 41, 27, 4, 39],
    },

    {
      scrambled: "TCSA",
      answer: "CAST",

      numbers: [null, 1, 18, 28],
    },

    {
      scrambled: "TTTAERMNE",
      answer: "TREATMENT",

      numbers: [57, 11, 55, 29, 23, 50, 51, 31, 45],
    },

    {
      scrambled: "TEID",
      answer: "DIET",

      numbers: [9, 12, 62, 49],
    },

    {
      scrambled: "PCNIESIOPRTR",
      answer: "PRESCRIPTION",

      numbers: [26, 7, 47, 35, null, 17, 42, 69, 52, 54, 19, 20],
    },

    {
      scrambled: "JIYRUN",
      answer: "INJURY",

      numbers: [40, 43, 5, 6, 46, 61],
    },
  ],

  // =====================================================
  // SECRET MESSAGE
  //
  // ref = numbered box
  // fixed = ready-made hint
  // =====================================================

  secretRows: [
    // ===================================================
    // ROW 1
    // AN INJURED OR ILL PERSON IN
    // ===================================================

    [
      {
        letters: [{ ref: 1 }, { ref: 2 }],
      },

      {
        letters: [
          { ref: 3 },
          { ref: 4 },
          { ref: 5 },
          { ref: 6 },
          { ref: 7 },
          { ref: 8 },
          { ref: 9 },
        ],
      },

      {
        letters: [{ ref: 10 }, { ref: 11 }],
      },

      {
        letters: [{ ref: 12 }, { ref: 13 }, { ref: 14 }],
      },

      {
        letters: [
          { ref: 15 },
          { ref: 16 },
          { ref: 17 },
          { ref: 18 },
          { ref: 19 },
          { ref: 20 },
        ],
      },

      {
        letters: [{ ref: 21 }, { ref: 22 }],
      },
    ],

    // ===================================================
    // ROW 2
    // HOSPITAL NEEDS GOOD MEDICINE
    // ===================================================

    [
      {
        letters: [
          {
            fixed: "H",
          },
          { ref: 10 },
          { ref: 25 },
          { ref: 26 },
          { ref: 27 },
          { ref: 28 },
          { ref: 29 },
          { ref: 30 },
        ],
      },

      {
        letters: [
          { ref: 31 },
          { ref: 32 },
          { ref: 33 },
          { ref: 34 },
          { ref: 35 },
        ],
      },

      {
        letters: [{ ref: 36 }, { ref: 10 }, { ref: 10 }, { ref: 37 }],
      },

      {
        letters: [
          { ref: 38 },
          { ref: 39 },
          { ref: 34 },
          { ref: 40 },
          { ref: 41 },
          { ref: 42 },
          { ref: 43 },
          { ref: 44 },
        ],

        punctuation: ".",
      },
    ],

    // ===================================================
    // ROW 3
    // TREATMENT AND DIET, BUT MOSTLY THEY
    // ===================================================

    [
      {
        letters: [
          { ref: 45 },
          { ref: 46 },
          { ref: 47 },
          { ref: 48 },
          { ref: 49 },
          { ref: 50 },
          { ref: 51 },
          { ref: 22 },
          { ref: 52 },
        ],
      },

      {
        letters: [{ ref: 53 }, { ref: 2 }, { ref: 37 }],
      },

      {
        letters: [{ ref: 9 }, { ref: 54 }, { ref: 55 }, { ref: 56 }],

        punctuation: ",",
      },

      {
        letters: [
          {
            fixed: "B",
          },
          { ref: 6 },
          { ref: 57 },
        ],
      },

      {
        letters: [
          { ref: 38 },
          { ref: 19 },
          { ref: 58 },
          { ref: 23 },
          { ref: 60 },
          { ref: 61 },
        ],
      },

      {
        letters: [
          { ref: 52 },

          {
            fixed: "H",
          },

          { ref: 62 },
          { ref: 61 },
        ],
      },
    ],

    // ===================================================
    // ROW 4
    // NEED CARING FRIENDS TO HELP THEM
    // ===================================================

    [
      {
        letters: [{ ref: 31 }, { ref: 63 }, { ref: 24 }, { ref: 37 }],
      },

      {
        letters: [
          { ref: 64 },
          { ref: 1 },
          { ref: 65 },
          { ref: 66 },
          { ref: 4 },
          { ref: 36 },
        ],
      },

      {
        letters: [
          {
            fixed: "F",
          },

          { ref: 67 },
          { ref: 21 },
          { ref: 32 },
          { ref: 22 },
          { ref: 34 },
          { ref: 35 },
        ],
      },

      {
        letters: [{ ref: 68 }, { ref: 10 }],
      },

      {
        letters: [
          {
            fixed: "H",
          },

          { ref: 55 },
          { ref: 13 },
          { ref: 69 },
        ],
      },

      {
        letters: [
          { ref: 45 },

          {
            fixed: "H",
          },

          { ref: 55 },
          { ref: 38 },
        ],
      },
    ],

    // ===================================================
    // ROW 5
    // RECOVER!
    // ===================================================

    [
      {
        letters: [
          { ref: 70 },
          { ref: 63 },
          { ref: 71 },
          { ref: 10 },
          { ref: 72 },
          { ref: 39 },
          { ref: 17 },
        ],

        punctuation: "!",
      },
    ],
  ],
};
