var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/demo.mp3",
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

var fillin_data = {
  layout: 4,

  numinrow: [[1, 1]],

  mainTitle: "../images/pages/sb-icons/WRITING.jpg",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_58/WRITING.mp3",

  // =========================================================
  // INTRO
  // =========================================================

  intro: {
    text: "On your marks, get set, go! The way a story starts is very important because it is the first part that can either get a reader interested or make them decide to stop reading.",

    audio:
      "../audios/page_58/On_your_marks_get_set_go!_The_way_a_story_starts_is_very_important_because_it_is_the_first_part.mp3",
  },

  // =========================================================
  // QUESTION 1
  // =========================================================

  firstSection: {
    number: "",

    title:
      "1 Get started! Read the three sentences that could be the starting sentence for another adventure of Peter Rabbit. Circle the one you think would get the reader the most interested.",

    titleAudio:
      "../audios/page_58/1_Get_started!_Read_the_three_sentences_that_could_be_the_starting_sentence_for_another.mp3",

    instruction: "",

    instructionAudio: "../audios/get_started_instruction.mp3",

    sentences: [
      {
        text: "Mr. McGregor went to water his garden the next day.",

        audio: "../audios/sentence_1.mp3",
      },

      {
        text: "The next day Peter wanted to go into Mr. McGregor's garden again.",

        audio: "../audios/sentence_2.mp3",
      },

      {
        text: "Peter Rabbit woke up and ate breakfast.",

        audio: "../audios/sentence_3.mp3",
      },
    ],
  },

  // =========================================================
  // QUESTION 2
  // =========================================================

  secondSection: {
    number: "",

    title:
      "2 Now go! Use the sentence that you circled to begin writing a story about Peter Rabbit's next adventure.",

    titleAudio:
      "../audios/page_58/2_Now_go!_Use_the_sentence_that_you_circled_to_begin_writing_a_story_about_Peter_Rabbit‘s_next.mp3",

    instruction: "",

    instructionAudio: "../audios/now_go_instruction.mp3",
  },

  background_image: "../images/pages/activities/BOOKS.jpg",
};
