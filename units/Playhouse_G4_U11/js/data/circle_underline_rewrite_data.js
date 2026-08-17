var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(12, 177, 75)",

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

var circle_underline_data = {
  // =========================================================
  // TITLE
  // =========================================================

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_98/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },

  subTitleTextLeft: "<span class='title-order'>2</span> You do it!",

  subTitleTextRight:
    "Read and circle the subjects and objects. Change the subjects and objects to subject pronouns and object pronouns. Underline the verbs. Rewrite the sentences.",

  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  // =========================================================
  // QUESTIONS
  // =========================================================

  questions: [
    // =====================================================
    // QUESTION 1 - EXAMPLE
    // =====================================================

    {
      example: true,

      words: [
        { id: "q1_w1", text: "When" },
        { id: "q1_w2", text: "Mr. McGregor" },
        { id: "q1_w3", text: "found" },
        { id: "q1_w4", text: "Peter" },
        { id: "q1_w5", text: "in" },
        { id: "q1_w6", text: "his" },
        { id: "q1_w7", text: "garden," },
        { id: "q1_w8", text: "Peter" },
        { id: "q1_w9", text: "ran" },
        { id: "q1_w10", text: "away" },
        { id: "q1_w11", text: "from" },
        { id: "q1_w12", text: "Mr. McGregor." },
      ],

      circleAnswer: [
        "q1_w2", // Mr. McGregor
        "q1_w4", // Peter
        "q1_w8", // Peter
        "q1_w12", // Mr. McGregor
      ],

      underlineAnswer: [
        "q1_w3", // found
        "q1_w9", // ran
      ],

      rewriteAnswer: "When he found him in his garden, he ran away from him.",

      alternateRewrite: [],

      maxlength: 180,
    },

    // =====================================================
    // QUESTION 2
    // =====================================================

    {
      example: false,

      words: [
        { id: "q2_w1", text: "My sister" },
        { id: "q2_w2", text: "likes" },
        { id: "q2_w3", text: "to" },
        { id: "q2_w4", text: "eat" },
        { id: "q2_w5", text: "juicy fruit." },
        { id: "q2_w6", text: "This apple" },
        { id: "q2_w7", text: "is" },
        { id: "q2_w8", text: "for" },
        { id: "q2_w9", text: "my sister." },
      ],

      circleAnswer: [
        "q2_w1", // My sister
        "q2_w9", // my sister
      ],

      underlineAnswer: [
        "q2_w2", // likes
        "q2_w4", // eat
      ],

      rewriteAnswer: "She likes to eat juicy fruit. This apple is for her",

      alternateRewrite: [],

      maxlength: 180,
    },

    // =====================================================
    // QUESTION 3
    // =====================================================

    {
      example: false,

      words: [
        { id: "q3_w1", text: "My mother and I" },
        { id: "q3_w2", text: "have" },
        { id: "q3_w3", text: "a big garden." },
        { id: "q3_w4", text: "My dad" },
        { id: "q3_w5", text: "bought" },
        { id: "q3_w6", text: "my mother and me" },
        { id: "q3_w7", text: "the seeds." },
      ],

      circleAnswer: [
        "q3_w1", // My mother and I
        "q3_w4", // My dad
        "q3_w6", // my mother and me
      ],

      underlineAnswer: [
        "q3_w2", // have
        "q3_w5", // bought
      ],

      rewriteAnswer: "We have a big garden. He bought us the seeds",

      alternateRewrite: [],

      maxlength: 180,
    },

    // =====================================================
    // QUESTION 4
    // =====================================================

    {
      example: false,

      words: [
        { id: "q4_w1", text: "What" },
        { id: "q4_w2", text: "is" },
        { id: "q4_w3", text: "that?" },
        { id: "q4_w4", text: "That thing" },
        { id: "q4_w5", text: "is" },
        { id: "q4_w6", text: "parsley." },
        { id: "q4_w7", text: "Please" },
        { id: "q4_w8", text: "give" },
        { id: "q4_w9", text: "the parsley" },
        { id: "q4_w10", text: "to" },
        { id: "q4_w11", text: "Becky." },
      ],

      circleAnswer: [
        "q4_w4", // That thing
        "q4_w9", // the parsley
        "q4_w11", // Becky
      ],

      underlineAnswer: [
        "q4_w8", // give
      ],

      rewriteAnswer: "What is that? It is parsley. Please give it to her",

      alternateRewrite: [],

      maxlength: 200,
    },

    // =====================================================
    // QUESTION 5
    // =====================================================

    {
      example: false,

      words: [
        { id: "q5_w1", text: "Mr. and Mrs. Brown" },
        { id: "q5_w2", text: "saw" },
        { id: "q5_w3", text: "Tom." },
        { id: "q5_w4", text: "Tom" },
        { id: "q5_w5", text: "ran" },
        { id: "q5_w6", text: "away" },
        { id: "q5_w7", text: "from" },
        { id: "q5_w8", text: "Mr. and Mrs. Brown." },
      ],

      circleAnswer: [
        "q5_w1", // Mr. and Mrs. Brown
        "q5_w3", // Tom
        "q5_w4", // Tom
        "q5_w8", // Mr. and Mrs. Brown
      ],

      underlineAnswer: [
        "q5_w2", // saw
        "q5_w5", // ran
      ],

      rewriteAnswer: "They saw him. He ran away from them",

      alternateRewrite: [],

      maxlength: 180,
    },
  ],
};
