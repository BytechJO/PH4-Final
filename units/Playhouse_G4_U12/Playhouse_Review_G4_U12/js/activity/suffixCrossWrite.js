// ******************************************
// Suffix Cross Write
// ******************************************

window.SuffixCrossWrite = function (obj, dataObj) {
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

SuffixCrossWrite.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalize: function (value) {
    if (value == undefined || value == null) {
      return "";
    }

    return value.toString().toLowerCase().replace(/\s+/g, " ").trim();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    $(e).on("input", ".scw_input", function () {
      $(this).css("color", "#000");

      $(this)
        .closest(".scw_cell")
        .find(".scw_input_tick, .scw_input_cross")
        .hide();

      // crossed word box
      self.updateUsedWords();

      self.updateControls();
    });
  },

  // =====================================================
  // UPDATE USED WORDS
  // يشطب الكلمة إذا استُخدمت بأي شكل:
  // source أو answer
  // سواء صح أو غلط
  // سواء بالعمود الصح أو الغلط
  // =====================================================

  updateUsedWords: function () {
    var self = this;
    var e = self.ob.activity_area;

    $(e)
      .find(".scw_word_item")
      .each(function () {
        var wordElement = $(this);

        var source = self.normalize(wordElement.attr("data-source"));

        var answer = self.normalize(wordElement.attr("data-answer"));

        // ===============================================
        // DEFAULT USED
        // prescribe مشطوبة من البداية
        // ===============================================

        var isDefault = false;

        for (var i = 0; i < self.ob.data_obj.wordBank.length; i++) {
          var current = self.ob.data_obj.wordBank[i];

          if (
            self.normalize(current.source) === source &&
            self.normalize(current.answer) === answer &&
            current.defaultUsed === true
          ) {
            isDefault = true;

            break;
          }
        }

        if (isDefault) {
          wordElement.addClass("used");

          return;
        }

        // ===============================================
        // CHECK IF USED ANYWHERE
        // ===============================================

        var used = false;

        $(e)
          .find(".scw_input")
          .each(function () {
            var inputValue = self.normalize($(this).val());

            if (inputValue === source || inputValue === answer) {
              used = true;

              return false;
            }
          });

        // ===============================================
        // STRIKE
        // ===============================================

        if (used) {
          wordElement.addClass("used");
        } else {
          wordElement.removeClass("used");
        }
      });
  },

  // =====================================================
  // IS CORRECT FOR GROUP
  // =====================================================

  isCorrectForGroup: function (value, groupId) {
    var normalizedValue = this.normalize(value);

    if (normalizedValue === "") {
      return false;
    }

    var data = this.ob.data_obj;

    for (var i = 0; i < data.wordBank.length; i++) {
      var item = data.wordBank[i];

      if (
        this.normalize(item.answer) === normalizedValue &&
        item.group === groupId
      ) {
        return true;
      }
    }

    return false;
  },

  // =====================================================
  // CORRECT OCCURRENCES
  // =====================================================

  getCorrectOccurrences: function (answer, groupId) {
    var self = this;

    var e = self.ob.activity_area;

    var count = 0;

    $(e)
      .find('.scw_input[data-group="' + groupId + '"]')
      .each(function () {
        var value = self.normalize($(this).val());

        if (value === self.normalize(answer)) {
          count++;
        }
      });

    return count;
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasValue = false;

    $(e)
      .find(".scw_input")
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
    var self = this;

    var e = self.ob.activity_area;

    var data = self.ob.data_obj;

    var allCorrect = true;

    // =====================================================
    // EACH CORRECT ANSWER ONLY ONCE
    // =====================================================

    var usedAnswers = {};

    $(e)
      .find(".scw_input")
      .each(function () {
        var input = $(this);

        var value = self.normalize(input.val());

        var groupId = input.attr("data-group");

        var cell = input.closest(".scw_cell");

        cell.find(".scw_input_tick, .scw_input_cross").hide();

        // empty extra cell
        if (value === "") {
          return;
        }

        var correct = self.isCorrectForGroup(value, groupId);

        // ===============================================
        // DUPLICATE
        // ===============================================

        if (correct) {
          var uniqueKey = value;

          if (usedAnswers[uniqueKey] === true) {
            correct = false;
          } else {
            usedAnswers[uniqueKey] = true;
          }
        }

        // ===============================================
        // FEEDBACK
        // ===============================================

        if (correct) {
          cell.find(".scw_input_tick").show();
        } else {
          cell.find(".scw_input_cross").show();

          allCorrect = false;
        }
      });

    // =====================================================
    // CHECK ALL REQUIRED ANSWERS
    // =====================================================

    for (var i = 0; i < data.wordBank.length; i++) {
      var item = data.wordBank[i];

      if (item.defaultUsed === true) {
        continue;
      }

      var count = self.getCorrectOccurrences(item.answer, item.group);

      if (count !== 1) {
        allCorrect = false;
      }
    }

    // =====================================================
    // NUMBER OF FILLED ANSWERS
    // =====================================================

    var filledCount = 0;

    $(e)
      .find(".scw_input")
      .each(function () {
        if (self.normalize($(this).val()) !== "") {
          filledCount++;
        }
      });

    var requiredCount = 0;

    for (var r = 0; r < data.wordBank.length; r++) {
      if (data.wordBank[r].defaultUsed !== true) {
        requiredCount++;
      }
    }

    if (filledCount !== requiredCount) {
      allCorrect = false;
    }

    // =====================================================
    // STRIKE UPDATE
    // =====================================================

    self.updateUsedWords();

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

    $(e).find(".scw_input").val("").css("color", "#000");

    $(e).find(".scw_input_tick, .scw_input_cross").hide();

    // remove all strikes
    $(e).find(".scw_word_item").removeClass("used");

    // restore default struck item
    for (var i = 0; i < this.ob.data_obj.wordBank.length; i++) {
      var item = this.ob.data_obj.wordBank[i];

      if (item.defaultUsed === true) {
        $(e)
          .find(
            '.scw_word_item[data-source="' +
              this.normalize(item.source) +
              '"][data-answer="' +
              this.normalize(item.answer) +
              '"]',
          )
          .addClass("used");
      }
    }

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
