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
  mainTitleAudio: "../audios/page_90/GRAMMAR.mp3",
  mainTitleIconPos: { right: "80px" },
  subTitleTextLeft: "<span class='title-order'>3</span> Write it!",
  subTitleTextRight:
    "Choose three adverbs of degree from the list above. Use them in sentences.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",
  ontextaudioplay: "",
  onimgaudioplay: "",
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  image: "",
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "[_]",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/in.mp3",
      audioenable: "default", // correct (or) default
      answer: [],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 0,
      type: "text", // text (or) number
    }, {
      singleword: false,
      text: "[_]",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/in.mp3",
      audioenable: "default", // correct (or) default
      answer: [],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 0,
      type: "text", // text (or) number
    },
  ],
  degreeScale: [
    { text: "barely", position: "5%", side: "top" },
    { text: "hardly", position: "13%", side: "bottom" },

    { text: "somewhat", position: "22%", side: "top" },
    { text: "kind of", position: "31%", side: "bottom" },

    { text: "really", position: "41%", side: "top" },
    { text: "a lot", position: "50%", side: "bottom" },

    { text: "very", position: "59%", side: "top" },
    { text: "so", position: "67%", side: "bottom" },

    { text: "completely", position: "77%", side: "top" },
    { text: "extremely", position: "84%", side: "bottom" },

    { text: "totally", position: "91%", side: "bottom" },
    { text: "too", position: "98%", side: "bottom" },
  ],
};
