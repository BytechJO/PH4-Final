var linedraw_data = {
  layout: 1,

  mainTitle: "",

  mainTitleIcon: "",

  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft:
    "<span class='green_text'>1</span> Match it! <span class='green'>Match the word with the picture.</span>",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "",

  activitysubheading: "",

  activityicon: "",

  // =========================================================
  // CONNECTION SETTINGS
  // =========================================================

  // single = كل node توصيلة واحدة فقط
  // multiple = أكثر من توصيلة
  connect: "single",

  // لون الخط
  linecolor: "#20a94b",

  // line = مستقيم
  // curve = منحني
  path: "curve",

  // vertical مناسب للصور فوق والكلمات تحت
  // horizontal مناسب لو كانوا يمين / يسار
  curveDirection: "vertical",

  // مقدار الانحناء
  curveAmount: 40,

  // solid / dashed / dotted
  lineStyle: "solid",

  // سماكة الخط
  strokewidth: "3",

  // لون النود الطبيعي
  nodecolor: "rgb(81, 245, 108)",

  // لون النود وقت الاختيار
  nodeselectioncolor: "rgb(11, 197, 58)",

  // تأثير الصوت على النص
  ontextaudioplay: "",

  // تأثير الصوت على الصورة
  onimgaudioplay: "",

  // =========================================================
  // QUESTIONS
  // =========================================================

  questions: {
    // =======================================================
    // WORDS
    // =======================================================

    drags: [
      {
        text: "beetroot",

        image: "no",

        audio: "../audios/under.mp3",

        audioenable: "default",
      },

      {
        text: "fence",

        image: "no",

        audio: "../audios/under.mp3",

        audioenable: "default",
      },

      {
        text: "tomatoes",

        image: "no",

        audio: "../audios/under.mp3",

        audioenable: "default",
      },

      {
        text: "lettuce",

        image: "no",

        audio: "../audios/under.mp3",

        audioenable: "default",
      },

      {
        text: "green beans",

        image: "no",

        audio: "../audios/under.mp3",

        audioenable: "default",
      },
    ],

    // =======================================================
    // IMAGES
    // answer = رقم الكلمة الصحيحة من drags
    // =======================================================

    drops: [
      {
        text: "",
        image: "../images/pages/activities/uu111.png",
        answer: [4],
        audio: "",
        audioenable: "default",
      },
      {
        text: "",
        image: "../images/pages/activities/uu112.png",
        answer: [1],
        audio: "",
        audioenable: "default",
      },
      {
        text: "",
        image: "../images/pages/activities/uu113.png",
        answer: [2],
        audio: "",
        audioenable: "default",
      },
      {
        text: "",
        image: "../images/pages/activities/uu114.png",
        answer: [5],
        audio: "",
        audioenable: "default",
      },
      {
        text: "",
        image: "../images/pages/activities/uu115.png",
        answer: [3],
        audio: "",
        audioenable: "default",
      },
    ],
  },
};
