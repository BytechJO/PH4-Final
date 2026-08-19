var stereo_data = {
  audio: "",

  exist: true,

  bgColor_rgb: "rgb(53, 130, 180)",

  type: "text",

  playListData: [
    {
      audiourl: "../audios/page_69/1.mp3",
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

var dynamic_calendar_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "../images/pages/sb-icons/word_main_title.png",

  mainTitleIcon: "",

  mainTitleIconPos: {
    right: "-18px",
  },

  mainTitleAudio: "../audios/page_69/WORD_POWER.mp3",

  subTitleTextLeft: "<span class='dc_title_number'>1</span> <b>Show it!</b>",

  subTitleTextRight:
    "Look at the calendar. Find today. Then follow the directions.",

  subTitleIcons: [],

  subTitleAudio:
    "../audios/page_69/1_Show_it!_Look_at_the_make-believe_calendar_Find_today_Then_follow_the_directions.mp3",

  // =====================================================
  // DAYS
  // =====================================================

  dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  // =====================================================
  // MONTHS
  // =====================================================

  monthNames: [
    "January",

    "February",

    "March",

    "April",

    "May",

    "June",

    "July",

    "August",

    "September",

    "October",

    "November",

    "December",
  ],

  // =====================================================
  // COLORS
  // =====================================================

  colorTools: [
    {
      id: "today",

      label: "Today",

      color: "green",

      hex: "#54b948",

      target: "day",
    },

    {
      id: "dayAfterTomorrow",

      label: "Day after tomorrow",

      color: "blue",

      hex: "#3f8ee8",

      target: "day",
    },

    {
      id: "nextWeek",

      label: "Next week",

      color: "yellow",

      hex: "#f4dc35",

      target: "day",
    },

    {
      id: "nextMonth",

      label: "Next month",

      color: "orange",

      hex: "#f39b33",

      target: "month",
    },

    {
      id: "spring",

      label: "Spring months",

      color: "pink",

      hex: "#f39ac1",

      target: "month",
    },

    {
      id: "summer",

      label: "Summer months",

      color: "red",

      hex: "#e95b5b",

      target: "month",
    },

    {
      id: "autumn",

      label: "Autumn months",

      color: "brown",

      hex: "#a86c46",

      target: "month",
    },

    {
      id: "winter",

      label: "Winter months",

      color: "grey",

      hex: "#9ca3a9",

      target: "month",
    },

    {
      id: "regular",

      label: "Regularly",

      color: "purple",

      hex: "#9457bd",

      target: "day",
    },
  ],

  // =====================================================
  // INSTRUCTIONS
  // =====================================================

  instructions: [
    {
      toolId: "today",

      text: "Colour <b>today</b> green.",
    },

    {
      toolId: "dayAfterTomorrow",

      text: "Colour the <b>day after tomorrow</b> blue.",
    },

    {
      toolId: "nextWeek",

      text: "Find <b>next week</b> and colour it yellow.",
    },

    {
      toolId: "nextMonth",

      text: "Colour <b>next month</b> orange.",
    },

    {
      toolId: "spring",

      text: "Colour the <b>spring</b> months pink.",
    },

    {
      toolId: "summer",

      text: "Colour the <b>summer</b> months red.",
    },

    {
      toolId: "autumn",

      text: "Colour the <b>autumn</b> months brown.",
    },

    {
      toolId: "winter",

      text: "Colour the <b>winter</b> months grey.",
    },

    {
      toolId: "regular",

      text: "Colour a day you do something <b>regularly</b> purple.",
    },
  ],
};
