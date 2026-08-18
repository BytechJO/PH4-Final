var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",
  playListData: [
    {
      audiourl: "../audios/page_60/2.mp3",
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
var circle_and_answer_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "../images/pages/sb-icons/CONVERSATION.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_60/CONVERSATION.mp3",
  subTitleTextLeft:
    '<span class="blue_text">2</span> Answer it! Circle all the Word Power words in the conversation. Next, answer the questions about the conversation.',
  subTitleTextRight: "",
  subTitleIcons: [],
  subTitleAudio:
    "../audios/page_60/2_Answer_it!_Circle_all_the_Word_Power_words_in_the_conversation_Next_answer_the_questions.mp3",

  // =====================================================
  // HOSPITAL IMAGE
  // =====================================================
  questionsImage: "../images/pages/activities/0.png",
  // =====================================================
  // CONVERSATION
  // only Word Power words are circleable
  // =====================================================

  conversation: [
    // =====================================================
    // LINE 1
    // =====================================================
    {
      speaker: "First Visitor:",

      parts: [
        {
          text: "Surprise! We came to see you and help you feel better.",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 2
    // =====================================================
    {
      speaker: "Patient:",
      parts: [
        {
          text: "Just what I need! It gets kind of boring being in bed all day.",
          circle: false,
        },
      ],
    },
    // =====================================================
    // LINE 3
    // =====================================================
    {
      speaker: "Second Visitor:",

      parts: [
        {
          text: "Will you be able to go home soon?",
          circle: false,
        },
      ],
    },
    // =====================================================
    // LINE 4
    // treatment / cast / recover
    // =====================================================
    {
      speaker: "Patient:",

      parts: [
        {
          text: "Well, the doctor's ",
          circle: false,
        },
        {
          text: "treatment",
          circle: true,
          correct: true,
        },
        {
          text: " plan is for me to get a ",
          circle: false,
        },
        {
          text: "cast",
          circle: true,
          correct: true,
        },
        {
          text: " on my arm and then ",
          circle: false,
        },
        {
          text: "recover",
          circle: true,
          correct: true,
        },
        {
          text: " at home, so I think I might be able to go home tomorrow.",
          circle: false,
        },
      ],
    },
    // =====================================================
    // LINE 5
    // medicine / injury
    // =====================================================
    {
      speaker: "Third Visitor:",

      parts: [
        {
          text: "That's great! Do you have to take ",
          circle: false,
        },
        {
          text: "medicine",
          circle: true,
          correct: true,
        },
        {
          text: " for your ",
          circle: false,
        },
        {
          text: "injury",
          circle: true,
          correct: true,
        },
        {
          text: "?",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 6
    // medicine / diet
    // =====================================================

    {
      speaker: "Patient:",
      parts: [
        {
          text: "The doctor said I should take ",
          circle: false,
        },
        {
          text: "medicine",
          circle: true,
          correct: true,
        },
        {
          text: " for pain for a day or two, but after that I only need to take vitamins and eat a healthy ",
          circle: false,
        },
        {
          text: "diet",
          circle: true,
          correct: true,
        },
        {
          text: ".",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 7
    // ill
    // =====================================================
    {
      speaker: "Fourth Visitor:",
      parts: [
        {
          text: "Those are good things to do even if you're not ",
          circle: false,
        },
        {
          text: "ill",
          circle: true,
          correct: true,
        },
        {
          text: "! It sounds like you have a good doctor.",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 8
    // get well card
    // =====================================================
    {
      speaker: "First Visitor:",

      parts: [
        {
          text: "By the way, here's a ",
          circle: false,
        },
        {
          text: "get well card",
          circle: true,
          correct: true,
        },
        {
          text: " we made for you.",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 9
    // =====================================================

    {
      speaker: "Patient:",
      parts: [
        {
          text: "How nice! Thank you. I like to read cards while I'm lying here in bed.",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 10
    // =====================================================

    {
      speaker: "Second Visitor:",
      parts: [
        {
          text: "Should we leave? Can we get you anything? Are we making you tired?",
          circle: false,
        },
      ],
    },

    // =====================================================
    // LINE 11
    // medicine
    // =====================================================
    {
      speaker: "Patient:",

      parts: [
        {
          text: "No, don't leave. I love having you here. The doctor is good, but sometimes friends and family are the best ",
          circle: false,
        },
        {
          text: "medicine",
          circle: true,
          correct: true,
        },
        {
          text: "!",
          circle: false,
        },
      ],
    },
  ],
  // =====================================================
  // QUESTIONS
  // =====================================================
  questions: [
    // =====================================================
    // QUESTION 1
    // INLINE INPUT
    // =====================================================
    {
      number: 1,
      text: "Is the patient happy to have visitors?",
      inputPosition: "inline",
      validationType: "answers",
      maxlength: 180,
      answers: [
        "yes",
        "yes he is",
        "yes she is",
        "yes the patient is",
        "yes he is happy",
        "yes she is happy",
        "yes the patient is happy",
        "yes because he is happy to have visitors",
        "yes because she is happy to have visitors",
        "yes because the patient is happy to have visitors",
        "yes because he likes having them there",
        "yes because she likes having them there",
        "yes because the patient likes having them there",
        "yes because he loves having them there",
        "yes because she loves having them there",
        "yes because the patient loves having them there",
        "yes because he loves having you here",
        "yes because she loves having you here",
        "yes because the patient says i love having you here",
      ],
    },
    // =====================================================
    // QUESTION 2
    // INLINE INPUT
    // =====================================================
    {
      number: 2,
      text: "In the conversation, how many friends visit the patient?",
      inputPosition: "inline",
      validationType: "answers",
      maxlength: 100,
      answers: [
        "4",
        "four",
        "4 friends",
        "four friends",
        "there are 4 friends",
        "there are four friends",
        "four friends visit the patient",
        "4 friends visit the patient",
      ],
    },
    // =====================================================
    // QUESTION 3
    // INPUT UNDER QUESTION
    // =====================================================
    {
      number: 3,
      text: "What are two things the doctor tells the patient to do to get better?",
      inputPosition: "under",
      validationType: "answers",
      maxlength: 250,
      answers: [
        "take vitamins and eat a healthy diet",
        "eat a healthy diet and take vitamins",
        "take vitamins and eat healthy",
        "eat healthy and take vitamins",
        "take vitamins and have a healthy diet",
        "have a healthy diet and take vitamins",
        "vitamins and a healthy diet",
        "vitamins and healthy diet",
        "take vitamins eat a healthy diet",
        "eat a healthy diet take vitamins",
        "take vitamins, eat a healthy diet",
        "eat a healthy diet, take vitamins",
        "he should take vitamins and eat a healthy diet",
        "she should take vitamins and eat a healthy diet",
        "the patient should take vitamins and eat a healthy diet",
      ],
    },
    // =====================================================
    // QUESTION 4
    // INPUT UNDER QUESTION
    // =====================================================
    {
      number: 4,
      text: "Does the patient have to take medicine for a day or two or for a week?",
      inputPosition: "under",
      validationType: "answers",
      maxlength: 180,
      answers: [
        "a day or two",
        "day or two",
        "for a day or two",
        "one or two days",
        "for one or two days",
        "1 or 2 days",
        "for 1 or 2 days",
        "1 2 days",
        "two days",
        "for two days",
        "the patient has to take medicine for a day or two",
        "he has to take medicine for a day or two",
        "she has to take medicine for a day or two",
      ],
    },
    // =====================================================
    // QUESTION 5
    // INPUT UNDER QUESTION
    // =====================================================
    {
      number: 5,
      text: "What did the visitors bring with them?",
      inputPosition: "under",
      validationType: "answers",
      maxlength: 180,
      answers: [
        "a get well card",
        "get well card",
        "a get-well card",
        "get-well card",
        "a card",
        "card",
        "they brought a get well card",
        "they brought a get-well card",
        "they brought a card",
        "the visitors brought a get well card",
        "the visitors brought a card",
      ],
    },
    // =====================================================
    // QUESTION 6
    // INPUT UNDER QUESTION
    // =====================================================
    {
      number: 6,
      text: "What kind of injury does the patient probably have?",
      inputPosition: "under",
      validationType: "answers",
      maxlength: 200,
      answers: [
        "an arm injury",
        "arm injury",
        "an injured arm",
        "injured arm",
        "a broken arm",
        "broken arm",
        "a hurt arm",
        "hurt arm",
        "he has an arm injury",
        "she has an arm injury",
        "the patient has an arm injury",
        "he probably has an arm injury",
        "she probably has an arm injury",
        "the patient probably has an arm injury",
        "he probably has a broken arm",
        "she probably has a broken arm",
        "the patient probably has a broken arm",
      ],
    },
    // =====================================================
    // QUESTION 7
    // OPEN ANSWER
    // ANY NON-EMPTY ANSWER = CORRECT
    // =====================================================
    {
      number: 7,
      text: "Do you think this is the first visit the friends have made? How can you tell?",
      inputPosition: "under",
      validationType: "none",
      maxlength: 350,
      answers: [],
    },
  ],
};
