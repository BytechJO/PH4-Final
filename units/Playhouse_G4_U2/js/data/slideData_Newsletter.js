var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(12, 177, 75)",
  playListData: [
    {
      audiourl: "../audios/page_19/PLAYHOUSE_4_SCHOOLBOOK_UNIT_02_TRACK_09_01.mp3",
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
  mainTitle: "",
  mainTitleIcon: "",
  mainTitleIconPos: {
    right: "100px",
  },
  mainTitleAudio: "../audios/under.mp3",

  subTitleTextLeft: "PLAYHOUSE NEWSLETTER",
  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "../audios/qa_instructions/p019_q1.mp3",

  slides: [
    {
      parent_class_name: "",

      mainImage: "../images/pages/news-letter/1-news-title.png",
      questionImage: "../images/pages/news-letter/1-conv-img.png",
      starImage: "../images/pages/news-letter/2-img-2-title.PNG",
      convImage: "../images/pages/news-letter/3-img-title.png",

      /*
       * الصوت الذي يعمل تلقائياً عند فتح كل بوب أب.
       */

      // Letter from the Editor
      titleAudio: "../audios/page_19/Letter_from_the_Editor.mp3",

      // Star Student
      starTitleAudio: "../audios/page_19/Star_Student.mp3",

      // ضعي مسار صوت What are they saying? هنا
      conversationTitleAudio: "",

      // ضعي مسار صوت البوب أب الرابع هنا
      questionTitleAudio: "",

      // =========================================================
      // 1 - Letter from the Editor
      // =========================================================

      listen: {
        text: [
          "Welcome to the first edition of the PLAYHOUSE NEWSLETTER!<br>" +
            "This is a first of its kind newsletter, serving the neighbourhood " +
            "of Waritsat and Waritsat School. We hope to provide you with " +
            "quality information and educational activities. Each edition of " +
            "our paper this year will include an article about a student at " +
            "Waritsat School, a conversation game and any breaking news.<br>" +
            "Happy reading!",
        ],

        audio: ["../audios/Pg4_1.2_Adult_Lady.mp3"],

        titlesAudio: [""],

        titleTexts: [""],

        top_image: ["../images/pages/news-letter/1-news-title.png"],

        second_image: [""],
      },

      // =========================================================
      // 2 - Star Student
      // =========================================================

      listen2: {
        text: [
          "Meet Sam Jackson from Waritsat " +
            "School, who hopes to be an Olympic " +
            "swimmer in six years! Sam swam " +
            "for six hours daily. He did weight " +
            "training and ate healthy food to " +
            "keep up his energy level.<br>" +
            "Sam started swimming when he was six years old. He took lessons " +
            "at the local swimming pool. He loved swimming, so his parents got " +
            "a swimming pool for the family.<br>" +
            "In the training lessons at the swimming pool Sam learnt all the " +
            "different swimming strokes. Now, Sam practises six days a week " +
            "at the swimming pool with a special coach. He works on his times " +
            "for short races and long races, but his strength is in the long races.<br>" +
            "He is careful about his diet and gets plenty of rest to keep healthy. " +
            "He plans to continue his swimming, so he can enter the Olympics " +
            "in six more years. When he does, he plans to invite all the students " +
            "to watch him race!<br>" +
            "We wish you the best in your swimming, Sam!<br>",
        ],

        audio: ["../audios/Pg4_1.2_Adult_Lady.mp3"],

        titlesAudio: ["../audios/page_19/Star_Student.mp3"],

        titleTexts: ["Star Student"],

        top_image: ["../images/pages/news-letter/2-img-title.png"],

        second_image: ["../images/pages/news-letter/2-img.png"],
      },

      // =========================================================
      // 3 - What are they saying?
      // =========================================================

      listen3: {
        text: [
          "Look at the picture.",
          "What do you think they are saying?",
          "With a friend, act out the conversation!",
        ],

        audio: [
          "../audios/Pg4_1.2_Adult_Lady.mp3",
          "../audios/Pg4_1.3_Adult Lady.mp3",
          "../audios/Pg4_1.4_Adult Lady.mp3",
        ],

        titlesAudio: [""],

        titleTexts: [""],

        top_image: ["../images/pages/news-letter/3-img.png"],

        second_image: ["../images/pages/news-letter/3-img-title.png"],
      },

      // =========================================================
      // 4 - Questions
      // =========================================================

      listen4: {
        title: "Can You Unscramble?",

        instruction: "Can you unscramble your Word Power words? There are 10.",

        top_image: [""],

        popupAudio: "",

        questions: [
          {
            singleword: false,
            text: "1. tsa [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["sat"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "2. enwt [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["went"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "3. erda [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["read"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "4. adh [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["had"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "5. rknda [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["drank"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "6. wsa [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["saw"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "7. toko [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["took"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "8. utc [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["cut"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "9. redo [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["rode"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
          {
            singleword: false,
            text: "10. eta [_]",
            textEnd: "",
            textaudios: [],
            audio: "",
            audioenable: "default",
            image: "",
            answer: ["ate"],
            alternateanswer: [[]],
            strictcase: "no",
            strictorder: "yes",
            maxlength: 20,
            type: "text",
          },
        ],
      },
    },
  ],
};
