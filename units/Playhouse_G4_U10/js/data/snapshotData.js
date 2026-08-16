var snapshot_data = {
  snapshot: [
    {
      audio: [
        "../audios/page_88/pizza.mp3",
        "../audios/page_88/dough.mp3",
        "../audios/page_88/sauce.mp3",
        "../audios/page_88/sprinkle.mp3",
        "../audios/page_88/cheese.mp3",
        "../audios/page_88/add.mp3",
        "../audios/page_88/pepperoni.mp3",
        "../audios/page_88/slice.mp3",
      ],
      image: [
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word1.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word2.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word3.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word4.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word5.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word6.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word7.png",
        "../images/pages/snapshots/ARC_2_1_SB_U1_P5_word8.png",
      ],
      word: [
        "<span>pizza</span>",
        "<span>dough</span>",
        "<span>sauce</span>",
        "<span>sprinkle</span>",
        "<span>cheese</span>",
        "<span>add</span>",
        "<span>pepperoni</span>",
        "<span>slice</span>",
      ],
      imagePlacePos: [
        [1, 1, 1],
        [1, 1, 1],
        [1, 0, 1],
      ],
    },
  ],
  popuptitle: "What I Want To Know:",
};

var snapshotPopup_data =
  "<ul><li>What are the people doing?</li><li>Who are the pizzas for?</li><li>What toppings go on a pizza?</li></ul>";

var Popups_data = {
  slides: [
    {
      listen: {
        backgroundImage: "../images/pages/page-1/1-word-background.png",
        mainTitle: "../images/pages/page-1/1-title.png",
        titleTexts: ["<span class='green_text'>2</span>  read."],
        titleIcons: [
          "../images/pages/page-1/q-1-icon-3-new.png",
          "../images/pages/page-1/q-1-icon-1.png",
          "../images/pages/page-1/q-1-icon-3.png",
        ],
        titlesAudio: ["../audios/page_88/2_Read.mp3"],
        image: [
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-1.png",
          "../images/pages/snapshots/page-1/popup-3-elem-2.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
          "../images/pages/snapshots/page-1/popup-3-elem-3.png",
        ],
        words: [
          "<span class='number_bold'>1</span> free time",
          "<span class='number_bold'>2</span> picnic",
          "<span class='number_bold'>3</span> surf the internet",
          "<span class='number_bold'>4</span> play sports",
          "<span class='number_bold'>5</span> volunteer",
          "<span class='number_bold'>6</span> rollerblade",
          "<span class='number_bold'>7</span> karate/taekwondo",
          "<span class='number_bold'>8</span> eat out",
          "<span class='number_bold'>9</span> draw",
          "<span class='number_bold'>10</span> read",
        ],
        audio: [
          "../audios/page_88/1_free_time.mp3",
          "../audios/page_88/2_picnic.mp3",
          "../audios/page_88/3_surf_the_internet.mp3",
          "../audios/page_88/4_play_sports.mp3",
          "../audios/page_88/5_volunteer.mp3",
          "../audios/page_88/6_rollerblade.mp3",
          "../audios/page_88/7_karate_-_taekwondo.mp3",
          "../audios/page_88/8_eat_out.mp3",
          "../audios/page_88/9_draw.mp3",
          "../audios/page_88/10_read.mp3",
        ],
      },
      listen2: {
        // "leftImage": "../images/pages/snapshots/page-2/popup-2-left-img.png",
        mainTitle: "../images/pages/page-1/1-title.png",
        titleTexts: ["<span class='green_text'>3</span> Say it."],
        titleIcons: ["../images/pages/page-1/q-1-icon-1.png"],
        titleTextRight: "<span class='green_text'>Point and say.</span>",
        titlesAudio: ["../audios/new/sayit.mp3"],
        image: [
          "../images/pages/page-1/2-img-1.png",
          "../images/pages/page-1/2-img-2.png",
        ],
        audio: [
          "../audios/page_88/Pg5_2.2_Adult Lady.mp3",
          "../audios/page_88/Pg5_2.3_Adult Lady.mp3",
        ],
      },
    },
  ],
  class_name: ["", "", "", "", "", "", "", "", "", "", "", ""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  words: [
    "free time",
    "picnic",
    "surf the internet",
    "play sports",
    "volunteer",
    "rollerblade",
    "karate/taekwondo",
    "eat out",
    "draw",
    "read",
  ],
  points: [
    "../images/pages/page-1/intro-1.png",
    "../images/pages/page-1/intro-2.png",
    "../images/pages/page-1/intro-3.png",
    "../images/pages/page-1/intro-4.png",
    "../images/pages/page-1/intro-5.png",
    "../images/pages/page-1/intro-6.png",
    "../images/pages/page-1/intro-7.png",
    "../images/pages/page-1/intro-8.png",
    "../images/pages/page-1/intro-9.png",
    "../images/pages/page-1/intro-10.png",
    // "../images/pages/page-1/intro-11.png",
    // "../images/pages/page-1/intro-12.png",
  ],
  popupDirections: [
    "bottom", // 1
    "bottom", // 2
    "bottom", // 3
    "bottom", // 4
    "bottom", // 5
    "bottom", // 6
    "bottom", // 7
    "bottom", // 8
    "top", // 9
    "top", // 10
  ],
  postions: [
    "left:46%; top:36.13%;",
    "left:67.17%; top:45.13%;",
    "left:36.50%; top:55.00%;",
    "left:52.50%; top:61.63%;",
    "left:56.50%; top:55.75%;",
    "left:25.33%; top:64.13%;",
    "left:32.00%; top:70.50%;",
    "left:56.50%; top:70.63%;",
    "left:36.67%; top:87.75%;",
    "left:53.08%; top:89.13%;",
  ],
  imagesAudio: [
    "../audios/page_88/1_free_time.mp3",
    "../audios/page_88/2_picnic.mp3",
    "../audios/page_88/3_surf_the_internet.mp3",
    "../audios/page_88/4_play_sports.mp3",
    "../audios/page_88/5_volunteer.mp3",
    "../audios/page_88/6_rollerblade.mp3",
    "../audios/page_88/7_karate_-_taekwondo.mp3",
    "../audios/page_88/8_eat_out.mp3",
    "../audios/page_88/9_draw.mp3",
    "../audios/page_88/10_read.mp3",
  ],
};
