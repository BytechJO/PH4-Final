var fillin_data = {
  layout: 1,
  numinrow: [[1], [1], [1], [1], [1]],
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>1</span> Figure it out! <span class='green'>Read the birthday riddle below. Today is the 19th of July. Can you figure out when Jane’s birthday is?</span>",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",
  image: "../images/pages/activities/uu141.png",
  imageposition: "front", // "front" (or) "back"
  defaultAnswer: 1,
  numbering: "none", // "alphabet" (or) "number"
  numberstartfrom: 1,
  options: [],
  optionsAudios: ["", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  questions: [
    {
      singleword: false,

      text: "1 Jane’s birthday will be on [_]. (write the month and number)",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["July 20th"],

      alternateanswer: [
        [
          "July 20",
          "20th July",
          "20 July",
          "July twentieth",
          "the twentieth of July",
          "twentieth of July",
          "July the twentieth",
          "twentieth",
        ],
      ],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },

    {
      singleword: false,

      text: "2 In the riddle, will Jane eat the cake immediately? [_].",

      textaudios: ["../audios/under.mp3", "../audios/under.mp3"],

      audio: "",

      audioenable: "default",

      image: "",

      answer: ["No"],

      alternateanswer: [
        [
          "No she won't",
          "No she will not",
          "She won't",
          "She will not",
          "No she won’t",
          "She won’t",
        ],
      ],

      strictcase: "no",

      strictorder: "yes",

      maxlength: 200,

      type: "text",
    },
  ],
};
