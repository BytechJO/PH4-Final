var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(12, 177, 75)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_107/1.mp3",
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

var circle_sentence_data = {
  // =====================================================
  // HEADER
  // =====================================================
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "70px" },
  mainTitleAudio: "../audios/page_107/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft: "<span class='title-order'>1</span> <b>Listen to it!</b>",

  subTitleTextRight:
    "Listen to this conversation. Circle the part of the sentence that tells what the patient <span class='circle_green'>can</span> or <span class='circle_green'>should</span> do.",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_107/1_Listen_to_it!.mp3",

  sideImages: [
    "../images/pages/activities/7.jpg",
    "../images/pages/activities/6.jpg",
    "../images/pages/activities/8.jpg",
  ],

  // =====================================================
  // FIRST SECTION
  // =====================================================

  questions: [
    // =====================================================
    // QUESTION 1 - DAVE
    // =====================================================

    {
      number: "1",

      solved: true,

      sentences: [
        // -------------------------------------------------
        // Dave can either walk or go skiing.
        // answer = walk
        // -------------------------------------------------

        {
          words: [
            {
              text: "Dave",
              correct: false,
            },

            {
              text: "can",
              correct: false,
            },

            {
              text: "either",
              correct: false,
            },

            {
              text: "walk",
              correct: true,
              defaultSelected: true,
            },

            {
              text: "or",
              correct: false,
            },

            {
              text: "go skiing.",
              correct: false,
            },
          ],
        },

        // -------------------------------------------------
        // He should eat either vegetables or sweets.
        // answer = vegetables
        // -------------------------------------------------

        {
          words: [
            {
              text: "He",
              correct: false,
            },

            {
              text: "should",
              correct: false,
            },

            {
              text: "eat",
              correct: false,
            },

            {
              text: "either",
              correct: false,
            },

            {
              text: "vegetables",
              correct: true,
              defaultSelected: true,
            },

            {
              text: "or",
              correct: false,
            },

            {
              text: "sweets.",
              correct: false,
            },
          ],
        },
      ],
    },

    // =====================================================
    // QUESTION 2 - SALLY
    // =====================================================

    {
      number: "2",

      solved: false,

      sentences: [
        // -------------------------------------------------
        // Sally should either take her medicine
        // or throw it away.
        //
        // answer = take her medicine
        // ONE CIRCLE
        // -------------------------------------------------

        {
          words: [
            {
              text: "Sally",
              correct: false,
            },

            {
              text: "should",
              correct: false,
            },

            {
              text: "either",
              correct: false,
            },

            {
              text: "take her medicine",
              correct: true,
            },

            {
              text: "or",
              correct: false,
            },

            {
              text: "throw it away.",
              correct: false,
            },
          ],
        },

        // -------------------------------------------------
        // She can either have friends sign her cast
        // or go swimming with it on.
        //
        // answer = have friends sign her cast
        // ONE CIRCLE
        // -------------------------------------------------

        {
          words: [
            {
              text: "She",
              correct: false,
            },

            {
              text: "can",
              correct: false,
            },

            {
              text: "either",
              correct: false,
            },

            {
              text: "have friends sign her cast",
              correct: true,
            },

            {
              text: "or",
              correct: false,
            },

            {
              text: "go swimming with it on.",
              correct: false,
            },
          ],
        },
      ],
    },

    // =====================================================
    // QUESTION 3 - RANDY
    // =====================================================

    {
      number: "3",

      solved: false,

      sentences: [
        // -------------------------------------------------
        // Randy can either go to school or play all day.
        //
        // answer = go to school
        // ONE CIRCLE
        // -------------------------------------------------

        {
          words: [
            {
              text: "Randy",
              correct: false,
            },

            {
              text: "can",
              correct: false,
            },

            {
              text: "either",
              correct: false,
            },

            {
              text: "go to school",
              correct: true,
            },

            {
              text: "or",
              correct: false,
            },

            {
              text: "play all day.",
              correct: false,
            },
          ],
        },

        // -------------------------------------------------
        // He should either see the doctor again next week
        // or not come back again.
        //
        // answer = see the doctor again next week
        // ONE CIRCLE
        // -------------------------------------------------

        {
          words: [
            {
              text: "He",
              correct: false,
            },

            {
              text: "should",
              correct: false,
            },

            {
              text: "either",
              correct: false,
            },

            {
              text: "see the doctor again next week",
              correct: true,
            },

            {
              text: "or",
              correct: false,
            },

            {
              text: "not come back again.",
              correct: false,
            },
          ],
        },
      ],
    },
  ],

  // =====================================================
  // SECOND INSTRUCTION
  // =====================================================

  secondInstruction:
    "Now circle what the patients <span class='circle_red'>can’t</span> or <span class='circle_red'>shouldn’t</span> do. (Which part of the sentence is true?)",

  // =====================================================
  // SECOND SECTION
  // =====================================================

  negativeQuestions: [
    // =====================================================
    // DAVE
    // =====================================================

    {
      number: "1",

      solved: false,

      sentences: [
        {
          words: [
            {
              text: "Dave",
              correct: false,
            },

            {
              text: "should",
              correct: false,
            },

            {
              text: "eat",
              correct: false,
            },

            {
              text: "neither",
              correct: false,
            },

            {
              text: "sweets",
              correct: true,
            },

            {
              text: "nor",
              correct: false,
            },

            {
              text: "fruits.",
              correct: false,
            },
          ],
        },
      ],
    },

    // =====================================================
    // SALLY
    // =====================================================

    {
      number: "2",

      solved: false,

      sentences: [
        {
          words: [
            {
              text: "Sally",
              correct: false,
            },

            {
              text: "should",
              correct: false,
            },

            {
              text: "neither",
              correct: false,
            },

            {
              text: "write",
              correct: false,
            },

            {
              text: "nor",
              correct: false,
            },

            {
              text: "swim",
              correct: true,
            },

            {
              text: "with her cast on.",
              correct: false,
            },
          ],
        },
      ],
    },

    // =====================================================
    // RANDY
    // =====================================================

    {
      number: "3",

      solved: false,

      sentences: [
        {
          words: [
            {
              text: "Randy",
              correct: false,
            },

            {
              text: "should",
              correct: false,
            },

            {
              text: "neither",
              correct: false,
            },

            {
              text: "play too hard",
              correct: true,
            },

            {
              text: "nor",
              correct: false,
            },

            {
              text: "do his homework.",
              correct: false,
            },
          ],
        },
      ],
    },
  ],
};
