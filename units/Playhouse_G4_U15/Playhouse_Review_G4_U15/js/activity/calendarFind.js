window.CalendarFind = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

CalendarFind.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    $(e).on("click", ".cf_clickable", function () {
      var element = $(this);

      element.toggleClass("selected");

      // نخفي feedback القديم
      element.find(".tick, .cross").hide();

      self.updateControls();
    });
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var selectedCount = $(e).find(".cf_clickable.selected").length;

    if (selectedCount > 0) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =====================================================
  // CLEAR FEEDBACK
  // =====================================================

  clearFeedback: function () {
    var e = this.ob.activity_area;

    $(e).find(".cf_feedback_icon .tick, .cf_feedback_icon .cross").hide();
  },

  // =====================================================
  // SHOW CORRECT
  // =====================================================

  showCorrect: function (element) {
    element.find("> .cf_feedback_icon .cross").hide();

    element.find("> .cf_feedback_icon .tick").show();
  },

  // =====================================================
  // SHOW WRONG
  // =====================================================

  showWrong: function (element) {
    element.find("> .cf_feedback_icon .tick").hide();

    element.find("> .cf_feedback_icon .cross").show();
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var self = this;

    var e = this.ob.activity_area;

    var allCorrect = true;

    // =================================================
    // الـ7 مجموعات الصح
    // =================================================

    var requiredGroups = this.ob.data_obj.mistakeGroups;

    // المجموعات اللي الطالب اكتشفها
    var selectedGroups = [];

    this.clearFeedback();

    // =================================================
    // CHECK SELECTED ELEMENTS
    // =================================================

    $(e)
      .find(".cf_clickable.selected")
      .each(function () {
        var element = $(this);

        var isMistake = element.attr("data-mistake") === "true";

        var groupId = element.attr("data-group-id");

        // =============================================
        // CORRECT ITEM
        // =============================================

        if (isMistake === true && groupId != undefined && groupId != "") {
          self.showCorrect(element);

          // نضيف المجموعة مرة وحدة فقط
          if (selectedGroups.indexOf(groupId) === -1) {
            selectedGroups.push(groupId);
          }
        } else {
          // =========================================
          // WRONG SELECTION
          // =========================================

          self.showWrong(element);

          allCorrect = false;
        }
      });

    // =================================================
    // لازم يلاقي كل الـ7 groups
    // =================================================

    if (selectedGroups.length !== requiredGroups.length) {
      allCorrect = false;
    }

    // =================================================
    // تأكد كل group موجود
    // =================================================

    for (var i = 0; i < requiredGroups.length; i++) {
      if (selectedGroups.indexOf(requiredGroups[i]) === -1) {
        allCorrect = false;
      }
    }

    // =================================================
    // GLOBAL FEEDBACK
    // =================================================

    showFeedback(true, allCorrect);
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    $(e).find(".cf_clickable").removeClass("selected");

    this.clearFeedback();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
