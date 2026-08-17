var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_56/2.mp3",
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
var pronounwrite_data = {
  layout: 1,

  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_56/GRAMMAR.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>2</span> Find it! Find the subject and object pronouns in the sentences, and put them in the correct box. Some will be written more than once.",

  subTitleTextRight: "",

  subTitleIcons: [],
  subTitleAudio:
    "../audios/page_56/2_Find_it!_Find_the_subject_and_object_pronouns_in_the_sentences_and_put_them_in_the_correct_box.mp3",

  sentences: [
    "Do you see them at school every day?",
    "She likes to help us garden.",
    "I will plant some tomatoes for them.",
    "You weigh the same as her and me.",
    "Did he build a fence with you and her?",
    "We will buy soil from him.",
  ],

  boxes: [
    {
      title: "Subject Pronouns (6)",
      type: "subject",
      inputs: 6,
      answers: ["you", "she", "i", "you", "he", "we"],
    },

    {
      title: "Object Pronouns (8)",
      type: "object",
      inputs: 8,
      answers: ["them", "us", "them", "her", "me", "you", "her", "him"],
    },
  ],
};
