var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_33/2.mp3",
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
  mainTitleAudio: "../audios/page_33/CONVERSATION.mp3",
  subTitleTextLeft:
    "<span class='title-order'>2</span> <b><i>Listen to it.</i></b>",

  subTitleTextRight:
    "Now listen to the rest of the conversation. What does Paul want to do?",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_33/2_Listen_to_it.mp3",
  activityheading: "",
  activityheading_audio: "",
  activitysubheading: "",
  activityicon: "",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  // "defaultAnswer": [],
  options: [],
  optionsAudios: [],
  questions: [
    {
      singleword: false,
      text: "[_]",
      textFront: "",
      textaudios: ["../audios/page_9/under.mp3"],
      textEndAudio: "",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["invite Jeff to come over and play video games"],

      alternateanswer: [
        [
          "He wants to invite Jeff to play video games.",
          "He wants to invite Jeff.",
          "Invite Jeff to come over and play video games.",
          "He wants Jeff to come over and play video games.",
        ],
      ],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 50,
      type: "text", // text (or) number
    },
  ],
};
