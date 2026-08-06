var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  playListData: [
    {
      audiourl: "../audios/demoo.mp3",
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
var mcq_tick_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_44/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>2</span> You’re the teacher!",
  subTitleTextRight:
    "For each of the test questions below, did the student answer correctly? If the answer is correct, put <span class='red_text'>✓</span>. ",
  subTitleIcons: [""],
  subTitleAudio: "../audios/under.mp3",
  select: "multiple", // single (or) multiple
  shape: "tickbox", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) tickbox
  bgcolor: "none",
  showicon: "true",
  questions: [
    {
      question: "",
      answer: [2],
      image: "../images/pages/activities/p15_1_1.png",
      audio: "no",
      audioenable: "default", // correct (or) default
      numbering: "none", // alphabet (or) number (or) none
      numberstartfrom: "a",
      options: [
        {
          text: "<span class='red_text'>Q:</span> How deep is the Nile? &nbsp; <span class='blue_text'>A:</span> It is 384 km deep",
          image: "no",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<span class='red_text'>Q:</span> How long is the Nile? &nbsp; <span class='blue_text'>A:</span> It is 6,670 km long.",
          image: "no",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<span class='red_text'>Q:</span> How wide is the Nile? &nbsp; <span class='blue_text'>A:</span> IIt is eight kilometers wide in some places.",
          image: "no",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
