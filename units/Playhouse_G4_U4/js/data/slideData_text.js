var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "slider",

  sliderTimes: [
    [0, 29],
    [29, 58],
    [58, 90],
  ],

  playListData: [
    {
      audiourl: "../audios/page_36/1.mp3",
    },
  ],
};
var reading_data = {
  mainTitle: "../images/pages/sb-icons/reading.png",
  mainTitleIcon: "../images/pages/sb-icons/adv_icon_1.png",
  mainTitleIconPos: { right: "80px" },
  mainTitleAudio: "../audios/page_36/READING.mp3",
  subTitleTextLeft: "<span class='title-order'>1</span> Read about it!",
  subTitleTextRight: "Read the story below.",
  subTitleIcons: [""],
  subTitleAudio: "../audios/page_36/1_Read_about_it.mp3",
  subTitleIcons: [],
  slides: [
    {
      parent_class_name: "",
      mainImage: "../images/pages/news-letter/2-img-1.png",

      listen: {
        audio: [
          "../audios/page_24/Pg4_1.2_Adult_Lady.mp3",
          "../audios/page_24/Pg4_1.3_Adult Lady.mp3",
          "../audios/page_24/Pg4_1.4_Adult Lady.mp3",
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
      title:
        "<span class='darkBlue_text reading_note'>Realistic fiction is a story that could be real but is not.</span><div class='reading_title'>A Visit to Lilly’s</div>",
      array_text: [
        /* =========================
     Slide 1
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text'>" +
          "<p>‘Jenny, it’s me, Lilly. Are you awake?’</p>" +
          "<p>‘Well, I’m talking to you!’ joked Jenny.</p>" +
          "<p>‘I’m sorry to call so early, but I’m so excited I couldn’t wait. " +
          "My relatives from Egypt will visit me next week. Would you like to meet them, Jenny?’ " +
          "Lilly asked.</p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/page-4/6.jpg' class='inner_img pulse'>" +
          "</div>" +
          "</div>",

        /* =========================
     Slide 2
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text'>" +
          "<p>‘Yes, that would be wonderful! Are they the ones who live close to the Nile River?’</p>" +
          "<p>‘Yes. Do you want to learn more about the Nile River and the pyramids for your history report? " +
          "The Great Pyramid of Giza is the oldest of the Seven Wonders of the Ancient World. " +
          "It was the tallest building in the world for over 3,800 years.’</p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/page-4/7.jpg' class='inner_img pulse'>" +
          "</div>" +
          "</div>",

        /* =========================
     Slide 3
  ========================= */
        "<div class='reading_slide'>" +
          "<div class='reading_text'>" +
          "<p>‘This is taller than any other building. Many think it took 20 years to build. " +
          "It was probably built by Pharaoh Khufu,’ explained Lilly.</p>" +
          "<p>‘Wow! I would like to meet your visitors when they arrive. " +
          "Thank you for telling me the exciting news, Lilly.’</p>" +
          "<p>‘OK, Jenny, I’ll see you at school on Monday.’</p>" +
          "<p>‘Yes, see you then, Lilly. Bye.’</p>" +
          "</div>" +
          "<div class='reading_image'>" +
          "<img src='../images/pages/page-4/8.jpg' class='inner_img pulse'>" +
          "</div>" +
          "</div>",
      ],
    },
    // {
    //     "layout": "writing_tips",

    //     "activityheading": 'Which picture begins with the letter? Write ✓',
    //     "activityheading_audio" : "../audios/page_24/under.mp3",
    //     "main_activityheading":"../images/pages/activities/conversation.jpg",
    //     "main_activityheading_audio" : "../audios/page_24/under.mp3",

    //     "background_image": "../images/pages/page-4/1-background_2.png",
    //     "top_right_image": "../images/pages/page-4/1-img-1.png",
    //     "header": "It’s Carnival Time!",
    //     "inner_image": "../images/pages/snapshots/page-1/writing-tips-image.png",
    //     "paragraph":" Carnivals are not new and they are still popular today. Just recently "+
    //                 "in Berlin, Germany, a group of people decided to have a carnival that would be fun "+
    //                " and help bring more peace to the world. They started the Carnival of Cultures in Berlin."+
    //                 "Berlin was a city of many cultures for many years. One year, some Berliners said it "+
    //                 "was time to celebrate the many cultures in Berlin. Sometimes Berliners fought or argued" +
    //                 "because they lived in different ways. So they decided to"+
    //                " celebrate these differences, not argue about them. They"+
    //                " planned a big party for the city. Each of the different"+
    //                 "cultures did a special show about their culture during a big"+
    //                " parade in the city of Berlin."+
    //                 "The first Carnival of Cultures was in June 1996, but now its held in May. "+
    //                 "More groups became part of the parade. The carnival has taken place with great success" +
    //                 "and popular for tourists as well. It would be exciting if other cities in the "+
    //                 "world started their own Carnival of Cultures.,",
    // },
  ],
};
