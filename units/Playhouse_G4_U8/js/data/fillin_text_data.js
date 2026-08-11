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
  numinrow: [[1], [1], [1], [1], [1], [1], [1]],
  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleAudio: "../audios/page_63/GRAMMAR_PRACTICE.mp3",
  mainTitleIconPos: { right: "70px" },
  subTitleTextLeft: "<span class='title-order'>1</span> Complete it!",
  subTitleTextRight:
    "Complete the sentences with the correct adverbs of quantity and the words in brackets.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",
  image: "",
  imageposition: "back", // "front" (or) "back"
  numbering: "number", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  referenceContent: {
    parent_class_name: "grid_without_background_image_2",
    word: [
      "<span class='red_text'>Countable Nouns</span> <br> There are <span class='bold_text'>too many</span> ... <br> There should be <span class='bold_text'>fewer</span> ... <br> We need <span class='bold_text'>more</span> ... <br> There aren’t <span class='bold_text'>enough</span> ...",

      "<span class='red_text'>Uncountable Nouns</span> <br> There’s <span class='bold_text'>too much</span> ... <br> There should be <span class='bold_text'>less</span> ... <br> We need <span class='bold_text'>more</span> ... <br> There isn’t <span class='bold_text'>enough</span> ...",
    ],
  },
  questions: [
    {
      singleword: false,
      text: "There are[_]in this tank! (<span class='red'>tadpoles</span>) <span class='red'>[+]</span>",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["too many tadpoles"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "There should be [_] on the streets. (<span class='red'>animals</span>) <span class='red'>[-]</span>",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["fewer animals"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "We need [_]  to help save endangered animals! (<span class='red'>money</span>) <span class='red'>[+]</span>",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["more money"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "There aren’t [_]  to make a football team. (<span class='red'>people</span>) <span class='red'>[-]</span>",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["enough people"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "There isn’t [_] for the cubs. (<span class='red'>food</span>) <span class='red'>[-]</span>",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["enough food"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "There should be [_]  in the classroom. (<span class='red'>noise</span>) <span class='red'>[-]</span>",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["less noise"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
    {
      singleword: false,
      text: "We need  [_] for kids in our city. (<span class='red'>activities</span>) <span class='red'>[+]</span> ",
      textaudios: ["../audios/under.mp3"],
      audio: "",
      audioenable: "default", // correct (or) default
      image: "",
      answer: ["more activities"],
      alternateanswer: [[]],
      strictcase: "no", // yes (or) no
      strictorder: "yes", // yes (or) no
      maxlength: 30,
      type: "text", // text (or) number
    },
  ],
};
