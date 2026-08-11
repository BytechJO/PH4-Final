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
  numinrow: [[1, 1, 1]],
  mainTitle: "../images/pages/sb-icons/phonics_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_72/PHONICS_AND_SPELLING.mp3",
  subTitleTextLeft: '<span class="title-order">3</span> You do it!',
  subTitleTextRight:
    "Change the sentences from singular to plural and say the new sentence.",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  defaultAnswer: -1,
  leftList: "",
  image: "",
  questions: [
    {
      textfront: "There is a leaf on the ground.",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/8-img-1.png",
      answer: ["There are leaves on the ground"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "One thief robbed the bank.",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/8-img-2.png",
      answer: ["Two thieves robbed the bank"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "The wife is happy.",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/8-img-3.png",
      answer: ["The wives are happy"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
