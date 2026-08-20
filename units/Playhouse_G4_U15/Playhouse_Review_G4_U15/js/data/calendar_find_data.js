var stereo_data = {
  audio: "",

  exist: false,

  bgColor_rgb: "rgb(12, 177, 75)",

  type: "text",

  playListData: [],
};

var calendar_find_data = {
  // =====================================================
  // HEADER
  // =====================================================

  mainTitle: "Riddles and Puzzles",
  mainTitleIcon: "",
  mainTitleIconPos: {
    right: "0px",
  },

  subTitleTextLeft:
    "<span class='green_text'>2</span> Find it! <span class='green'>The calendar below has seven mistakes in all. Can you find them?</span>",

  subTitleTextRight: "",
  subTitleIcons: [""],
  subTitleAudio: "",
  // =====================================================
  // YEAR
  // =====================================================

  year: 2022,

  // =====================================================
  // DAYS
  // =====================================================

  dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  // =====================================================
  // MONTHS
  // =====================================================

  months: [
    // =================================================
    // JANUARY
    // February / January swap = ONE mistake
    // groupId = monthSwap1
    // =================================================

    {
      realMonth: 0,

      displayName: "February",

      nameMistake: true,

      groupId: "monthSwap1",
    },

    // =================================================
    // FEBRUARY
    // same mistake group
    // =================================================

    {
      realMonth: 1,

      displayName: "January",

      nameMistake: true,

      groupId: "monthSwap1",
    },

    // =================================================
    // MARCH
    // =================================================

    {
      realMonth: 2,

      displayName: "Marrc",

      nameMistake: true,

      groupId: "marchSpelling",
    },

    // =================================================
    // APRIL
    // =================================================

    {
      realMonth: 3,

      displayName: "April",

      nameMistake: false,
    },

    // =================================================
    // MAY
    // =================================================

    {
      realMonth: 4,

      displayName: "May",

      nameMistake: false,
    },

    // =================================================
    // JUNE
    // July / June swap = ONE mistake
    // =================================================

    {
      realMonth: 5,

      displayName: "July",

      nameMistake: true,

      groupId: "monthSwap2",
    },

    // =================================================
    // JULY
    // same mistake group
    // =================================================

    {
      realMonth: 6,

      displayName: "June",

      nameMistake: true,

      groupId: "monthSwap2",
    },

    // =================================================
    // AUGUST
    // =================================================

    {
      realMonth: 7,

      displayName: "August",

      nameMistake: false,
    },

    // =================================================
    // SEPTEMBER
    // =================================================

    {
      realMonth: 8,

      displayName: "Septomber",

      nameMistake: true,

      groupId: "septemberSpelling",
    },

    // =================================================
    // OCTOBER
    // Wednesday header is wrong
    // =================================================

    {
      realMonth: 9,

      displayName: "October",

      nameMistake: false,

      wrongWeekDay: {
        index: 3,
        display: "Wd",
        correct: "Wed",
        groupId: "octoberWednesday",
      },
    },

    // =================================================
    // NOVEMBER
    // 30 missing
    // =================================================

    {
      realMonth: 10,

      displayName: "November",

      nameMistake: false,

      missingDay: 30,

      missingDayGroupId: "november30",
    },

    // =================================================
    // DECEMBER
    // Month title missing
    // =================================================

    {
      realMonth: 11,

      displayName: "",

      nameMistake: true,

      groupId: "decemberMissing",
    },
  ],

  // =====================================================
  // TOTAL UNIQUE MISTAKES
  // =====================================================

  mistakeGroups: [
    "monthSwap1",

    "marchSpelling",

    "monthSwap2",

    "septemberSpelling",

    "octoberWednesday",

    "november30",

    "decemberMissing",
  ],
};
