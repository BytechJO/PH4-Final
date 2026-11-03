//  ****************************************** //
//  Word Break
//  Activity File
//  ****************************************** //

window.WordBreak = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WordBreak.prototype = {
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =========================================================
  // EVENTS
  // =========================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =====================================================
    // ANY INPUT
    // =====================================================

    $(e).on("input", ".breakup_input", function () {
      $(this).removeClass("correct_answer wrong_answer");

      // =================================================
      // PART 1 ICONS
      // =================================================

      $(this)
        .closest(".breakup_item")
        .find(".breakup_tick, .breakup_cross")
        .hide();

      // =================================================
      // PART 2 ICONS
      // =================================================

      $(this)
        .closest(".make_input_row")
        .find(".make_input_tick, .make_input_cross")
        .hide();

      self.updateButtons();
    });
  },

  // =========================================================
  // BUTTON STATE
  // =========================================================

  updateButtons: function () {
    var e = this.ob.activity_area;

    var hasInteraction = false;

    $(e)
      .find(".breakup_input")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasInteraction = true;

          return false;
        }
      });

    // =====================================================
    // ENABLE / DISABLE CHECK + RESET
    // =====================================================

    if (hasInteraction) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =========================================================
  // NORMALIZE STRING
  // =========================================================

  normalize: function (str) {
    if (str === undefined || str === null) {
      return "";
    }

    return str.toString().toLowerCase().replace(/\s+/g, " ").trim();
  },

  // =========================================================
  // CHECK IF WORD CAN BE BUILT FROM SOURCE LETTERS
  // =========================================================

  canBuildWord: function (userWord, sourceWord) {
    var user = this.normalize(userWord).replace(/[^a-z]/g, "");

    var source = this.normalize(sourceWord).replace(/[^a-z]/g, "");

    if (user === "") {
      return false;
    }

    var available = {};

    // =====================================================
    // COUNT SOURCE LETTERS
    // =====================================================

    for (var i = 0; i < source.length; i++) {
      var ch = source[i];

      if (available[ch] === undefined) {
        available[ch] = 0;
      }

      available[ch]++;
    }

    // =====================================================
    // CHECK USER LETTERS
    // =====================================================

    for (var x = 0; x < user.length; x++) {
      var userChar = user[x];

      if (available[userChar] === undefined || available[userChar] <= 0) {
        return false;
      }

      available[userChar]--;
    }

    return true;
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var self = this;

    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var allCorrect = true;

    // =====================================================
    // PART 1
    // =====================================================

    $(e)
      .find(".breakup_item")
      .each(function (index) {
        var item = data.smallWords[index];
        if (item.example === true) {
          return;
        }
        var input = $(this).find(".breakup_input");

        var userAnswer = self.normalize(input.val());

        var correct = false;

        // ===============================================
        // CHECK AGAINST ANSWERS
        // ===============================================

        for (var a = 0; a < item.answer.length; a++) {
          if (userAnswer === self.normalize(item.answer[a])) {
            correct = true;

            break;
          }
        }

        // ===============================================
        // HIDE OLD ICONS
        // ===============================================

        $(this).find(".breakup_tick, .breakup_cross").hide();

        input.removeClass("correct_answer wrong_answer");

        // ===============================================
        // EMPTY
        // ===============================================

        if (userAnswer === "") {
          allCorrect = false;

          return;
        }

        // ===============================================
        // CORRECT
        // ===============================================

        if (correct) {
          input.addClass("correct_answer");

          $(this).find(".breakup_tick").show();
        }

        // ===============================================
        // WRONG
        // ===============================================
        else {
          allCorrect = false;

          input.addClass("wrong_answer");

          $(this).find(".breakup_cross").show();
        }
      });

    // =====================================================
    // FEEDBACK
    // =====================================================

    showFeedback(true, allCorrect);

    // =====================================================
    // BUTTONS AFTER VALIDATION
    // =====================================================

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".resetBtn").removeClass("disabled");
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var e = this.ob.activity_area;
    var data = this.ob.data_obj;

    // =====================================================
    // CLEAR PART 1 - EXCEPT EXAMPLE
    // =====================================================

    $(e)
      .find(".breakup_input:not(.example_breakup_input)")
      .val("")
      .removeClass("correct_answer wrong_answer");

    // =====================================================
    // RESTORE EXAMPLE ANSWER
    // =====================================================

    $(e)
      .find(".example_breakup_item")
      .each(function () {
        var index = parseInt($(this).attr("data-index"));

        var item = data.smallWords[index];

        if (item && item.example === true) {
          $(this)
            .find(".example_breakup_input")
            .val(item.defaultAnswer || "")
            .removeClass("correct_answer wrong_answer");
        }
      });

    // =====================================================
    // CLEAR PART 2
    // =====================================================

    $(e)
      .find(".make_word_input")
      .val("")
      .removeClass("correct_answer wrong_answer");

    // =====================================================
    // HIDE PART 1 ICONS
    // =====================================================

    $(e).find(".breakup_tick, .breakup_cross").hide();

    // =====================================================
    // HIDE PART 2 ICONS
    // =====================================================

    $(e).find(".make_input_tick, .make_input_cross").hide();

    // =====================================================
    // DISABLE BUTTONS
    // =====================================================

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
