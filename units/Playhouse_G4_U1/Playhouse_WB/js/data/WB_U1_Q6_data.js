//textFront means content before text box, textBack means content after text box.--->Li:14,15
//27-06-2020

var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_6/2.mp3",
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
  layout: 3,
  numinrow: [[1], [1], [1], [1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",

  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },

  mainTitleAudio: "../audios/page_6/GRAMMAR.mp3",
  subTitleTextLeft:
    "<span class='title-order'>2</span> <b> Write about it! </b>Write sentences using  <span class='black_text'>‘was‘</span> and <span class='black_text'>‘were‘</span> correctly.",
  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_6/2_Write_about_it!_Write_sentences_using_‘was‘_and_‘were‘_correctly.mp3",

  image: "../images/pages/activities/ASP_3_SB_U14_P84_I1.png",
  main_activityheading: "../images/pages/activities/GRAMMAR.jpg",
  main_activityheading_audio: "../audios/page_6/GRAMMAR.mp3",
  imageposition: "back", // "front" (or) "back"
  numbering: "alphabet", // "alphabet" (or) "number"
  numberstartfrom: "a",
  options: [],
  questions: [
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> You </span> ) </span> &nbsp; 1 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I1.png",
      answer: ["I want to go after school"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> We </span> ) </span> &nbsp; 2 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I2.png",
      answer: ["in"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 300,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> They </span> ) </span> &nbsp; 3 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I3.png",
      answer: ["under"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 600,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> He </span> ) </span> &nbsp; 4 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I4.png",
      answer: ["behind"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 700,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> I </span> ) </span> &nbsp; 5 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I4.png",
      answer: ["behind"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 700,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> she </span> ) </span> &nbsp; 6 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I4.png",
      answer: ["behind"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 700,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> You </span> ) </span> &nbsp; 7 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I4.png",
      answer: ["behind"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 700,
      type: "text", // text (or) number
    },
    {
      text: "<span class='word-width'>( <span style='color: rgb(0, 185, 242);'> It </span> )</span> &nbsp; 8 &nbsp; [_]",
      audio: "",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/AGW_U15_P147_I4.png",
      answer: ["behind"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 700,
      type: "text", // text (or) number
    },
  ],
};

// WB6: freely compose sentences using was/were
fillin_data.manualReview = true;
fillin_data.questions.forEach(q => { q.answer = []; });
