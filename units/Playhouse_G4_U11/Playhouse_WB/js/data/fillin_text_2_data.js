var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_57/3.mp3",
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

  numinrow: [[1], [1], [1], [1], [1]],

  mainTitle: "../images/pages/sb-icons/spilling.jpg",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_57/PHONICS_AND_SPELLING.mp3",

  // =========================================================
  // QUESTION 1 - READ IT AND SAY IT
  // =========================================================

  readItSection: {
    titleLeft: '<span class="red_text">1</span> Read it and say it.',

    titleRight: "Do you remember the poem for 'ie' / 'ei' words?",

    audio:
      "../audios/page_57/1_Read_it_and_say_it_Do_you_remember_the_poem_for_‘ie‘__‘ei‘_words.mp3",

    columns: [
      {
        number: "1",
        title: "I Before E",

        words: [
          "rel<span class='black_letters'>ie</span>ve/ rel<span class='black_letters'>ie</span>f",
          "br<span class='black_letters'>ie</span>f",
          "f<span class='black_letters'>ie</span>ld",
          "th<span class='black_letters'>ie</span>f",
          "fr<span class='black_letters'>ie</span>nd",
          "f<span class='black_letters'>ie</span>rce",
          "bel<span class='black_letters'>ie</span>f/ bel<span class='black_letters'>ie</span>ve",
        ],
      },

      {
        number: "2",
        title: "Except After C",

        words: [
          "rec<span class='black_letters'>ei</span>ve",
          "rec<span class='black_letters'>ei</span>pt",
          "c<span class='black_letters'>ei</span>ling",
        ],
      },

      {
        number: "3",
        title: "When Sounding as A",

        words: [
          "n<span class='black_letters'>ei</span>ghbour",
          "w<span class='black_letters'>ei</span>gh",
          "<span class='black_letters'>ei</span>ght",
          "th<span class='black_letters'>ei</span>r",
        ],
      },
    ],

    exceptions: [
      "anc<span class='black_letters'>ie</span>nt",
      "for<span class='black_letters'>ei</span>gn",
      "h<span class='black_letters'>ei</span>ght",
      "n<span class='black_letters'>ei</span>ther",
      "<span class='black_letters'>ei</span>ther",
      "w<span class='black_letters'>ei</span>rd",
    ],
  },

  // =========================================================
  // QUESTION 2 - GROUP IT
  // =========================================================

  subTitleTextLeft:
    '<span class="red_text">2</span> Group it! Find the ‘ie‘/ ‘ei‘ word that is described by the clue. Tell which chart it is in: 1, 2, 3 or 4',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_57/2_Group_it!_Find_the_ie_ei_word_that_is_described_by_the_clue_Tell_which_chart_it_is_in_1_2_3.mp3",

  image: "",

  imageposition: "back",

  defaultAnswer: 1,

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  questions: [
    {
      singleword: false,

      text: "They live next to you. (two syllables) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["neighbour", "3"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "opposite of floor (two syllables) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["ceiling", "2"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "someone who steals or takes what is not theirs (one syllable) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["thief", "1"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "something that is very old (two syllables) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["ancient", "4"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "something strange (one syllable) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["weird", "4"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "Five plus three is ... (one syllable) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["eight", "3"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "to get (two syllables) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["receive", "2"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "a place where football is played or a farmer works (one syllable) [_][_]",

      textaudios: [
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
        "../audios/page_57/under.mp3",
      ],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["field", "1"],

      alternateanswer: [[]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },
  ],
};
