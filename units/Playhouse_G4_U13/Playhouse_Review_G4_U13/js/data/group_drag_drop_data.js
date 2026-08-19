var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [],
};

var group_drag_drop_data = {
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>3</span>  Group it! <span class='green'>Put the words in the correct category.</span>",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",

  // =====================================================
  // WORD BANK
  // =====================================================

  words: [
    {
      id: "know",
      text: "know",
      group: "actions",
      defaultPlaced: true,
    },

    {
      id: "knowledge",
      text: "knowledge",
      group: "things",
      defaultPlaced: true,
    },

    {
      id: "knot",
      text: "knot",
      group: "things",
      defaultPlaced: false,
    },

    {
      id: "knee",
      text: "knee",
      group: "things",
      defaultPlaced: false,
    },

    {
      id: "knock",
      text: "knock",
      group: "actions",
      defaultPlaced: false,
    },

    {
      id: "knit",
      text: "knit",
      group: "actions",
      defaultPlaced: false,
    },

    {
      id: "knuckle",
      text: "knuckle",
      group: "things",
      defaultPlaced: false,
    },

    {
      id: "kneel",
      text: "kneel",
      group: "actions",
      defaultPlaced: false,
    },

    {
      id: "knight",
      text: "knight",
      group: "things",
      defaultPlaced: false,
    },
  ],

  // =====================================================
  // GROUPS
  // =====================================================

  groups: [
    {
      id: "things",
      title: "Things and Ideas",
    },

    {
      id: "actions",
      title: "What We Do or Think",
    },
  ],
};
