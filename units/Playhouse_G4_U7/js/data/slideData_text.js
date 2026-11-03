var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "slider",
  playListData: [
    {
      audiourl: "../audios/page_64/1.mp3",
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
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_64/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read about the scene. Answer the question",
  subTitleIcons: [""],
  subTitleAudio: "../audios/qa_instructions/p064_q1.mp3",
  numberofcolumns: 1,
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      listen: {
        audio: [
          "../audios/page_44/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_44/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_44/Pg4_1.4_Adult Lady.mp3",
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
          "<p>I grew up near a mountain. My family’s cabin was near the most beautiful blue lake, that was next to a green meadow. It was covered with flowers in the springtime. I would walk to the meadow and pick some of the purple, pink and yellow flowers. Across from the meadow was the best lake in the world because I could go swimming there in summer and catch some of the most delicious fish any time of the year. </p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/activities/6.png' " +
          "class='inner_img pulse' alt='The Nile River'>" +
          "</div>" +
          "</div>",

        /* =========================
     Slide 2
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text'>" +
          "<p>I loved to hike into the valley, explore and have a picnic there. I could see many animals, enjoy the view and climb trees. The worst part was hiking back up.</p>" +
          "<p>We spent spent several days each year cutting wood from the forest for our wood stove`. Our wood stove kept our house nice and warm all winter. We could even cook on the stove if we wanted to!" +
          "<p>I loved growing up in the mountains. Theywere more beautiful than the city." +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/activities/7.jpg' " +
          "class='inner_img pulse' alt='The Nile Delta'>" +
          "</div>" +
          "</div>",
      ],
    },
  ],
};

// var mcq_data = {
//   layout: 1,
//   numinrow: [[1]],
//   mainTitle: "../images/pages/sb-icons/conv_main_title.png",
//   mainTitleIcon: "../images/pages/sb-icons/conv_main_title_icon.png",
//   mainTitleIconPos: { right: "90px" },
//   mainTitleAudio: "../audios/page_64/under.mp3",
//   subTitleTextLeft: "",
//   subTitleTextRight: "",
//   subTitleIcons: [""],
//   subTitleAudio: "../audios/page_64/under.mp3",
//   subTitleAudio: "../audios/page_64/under.mp3",
//   select: "single", // single (or) multiple
//   shape: "roundrect", // circle (or) roundrect (or) rectangle (or) svg (or) cross (or) checkbox
//   bgcolor: "none",
//   image: "",
//   numbering: "number",
//   numberstartfrom: 1,
//   numberofcolumns: 1,
//   title: "What is the main idea of this text?",
//   questions: [
//     {
//       question: "",
//       image: "",
//       answer: [1],
//       audio: "no",
//       audioenable: "default", // correct (or) default
//       options: [
//         {
//           text: "<b>a</b> &nbsp; Eric’s job as an anchorman",
//           image: "",
//           audio: "no",
//           audioenable: "default", // correct (or) default
//         },
//         {
//           text: "<b>b</b> &nbsp; Eric only works on weekdays.",
//           image: "",
//           audio: "no",
//           audioenable: "default", // correct (or) default
//         },
//         {
//           text: "<b>c</b> &nbsp; All the people who work with Eric.",
//           image: "",
//           audio: "no",
//           audioenable: "default", // correct (or) default
//         },
//       ],
//     },
//   ],
// };
