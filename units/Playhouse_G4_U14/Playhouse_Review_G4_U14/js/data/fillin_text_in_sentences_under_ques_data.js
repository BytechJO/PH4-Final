var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/under.mp3",
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
  // =====================================================
  // HEADER
  // =====================================================
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/under.mp3",
  subTitleTextLeft:
    "<span class='green_text'>1</span> Tell about it! <span class='green'> What do you plan to do this week? Using the word ‘<span class='red'>will</span>’, tell about two activities you are going to do. Then use the word ‘<span class='red'>won</span>’t’ to name two things you aren’t going to do.</span>",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",

  // =====================================================
  // SECTIONS
  // =====================================================

  sections: [
    // =================================================
    // POSITIVE
    // =================================================

    {
      title: "Positive",

      exampleLabel: "Example:",

      example: "I will practise football after school.",

      questions: [
        {
          number: "1",
          maxlength: 200,
        },

        {
          number: "2",
          maxlength: 200,
        },
      ],
    },

    // =================================================
    // NEGATIVE
    // =================================================

    {
      title: "Negative",

      exampleLabel: "",

      example: "I won’t forget to do my homework.",

      questions: [
        {
          number: "1",
          maxlength: 200,
        },

        {
          number: "2",
          maxlength: 200,
        },
      ],
    },
  ],
};
