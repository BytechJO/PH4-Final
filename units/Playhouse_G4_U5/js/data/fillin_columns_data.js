var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
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
  mainTitle: "../images/pages/sb-icons/gram_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_42/GRAMMAR.mp3",
  mainTitleIconPos: { right: "90px" },
  subTitleTextLeft: '<span class="title-order">2</span> Write about it',
  subTitleTextRight:
    "Look at the pictures and write a ‘<span class='red_text'>how</span>’ question. You can use the adjectives in the box",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  defaultAnswer: 1,
  leftList: "",
  image: "",
  options: ["big", "long", "deep", "<del>hot</del>"],
  optionsAudios: [],
  questions: [
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-1.png",
      answer: ["How hot is the soup?"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-2.png",
      answer: ["How deep is it?"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
    {
      textfront: "",
      audio: "../audios/under.mp3",
      audioenable: "default", // correct (or) default
      image: "../images/pages/activities/3-img-3.png",
      answer: ["How big is it?"],
      strictcase: "no", // yes (or) no
      type: "text", // text (or) number
    },
  ],
};
