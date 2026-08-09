window.WritingCompare = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    parent_holder: obj[0],

    activity_area: ob[0],

    data_obj: dataObj,
  };

  this.orientationAdjust = "no";

  this.init(this.settings);
};

WritingCompare.prototype = {
  /* =====================================================
     INIT
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);

    this.initialSettings();
  },

  /* =====================================================
     LISTEN
  ===================================================== */

  listen: function (ob) {
    var self = this;

    var $area = $(ob.activity_area);

    $area
      .off("input.writingCompare", ".writing_textarea")
      .on("input.writingCompare", ".writing_textarea", function () {
        self.updateControls();
      });
  },

  /* =====================================================
     UPDATE CONTROLS
  ===================================================== */

  updateControls: function () {
    var $area = $(this.ob.activity_area);

    var hasText = false;

    $area.find(".writing_textarea").each(function () {
      if ($.trim($(this).val()) !== "") {
        hasText = true;
      }
    });

    var resetBtn = document.getElementsByClassName("resetBtn")[0];

    if (resetBtn) {
      if (hasText) {
        resetBtn.classList.remove("disabled");
      } else {
        resetBtn.classList.add("disabled");
      }
    }
  },

  /* =====================================================
     VALIDATE
     No validation for this activity
  ===================================================== */

  validate: function () {
    return true;
  },

  /* =====================================================
     RESET
  ===================================================== */

  reset: function () {
    var $area = $(this.ob.activity_area);

    $area.find(".writing_textarea").val("");

    var resetBtn = document.getElementsByClassName("resetBtn")[0];

    if (resetBtn) {
      resetBtn.classList.add("disabled");
    }
  },

  /* =====================================================
     HIDE CHECK
  ===================================================== */

  hideCheckButton: function () {
    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.style.display = "none";
    }
  },

  /* =====================================================
     INITIAL SETTINGS
  ===================================================== */

  initialSettings: function () {
    this.reset();

    this.hideCheckButton();

    initialSettingsDone(1);
  },

  /* =====================================================
     SCREEN
  ===================================================== */

  screenPoseAdjustments: function () {
    this.hideCheckButton();
  },
};
