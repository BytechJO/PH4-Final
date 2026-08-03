var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(45 190 240)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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

var colour_picture_write_sentence_data = {
  activityName: "colour_picture_write_sentence",

  layout: 1,

  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",

  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },

  mainTitleAudio: "../audios/page_5/CONVERSATION.mp3",

  subTitleAudio:
    "../audios/page_5/2_Draw_it!_Draw_two_things_that_the_children_above_were_doing_last_summer_Label_what_they_did.mp3",

  subTitleTextLeft:
    "<span class='blue_text activity_number'>2</span> " +
    "<b>Draw it!</b> " +
    "<span class='draw_instruction'>" +
    "Draw two things that the children above were doing last summer. " +
    "Label what they did." +
    "</span>",

  subTitleTextRight: "",

  subTitleIcons: [],

  title_position: "under",

  numberOfBoxes: 1,

  showToolbar: true,

  showSentenceInput: false,

  colours: [
    "#ef5350",
    "#42a5f5",
    "#66bb6a",
    "#ffca28",
    "#ab47bc",
    "#ff8a65",
    "#8d6e63",
    "#000000",
  ],

  defaultColour: "#000000",

  defaultBrushSize: 8,
};
