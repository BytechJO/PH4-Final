// ******************************************
// Word Power Crossword
// ******************************************

window.WordPowerCrossword = function (obj, dataObj) {
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

WordPowerCrossword.prototype = {
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
    // FOCUS
    // =====================================================

    $(e).on("focus", ".wp_crossword_input", function () {
      var input = $(this);

      var directions = (input.attr("data-directions") || "")
        .split(",")
        .filter(function (item) {
          return item !== "";
        });

      if (directions.length === 1) {
        input.data("active-direction", directions[0]);
      } else if (directions.length > 1) {
        var currentDirection = input.data("active-direction");

        if (currentDirection == undefined || currentDirection == "") {
          input.data("active-direction", directions[0]);
        }
      }
    });

    // =====================================================
    // CLICK INTERSECTION
    // يبدل الاتجاه
    // =====================================================

    $(e).on("click", ".wp_crossword_input", function () {
      var input = $(this);

      var directions = (input.attr("data-directions") || "")
        .split(",")
        .filter(function (item) {
          return item !== "";
        });

      if (directions.length < 2) {
        return;
      }

      var activeDirection = input.data("active-direction");

      if (activeDirection === directions[0]) {
        input.data("active-direction", directions[1]);
      } else {
        input.data("active-direction", directions[0]);
      }
    });

    // =====================================================
    // INPUT
    // =====================================================

    $(e).on("input", ".wp_crossword_input", function () {
      var input = $(this);

      var value = input.val();

      // letters only
      value = value.replace(/[^a-zA-Z]/g, "").toUpperCase();

      input.val(value);

      // =================================================
      // HIDE FEEDBACK FOR WORDS USING THIS CELL
      // =================================================

      self.hideRelatedFeedback(input);

      self.updateControls();

      // =================================================
      // AUTO NEXT
      // =================================================

      if (value !== "") {
        self.goNext(input);
      }
    });

    // =====================================================
    // KEYDOWN
    // =====================================================

    $(e).on("keydown", ".wp_crossword_input", function (event) {
      var input = $(this);

      // BACKSPACE
      if (event.key === "Backspace" && input.val() === "") {
        event.preventDefault();

        self.goPrevious(input);

        return;
      }

      // DOWN
      if (event.key === "ArrowDown") {
        event.preventDefault();

        input.data("active-direction", "down");

        self.moveByDirection(input, "down", 1);

        return;
      }

      // UP
      if (event.key === "ArrowUp") {
        event.preventDefault();

        input.data("active-direction", "down");

        self.moveByDirection(input, "down", -1);

        return;
      }

      // RIGHT
      if (event.key === "ArrowRight") {
        event.preventDefault();

        input.data("active-direction", "across");

        self.moveByDirection(input, "across", 1);

        return;
      }

      // LEFT
      if (event.key === "ArrowLeft") {
        event.preventDefault();

        input.data("active-direction", "across");

        self.moveByDirection(input, "across", -1);

        return;
      }
    });
  },

  // =====================================================
  // HIDE RELATED WORD FEEDBACK
  // =====================================================

  hideRelatedFeedback: function (input) {
    var e = this.ob.activity_area;

    var words = (input.attr("data-words") || "")
      .split(",")
      .filter(function (item) {
        return item !== "";
      });

    for (var i = 0; i < words.length; i++) {
      $(e)
        .find('.wp_crossword_word_feedback[data-word-index="' + words[i] + '"]')
        .find(".wp_crossword_word_tick, .wp_crossword_word_cross")
        .hide();
    }
  },

  // =====================================================
  // GET DIRECTION
  // =====================================================

  getDirection: function (input) {
    var directions = (input.attr("data-directions") || "")
      .split(",")
      .filter(function (item) {
        return item !== "";
      });

    var direction = input.data("active-direction");

    if (
      direction != undefined &&
      direction != "" &&
      directions.indexOf(direction) !== -1
    ) {
      return direction;
    }

    if (directions.length > 0) {
      return directions[0];
    }

    return "across";
  },

  // =====================================================
  // FIND INPUT
  // =====================================================

  findInput: function (row, col) {
    var e = this.ob.activity_area;

    return $(e).find(
      '.wp_crossword_input[data-row="' + row + '"][data-col="' + col + '"]',
    );
  },
  // =====================================================
  // MOVE BY DIRECTION
  // لا ينتقل إلى box مجاور إلا إذا كان تابع لنفس الاتجاه
  // =====================================================

  moveByDirection: function (input, direction, step) {
    var row = parseInt(input.attr("data-row"));

    var col = parseInt(input.attr("data-col"));

    var targetRow = row;

    var targetCol = col;

    // =====================================================
    // CALCULATE NEXT POSITION
    // =====================================================

    if (direction === "down") {
      targetRow += step;
    } else {
      targetCol += step;
    }

    // =====================================================
    // FIND NEXT INPUT
    // =====================================================

    var targetInput = this.findInput(targetRow, targetCol);

    if (targetInput.length === 0) {
      return false;
    }

    // =====================================================
    // IMPORTANT:
    // CHECK THAT NEXT CELL BELONGS TO SAME DIRECTION
    // =====================================================

    var targetDirections = (targetInput.attr("data-directions") || "")
      .split(",")
      .filter(function (item) {
        return item !== "";
      });

    // لو ما كانت الخلية التالية تابعة لنفس الاتجاه
    // لا ننتقل إليها
    if (targetDirections.indexOf(direction) === -1) {
      return false;
    }

    // =====================================================
    // MOVE
    // =====================================================

    targetInput.data("active-direction", direction);

    targetInput.focus().select();

    return true;
  },

  // =====================================================
  // NEXT
  // =====================================================

  goNext: function (input) {
    var direction = this.getDirection(input);

    this.moveByDirection(input, direction, 1);
  },

  // =====================================================
  // PREVIOUS
  // =====================================================

  goPrevious: function (input) {
    var direction = this.getDirection(input);

    this.moveByDirection(input, direction, -1);
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasValue = false;

    $(e)
      .find(".wp_crossword_input")
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
  // VALIDATE ONE WORD
  // =====================================================

  validateWord: function (word) {
    var answer = word.answer.replace(/\s+/g, "").toLowerCase();

    for (var i = 0; i < answer.length; i++) {
      var row = word.row;

      var col = word.col;

      if (word.direction === "across") {
        col += i;
      } else {
        row += i;
      }

      var input = this.findInput(row, col);

      if (input.length === 0) {
        return false;
      }

      var userValue = (input.val() || "").toLowerCase();

      if (userValue !== answer.charAt(i)) {
        return false;
      }
    }

    return true;
  },

  // =====================================================
  // VALIDATE
  // feedback per WORD
  // =====================================================

  validate: function () {
    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var allCorrect = true;

    // hide old
    $(e).find(".wp_crossword_word_tick, .wp_crossword_word_cross").hide();

    for (var i = 0; i < data.words.length; i++) {
      var word = data.words[i];

      var correct = this.validateWord(word);

      var feedback = $(e).find(
        '.wp_crossword_word_feedback[data-word-index="' + i + '"]',
      );

      if (correct) {
        feedback.find(".wp_crossword_word_tick").show();
      } else {
        feedback.find(".wp_crossword_word_cross").show();

        allCorrect = false;
      }
    }

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

    $(e).find(".wp_crossword_input").val("").removeData("active-direction");

    $(e).find(".wp_crossword_word_tick, .wp_crossword_word_cross").hide();

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
