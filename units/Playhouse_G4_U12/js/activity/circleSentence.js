// ******************************************
// Circle Sentence Activity
// ******************************************

window.CircleSentence = function (obj, dataObj) {
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

CircleSentence.prototype = {
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

    $(e).on("click", ".circle_sentence_word", function () {
      // ================================================
      // solved/demo question cannot be changed
      // ================================================

      if (
        $(this).closest(".circle_sentence_line").attr("data-locked") === "true"
      ) {
        return;
      }

      // ================================================
      // toggle circle
      // ================================================

      $(this).toggleClass("selected");

      // ================================================
      // remove previous feedback
      // ================================================

      var sentence = $(this).closest(".circle_sentence_line");

      sentence.find(".circle_sentence_tick").hide();

      sentence.find(".circle_sentence_cross").hide();

      self.updateControls();
    });
  },

  // =====================================================
  // UPDATE CHECK / RESET BUTTONS
  // =====================================================

  updateControls: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    // نحسب فقط اختيارات الطالب
    // ونستثني السؤال الأول المحلول
    var selectedWords = $(e).find(
      '.circle_sentence_line[data-locked="false"] .circle_sentence_word.selected',
    );

    if (selectedWords.length > 0) {
      // أول ما يختار دائرة وحدة
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
    var ob = this.ob;

    var e = ob.activity_area;

    var allCorrect = true;

    $(e)
      .find(".circle_sentence_line")
      .each(function () {
        var sentence = $(this);

        // ================================================
        // Demo / solved line
        // always considered correct
        // ================================================

        if (sentence.attr("data-locked") === "true") {
          sentence.find(".circle_sentence_tick").hide();

          sentence.find(".circle_sentence_cross").hide();

          return;
        }

        var sentenceCorrect = true;

        // ================================================
        // Compare every word
        // ================================================

        sentence.find(".circle_sentence_word").each(function () {
          var shouldBeSelected = $(this).attr("data-correct") === "true";

          var isSelected = $(this).hasClass("selected");

          if (shouldBeSelected !== isSelected) {
            sentenceCorrect = false;
          }
        });

        // ================================================
        // feedback icons
        // ================================================

        sentence.find(".circle_sentence_tick").hide();

        sentence.find(".circle_sentence_cross").hide();

        if (sentenceCorrect) {
          sentence.find(".circle_sentence_tick").show();
        } else {
          sentence.find(".circle_sentence_cross").show();

          allCorrect = false;
        }
      });

    // ================================================
    // GLOBAL FEEDBACK
    // ================================================

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".resetBtn").removeClass("disabled");

      $(".checkBtn").addClass("disabled");
    }
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    // ================================================
    // clear only user answers
    // solved question remains selected
    // ================================================

    $(e)
      .find('.circle_sentence_line[data-locked="false"] .circle_sentence_word')
      .removeClass("selected");

    // ================================================
    // restore solved/default answers
    // ================================================

    $(e)
      .find('.circle_sentence_line[data-locked="true"] .circle_sentence_word')
      .each(function () {
        if ($(this).attr("data-default-selected") === "true") {
          $(this).addClass("selected");
        } else {
          $(this).removeClass("selected");
        }
      });

    // ================================================
    // hide validation icons
    // ================================================

    $(e).find(".circle_sentence_tick").hide();

    $(e).find(".circle_sentence_cross").hide();

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
