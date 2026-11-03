var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "slider",
  playListData: [
    {
      audiourl: "../audios/page_128/1.mp3",
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
  mainTitleIcon: "../images/pages/sb-icons/phonics_3_icon.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_128/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read about how some animals change.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/qa_instructions/p128_q1.mp3",
  numberofcolumns: 1,
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      listen: {
        audio: [
          "../audios/page_128/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_128/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_128/Pg4_1.4_Adult Lady.mp3",
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
          "<p>Some animals change alot as they grow older. The caterpillar is a good example of a living thing that goes through a big change during its life. First, it starts as an egg. Second, the egg hatches, and a caterpillar crawls out. Third, after the caterpillar eats for several days, it makes a cocoon or chrysalis around itself. Finally, inside the cocoon, the caterpillar changes into a butterfly, and then breaks out of the cocoon! This amazing change is called metamorphosis.</p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/activities/4-img-1.png' " +
          "class='inner_img pulse' alt='The Nile River'>" +
          "</div>" +
          "</div>",

        /* =========================
     Slide 2
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text read2'>" +
          "<p>Frogs, toads, newts, eels and salmons also undergo metamorphosis. The babies live like fish in the water, and then as they grow into adults, they develop legs to be able to move on land.</p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/activities/4-img-2.png' " +
          "class='inner_img pulse' alt='The Nile River'>" +
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
  mainTitleAudio: "../audios/page_128/under.mp3",
  subTitleTextLeft: "",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_128/under.mp3",
  subTitleAudio: "../audios/page_128/under.mp3",
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
