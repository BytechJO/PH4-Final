var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_12/2.mp3",
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

var wordpuzzle_data = {
  layout: 1,
  numinrow: [[1, 1, 1, 1]],
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_12/PHONICS_AND_SPELLING.mp3",
  subTitleTextLeft:
    "<span class='title-order'>1</span> Play it! <span class='green_text'>Write the past tense or short ‘<span class='red'>ea</span>’ word.</span>",
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/page_12/2_Solve_it!_Complete_the_crossword_puzzle_by_matching_the_‘ea‘_words_with_the_correct_clues.mp3",
  options: [
    "head",
    "ate",
    "spread",
    "saw",
    "drank",
    "went",
  ],

  optionsAudios: [
    "",
    "",
    "",
    "",
    "",
    "",
  ],

  questions: [
    {
      rows: 7,
      columns: 7,

      horizontalwords: [
        {
          row: 1,
          column: 2,
          wordnum: 1,
          word: "head",
        },
        {
          row: 3,
          column: 1,
          wordnum: 3,
          word: "spread",
        },
        {
          row: 6,
          column: 4,
          wordnum: 5,
          word: "went",
        },
      ],

      verticalwords: [
        {
          row: 1,
          column: 4,
          wordnum: 2,
          word: "ate",
        },
        {
          row: 3,
          column: 1,
          wordnum: 3,
          word: "saw",
        },
        {
          row: 3,
          column: 6,
          wordnum: 4,
          word: "drank",
        },
      ],

      clues: {
        across: [
          {
            wordnum: 1,
            text: "<b>1</b> the top part of your body",
            image: "no",
            audio: "no",
            audioenable: "default",
          },
          {
            wordnum: 3,
            text: "<b>3</b> a bird did this with its wings",
            image: "no",
            audio: "no",
            audioenable: "default",
          },
          {
            wordnum: 5,
            text: "<b>5</b> go yesterday",
            image: "no",
            audio: "no",
            audioenable: "default",
          },
        ],

        down: [
          {
            wordnum: 2,
            text: "<b>2</b> eat last night",
            image: "no",
            audio: "no",
            audioenable: "default",
          },
          {
            wordnum: 3,
            text: "<b>3</b> see last week",
            image: "no",
            audio: "no",
            audioenable: "default",
          },
          {
            wordnum: 4,
            text: "<b>4</b> drink yesterday",
            image: "no",
            audio: "no",
            audioenable: "default",
          },
        ],
      },
    },
  ],
};