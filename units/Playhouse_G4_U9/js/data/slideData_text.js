var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "slider",
  sliderTimes: [
    [0, 35],
    [35, 60],
  ],
  playListData: [
    {
      audiourl: "../audios/page_80/1.mp3",
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
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_80/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read the text and chart. ",
  subTitleIcons: [""],
  subTitleAudio: "../audios/qa_instructions/p080_q1.mp3",
  numberofcolumns: 1,
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      listen: {
        audio: [
          "../audios/page_80/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_80/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_80/Pg4_1.4_Adult Lady.mp3",
        ],
        titlesAudio: [""],
        titleTexts: [""],
        top_image: ["../images/pages/news-letter/1-conv-img.png"],
        second_image: [""],
        questions: [
          {
            question: "",
            image: "",
            answer: [1],
            audio: "no",
            audioenable: "default", // correct (or) default
            options: [
              {
                text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
              {
                text: "<b>b</b> &nbsp; Eric only works on weekdays.",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
              {
                text: "<b>c</b> &nbsp; All the people who work with Eric.",
                image: "",
                audio: "no",
                audioenable: "default", // correct (or) default
              },
            ],
          },
        ],
      },
      //////////////////////////////////////////////////////////////////////////////////////////////////////
      title: "",
      array_text: [
        /* =========================
     Slide 1
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text'>" +
          "<p>Shopping has not always been as popular as it is today. People used to make most of what they needed in their homes. They made clothes from wool and cotton. They also grew food and built their furniture and homes from trees or rocks found nearby. </p>" +
          "<p>Today, however, many people buy most of their needs and wants from shops, malls and the internet. In some countries, a huge amount of money is spent on clothes, shoes, furniture and toys.</p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/activities/6-img-1.png' " +
          "class='inner_img pulse' alt='The Nile River'>" +
          "</div>" +
          "</div>",

        /* =========================
     Slide 2
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text read2'>" +
          "<p>In America, Black Friday is the last Friday in November. It is the biggest shopping day of the year. Some shops open at 5:00 am and stay open till midnight. People will sleep in front if a shop to buy things that they need or want at a cheaper price. </p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/activities/6-img-1.png' " +
          "class='inner_img pulse' alt='The Nile Delta'>" +
          "</div>" +
          "</div>",
      ],
    },
  ],
};

var mcq_data = {
  layout: 1,
  numinrow: [[1]],
  mainTitle: "../images/pages/sb-icons/conv_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
  mainTitleIconPos: { right: "90px" },
  mainTitleAudio: "../audios/page_80/under.mp3",
  subTitleTextLeft: "",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_80/under.mp3",
  subTitleAudio: "../audios/page_80/under.mp3",
  select: "single", // single (or) multiple
  shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
  bgcolor: "none",
  image: "",
  numbering: "number",
  numberstartfrom: 1,
  numberofcolumns: 1,
  title: "What is the main idea of this text?",
  questions: [
    {
      question: "",
      image: "",
      answer: [1],
      audio: "no",
      audioenable: "default", // correct (or) default
      options: [
        {
          text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>b</b> &nbsp; Eric only works on weekdays.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
        {
          text: "<b>c</b> &nbsp; All the people who work with Eric.",
          image: "",
          audio: "no",
          audioenable: "default", // correct (or) default
        },
      ],
    },
  ],
};
