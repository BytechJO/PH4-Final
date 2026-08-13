// ******************************************
// Decode Activity
// ******************************************

window.Decode = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

Decode.prototype = {
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

    if (!e) {
      return;
    }

    var inputs = e.querySelectorAll(".decode-input");

    for (var i = 0; i < inputs.length; i++) {
      // =======================================================
      // FOCUS
      // Select existing letter when user clicks input
      // =======================================================

      inputs[i].addEventListener("focus", function () {
        this.select();
      });

      inputs[i].addEventListener("click", function () {
        this.select();
      });

      // =======================================================
      // INPUT
      // =======================================================

      inputs[i].addEventListener("input", function () {
        var value = this.value;

        // Keep English letters only
        value = value.replace(/[^a-zA-Z]/g, "");

        // Only one character
        if (value.length > 1) {
          value = value.charAt(value.length - 1);
        }

        // Uppercase
        value = value.toUpperCase();

        this.value = value;

        this.style.color = "black";

        // Enable controls
        if (document.getElementsByClassName("checkBtn").length > 0) {
          document
            .getElementsByClassName("checkBtn")[0]
            .classList.remove("disabled");
        }

        if (document.getElementsByClassName("resetBtn").length > 0) {
          document
            .getElementsByClassName("resetBtn")[0]
            .classList.remove("disabled");
        }

        // Hide old result when answer changes
        self.hideResult();

        // =====================================================
        // AUTO NEXT
        // =====================================================

        if (value !== "") {
          self.focusNextInput(this);
        }
      });

      // =======================================================
      // KEY DOWN
      // =======================================================

      inputs[i].addEventListener("keydown", function (event) {
        var currentInput = this;

        // =====================================================
        // BACKSPACE
        // =====================================================

        if (event.key === "Backspace") {
          if (currentInput.value === "") {
            event.preventDefault();

            self.focusPreviousInput(currentInput);
          }
        }

        // =====================================================
        // LEFT ARROW
        // =====================================================
        else if (event.key === "ArrowLeft") {
          event.preventDefault();

          self.focusPreviousInput(currentInput);
        }

        // =====================================================
        // RIGHT ARROW
        // =====================================================
        else if (event.key === "ArrowRight") {
          event.preventDefault();

          self.focusNextInput(currentInput);
        }
      });

      // =======================================================
      // PASTE
      // Allows pasting several letters and distributes them
      // =======================================================

      inputs[i].addEventListener("paste", function (event) {
        event.preventDefault();

        var pastedText = "";

        if (event.clipboardData) {
          pastedText = event.clipboardData.getData("text");
        } else if (window.clipboardData) {
          pastedText = window.clipboardData.getData("Text");
        }

        pastedText = pastedText.replace(/[^a-zA-Z]/g, "").toUpperCase();

        if (pastedText === "") {
          return;
        }

        self.fillFromInput(this, pastedText);

        if (document.getElementsByClassName("checkBtn").length > 0) {
          document
            .getElementsByClassName("checkBtn")[0]
            .classList.remove("disabled");
        }

        if (document.getElementsByClassName("resetBtn").length > 0) {
          document
            .getElementsByClassName("resetBtn")[0]
            .classList.remove("disabled");
        }

        self.hideResult();
      });
    }
  },

  // =========================================================
  // NEXT INPUT
  // =========================================================

  focusNextInput: function (currentInput) {
    var ob = this.ob;

    var inputs = ob.activity_area.querySelectorAll(".decode-input");

    var currentIndex = Array.prototype.indexOf.call(inputs, currentInput);

    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();

      inputs[currentIndex + 1].select();
    }
  },

  // =========================================================
  // PREVIOUS INPUT
  // =========================================================

  focusPreviousInput: function (currentInput) {
    var ob = this.ob;

    var inputs = ob.activity_area.querySelectorAll(".decode-input");

    var currentIndex = Array.prototype.indexOf.call(inputs, currentInput);

    if (currentIndex > 0) {
      inputs[currentIndex - 1].focus();

      inputs[currentIndex - 1].select();
    }
  },

  // =========================================================
  // PASTE MULTIPLE LETTERS
  // =========================================================

  fillFromInput: function (startInput, text) {
    var ob = this.ob;

    var inputs = ob.activity_area.querySelectorAll(".decode-input");

    var startIndex = Array.prototype.indexOf.call(inputs, startInput);

    var textIndex = 0;

    for (
      var i = startIndex;
      i < inputs.length && textIndex < text.length;
      i++
    ) {
      inputs[i].value = text.charAt(textIndex).toUpperCase();

      inputs[i].style.color = "black";

      textIndex++;
    }

    var nextIndex = startIndex + text.length;

    if (nextIndex < inputs.length) {
      inputs[nextIndex].focus();
    } else {
      inputs[inputs.length - 1].focus();
    }
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var wordGroups = e.querySelectorAll(".decode-word-group");

    var allCorrect = true;

    for (var i = 0; i < wordGroups.length; i++) {
      var wordGroup = wordGroups[i];

      var inputs = wordGroup.querySelectorAll(".decode-input");

      var tick = wordGroup.querySelector(".decode-word-tick");

      var cross = wordGroup.querySelector(".decode-word-cross");

      // اخفي النتيجة القديمة
      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      // إذا الكلمة كلها given وما فيها inputs
      // ما نطلع عليها check ولا cross
      if (inputs.length === 0) {
        continue;
      }

      var wordCorrect = true;

      for (var j = 0; j < inputs.length; j++) {
        var input = inputs[j];

        var userAnswer = $.trim(input.value).toUpperCase();

        var correctAnswer = $.trim(input.dataset.answer).toUpperCase();

        // اللون يضل أسود
        input.style.color = "black";

        if (userAnswer === "" || userAnswer !== correctAnswer) {
          wordCorrect = false;
        }
      }

      // =====================================
      // RESULT FOR WHOLE WORD
      // =====================================

      if (wordCorrect) {
        if (tick) {
          tick.style.display = "block";
        }
      } else {
        if (cross) {
          cross.style.display = "block";
        }

        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      if (document.getElementsByClassName("resetBtn").length > 0) {
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.add("disabled");
      }
    }
  },

  // =========================================================
  // HIDE RESULT
  // =========================================================
  hideResult: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var ticks = e.querySelectorAll(".decode-word-tick");

    var crosses = e.querySelectorAll(".decode-word-cross");

    for (var i = 0; i < ticks.length; i++) {
      ticks[i].style.display = "none";
    }

    for (var j = 0; j < crosses.length; j++) {
      crosses[j].style.display = "none";
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var inputs = e.querySelectorAll(".decode-input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";

      inputs[i].style.color = "black";
    }

    this.hideResult();

    if (document.getElementsByClassName("checkBtn").length > 0) {
      document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
    }

    if (document.getElementsByClassName("resetBtn").length > 0) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }

    // Return focus to first editable box
    if (inputs.length > 0) {
      inputs[0].focus();
    }
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
