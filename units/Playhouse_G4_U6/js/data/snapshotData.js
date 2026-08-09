var snapshot_data = {
  snapshot: [
    {
      audio: [
        "../audios/page_48/pizza.mp3",
        "../audios/page_48/dough.mp3",
        "../audios/page_48/sauce.mp3",
        "../audios/page_48/sprinkle.mp3",
        "../audios/page_48/cheese.mp3",
        "../audios/page_48/add.mp3",
        "../audios/page_48/pepperoni.mp3",
        "../audios/page_48/slice.mp3",
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
        titleTexts: ["<span class='green_text'>2</span> Read."],
        titleIcons: [
          "../images/pages/page-1/q-1-icon-1.png",
          "../images/pages/page-1/q-1-icon-1.png",
          "../images/pages/page-1/q-1-icon-3.png",
        ],
        titlesAudio: ["../audios/page_48/2_Read.mp3"],
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
          "<span class='number_bold'>1</span> flat",
          "<span class='number_bold'>2</span> suburbs",
          "<span class='number_bold'>3</span> small town",
          "<span class='number_bold'>4</span> high-rise",
          "<span class='number_bold'>5</span> the city",
          "<span class='number_bold'>6</span> city centre",
          "<span class='number_bold'>7</span> village",
          "<span class='number_bold'>8</span> the country",
          "<span class='number_bold'>9</span> barn",
          "<span class='number_bold'>10</span> ranch",
        ],
        audio: [
          "../audios/page_48/1_flat.mp3",
          "../audios/page_48/2_suburbs.mp3",
          "../audios/page_48/3_small_town.mp3",
          "../audios/page_48/4_high-rise.mp3",
          "../audios/page_48/5_the_city.mp3",
          "../audios/page_48/6_city_centre.mp3",
          "../audios/page_48/7_village.mp3",
          "../audios/page_48/8_the_country.mp3",
          "../audios/page_48/9_barn.mp3",
          "../audios/page_48/10_ranch.mp3",
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
          "../audios/page_48/Pg5_2.2_Adult Lady.mp3",
          "../audios/page_48/Pg5_2.3_Adult Lady.mp3",
        ],
      },
    },
  ],
  class_name: ["", "", "", "", "", "", "", "", "", "", "", ""], //flex-row (or) flex-reverse (or) flex-column-reverse for each image-container **optional**
  words: [
    "flat",
    "suburbs",
    "small town",
    "high-rise",
    "the city",
    "city centre",
    "village",
    "the country",
    "barn",
    "ranch",
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
    "bottom", // flat
    "bottom", // suburbs
    "bottom", // small town
    "top", // high-rise
    "top", // the city
    "top", // city centre
    "bottom", // village
    "top", // the country
    "bottom", // barn
    "top", // ranch
  ],
  postions: [
    "left:12.5%; top:9.75%;",
    "left:36.67%; top:14.38%;",
    "left:76.75%; top:17.88%;",
    "left:30.33%; top:75.63%;",
    "left:15.17%; top:75.13%;",
    "left:40.42%; top:84.63%;",
    "left:52.42%; top:61%;",
    "left:48.67%; top:82.25%;",
    "left:60.83%; top:66.13%;",
    "left:62.25%; top:89.75%;",

    // "left:42.33%; top:59.38%;",
    // "left:30.75%; top:71.13%;",
  ],
  imagesAudio: [
    "../audios/page_48/1_flat.mp3",
    "../audios/page_48/2_suburbs.mp3",
    "../audios/page_48/3_small_town.mp3",
    "../audios/page_48/4_high-rise.mp3",
    "../audios/page_48/5_the_city.mp3",
    "../audios/page_48/6_city_centre.mp3",
    "../audios/page_48/7_village.mp3",
    "../audios/page_48/8_the_country.mp3",
    "../audios/page_48/9_barn.mp3",
    "../audios/page_48/10_ranch.mp3",
  ],
};
