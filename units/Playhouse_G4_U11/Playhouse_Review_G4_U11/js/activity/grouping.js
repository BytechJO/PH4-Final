// ******************************************
// Grouping Activity
// ******************************************

window.Grouping = function (obj, dataObj) {
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

  this.selectedWord = null;

  this.init(this.settings);
};

Grouping.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen(ob);
  },

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    // =====================================================
    // CLICK WORD
    // =====================================================
    $(e).on("click", ".grouping_word", function () {
      $(".grouping_word").removeClass("selected");

      $(this).addClass("selected");

      self.selectedWord = this;
    });

    // =====================================================
    // CLICK DROP BOX
    // =====================================================
    $(e).on("click", ".grouping_drop_zone", function (event) {
      // Prevent clicking a word already inside box
      if ($(event.target).hasClass("grouping_word")) {
        return;
      }

      if (self.selectedWord != null) {
        $(this).find(".grouping_words_inside").append(self.selectedWord);

        $(self.selectedWord).removeClass("selected");

        self.selectedWord = null;

        self.enableControls();
      }
    });

    // =====================================================
    // CLICK WORD BANK
    // return word to bank
    // =====================================================
    $(e).on("click", ".grouping_word_bank", function (event) {
      if ($(event.target).hasClass("grouping_word")) {
        return;
      }

      if (self.selectedWord != null) {
        $(this).find(".grouping_bank_words").append(self.selectedWord);

        $(self.selectedWord).removeClass("selected");

        self.selectedWord = null;

        self.enableControls();
      }
    });

    // =====================================================
    // DRAG
    // =====================================================
    $(e).on("dragstart", ".grouping_word", function (event) {
      self.selectedWord = this;

      $(this).addClass("dragging");

      event.originalEvent.dataTransfer.setData(
        "text/plain",
        $(this).data("word"),
      );
    });

    $(e).on("dragend", ".grouping_word", function () {
      $(this).removeClass("dragging");

      self.selectedWord = null;
    });

    // =====================================================
    // DRAG OVER DROP BOX
    // =====================================================
    $(e).on(
      "dragover",
      ".grouping_drop_zone, .grouping_word_bank",
      function (event) {
        event.preventDefault();
        $(this).addClass("drag_over");
      },
    );

    $(e).on(
      "dragleave",
      ".grouping_drop_zone, .grouping_word_bank",
      function () {
        $(this).removeClass("drag_over");
      },
    );

    // =====================================================
    // DROP IN BOX
    // =====================================================
    $(e).on("drop", ".grouping_drop_zone", function (event) {
      event.preventDefault();

      $(this).removeClass("drag_over");

      if (self.selectedWord != null) {
        $(this).find(".grouping_words_inside").append(self.selectedWord);

        self.selectedWord = null;

        self.enableControls();
      }
    });

    // =====================================================
    // DROP BACK IN WORD BANK
    // =====================================================
    $(e).on("drop", ".grouping_word_bank", function (event) {
      event.preventDefault();

      $(this).removeClass("drag_over");

      if (self.selectedWord != null) {
        $(this).find(".grouping_bank_words").append(self.selectedWord);

        self.selectedWord = null;

        self.enableControls();
      }
    });
  },

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");
    $(".resetBtn").removeClass("disabled");
  },

  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var allCorrect = true;

    var zones = e.querySelectorAll(".grouping_drop_zone");

    for (var i = 0; i < zones.length; i++) {
      var zone = zones[i];

      var groupIndex = parseInt(zone.dataset.groupIndex);

      var correctAnswers = ob.data_obj.groups[groupIndex].answers.slice();

      var userAnswers = [];

      $(zone)
        .find(".grouping_word")
        .each(function () {
          userAnswers.push($(this).data("word").toString().toLowerCase());
        });

      correctAnswers = correctAnswers.map(function (word) {
        return word.toString().toLowerCase();
      });

      // ترتيب الكلمات داخل البوكس مش مهم
      correctAnswers.sort();
      userAnswers.sort();

      var groupCorrect =
        correctAnswers.length === userAnswers.length &&
        correctAnswers.every(function (word, index) {
          return word === userAnswers[index];
        });

      $(zone).find(".grouping_tick").hide();
      $(zone).find(".grouping_cross").hide();

      if (groupCorrect) {
        $(zone).find(".grouping_tick").show();
      } else {
        $(zone).find(".grouping_cross").show();

        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".resetBtn").addClass("disabled");
    }
  },

  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var bank = $(e).find(".grouping_bank_words");

    // رجّع الكلمات للترتيب الأصلي
    var words = [];

    $(e)
      .find(".grouping_word")
      .each(function () {
        words.push(this);
      });

    words.sort(function (a, b) {
      return (
        parseInt($(a).data("original-index")) -
        parseInt($(b).data("original-index"))
      );
    });

    for (var i = 0; i < words.length; i++) {
      bank.append(words[i]);
    }

    $(e).find(".grouping_word").removeClass("selected dragging");

    $(e).find(".grouping_drop_zone").removeClass("drag_over");

    $(e).find(".grouping_tick").hide();
    $(e).find(".grouping_cross").hide();

    this.selectedWord = null;

    $(".checkBtn").addClass("disabled");
    $(".resetBtn").addClass("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
