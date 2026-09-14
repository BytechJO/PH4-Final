var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_37/2.mp3",
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
  numinrow: [[1]],

  mainTitle: "../images/pages/sb-icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_main_title_icon.png",
  mainTitleAudio: "../audios/page_37/PHONICS_AND_SPELLING.mp3",
  mainTitleIconPos: { right: "90px" },
  subTitleTextLeft: "<span class='title-order'>2</span>  Listen to it.",
  subTitleTextRight:
    "Listen to the poem. Complete the poem with the words you hear.",
  subTitleIcons: [],
  parentClassName: "poem_fillin_group",
  subTitleAudio: "../audios/page_37/2_Listen_to_it.mp3",

  image: "no",
  imageposition: "back",

  numbering: "none",
  numberstartfrom: 1,

  options_images: [],

  poemImage: "../images/pages/activities/p37_1.png",

  verbPairs: [
    ["slide", "sliding"],
    ["take", "taking"],
    ["have", "having"],
    ["hike", "hiking"],
    ["bike", "biking"],
    ["make", "making"],
  ],

  questions: [
    {
      singleword: false,

      poemLines: [
        {
          text: "To the park we went riding,",
        },
        {
          textBefore: "and next we were ",
          input: true,
        },
        {
          text: "We were playing and running so fast.",
        },
        {
          text: "Soon my friends were hiking,",
        },
        {
          textBefore: "and to my house I was ",
          input: true,
        },
        {
          text: "so quickly, since dinner was past!",
        },
      ],

      textaudios: ["", "", "", "", "", ""],
      audio: "",
      audioenable: "default",

      image: "",

      answer: ["sliding", "biking"],

      alternateanswer: [[], []],

      strictcase: "no",
      strictorder: "yes",

      maxlength: 10,
      type: "text",
    },
  ],
};
