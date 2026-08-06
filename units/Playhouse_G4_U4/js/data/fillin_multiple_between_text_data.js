var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/demoo.mp3",
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

  /* عندك 6 أسطر */
  numinrow: [[1], [1], [1], [1], [1], [1]],

  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",

  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",

  mainTitleAudio: "../audios/page_35/GRAMMAR_PRACTICE.mp3",

  mainTitleIconPos: {
    right: "70px",
  },

  subTitleTextLeft: "<span class='title-order'>1</span> Read and write it!",

  subTitleTextRight:
    "Unscramble the sentences to read the conversation between Yoshi and his guest, Dave.<br> Use capital letters, full stops or question marks!",

  subTitleIcons: [""],

  subTitleAudio: "../audios/under.mp3",

  activityheading: "",

  activityheading_audio: "../audios/under.mp3",

  main_activityheading: "../images/pages/activities/conversation.jpg",

  main_activityheading_audio: "../audios/under.mp3",

  activitysubheading: "",

  activityicon: "../images/icons/key_icon.png",

  image: "../images/pages/activities/22-2-img.png",

  imageposition: "back",

  numbering: "alphabet",

  numberstartfrom: "a",

  options: [],

  optionsAudios: [],
  secondTitleTextLeft:
    "<span class='title-order'>2</span> <b><i>Say it!</i></b>",

  secondTitleTextRight: "Practise the above conversation with your friend.",

  secondTitleIcons: [""],

  secondTitleAudio: "../audios/page_33/2_Say_it.mp3",
  questions: [
    {
      singleword: false,

      text: "<span class='green_text'>Yoshi:</span> nice you meet hello, it’s to [_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["Hello, it's nice to meet you."],

      alternateanswer: [
        [
          "Hello, it's nice to meet you",
          "Hello. It's nice to meet you.",
          "Hello. It's nice to meet you",
          "Hello, it is nice to meet you.",
          "Hello, it is nice to meet you",
          "Hello. It is nice to meet you.",
          "Hello. It is nice to meet you",
        ],
      ],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 300,

      type: "text",
    },

    /* سطر ثابت، لا يحتوي input */
    {
      singleword: false,

      text: "<span class='green_text'>Dave:</span> Thank you, it’s nice to be here.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 300,

      type: "text",
    },

    {
      singleword: false,

      text: "<span class='green_text'>Yoshi:</span> and some you would tea like biscuits [_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["Would you like some tea and biscuits?"],

      alternateanswer: [["Would you like some tea and biscuits"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 300,

      type: "text",
    },

    /* سطر ثابت، لا يحتوي input */
    {
      singleword: false,

      text: "<span class='green_text'>Dave:</span> Yes, I would.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 300,

      type: "text",
    },

    {
      singleword: false,

      text: "<span class='green_text'>Yoshi:</span> a you want play do to game [_]",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["Do you want to play a game?"],

      alternateanswer: [["Do you want to play a game"]],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 300,

      type: "text",
    },

    /* سطر ثابت، لا يحتوي input */
    {
      singleword: false,

      text: "<span class='green_text'>Dave:</span> Yes, I do.",

      textaudios: ["../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: [],

      alternateanswer: [],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 300,

      type: "text",
    },
  ],
};
