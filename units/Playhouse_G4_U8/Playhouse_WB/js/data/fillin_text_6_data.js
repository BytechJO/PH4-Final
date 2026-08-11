var stereo_data = {
  audio: "",
  exist: true,
  bgColor_rgb: "rgb(53, 130, 180)",
  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_43/1.mp3",
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

  numinrow: [],

  mainTitle: "../images/pages/sb-icons/WRITING.jpg",
  mainTitleIcon: "",
  mainTitleIconPos: { right: "-18px" },
  mainTitleAudio: "../audios/page_43/WRITING.mp3",

  subTitleTextLeft:
    "<span class='title-order'>1</span> Complete it! Imagine you are the manager of a zoo. Complete the form, giving the workers their directions on how to care for the animals. Each animal will have <span class='black'> too much/many</span> of one thing and <span class='black'>not enough</span> of another. ",

  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio:
    "../audios/page_43/1_Complete_it!_Imagine_you_are_the_manager_of_a_zoo_Complete_the_form_giving_the_workers.mp3",

  numbering: "none",

  options: [],
  optionsAudios: [],

  parentClassName: "writing_group",

  image: "../images/pages/activities/writing.png",

  imageposition: "back",

  text: "",
  textAudio: "",

  questions: [],

  // =====================================================
  // النصوص الثابتة الموجودة فوق الورقة
  // =====================================================

  labels: [
    {
      text: "Hearitiz Zoo",
      className: "zoo_title",
      top: "15.8%",
      left: "0%",
      width: "100%",
    },

    {
      text: "Animal Care Report",
      className: "report_title",
      top: "18.8%",
      left: "0%",
      width: "100%",
    },

    // HEADER

    {
      text: "Date:",
      className: "normal_label",
      top: "23.6%",
      left: "8%",
      width: "8%",
    },

    {
      text: "Completed by:",
      className: "normal_label",
      top: "23.6%",
      left: "61%",
      width: "16%",
    },

    // =====================================================
    // KANGAROO
    // =====================================================

    {
      text: "Kangaroo joeys",
      className: "animal_title",
      top: "28%",
      left: "8%",
      width: "25%",
    },

    {
      text: "problems:",
      className: "field_label",
      top: "31.5%",
      left: "14%",
      width: "14%",
    },

    {
      text: "directions:",
      className: "field_label",
      top: "34%",
      left: "14%",
      width: "14%",
    },

    {
      text: "Give each joey two buckets of water instead of one and feed only one time each day.",
      className: "direction_text kangaroo_direction",
      top: "34%",
      left: "28%",
      width: "61%",
    },

    // =====================================================
    // FAWNS
    // =====================================================

    {
      text: "Fawns",
      className: "animal_title",
      top: "40%",
      left: "8%",
      width: "20%",
    },

    {
      text: "problems:",
      className: "field_label",
      top: "44.5%",
      left: "14%",
      width: "14%",
    },

    {
      text: "directions:",
      className: "field_label",
      top: "47%",
      left: "14%",
      width: "14%",
    },

    {
      text: "Cut down some of the trees and buy two more fawns to add to the area.",
      className: "direction_text",
      top: "47%",
      left: "28%",
      width: "61%",
    },

    // =====================================================
    // CHICKS
    // =====================================================

    {
      text: "Chicks",
      className: "animal_title",
      top: "52%",
      left: "8%",
      width: "20%",
    },

    {
      text: "problems:",
      className: "field_label",
      top: "56.5%",
      left: "14%",
      width: "14%",
    },

    {
      text: "directions:",
      className: "field_label",
      top: "60%",
      left: "14%",
      width: "14%",
    },

    {
      text: "Make the cage one metre taller and find other zoos for two of the chicks.",
      className: "direction_text",
      top: "60%",
      left: "28%",
      width: "61%",
    },

    // =====================================================
    // LAMBS
    // =====================================================

    {
      text: "Lambs",
      className: "animal_title",
      top: "66%",
      left: "8%",
      width: "20%",
    },

    {
      text: "problems:",
      className: "field_label",
      top: "69.5%",
      left: "14%",
      width: "14%",
    },

    {
      text: "directions:",
      className: "field_label",
      top: "72%",
      left: "14%",
      width: "14%",
    },

    {
      text: "Begin cutting the lambs’ wool once a week and give them water two times a day instead of only one time.",
      className: "direction_text",
      top: "72%",
      left: "28%",
      width: "61%",
    },

    // =====================================================
    // FOOTER
    // =====================================================

    {
      text: "If you see any other problems, let me know.<br>Keep taking good care of the animals!",
      className: "footer_message",
      top: "80%",
      left: "54%",
      width: "39%",
    },

    {
      text: "Signed,",
      className: "signed_label",
      top: "87%",
      left: "54%",
      width: "12%",
    },

    {
      text: "Animal Care Manager",
      className: "manager_label",
      top: "90.5%",
      left: "54%",
      width: "30%",
    },
  ],

  // =====================================================
  // حقول الكتابة
  // =====================================================

  fields: [
    // DATE
    {
      id: "date",
      top: "23.2%",
      left: "15%",
      width: "26%",
      maxlength: 30,
    },

    // COMPLETED BY
    {
      id: "completedBy",
      top: "23.2%",
      left: "74%",
      width: "16%",
      maxlength: 30,
    },

    // =====================================================
    // KANGAROO - المثال جاهز
    // =====================================================

    {
      id: "kangaroo1",
      top: "30.8%",
      left: "28%",
      width: "25%",
      value: "not enough water",
      readonly: true,
    },

    {
      id: "kangaroo2",
      top: "30.8%",
      left: "55%",
      width: "25%",
      value: "too much food",
      readonly: true,
    },

    // =====================================================
    // FAWNS
    // =====================================================

    {
      id: "fawns1",
      top: "43.8%",
      left: "28%",
      width: "25%",
      maxlength: 40,
    },

    {
      id: "fawns2",
      top: "43.8%",
      left: "55%",
      width: "25%",
      maxlength: 40,
    },

    // =====================================================
    // CHICKS
    // =====================================================

    {
      id: "chicks1",
      top: "55.8%",
      left: "28%",
      width: "25%",
      maxlength: 40,
    },

    {
      id: "chicks2",
      top: "55.8%",
      left: "55%",
      width: "30%",
      maxlength: 40,
    },

    // =====================================================
    // LAMBS
    // =====================================================

    {
      id: "lambs1",
      top: "68.8%",
      left: "28%",
      width: "25%",
      maxlength: 40,
    },

    {
      id: "lambs2",
      top: "68.8%",
      left: "55%",
      width: "30%",
      maxlength: 40,
    },

    // =====================================================
    // SIGNATURE
    // =====================================================

    {
      id: "signed",
      top: "86.4%",
      left: "60%",
      width: "27%",
      maxlength: 40,
    },
  ],
};
