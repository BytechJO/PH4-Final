var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_52/1.mp3",
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
  mainTitle: "../images/pages/sb-icons/phonics-sent-build.png",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_52/PHONICS_AND_SPELLING.mp3",

  subTitleTextLeft:
    '<span class="blue_text">1</span> <b>Group it!</b> Look at the words in the box. Write them in the correct columns.',

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_52/1_Group_it!_Look_at_the_words_in_the_box_Write_them_in_the_correct_columns.mp3",

  // =====================================================
  // الكلمات الأصلية الموجودة فوق
  // =====================================================

  words: [
    "taste",
    "ice",
    "excite",
    "haste",
    "ride",
    "write",
    "shine",
    "use",
    "hike",
    "slide",
    "skate",
    "edge",
  ],

  // =====================================================
  // الأعمدة
  // الترتيب داخل كل عمود غير مهم
  // =====================================================

  columns: [
    {
      title: "-able",

      answers: ["excitable", "rideable", "writable", "usable"],
    },

    {
      title: "-y",

      answers: ["tasty", "icy", "hasty", "shiny", "edgy"],
    },

    {
      title: "-ing",

      answers: ["hiking", "sliding", "skating"],
    },
  ],

  // =====================================================
  // كل بوكس نفس عدد الـ inputs
  // =====================================================

  inputsPerColumn: 5,

  // =====================================================
  // المثال الموجود بالصورة
  // taste -> tasty
  // =====================================================

  defaultAnswer: {
    enabled: true,
    word: "taste",
    answer: "tasty",
    column: 1,
    input: 0,
  },
};
