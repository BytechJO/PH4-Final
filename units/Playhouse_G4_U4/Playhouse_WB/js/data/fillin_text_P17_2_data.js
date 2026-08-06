var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_21/2.mp3",
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
  layout: 1,

  /*
      هذا النشاط يحتوي على 3 مجموعات.
      كل مجموعة فيها سؤال وجواب.
    */
  numinrow: [[1], [1], [1]],

  /*
      يجعل الفاليديشن الخاص يعمل لهذا النشاط فقط.
    */
  validationMode: "linked_polite_requests",

  mainTitle: "../images/pages/sb-icons/grammer_main_title.png",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_21/GRAMMAR.mp3",

  subTitleTextLeft:
    "<span class='blue_text'>2</span> Finish it! Fill in the blanks.",

  subTitleTextRight: "",

  subTitleIcons: [],

  subTitleAudio: "../audios/page_21/2_Finish_it!_Fill_in_the_blanks.mp3",

  activityheading:
    "Practise it! Complete the conversation using the Word Power words",

  activityheading_audio: "../audios/page_21/under.mp3",

  main_activityheading: "../images/pages/activities/conversation.jpg",

  main_activityheading_audio: "../audios/page_21/under.mp3",

  activitysubheading: "",

  activityicon: "../images/icons/key_icon.png",

  image: "",

  imageposition: "back",

  numbering: "number",

  numberstartfrom: 1,

  options: [],

  optionsAudios: [],

  /*
      كل عنصر هنا عبارة عن مجموعة كاملة:
      question = السؤال
      response = الجواب
    */
  linkedQuestions: [
    {
      pairType: "positive",

      question: {
        text: "[_] to visit my cousin?",

        textaudios: [
          "../audios/page_21/under.mp3",
          "../audios/page_21/under.mp3",
        ],

        maxlength: 200,

        type: "text",
      },

      response: {
        text: "Yes, [_]",

        textaudios: [
          "../audios/page_21/under.mp3",
          "../audios/page_21/under.mp3",
        ],

        maxlength: 200,

        type: "text",
      },
    },

    {
      pairType: "negative",

      question: {
        text: "[_] something to eat?",

        textaudios: [
          "../audios/page_21/under.mp3",
          "../audios/page_21/under.mp3",
        ],

        maxlength: 200,

        type: "text",
      },

      response: {
        text: "No, [_]",

        textaudios: [
          "../audios/page_21/under.mp3",
          "../audios/page_21/under.mp3",
        ],

        maxlength: 200,

        type: "text",
      },
    },

    {
      pairType: "positive",

      question: {
        text: "[_] to see a film?",

        textaudios: [
          "../audios/page_21/under.mp3",
          "../audios/page_21/under.mp3",
        ],

        maxlength: 200,

        type: "text",
      },

      response: {
        text: "Yes, [_]",

        textaudios: [
          "../audios/page_21/under.mp3",
          "../audios/page_21/under.mp3",
        ],

        maxlength: 200,

        type: "text",
      },
    },
  ],

  /*
      نترك questions موجودة حتى لا تتعطل الملفات العامة
      التي تتوقع وجودها.
    */
  questions: [],
};
