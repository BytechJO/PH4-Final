//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_6/1.mp3",
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
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",

  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },

  mainTitleAudio: "../audios/page_6/GRAMMAR.mp3",
  subTitleTextLeft:
    "<span class='title-order'>1</span> <b>Finish it!</b> Fill in the blanks using <span class='black_text'>‘was‘</span> or <span class='black_text'>‘were‘</span>.",
  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_6/1_Finish_it!_Fill_in_the_blanks_using_‘was‘_or_‘were‘.mp3",

  image: "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  questions: [
    {
      // "text": "3 &nbsp; Lilly and Jenny [_]  at the swimming pool.",
      textfronttt: "at the beach.",
      textbackkk: "1 &nbsp; Rose ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["was"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: "at the park.",
      textbackkk: "2 Max and Yoshi ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["were"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: " at the swimming pool.",
      textbackkk: "3 Lilly and Jenny ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["were"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: " at home.",
      textbackkk: "4 You ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["were"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: "  on holiday.",
      textbackkk: "5 I ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["was"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: "  out of town last weekend.",
      textbackkk: "6 We ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["were"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: "  at a friend’s house yesterday.",
      textbackkk: "7 They ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["were"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      textfronttt: "  with our family in the evening.",
      textbackkk: "8 We ",
      audio: "../audios/page_6/across_.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["were"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
  ],
};
