var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_50/2.mp3",
    },
    { url: "" },
    { url: "" },
    { url: "" },
  ],
};

var reading_data = {
  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_50/CONVERSATION.mp3",

  subTitleTextLeft:
    "<span class='title-order'>2</span> Change it! Have a conversation like the one above, but about each of the following sports. Next to each picture are some words that you can use when talking about that sport.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_50/2_Change_it!_Have_a_conversation_like_the_one_above_but_about_each_of_the_following_sports.mp3",

  slides: [
    {
      layout: "sports_words",

      parent_class_name: "sports_words_page",

      sports: [
        {
          title: "Basketball",

          image: "../images/pages/activities/basketball.png",

          words: ["shoot a basket", "dribble (bounce)", "guard", "free throw"],

          audio: [
            "../audios/under.mp3",
            "../audios/under.mp3",
            "../audios/under.mp3",
            "../audios/under.mp3",
          ],
        },

        {
          title: "Football",

          image: "../images/pages/activities/football.png",

          words: ["goalkeeper/goal", "pass", "forward", "headshot"],

          audio: [
            "../audios/under.mp3",
            "../audios/under.mp3",
            "../audios/under.mp3",
            "../audios/under.mp3",
          ],
        },
      ],
    },
  ],
};
