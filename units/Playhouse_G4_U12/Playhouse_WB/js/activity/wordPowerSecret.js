// ******************************************
// Word Power Secret Activity
// ******************************************

window.WordPowerSecret = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    has_audio:
      obj[0].dataset.audio != undefined && obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WordPowerSecret.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =====================================================
  // EVENTS
  // =====================================================

  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    // =====================================================
    // INPUT
    // =====================================================

    $(e).on("input", ".wps_input:not([readonly])", function () {
      var value = $(this).val();

      // letters only
      value = value.replace(/[^a-zA-Z]/g, "").toUpperCase();

      $(this).val(value);

      // hide old feedback of top word
      $(this).closest(".wps_word_row").find(".wps_tick, .wps_cross").hide();

      // hide old feedback of secret word
      $(this)
        .closest(".wps_secret_word")
        .find(".wps_secret_word_tick, .wps_secret_word_cross")
        .hide();

      self.updateControls();

      // =================================================
      // AUTO NEXT
      // =================================================

      if (value.length === 1) {
        var allInputs = $(e).find(".wps_input:not([readonly])");

        var currentIndex = allInputs.index(this);

        if (currentIndex >= 0 && currentIndex < allInputs.length - 1) {
          allInputs.eq(currentIndex + 1).focus();
        }
      }
    });

    // =====================================================
    // BACKSPACE
    // =====================================================

    $(e).on("keydown", ".wps_input:not([readonly])", function (event) {
      if (event.key === "Backspace" && $(this).val() === "") {
        var allInputs = $(e).find(".wps_input:not([readonly])");

        var currentIndex = allInputs.index(this);

        if (currentIndex > 0) {
          allInputs.eq(currentIndex - 1).focus();
        }
      }
    });
  },

  // =====================================================
  // ENABLE CHECK / RESET
  // من أول حرف
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasValue = false;

    $(e)
      .find(".wps_input:not([readonly])")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasValue = true;

          return false;
        }
      });

    if (hasValue) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var e = this.ob.activity_area;

    var allCorrect = true;

    // =====================================================
    // TOP UNSCRAMBLE WORDS
    // كل كلمة فوق إلها صح / غلط
    // =====================================================

    $(e)
      .find(".wps_word_row")
      .each(function () {
        var wordRow = $(this);

        var correctWord = (wordRow.attr("data-answer") || "")
          .replace(/\s/g, "")
          .toUpperCase();

        var userWord = "";

        wordRow.find(".wps_word_input").each(function () {
          userWord += ($(this).val() || "").toUpperCase();
        });

        wordRow.find(".wps_tick").hide();

        wordRow.find(".wps_cross").hide();

        if (userWord === correctWord) {
          wordRow.find(".wps_tick").show();
        } else {
          wordRow.find(".wps_cross").show();

          allCorrect = false;
        }
      });

    // =====================================================
    // SECRET MESSAGE
    // VALIDATE EACH WORD SEPARATELY
    // =====================================================

    $(e)
      .find(".wps_secret_word")
      .each(function () {
        var secretWord = $(this);

        var wordCorrect = true;

        var editableInputs = secretWord.find(
          ".wps_secret_input:not([readonly])",
        );

        // ===============================================
        // HIDE OLD FEEDBACK
        // ===============================================

        secretWord.find(".wps_secret_word_tick").hide();

        secretWord.find(".wps_secret_word_cross").hide();

        // ===============================================
        // VALIDATE LETTERS
        // ===============================================

        editableInputs.each(function () {
          var correctLetter = ($(this).attr("data-answer") || "").toUpperCase();

          var userLetter = ($(this).val() || "").toUpperCase();

          if (userLetter !== correctLetter) {
            wordCorrect = false;
          }
        });

        // ===============================================
        // SHOW WORD FEEDBACK
        // ===============================================

        if (wordCorrect) {
          secretWord.find(".wps_secret_word_tick").show();
        } else {
          secretWord.find(".wps_secret_word_cross").show();

          allCorrect = false;
        }
      });

    // =====================================================
    // GLOBAL FEEDBACK
    // =====================================================

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").removeClass("disabled");
    }
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // =====================================================
    // CLEAR ALL EDITABLE INPUTS
    // =====================================================

    $(e).find(".wps_input:not([readonly])").val("");

    // =====================================================
    // TOP FEEDBACK
    // =====================================================

    $(e).find(".wps_tick, .wps_cross").hide();

    // =====================================================
    // BOTTOM WORD FEEDBACK
    // =====================================================

    $(e).find(".wps_secret_word_tick, .wps_secret_word_cross").hide();

    // =====================================================
    // BUTTONS
    // =====================================================

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
