var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_44/1.mp3",
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

var decode_data = {
  layout: 1,

  mainTitle: "../images/pages/sb-icons/word_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/word_main_title_icon.png",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_44/WORD_POWER.mp3",
  subTitleTextLeft:
    '<span class="red_text">1</span> Decode it! The puzzle below gives a message about a shopping spree, but the letters have been changed around. Find the Word Power words in the message and discover what the message says! ',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/page_44/1_Decode_it!_The_puzzle_below_gives_a_message_about_a_shopping_spree_but_the_letters_have_been.mp3",

  // =========================================================
  // CODE TABLE
  // top row
  // =========================================================

  alphabet: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],

  // bottom row
  codeAlphabet: [
    "H",
    "R",
    "S",
    "Y",
    "G",
    "C",
    "O",
    "F",
    "T",
    "P",
    "V",
    "Q",
    "M",
    "U",
    "X",
    "I",
    "J",
    "D",
    "Z",
    "N",
    "B",
    "W",
    "K",
    "E",
    "L",
    "A",
  ],

  // =========================================================
  // MESSAGE
  // =========================================================

  answer:
    "I'LL BUY A SKIRT OF WOOL, SOME DENIM TROUSERS, " +
    "A POLYESTER SUIT, NYLON SOCKS, AND A JACKET WITH BUTTONS.",

  encoded:
    "P'YY UND Z CWPBI GH VGGY, CGMX RXTPM IBGNCXBC, " +
    "Z JGYDXCIXB CNPI, TDYGT CGFWC, ZTR Z QZFWXI VPIA UNIIGTC.",

  /*
    These positions are counted ONLY through letters.
    Spaces and punctuation are NOT counted.

    These are the letters already shown in the original activity.
  */

  givenPositions: [
    0, // I

    5, // Y in BUY

    8, // K in SKIRT
    9, // I in SKIRT

    12, // O in OF

    15, // O in WOOL
    16, // O in WOOL

    19, // O in SOME

    25, // I in DENIM

    29, // O in TROUSERS

    37, // O in POLYESTER

    47, // I in SUIT

    52, // O in NYLON

    55, // O in SOCKS

    63, // J in JACKET

    70, // I in WITH

    77, // O in BUTTONS
  ],

  // =========================================================
  // WORD POWER
  // =========================================================

  wordPowerTitle: "Word Power words for the puzzle:",

  wordPowerWords: [
    "wool",
    "denim",
    "polyester",
    "nylon",
    "socks",
    "suit",
    "buttons",
  ],

  otherWordPowerTitle: "Other Word Power words:",

  otherWordPowerWords: ["cotton", "sleeves", "collar"],
};
