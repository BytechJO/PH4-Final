var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_67/1.mp3",
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

var paragraph_circle_write_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "../images/pages/sb-icons/spilling.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_67/PHONICS_AND_SPELLING.mp3",
  subTitleTextLeft:
    "<span class='pcw_title_number'>1</span> Seek it out! Some of the list words are in the paragraph below, but they're mixed in between the words. Can you find them? Circle them and write them below.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_67/1_Seek_it_out!_Some_of_the_list_words_are_in_the_paragraph_below_but_they‘re_mixed_in_between.mp3",
  image: "../images/pages/activities/seek-it-out-girl.png",
  // =====================================================
  // PARAGRAPH
  //
  // hiddenId:
  // نفس hiddenId على أكثر من span = كلمة مخفية واحدة
  // =====================================================

  paragraph: [
    {
      text: "I love to coo",
      hiddenId: "",
    },

    {
      text: "k",
      hiddenId: "knight",
    },

    {
      text: ". ",
      hiddenId: "",
    },

    {
      text: "Night",
      hiddenId: "knight",
    },

    {
      text: "time is usually my favourite time to cook because outside it’s cold and dar",
      hiddenId: "",
    },

    {
      text: "k",
      hiddenId: "knot",
    },

    {
      text: ", ",
      hiddenId: "",
    },

    {
      text: "not",
      hiddenId: "knot",
    },

    {
      text: " like in the kitchen where it’s bright and warm. In the summer I used to cook dinner once a wee",
      hiddenId: "",
    },

    {
      text: "k",
      hiddenId: "know",
    },

    {
      text: ". ",
      hiddenId: "",
    },

    {
      text: "Now",
      hiddenId: "know",
    },

    {
      text: " that winter is here, I cook more often, even though I hurt my ",
      hiddenId: "",
    },

    {
      text: "knee",
      hiddenId: "kneel",
    },

    {
      text: " ",
      hiddenId: "",
    },

    {
      text: "l",
      hiddenId: "kneel",
    },

    {
      text: "ast week. Maybe today I’ll bake some biscuits for everyone.",
      hiddenId: "",
    },
  ],

  // =====================================================
  // VALID ANSWERS
  // =====================================================

  hiddenWords: ["knight", "knot", "know", "kneel"],
  defaultSelectedWords: ["knight"],
  // =====================================================
  // INPUTS
  // =====================================================

  inputCount: 4,

  // first one like screenshot
  defaultAnswers: [
    {
      index: 1,
      value: "knight",
    },
  ],

  // student can write remaining words in any order
  answers: ["knight", "knot", "know", "kneel"],
};
