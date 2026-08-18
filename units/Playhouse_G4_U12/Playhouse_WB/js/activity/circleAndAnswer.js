// ******************************************
// Circle And Answer Activity
// ******************************************

window.CircleAndAnswer = function (obj, dataObj) {
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

CircleAndAnswer.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    // =====================================================
    // CIRCLE WORD
    // =====================================================

    $(e).on("click", ".caa_circle_option", function () {
      $(this).toggleClass("selected");

      // hide previous circle feedback
      $(e).find(".caa_circle_tick, .caa_circle_cross").hide();

      self.updateControls();
    });

    // =====================================================
    // ANSWER INPUT
    // =====================================================

    $(e).on("input", ".caa_answer_input", function () {
      $(this).css("color", "black");

      var question = $(this).closest(".caa_question");

      question.find(".caa_tick, .caa_cross").hide();

      self.updateControls();
    });
  },

  // =====================================================
  // CHECK + RESET
  // active from first circle OR first typed character
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasCircle = $(e).find(".caa_circle_option.selected").length > 0;

    var hasText = false;

    $(e)
      .find(".caa_answer_input")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasText = true;

          return false;
        }
      });

    if (hasCircle || hasText) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalizeAnswer: function (value) {
    if (value == undefined || value == null) {
      return "";
    }

    return (
      value
        .toString()
        .toLowerCase()

        // smart apostrophe
        .replace(/[’‘]/g, "'")

        // remove punctuation
        .replace(/[.,!?;:()[\]"]/g, "")

        // hyphen => space
        .replace(/-/g, " ")

        // multiple spaces
        .replace(/\s+/g, " ")

        .trim()
    );
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var self = this;

    var ob = this.ob;

    var e = ob.activity_area;

    var allCorrect = true;

    // =====================================================
    // PART 1
    // VALIDATE CIRCLES
    // =====================================================

    var circleCorrect = true;

    $(e)
      .find(".caa_circle_option")
      .each(function () {
        var shouldBeSelected = $(this).attr("data-correct") === "true";

        var isSelected = $(this).hasClass("selected");

        if (shouldBeSelected !== isSelected) {
          circleCorrect = false;
        }
      });

    // =====================================================
    // CIRCLE FEEDBACK
    // =====================================================

    $(e).find(".caa_circle_tick, .caa_circle_cross").hide();

    if (circleCorrect) {
      $(e).find(".caa_circle_tick").show();
    } else {
      $(e).find(".caa_circle_cross").show();

      allCorrect = false;
    }

    // =====================================================
    // PART 2
    // VALIDATE QUESTIONS
    // =====================================================

    $(e)
      .find(".caa_question")
      .each(function () {
        var questionElement = $(this);

        var questionIndex = parseInt(
          questionElement.attr("data-question-index"),
        );

        var qData = ob.data_obj.questions[questionIndex];

        var userAnswer = questionElement.find(".caa_answer_input").val() || "";

        var isCorrect = false;
        // =================================================
        // NO VALIDATION
        // =================================================

        if (qData.validationType === "none") {
          // لا صح ولا غلط
          isCorrect = true;

          questionElement.find(".caa_tick, .caa_cross").hide();

          return;
        }
        // =================================================
        // OPEN ANSWER
        // =================================================

        if (qData.validationType === "open") {
          isCorrect = $.trim(userAnswer).length > 0;
        }

        // =================================================
        // ANSWERS ARRAY
        // =================================================
        else {
          var normalizedUser = self.normalizeAnswer(userAnswer);

          var acceptedAnswers = qData.answers || [];

          for (var a = 0; a < acceptedAnswers.length; a++) {
            var normalizedCorrect = self.normalizeAnswer(acceptedAnswers[a]);

            if (normalizedUser === normalizedCorrect) {
              isCorrect = true;

              break;
            }
          }
        }

        // =================================================
        // QUESTION FEEDBACK
        // =================================================

        questionElement.find(".caa_tick, .caa_cross").hide();

        if (isCorrect) {
          questionElement.find(".caa_tick").show();
        } else {
          questionElement.find(".caa_cross").show();

          allCorrect = false;
        }
      });

    // =====================================================
    // GLOBAL FEEDBACK
    // =====================================================

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // circles
    $(e).find(".caa_circle_option").removeClass("selected");

    // inputs
    $(e).find(".caa_answer_input").val("").css("color", "black");

    // circle feedback
    $(e).find(".caa_circle_tick, .caa_circle_cross").hide();

    // question feedback
    $(e).find(".caa_tick, .caa_cross").hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // INITIAL
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
