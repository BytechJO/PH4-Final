window.GroupDragDrop = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.dragWord = null;

  this.dragClone = null;

  this.init(this.settings);
};

GroupDragDrop.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // GET WORD DATA
  // =====================================================

  getWordData: function (wordId) {
    var words = this.ob.data_obj.words;

    for (var i = 0; i < words.length; i++) {
      if (words[i].id === wordId) {
        return words[i];
      }
    }

    return null;
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // START DRAG
    // =================================================

    $(e).on("pointerdown", ".gdd_word:not(.gdd_used)", function (event) {
      event.preventDefault();

      self.startDrag($(this), event);
    });

    // =================================================
    // MOVE
    // =================================================

    $(document).on("pointermove.groupdragdrop", function (event) {
      if (self.dragWord == null) {
        return;
      }

      self.moveDrag(event);
    });

    // =================================================
    // DROP
    // =================================================

    $(document).on(
      "pointerup.groupdragdrop pointercancel.groupdragdrop",
      function (event) {
        if (self.dragWord == null) {
          return;
        }

        self.endDrag(event);
      },
    );

    // =================================================
    // RETURN WORD BY CLICKING DROPPED WORD
    // =================================================

    $(e).on("click", ".gdd_dropped_word:not(.gdd_default_word)", function () {
      var wordId = $(this).attr("data-word-id");

      self.returnWord(wordId);
    });
  },

  // =====================================================
  // START
  // =====================================================

  startDrag: function (word, event) {
    this.dragWord = word;

    this.dragClone = word.clone().addClass("gdd_drag_clone");

    $("body").append(this.dragClone);

    word.addClass("gdd_dragging");

    this.moveDrag(event);
  },

  // =====================================================
  // MOVE
  // =====================================================

  moveDrag: function (event) {
    if (this.dragClone == null) {
      return;
    }

    this.dragClone.css({
      left: event.clientX + 10 + "px",

      top: event.clientY + 10 + "px",
    });
  },

  // =====================================================
  // END
  // =====================================================

  endDrag: function (event) {
    var wordId = this.dragWord.attr("data-word-id");

    if (this.dragClone != null) {
      this.dragClone.remove();
    }

    this.dragClone = null;

    this.dragWord.removeClass("gdd_dragging");

    // clone كان فوق pointer
    // نخفيه قبل elementFromPoint
    var target = document.elementFromPoint(event.clientX, event.clientY);

    var dropGroup = $(target).closest(".gdd_drop_group");

    if (dropGroup.length > 0) {
      var groupId = dropGroup.attr("data-group-id");

      this.placeWord(wordId, groupId);
    }

    this.dragWord = null;
  },

  // =====================================================
  // PLACE WORD
  // =====================================================

  placeWord: function (wordId, groupId) {
    var e = this.ob.activity_area;

    var wordData = this.getWordData(wordId);

    if (wordData == null) {
      return;
    }

    // remove any old placement
    $(e)
      .find('.gdd_dropped_word[data-word-id="' + wordId + '"]')
      .remove();

    var html =
      '<div class="gdd_dropped_word" ' +
      'data-word-id="' +
      wordId +
      '" ' +
      'data-selected-group="' +
      groupId +
      '">' +
      wordData.text +
      "</div>";

    $(e)
      .find('.gdd_drop_group[data-group-id="' + groupId + '"] .gdd_drop_area')
      .append(html);

    // strike original word
    $(e)
      .find('.gdd_word[data-word-id="' + wordId + '"]')
      .addClass("gdd_used");

    // hide old feedback after change
    $(e).find(".gdd_group_tick, .gdd_group_cross").hide();

    this.updateControls();
  },

  // =====================================================
  // RETURN WORD
  // =====================================================

  returnWord: function (wordId) {
    var e = this.ob.activity_area;

    $(e)
      .find('.gdd_dropped_word[data-word-id="' + wordId + '"]')
      .remove();

    $(e)
      .find('.gdd_word[data-word-id="' + wordId + '"]')
      .removeClass("gdd_used");

    $(e).find(".gdd_group_tick, .gdd_group_cross").hide();

    this.updateControls();
  },

  // =====================================================
  // UPDATE BUTTONS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var count = $(e).find(".gdd_dropped_word:not(.gdd_default_word)").length;

    if (count > 0) {
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

    var e = this.ob.activity_area;

    var allCorrect = true;

    var studentWords = $(e).find(".gdd_dropped_word:not(.gdd_default_word)");

    // لازم كل الكلمات تكون مستخدمة
    var requiredCount = 0;

    for (var i = 0; i < this.ob.data_obj.words.length; i++) {
      if (this.ob.data_obj.words[i].defaultPlaced !== true) {
        requiredCount++;
      }
    }

    if (studentWords.length !== requiredCount) {
      allCorrect = false;
    }

    // =================================================
    // VALIDATE GROUPS
    // =================================================

    $(e).find(".gdd_group_tick, .gdd_group_cross").hide();

    $(e)
      .find(".gdd_drop_group")
      .each(function () {
        var group = $(this);

        var groupId = group.attr("data-group-id");

        var groupCorrect = true;

        group.find(".gdd_dropped_word").each(function () {
          var wordId = $(this).attr("data-word-id");

          var data = self.getWordData(wordId);

          if (data == null || data.group !== groupId) {
            groupCorrect = false;
          }
        });

        // check for missing words
        var expected = 0;

        for (var w = 0; w < self.ob.data_obj.words.length; w++) {
          if (self.ob.data_obj.words[w].group === groupId) {
            expected++;
          }
        }

        var actual = group.find(".gdd_dropped_word").length;

        if (actual !== expected) {
          groupCorrect = false;
        }

        if (groupCorrect) {
          group.find(".gdd_group_tick").show();
        } else {
          group.find(".gdd_group_cross").show();

          allCorrect = false;
        }
      });

    showFeedback(true, allCorrect);
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    // remove student answers
    $(e).find(".gdd_dropped_word:not(.gdd_default_word)").remove();

    // reset word bank
    $(e)
      .find(".gdd_word")
      .each(function () {
        var id = $(this).attr("data-word-id");

        var data = null;

        for (var i = 0; i < group_drag_drop_data.words.length; i++) {
          if (group_drag_drop_data.words[i].id === id) {
            data = group_drag_drop_data.words[i];

            break;
          }
        }

        if (data != null && data.defaultPlaced === true) {
          $(this).addClass("gdd_used");
        } else {
          $(this).removeClass("gdd_used");
        }
      });

    $(e).find(".gdd_group_tick, .gdd_group_cross").hide();

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
