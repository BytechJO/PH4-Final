// ******************************************
// Suffix Group Write
// ******************************************

window.SuffixGroupWrite = function (obj, dataObj) {
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

SuffixGroupWrite.prototype = {
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

    $(e).on("input", ".sgw_input", function () {
      // always black
      $(this).css("color", "#000");

      // remove old local validation
      $(this)
        .closest(".sgw_cell")
        .find(".sgw_input_tick, .sgw_input_cross")
        .hide();

      // update blue ticks immediately
      self.updateUsedWords();

      // check/reset buttons
      self.updateControls();
    });
  },

  // =====================================================
  // IS ANSWER CORRECT FOR GROUP
  // =====================================================

  isCorrectForGroup: function (value, groupId) {
    var self = this;

    var normalizedValue = self.normalize(value);

    if (normalizedValue == "") {
      return false;
    }

    var data = self.ob.data_obj;

    for (var i = 0; i < data.wordBank.length; i++) {
      var item = data.wordBank[i];

      if (
        self.normalize(item.answer) === normalizedValue &&
        item.group === groupId
      ) {
        return true;
      }
    }

    return false;
  },

  // =====================================================
  // GET CORRECT INPUT OCCURRENCES
  //
  // returns number of correct appearances
  // for a specific word/group
  // =====================================================

  getCorrectOccurrences: function (answer, groupId) {
    var self = this;

    var e = self.ob.activity_area;

    var count = 0;

    $(e)
      .find('.sgw_input[data-group="' + groupId + '"]')
      .each(function () {
        var value = self.normalize($(this).val());

        if (value === self.normalize(answer)) {
          count++;
        }
      });

    return count;
  },

  // =====================================================
  // UPDATE BLUE TICKS
  // يظهر عند استخدام الـ source أو الـ answer
  // بغض النظر عن العمود وصحة الإجابة
  // =====================================================

  updateUsedWords: function () {
    var self = this;

    var e = self.ob.activity_area;

    $(e)
      .find(".sgw_word_item")
      .each(function () {
        var itemElement = $(this);

        var answer = self.normalize(itemElement.attr("data-answer"));

        var groupId = itemElement.attr("data-group");

        var dataItem = null;

        // ===============================================
        // GET ITEM FROM DATA
        // ===============================================

        for (var i = 0; i < self.ob.data_obj.wordBank.length; i++) {
          var current = self.ob.data_obj.wordBank[i];

          if (
            self.normalize(current.answer) === answer &&
            current.group === groupId
          ) {
            dataItem = current;

            break;
          }
        }

        if (dataItem == null) {
          return;
        }

        // ===============================================
        // DEFAULT WORDS
        // ===============================================

        if (dataItem.defaultUsed === true) {
          itemElement.addClass("used");

          return;
        }

        // ===============================================
        // SOURCE + ANSWER
        // discover OR discovery
        // ===============================================

        var source = self.normalize(dataItem.source);

        var correctAnswer = self.normalize(dataItem.answer);

        var used = false;

        // ===============================================
        // CHECK ALL INPUTS
        // ما بنفحص العمود هون
        // ===============================================

        $(e)
          .find(".sgw_input")
          .each(function () {
            var inputValue = self.normalize($(this).val());

            if (inputValue === source || inputValue === correctAnswer) {
              used = true;

              return false;
            }
          });

        // ===============================================
        // BLUE TICK
        // ===============================================

        if (used) {
          itemElement.addClass("used");
        } else {
          itemElement.removeClass("used");
        }
      });
  },

  // =====================================================
  // UPDATE CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasValue = false;

    $(e)
      .find(".sgw_input")
      .each(function () {
        if ($.trim($(this).val()) != "") {
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
    // STEP 1
    // VALIDATE INPUTS
    // الكلمة الصحيحة تُقبل مرة واحدة فقط
    // أي تكرار بعدها = غلط
    // =====================================================

    var usedAnswers = {};

    $(e)
      .find(".sgw_input")
      .each(function () {
        var input = $(this);

        var value = self.normalize(input.val());

        var groupId = input.attr("data-group");

        var cell = input.closest(".sgw_cell");

        cell.find(".sgw_input_tick, .sgw_input_cross").hide();

        // empty cell
        if (value == "") {
          return;
        }

        // ===============================================
        // هل الكلمة صحيحة لهذا العمود؟
        // ===============================================

        var correct = self.isCorrectForGroup(value, groupId);

        // ===============================================
        // إذا صحيحة، افحص إذا استُخدمت قبل
        // ===============================================

        if (correct) {
          var uniqueKey = value;

          if (usedAnswers[uniqueKey] === true) {
            // duplicate
            correct = false;
          } else {
            usedAnswers[uniqueKey] = true;
          }
        }

        // ===============================================
        // FEEDBACK
        // ===============================================

        if (correct) {
          cell.find(".sgw_input_tick").show();
        } else {
          cell.find(".sgw_input_cross").show();

          allCorrect = false;
        }
      });

    // =====================================================
    // STEP 2
    // CHECK ALL REQUIRED WORDS EXIST
    // =====================================================

    for (var i = 0; i < data.wordBank.length; i++) {
      var item = data.wordBank[i];

      // already provided
      if (item.defaultUsed === true) {
        continue;
      }

      var occurrenceCount = self.getCorrectOccurrences(item.answer, item.group);

      // missing
      if (occurrenceCount === 0) {
        allCorrect = false;
      }

      // duplicated
      if (occurrenceCount > 1) {
        allCorrect = false;
      }
    }

    // =====================================================
    // STEP 3
    // NUMBER OF FILLED INPUTS
    //
    // 18 total words
    // - 2 default
    // = 16 student answers
    // =====================================================

    var filledCount = 0;

    $(e)
      .find(".sgw_input")
      .each(function () {
        if (self.normalize($(this).val()) != "") {
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
    // BLUE WORD BANK TICKS
    // =====================================================

    self.updateUsedWords();

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

    // clear inputs
    $(e).find(".sgw_input").val("").css("color", "#000");

    // hide local feedback
    $(e).find(".sgw_input_tick, .sgw_input_cross").hide();

    // reset blue used marks
    $(e).find(".sgw_word_item").removeClass("used");

    // restore default marks
    for (var i = 0; i < this.ob.data_obj.wordBank.length; i++) {
      var item = this.ob.data_obj.wordBank[i];

      if (item.defaultUsed === true) {
        $(e)
          .find(
            '.sgw_word_item[data-answer="' +
              this.normalize(item.answer) +
              '"][data-group="' +
              item.group +
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
