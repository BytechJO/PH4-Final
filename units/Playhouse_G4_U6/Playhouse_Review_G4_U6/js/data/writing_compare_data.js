var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(26, 184, 83)",
  type: "text",

  playListData: [
    {
      audiourl: "",
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

var writing_compare_data = {
  layout: 1,

  /* =========================================
     HEADER
  ========================================= */
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>1</span> Write about it! <span class='green'>Use the words in the box to write sentences.</span>",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",

  /* =========================================
     WORD BOX
  ========================================= */

  words: ["the city", "small town", "the country", "village", "flat"],

  /* =========================================
     WRITING BOXES
  ========================================= */

  sections: [
    {
      title: "Used to be",
      placeholder: "",
    },

    {
      title: "Now",
      placeholder: "",
    },
  ],
};
