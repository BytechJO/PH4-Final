window.ConversationBoard = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    parent_holder: obj[0],
    activity_area: ob[0],
    data_obj: dataObj,
  };

  this.orientationAdjust = "no";

  this.init(this.settings);
};

ConversationBoard.prototype = {
  /* =====================================================
     INIT
  ===================================================== */

  init: function (ob) {
    this.ob = ob;
  },

  /* =====================================================
     INITIAL SETTINGS
  ===================================================== */

  initialSettings: function () {
    this.hideControls();

    initialSettingsDone(1);
  },

  /* =====================================================
     HIDE CONTROLS
  ===================================================== */

  hideControls: function () {
    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    var resetBtn = document.getElementsByClassName("resetBtn")[0];

    if (checkBtn) {
      checkBtn.style.display = "none";
    }

    if (resetBtn) {
      resetBtn.style.display = "none";
    }
  },

  /* =====================================================
     VALIDATE
  ===================================================== */

  validate: function () {
    return true;
  },

  /* =====================================================
     RESET
  ===================================================== */

  reset: function () {
    // Reading only
  },

  /* =====================================================
     LISTEN
  ===================================================== */

  listen: function () {
    // Reading only
  },

  /* =====================================================
     SCREEN
  ===================================================== */

  screenPoseAdjustments: function () {
    this.hideControls();
  },
};
