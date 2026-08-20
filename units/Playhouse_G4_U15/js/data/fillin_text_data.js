var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_133/2.mp3",
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
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "100px" },
  mainTitleAudio: "../audios/page_133/CONVERSATION.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> Keep it going!",
  subTitleTextRight:
    "Now listen to the rest of the conversation. Fill in the blanks about the next mystery.",
  subTitleIcons: [],
  subTitleAudio: "../audios/page_133/2_Keep_it_going!.mp3",
  ontextaudioplay: "",
  onimgaudioplay: "",
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  image: "../images/pages/activities/2-img-1.png",
  imagePostion: "back",
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "[_] had a mystery last week.",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/page_133/in.mp3",
      audioenable: "default",

      answer: ["Bruce"],
      alternateanswer: [["Bruce"]],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "Bruce and [_] investigated to find his sister.",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/page_133/in.mp3",
      audioenable: "default",

      answer: ["his parents"],
      alternateanswer: [
        ["his family"],
        ["his mom and dad"],
        ["his mother and father"],
        ["his parents"],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "[_] searched for suspects in the parking lot.",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/page_133/in.mp3",
      audioenable: "default",

      answer: ["They"],
      alternateanswer: [
        ["Bruce and his parents"],
        ["Bruce and his family"],
        ["Bruce's family"],
        ["They"],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },

    {
      singleword: false,
      text: "The clue Bruce had was [_]",
      textaudios: [],
      image: "",
      option: "",
      audio: "../audios/page_133/in.mp3",
      audioenable: "default",

      answer: ["her voice"],
      alternateanswer: [
        ["Jenny's voice"],
        ["his sister's voice"],
        ["hearing her voice"],
        ["the sound of her voice"],
        ["her calling them"],
        ["Jenny calling them"],
        ["his sister calling them"],
      ],

      strictcase: "no",
      strictorder: "yes",
      maxlength: 500,
      type: "text",
    },
  ],
};
