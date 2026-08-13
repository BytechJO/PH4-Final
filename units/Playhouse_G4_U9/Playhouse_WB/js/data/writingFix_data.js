var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_48/1.mp3",
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
var writing_fix_data = {
  layout: 1,

  // =========================================================
  // TITLE
  // =========================================================

  mainTitle: "../images/pages/sb-icons/WRITING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },

  mainTitleAudio: "../audios/page_48/WRITING.mp3",

  subTitleTextLeft:
    '<span class="blue_text">1</span> Fix it! Part of good writing is being able to write sentences with correct punctuation, ' +
    "capitalisation and spelling. To practise, read the story below and correct the six punctuation " +
    "and capitalisation mistakes and the three spelling mistakes. Then answer Miriam‘s question " +
    "below in a letter to her.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_48/1_Fix_it!_Part_of_good_writing_is_being_able_to_write_sentences_with_correct_punctuation.mp3",

  // =========================================================
  // PARAGRAPH
  // ONLY 6 EDITABLE MISTAKES
  // punctuation + capitalisation
  // =========================================================

  paragraphParts: [
    {
      type: "text",
      text:
        "Hi, my name is Miriam, and I’m from Morocco. We have shoping malls in my country, " +
        "but the way most people shop is in open-air markets or in small stores along the street. ",
    },

    // =======================================================
    // 1 - CAPITALISATION
    // most -> Most
    // =======================================================

    {
      type: "correction",
      inputType: "word",
      initial: "most",
      answer: "Most",
      extraWidth: -1,
    },

    {
      type: "text",
      text: " people can walk to the stores from their home, so they will shop several times a week. ",
    },

    // =======================================================
    // 2 - CAPITALISATION
    // that -> That
    // =======================================================

    {
      type: "correction",
      inputType: "word",
      initial: "that",
      answer: "That",
      extraWidth: -1.5,
    },

    {
      type: "text",
      text:
        " way they are only geting a few bags of things to carry home, and they don’t have to have " +
        "a large space to store the food. Often the store owners are yelling out the sale prices as we walk by",
    },

    // =======================================================
    // 3 - PUNCTUATION
    // missing .
    // =======================================================

    {
      type: "correction",
      inputType: "punctuation",
      initial: "",
      answer: ".",
      maxlength: 1,
      extraWidth: 0,
    },

    {
      type: "text",
      text: " I like going shopping with my dad. ",
    },

    // =======================================================
    // 4 - CAPITALISATION
    // sometimes -> Sometimes
    // =======================================================

    {
      type: "correction",
      inputType: "word",
      initial: "sometimes",
      answer: "Sometimes",
      extraWidth: -2.1,
    },

    {
      type: "text",
      text: " he lets me pick out some candy for myself and my brothers and sisters. ",
    },

    // =======================================================
    // 5 - CAPITALISATION
    // then -> Then
    // =======================================================

    {
      type: "correction",
      inputType: "word",
      initial: "then",
      answer: "Then",
      extraWidth: -1.2,
    },

    {
      type: "text",
      text: " we surprise them when we get home! What is shoping like in your country",
    },

    // =======================================================
    // 6 - PUNCTUATION
    // missing ?
    // =======================================================

    {
      type: "correction",
      inputType: "punctuation",
      initial: "",
      answer: "?",
      maxlength: 1,
      extraWidth: 0,
    },
  ],

  // =========================================================
  // SPELLING WORDS
  // ONLY THESE 3 INPUTS ARE FOR SPELLING
  // =========================================================

  spellingTitle: "Spelling words:",

  spellingWords: [
    {
      answer: "shopping",
    },

    {
      answer: "getting",
    },

    {
      answer: "shopping",
    },
  ],

  // =========================================================
  // FREE WRITING
  // =========================================================

  writingLines: 10,

  writingPlaceholder: "",

  bagImage: "../images/pages/activities/0.png",
};
