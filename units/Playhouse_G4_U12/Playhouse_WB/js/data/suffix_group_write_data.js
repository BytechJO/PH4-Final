var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(53, 130, 180)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_62/1.mp3",
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

var suffix_group_write_data = {
  // =====================================================
  // HEADER
  // =====================================================
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_62/PHONICS_AND_SPELLING.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>1</span> <b>Group it!</b> Put the words from below in the correct group. Write them with their endings.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_62/1_Group_it!_Put_the_words_from_below_in_the_correct_group_Write_them_with_their_endings.mp3",

  // =====================================================
  // SIDE IMAGE
  // change path if needed
  // =====================================================

  image: "../images/pages/activities/doctor.png",

  // =====================================================
  // TABLE
  // maxRows = 6 because -ment has 6 answers
  // =====================================================

  maxRows: 6,

  groups: [
    {
      id: "y",

      title: "-y",

      defaultAnswers: [
        {
          answer: "recovery",
          source: "recover",
        },
      ],

      answers: ["recovery", "injury", "discovery", "stay"],
    },

    {
      id: "ment",

      title: "-ment",

      defaultAnswers: [
        {
          answer: "statement",
          source: "state",
        },
      ],

      answers: [
        "statement",
        "treatment",
        "government",
        "management",
        "improvement",
        "payment",
      ],
    },

    {
      id: "tion",

      title: "-tion",

      defaultAnswers: [],

      answers: ["education", "prescription"],
    },

    {
      id: "ity",

      title: "-ity",

      defaultAnswers: [],

      answers: ["activity", "nationality", "humidity"],
    },

    {
      id: "ness",

      title: "-ness",

      defaultAnswers: [],

      answers: ["happiness", "sickness", "illness"],
    },
  ],

  // =====================================================
  // WORD BANK
  //
  // source  = word shown below
  // answer  = word student writes
  // group   = correct table column
  //
  // defaultUsed means its answer is already written
  // =====================================================

  wordBank: [
    // =====================================================
    // COLUMN 1
    // =====================================================

    {
      source: "state",
      row: 0,

      answer: "statement",
      group: "ment",
      defaultUsed: true,
    },

    {
      source: "treat",
      answer: "treatment",
      group: "ment",
    },

    {
      source: "discover",
      answer: "discovery",
      group: "y",
    },

    {
      source: "educate",
      answer: "education",
      group: "tion",
    },

    {
      source: "active",
      answer: "activity",
      group: "ity",
    },

    {
      source: "pay",
      answer: "payment",
      group: "ment",
    },

    // =====================================================
    // COLUMN 2
    // =====================================================

    {
      source: "injure",
      answer: "injury",
      group: "y",
    },

    {
      source: "govern",
      answer: "government",
      group: "ment",
    },

    {
      source: "national",
      answer: "nationality",
      group: "ity",
    },

    {
      source: "prescribe",
      answer: "prescription",
      group: "tion",
    },

    {
      source: "happy",
      answer: "happiness",
      group: "ness",
    },

    {
      source: "sick",
      answer: "sickness",
      group: "ness",
    },

    // =====================================================
    // COLUMN 3
    // =====================================================

    {
      source: "manage",
      answer: "management",
      group: "ment",
    },

    {
      source: "improve",
      answer: "improvement",
      group: "ment",
    },

    {
      source: "recover",
      row: 0,

      answer: "recovery",
      group: "y",
      defaultUsed: true,
    },

    {
      source: "ill",
      answer: "illness",
      group: "ness",
    },

    {
      source: "humid",
      answer: "humidity",
      group: "ity",
    },

    {
      source: "stay",
      answer: "station",
      group: "tion",
    },
  ],
};
