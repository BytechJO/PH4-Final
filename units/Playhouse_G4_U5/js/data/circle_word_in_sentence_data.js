var stereo_data = {
  "audio":"",
  "exist":true,
  "bgColor_rgb":"rgb(12, 177, 75)",
  "playListData" : [
      {
        'audiourl': '../audios/page_43/1.mp3',
      },
      {
        'url': '',
      },
      {
        'url': '',
      },
      {
        'url': '',
      }
  ],
}

var mcq_data = {
  layout: 1,

  // عمودان، وفي كل عمود سؤالان
  numinrow: [
    [1, 1],
    [1, 1],
  ],

  mainTitle: "../images/pages/sb-icons/gramprac_main_title.png",
  mainTitleIcon: "../images/pages/sb-icons/gram_main_title_icon.png",
  mainTitleIconPos: { right: "50px" },
  mainTitleAudio: "../audios/page_43/GRAMMAR_PRACTICE.mp3",

  subTitleTextLeft: "<span class='title-order'>1</span> Read.",
  subTitleTextRight:
    "Read the paragraphs in the box. Choose the correct adjectives. Match the pictures to the paragraphs.",

  subTitleIcons: [],
  subTitleAudio:
    "../audios/page_56/1_Finish_it!_Write_the_correct_pronoun_in_the_blank.mp3",

  activityicon: "../images/icons/hand_icon.png",

  select: "single",
  shape: "roundrect",
  bgcolor: "none",

  // لا توجد أرقام ظاهرة في التصميم
  numbering: "none",
  numberstartfrom: 1,

  // مهم
  numberofcolumns: 2,

  image: "no",
  imageposition: "back",

  questions: [
    {
      question:
        "My dad works at my school. I always feel tiny next to my dad. He is a big, tall man, so I feel safe with him. How ([_]) is he? He says he is more than two metres tall!",
      options: [["tall", "long"]],
      answer: [1],
      inputbox: "no",
      image: "",
      audio: "",
      audioenable: "correct",
    },
    {
      question:
        "How ([_]) is it in the Arctic? The temperature changes a lot between winter and summer, but most of the year it is below freezing. In the winter it can get down to -40°C.",
      options: [["cold", "tall"]],
      answer: [1],
      inputbox: "no",
      image: "",
      audio: "",
      audioenable: "correct",
    },
    {
      question:
        "How ([_]) can a scuba diver go? Without special equipment, they can go about 40–50 metres deep, but they usually go in waters more shallow.",
      options: [["old", "deep"]],
      answer: [2],
      inputbox: "no",
      image: "",
      audio: "",
      audioenable: "correct",
    },
    {
      question:
        "How ([_]) did it rain yesterday? The news said we got seven centimetres of rain in just one day. There were shallow puddles of water on the pavement, so my little brother was having fun sailing his toy boat in the puddles. I had fun splashing in the water.",
      options: [["far", "much"]],
      answer: [2],
      inputbox: "no",
      image: "",
      audio: "",
      audioenable: "correct",
    },
  ],
};
