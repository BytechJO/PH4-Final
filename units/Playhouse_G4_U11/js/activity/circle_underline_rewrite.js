//  ****************************************** //
//  Circle / Underline / Rewrite
//  Activity File
//  ****************************************** //

window.CircleUnderlineRewrite = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],

    selectedTool: "circle",
  };

  this.init(this.settings);
};

CircleUnderlineRewrite.prototype = {
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    // =====================================================
    // TOOL BUTTONS
    // =====================================================

    $(e).on("click", ".cur_tool_btn", function () {
      $(e).find(".cur_tool_btn").removeClass("active");

      $(this).addClass("active");

      self.ob.selectedTool = $(this).data("tool");
    });

    // =====================================================
    // CLICK ANY WORD
    // =====================================================

    $(e).on("click", ".word_token", function () {
      // Example question cannot be edited
      if ($(this).attr("data-example") === "true") {
        return;
      }

      var tool = self.ob.selectedTool;

      var currentMark = $(this).attr("data-mark");

      // =============================================
      // SAME TOOL -> REMOVE MARK
      // =============================================

      if (currentMark === tool) {
        $(this)
          .attr("data-mark", "")
          .removeClass("marked_circle marked_underline");
      } else {
        // =========================================
        // CHANGE MARK
        // =========================================

        $(this)
          .removeClass("marked_circle marked_underline")
          .attr("data-mark", tool);

        if (tool === "circle") {
          $(this).addClass("marked_circle");
        } else if (tool === "underline") {
          $(this).addClass("marked_underline");
        }
      }

      self.hideQuestionIcon($(this).closest(".cur_question"));

      // First interaction activates Check
      self.updateButtons();
    });

    // =====================================================
    // REWRITE INPUT
    // =====================================================

    $(e).on("input", ".cur_rewrite_input:not(.example_input)", function () {
      $(this).css("color", "black");

      self.hideQuestionIcon($(this).closest(".cur_question"));

      self.updateButtons();
    });
  },

  // =========================================================
  // HIDE ICON
  // =========================================================

  hideQuestionIcon: function (question) {
    question.find(".icon_wrap").hide();

    question.find(".tick").hide();

    question.find(".cross").hide();
  },

  // =========================================================
  // UPDATE BUTTONS
  // =========================================================

  updateButtons: function () {
    var e = this.ob.activity_area;

    var hasInteraction = false;

    // =====================================================
    // ANY MARK IN NON-EXAMPLE QUESTIONS?
    // =====================================================

    var markedWords = $(e).find(
      '.word_token[data-example!="true"][data-mark="circle"], ' +
        '.word_token[data-example!="true"][data-mark="underline"]',
    ).length;

    if (markedWords > 0) {
      hasInteraction = true;
    }

    // =====================================================
    // ANY TEXT IN NON-EXAMPLE INPUT?
    // =====================================================

    if (!hasInteraction) {
      $(e)
        .find(".cur_rewrite_input:not(.example_input)")
        .each(function () {
          var value = $.trim($(this).val());

          if (value !== "") {
            hasInteraction = true;

            return false;
          }
        });
    }

    // =====================================================
    // CHECK / RESET
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
  // NORMALIZE SENTENCE
  // =========================================================

  normalizeSentence: function (str) {
    if (str === undefined || str === null) {
      return "";
    }

    return (
      str
        .toString()
        .toLowerCase()

        // Normalize apostrophes
        .replace(/[’‘]/g, "'")

        // Multiple spaces -> one
        .replace(/\s+/g, " ")

        // Remove space before punctuation
        .replace(/\s+([,.!?])/g, "$1")

        // Remove ONLY final punctuation
        .replace(/[.!?]+$/, "")

        .trim()
    );
  },

  // =========================================================
  // COMPARE MARKS
  // =========================================================

  compareMarks: function (question, type, correctIds) {
    var selectedIds = [];

    question.find('.word_token[data-mark="' + type + '"]').each(function () {
      selectedIds.push($(this).attr("data-id").toString());
    });

    var expected = correctIds.map(function (id) {
      return id.toString();
    });

    selectedIds.sort();

    expected.sort();

    if (selectedIds.length !== expected.length) {
      return false;
    }

    for (var i = 0; i < expected.length; i++) {
      if (selectedIds[i] !== expected[i]) {
        return false;
      }
    }

    return true;
  },

  // =========================================================
  // COMPARE REWRITE
  // =========================================================

  compareRewrite: function (userAnswer, questionData) {
    var self = this;

    var normalizedUser = self.normalizeSentence(userAnswer);

    if (normalizedUser === "") {
      return false;
    }

    var possibleAnswers = [];

    possibleAnswers.push(questionData.rewriteAnswer);

    if (
      questionData.alternateRewrite !== undefined &&
      questionData.alternateRewrite !== null
    ) {
      for (var i = 0; i < questionData.alternateRewrite.length; i++) {
        possibleAnswers.push(questionData.alternateRewrite[i]);
      }
    }

    for (var a = 0; a < possibleAnswers.length; a++) {
      var correct = self.normalizeSentence(possibleAnswers[a]);

      if (normalizedUser === correct) {
        return true;
      }
    }

    return false;
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var self = this;

    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var resultArr = [];

    // =====================================================
    // CHECK QUESTIONS
    // =====================================================

    $(e)
      .find(".cur_question")
      .each(function (index) {
        var question = $(this);

        var qData = data.questions[index];

        // =========================================
        // SKIP EXAMPLE
        // =========================================

        if (qData.example === true) {
          return;
        }

        var circleCorrect = self.compareMarks(
          question,
          "circle",
          qData.circleAnswer,
        );

        var underlineCorrect = self.compareMarks(
          question,
          "underline",
          qData.underlineAnswer,
        );

        var rewriteValue = question.find(".cur_rewrite_input").val();

        var rewriteCorrect = self.compareRewrite(rewriteValue, qData);

        question.find(".tick").hide();

        question.find(".cross").hide();

        question.find(".icon_wrap").show();

        if (circleCorrect && underlineCorrect && rewriteCorrect) {
          resultArr.push(1);

          question.find(".tick").show();
        } else {
          resultArr.push(0);

          question.find(".cross").show();
        }
      });

    // =====================================================
    // ALL CORRECT?
    // =====================================================

    var allCorrect = true;

    for (var r = 0; r < resultArr.length; r++) {
      if (resultArr[r] !== 1) {
        allCorrect = false;

        break;
      }
    }

    showFeedback(true, allCorrect);

    // =====================================================
    // BUTTONS
    // =====================================================

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    } else {
      $(".resetBtn").removeClass("disabled");
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var e = this.ob.activity_area;

    // =====================================================
    // CLEAR ONLY NON-EXAMPLE MARKS
    // =====================================================

    $(e)
      .find('.word_token[data-example!="true"]')
      .attr("data-mark", "")
      .removeClass("marked_circle marked_underline");

    // =====================================================
    // CLEAR ONLY NON-EXAMPLE INPUTS
    // =====================================================

    $(e)
      .find(".cur_rewrite_input:not(.example_input)")
      .val("")
      .css("color", "black");

    // =====================================================
    // HIDE RESULT ICONS
    // =====================================================

    $(e).find(".cur_question:not(.example_question) .icon_wrap").hide();

    $(e).find(".cur_question:not(.example_question) .tick").hide();

    $(e).find(".cur_question:not(.example_question) .cross").hide();

    // =====================================================
    // DEFAULT TOOL
    // =====================================================

    this.ob.selectedTool = "circle";

    $(e).find(".cur_tool_btn").removeClass("active");

    $(e).find(".circle_tool").addClass("active");

    // =====================================================
    // BUTTONS
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
