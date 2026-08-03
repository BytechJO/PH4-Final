var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/under.mp3",
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

var coloring_data = {
  layout: 1,

  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "82px" },
  mainTitleAudio: "../audios/page_14/GRAMMAR.mp3",

  subTitleTextLeft: '<span class="title-order">2</span> <b>Colour it.</b>',

  subTitleTextRight: "Colour to match each verb to its past tense.",

  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  palette: [
    {
      id: "red",
      value: "#ef3b2d",
    },
    {
      id: "purple",
      value: "#9b7ac4",
    },
    {
      id: "green",
      value: "#b9d977",
    },
    {
      id: "blue",
      value: "#59bddd",
    },
    {
      id: "yellow",
      value: "#f6cf55",
    },
    {
      id: "orange",
      value: "#f39a4a",
    },
  ],

  questions: [
    {
      id: "go",
      text: "go",
      group: "go-went",
      answerColor: "red",
      fixed: true,
    },
    {
      id: "sit",
      text: "sit",
      group: "sit-sat",
      answerColor: "purple",
      fixed: true,
    },
    {
      id: "see",
      text: "see",
      group: "see-saw",
      answerColor: "green",
      fixed: true,
    },
    {
      id: "eat",
      text: "eat",
      group: "eat-ate",
      answerColor: "blue",
      fixed: true,
    },

    {
      id: "saw",
      text: "saw",
      group: "see-saw",
      answerColor: "green",
      fixed: false,
    },
    {
      id: "went",
      text: "went",
      group: "go-went",
      answerColor: "red",
      fixed: false,
    },
    {
      id: "ate",
      text: "ate",
      group: "eat-ate",
      answerColor: "blue",
      fixed: false,
    },
    {
      id: "sat",
      text: "sat",
      group: "sit-sat",
      answerColor: "purple",
      fixed: false,
    },
  ],

  rememberTitle: "Remember",

  rememberHtml:
    '<p><span class="red_text">Simple Past</span> is used for a past action at a specific time, such as ' +
    '<span class="red_text">yesterday</span>, ' +
    '<span class="red_text">at 3:00</span> or ' +
    '<span class="red_text">after dinner</span>.</p>' +
    "<p>" +
    '<span class="red_text">Yesterday</span>, I <u>saw</u> a film.<br>' +
    'They <u>ate</u> dinner <span class="red_text">at 6:00</span>.<br>' +
    '<span class="red_text">After dinner</span>, we <u>went</u> for a walk.' +
    "</p>",
};
