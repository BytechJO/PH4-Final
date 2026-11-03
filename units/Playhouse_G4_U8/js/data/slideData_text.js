var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "slider",
  sliderTimes: [
    [0, 45],
    [45, 90],
  ],
  playListData: [
    {
      audiourl: "../audios/page_71/1.mp3",
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
  mainTitleAudio: "../audios/page_71/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read the story below.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/qa_instructions/p072_q1.mp3",
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
      title: "<span class='darkBlue_text'>The Leopard and the Hyena</span>",

      array_text: [
        /* =========================
     Slide 1
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text'>" +
          "<p>Once upon a time there was a lonely leopard cub. He lost his family during a huge storm. He spent so much of his time looking for a friend, but most of the animals were afraid of him. One day, the leopard cub found a hyena cub that had lost its family too. Quickly, the two became friends. The leopard taught the hyena how to hunt and shared his food. They two cubs together for many weeks. </p>" +
          "<p>One day, the hyena cub saw his mother and other hyenas near a lake, and ran to her. The leopard followed his friend, but the other hyenas were afraid of him.</p>" +
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
          "<p>The hyena’s family growled and chased the leopard away. The leopard walked away sadly. However, every morning the hyena would find the leopard and spend the day playing with him. One day, the hyena’s family saw him playing with the leopard and understood that the leopard was not going to hurt them. They all became good friends and leopard as never lonely again!" +
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
  mainTitleAudio: "../audios/page_71/under.mp3",
  subTitleTextLeft: "",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_71/under.mp3",
  subTitleAudio: "../audios/page_71/under.mp3",
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
