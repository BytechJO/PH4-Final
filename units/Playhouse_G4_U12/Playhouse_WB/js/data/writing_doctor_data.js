var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(53, 130, 180)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_63/1.mp3",
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

var writing_doctor_data = {
  mainTitle: "../images/pages/sb-icons/WRITING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "60px" },
  mainTitleAudio: "../audios/page_63/WRITING.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>1</span>  You be the doctor! With the ideas below, be the doctor and give your patient a treatment plan. Use ‘<span class='black_text'>can</span>’ and ‘<span class='black_text'>should</span>’",

  subTitleTextRight: "",

  subTitleAudio: "../audios/page_63/1_You_be_the_doctor!_With_the_ideas_below_be_the_doctor_and_give_your_patient_a_treatment_plan.mp3",

  columns: [
    {
      title: "What is wrong",

      type: "input",

      beforeText: "You have",

      placeholderText: "(name the injury or illness)",

      afterText: "It isn’t serious.",
    },

    {
      title: "What can be done or<br>what should be done",

      type: "text",

      lines: [
        "I’ll write a prescription.",
        "Take this medicine.",
        "I’ll put a cast on.",
        "Follow this diet.",
      ],
    },

    {
      title: "Recovery time",

      type: "recovery",

      lines: [
        {
          before: "You can go home",

          label: "(when)",
        },

        {
          before: "You should be able to",

          middle: "by",

          firstLabel: "(activity)",

          secondLabel: "(day)",
        },
      ],
    },
  ],
};
