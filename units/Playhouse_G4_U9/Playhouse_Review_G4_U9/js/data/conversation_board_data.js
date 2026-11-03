var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(38, 184, 86)",
  type: "text",
  playListData: [],
};

var conversation_board_data = {
  layout: 1,

  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "",

  subTitleTextLeft: "",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio: "",

  /* =========================================
     PAGE TITLE
  ========================================= */

  pageTitle: "A Bagful of Animals!",

  /* =========================================
     INTRODUCTION
  ========================================= */

  intro:
    "You can make your own animal puppet with some simple supplies. First, pick which animal you’d like to make. Next, collect the supplies.",

  /* =========================================
     SUPPLIES
  ========================================= */

  supplies: {
    leftTitle: "You need:",

    leftItems: [
      "1 lunch-size paper bag for each animal",
      "felt markers or crayons",
      "glue, scissors and clear tape",
      "coloured paper if available",
    ],

    rightTitle: "Nice to Have:",

    rightItems: [
      "ribbon or yarn",
      "craft eyes or buttons",
      "material such as wool or fake fur",
      "construction paper",
    ],
  },

  /* =========================================
     STEPS
  ========================================= */

  steps: [
    {
      title: "Step One:",
      color: "green",
      text: "Turn the bag so the folded ‘bottom’ is now the top, for the animal head. Pick the colour of paper that your animal is. Cut out the shape of the head and top of the mouth. Glue this onto the part of the bag that folds over. When you put your hand in the bag, it will look like the mouth is ‘talking’.",
    },

    {
      title: "Step Two:",
      color: "red",
      text: "With a marker, coloured paper or extra supplies, add eyes, ears, spots, stripes, fur or scales. This will add nice detail to your animal. Ribbon or yarn can be used for a tail. Be creative!",
    },

    {
      title: "Step Three:",
      color: "green",
      text: "Once the glue is dry, put your arm inside the opening of the paper bag. Your hand should be in the folded part to make the mouth move.",
    },

    {
      title: "Step Four:",
      color: "red",
      text: "Get your friends or family together for a puppet show!",
    },
  ],
  /* =========================================
     IMAGES
  ========================================= */

  images: {
    girl: "../images/pages/activities/0.png",

    frogTop: "../images/pages/activities/1.png",

    animalsLeft: "../images/pages/activities/2.png",

    animalsCenter: "../images/pages/activities/3.png",

    animalsRight: "../images/pages/activities/4.png",
  },

  /* =========================================
     CAPTIONS
  ========================================= */

  captions: {
    left: "Legs and arms can be added too.",

    right: "Coloured paper bags add a nice touch!",
  },
};
