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
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/page_134/GRAMMAR.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Add it in!",
  subTitleTextRight:
    "Read the statement. Then, add a <span class='red_text'>question tag </span> to make it into a question.",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  ontextaudioplay: "",
  onimgaudioplay: "",
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  image: "../images/pages/activities/3-img-1.png",
  imagePostion: "back",
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "The suspect isn't in jail now, [_]?",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/in.mp3",
      audioenable: "default",

      answer: ["is he"],

      alternateanswer: [],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "My cats ate all the food, [_]?",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/in.mp3",
      audioenable: "default",

      answer: ["didn't they"],

      alternateanswer: [["didnt they"], ["didn’t they"], ["did they not"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "You are tired, [_]?",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/in.mp3",
      audioenable: "default",

      answer: ["aren't you"],

      alternateanswer: [["arent you"], ["aren’t you"], ["are you not"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "She won’t be late, [_]?",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/in.mp3",
      audioenable: "default",

      answer: ["will she"],

      alternateanswer: [["will she not"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },
  ],
};
