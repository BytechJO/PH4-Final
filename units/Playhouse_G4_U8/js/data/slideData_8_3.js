var stereo_data = {
  audio: "",
  exist: false,
  bgColor_rgb: "rgb(12, 177, 75)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/demoo.mp3",
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
  mainTitleAudio: "../audios/page_71/READING.mp3",
  mainTitleIconPos: { right: "90px" },
  subTitleTextLeft: "<span class='title-order'>2</span> You do it!",
  subTitleTextRight: "Answer the questions on another piece of paper.",
  subTitleIcons: [],
  subTitleAudio: "../audios/under.mp3",
  slides: [
    {
      layout: "grid_columns",

      grid_main_title: ["../images/pages/sb-icons/word_main_title.png"],
      parent_class_name: "grid_without_background_image_3 ",
      grid_main_title_text: "",
      grid_main_title_text_audio: "../audios/under.mp3",
      group_styles: "",
      audio: [
        "../audios/Pg6_2.1_Stella.mp3",
        "../audios/dough.mp3",
        "../audios/sauce.mp3",
        "../audios/sprinkle.mp3",
        "../audios/cheese.mp3",
        "../audios/add.mp3",
        "../audios/pepperoni.mp3",
        "../audios/slice.mp3",
      ],
      word: [
        "<div class='reading_question'>" +
          "<div class='question_text'><b>1</b> &nbsp; Why did the hyena cub’s family chase the leopard away?</div>" +
          "<input type='text' class='reading_answer'>" +
          "</div>",

        "<div class='reading_question'>" +
          "<div class='question_text'><b>2</b> &nbsp; How did the hyena help his family become friends with the leopard?</div>" +
          "<input type='text' class='reading_answer'>" +
          "</div>",
      ],
      imagePlacePos: [
        { colWidth: [12], colData: [1] },
        { colWidth: [12], colData: [1] },
      ],
    },
  ],
};
