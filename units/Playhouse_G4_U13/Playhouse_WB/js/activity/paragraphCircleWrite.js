window.ParagraphCircleWrite = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.foundWords = [];

  this.init(this.settings);
};

ParagraphCircleWrite.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalize: function (value) {
    if (value == undefined || value == null) {
      return "";
    }

    return value
      .toString()
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .trim();
  },

  // =====================================================
  // LISTEN
  //
  // المستخدم يضغط على أي جزء من الكلمة المخفية
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    $(e).on("click", ".pcw_hidden_part", function (event) {
      event.preventDefault();

      var hiddenId = $(this).attr("data-hidden-id");

      self.selectHiddenWord(hiddenId);
    });

    // =================================================
    // INPUT
    // =================================================

    $(e).on("input", ".pcw_answer_input:not(.pcw_default_answer)", function () {
      $(this)
        .closest(".pcw_answer_item")
        .find(".pcw_answer_tick, .pcw_answer_cross")
        .hide();

      self.updateControls();
    });
  },

  // =====================================================
  // SELECT HIDDEN WORD
  // =====================================================

  selectHiddenWord: function (hiddenId) {
    if (hiddenId == undefined || hiddenId == "") {
      return;
    }

    var validWords = this.ob.data_obj.hiddenWords;

    var normalizedId = this.normalize(hiddenId);

    if (validWords.indexOf(normalizedId) === -1) {
      return;
    }

    // already found
    if (this.foundWords.indexOf(normalizedId) !== -1) {
      return;
    }

    this.foundWords.push(normalizedId);

    // =================================================
    // mark all pieces of same hidden word
    // =================================================

    $(this.ob.activity_area)
      .find('.pcw_hidden_part[data-hidden-id="' + hiddenId + '"]')
      .addClass("pcw_selected");

    this.updateControls();
  },

  // =====================================================
  // UPDATE CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasInput = false;

    $(e)
      .find(".pcw_answer_input:not(.pcw_default_answer)")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasInput = true;

          return false;
        }
      });

    var hasSelection = this.foundWords.length > 0;

    if (hasInput || hasSelection) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    }
  },

  // =====================================================
  // VALIDATE PARAGRAPH
  // =====================================================

  validateParagraph: function () {
    var e = this.ob.activity_area;

    var required = this.ob.data_obj.hiddenWords;

    var success = this.foundWords.length === required.length;

    $(e).find(".pcw_paragraph_tick, .pcw_paragraph_cross").hide();

    if (success) {
      $(e).find(".pcw_paragraph_tick").show();
    } else {
      $(e).find(".pcw_paragraph_cross").show();
    }

    return success;
  },

  // =====================================================
  // VALIDATE INPUTS
  // any order
  // no duplicates
  // =====================================================

  validateInputs: function () {
    var self = this;

    var e = this.ob.activity_area;

    var answers = this.ob.data_obj.answers;

    var usedAnswers = [];

    var allCorrect = true;

    $(e)
      .find(".pcw_answer_input")
      .each(function () {
        var input = $(this);

        var item = input.closest(".pcw_answer_item");

        var tick = item.find(".pcw_answer_tick");

        var cross = item.find(".pcw_answer_cross");

        tick.hide();

        cross.hide();

        var value = self.normalize(input.val());

        var correct = false;

        if (
          answers.indexOf(value) !== -1 &&
          usedAnswers.indexOf(value) === -1
        ) {
          correct = true;

          usedAnswers.push(value);
        }

        if (correct) {
          tick.show();
        } else {
          cross.show();

          allCorrect = false;
        }
      });

    if (usedAnswers.length !== answers.length) {
      allCorrect = false;
    }

    return allCorrect;
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var paragraphCorrect = this.validateParagraph();

    var inputsCorrect = this.validateInputs();

    var finalCorrect = paragraphCorrect && inputsCorrect;

    showFeedback(true, finalCorrect);
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    this.foundWords = [];

    $(e).find(".pcw_hidden_part").removeClass("pcw_selected");

    $(e).find(".pcw_answer_input:not(.pcw_default_answer)").val("");

    $(e)
      .find(
        ".pcw_answer_tick, .pcw_answer_cross, .pcw_paragraph_tick, .pcw_paragraph_cross",
      )
      .hide();

    // =====================================================
    // RESTORE DEFAULT SELECTED WORDS
    // =====================================================

    var defaults = this.ob.data_obj.defaultSelectedWords || [];

    for (var i = 0; i < defaults.length; i++) {
      var word = this.normalize(defaults[i]);

      this.foundWords.push(word);

      $(e)
        .find('.pcw_hidden_part[data-hidden-id="' + word + '"]')
        .addClass("pcw_selected");
    }

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    var self = this;

    var defaults = this.ob.data_obj.defaultSelectedWords || [];

    for (var i = 0; i < defaults.length; i++) {
      var word = this.normalize(defaults[i]);

      if (this.foundWords.indexOf(word) === -1) {
        this.foundWords.push(word);
      }

      $(this.ob.activity_area)
        .find('.pcw_hidden_part[data-hidden-id="' + word + '"]')
        .addClass("pcw_selected");
    }

    initialSettingsDone(1);
  },
};
