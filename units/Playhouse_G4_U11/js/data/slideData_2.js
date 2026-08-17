var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_97/3.mp3",
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

var reading_data = {
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_97/CONVERSATION.mp3",
  subTitleTextLeft: "<span class='title-order'>3</span> <b>Write about it!</b>",

  subTitleTextRight:
    "Look at the food words on page 96. Have you ever seen them? Have you ever eaten them?<br>" +
    "Complete the chart. Add your own to the list. Share it with the class.",

  subTitleIcons: [""],

  subTitleAudio: "",

  slides: [
    {
      layout: "food_chart",

      parent_class_name: "food_chart_activity",

      tables: [
        {
          headers: ["Food", "Seen It", "Eaten It"],

          rows: 3,
        },

        {
          headers: ["Food", "Seen It", "Eaten It"],

          rows: 3,
        },
      ],
    },
  ],
};
