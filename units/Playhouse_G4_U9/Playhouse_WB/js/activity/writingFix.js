// ******************************************
// Writing Fix Activity
// ******************************************

window.WritingFix = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WritingFix.prototype = {
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

    var paragraphInputs = e.querySelectorAll(".writing-correction-input");
    var spellingInputs = e.querySelectorAll(".writing-spelling-input");
    var textarea = e.querySelector(".writing-letter-textarea");

    for (var i = 0; i < paragraphInputs.length; i++) {
      paragraphInputs[i].addEventListener("input", function () {
        this.style.color = "black";

        self.enableControls();

        self.hideStoryResult();
      });
    }

    for (var j = 0; j < spellingInputs.length; j++) {
      spellingInputs[j].addEventListener("focus", function () {
        this.select();
      });

      spellingInputs[j].addEventListener("input", function () {
        this.style.color = "black";
        self.enableControls();
        self.hideResultForInput(this);
      });

      spellingInputs[j].addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          self.focusNextSpellingInput(this);
        }
      });
    }

    if (textarea) {
      textarea.addEventListener("input", function () {
        self.enableReset();
      });
    }
  },

  // =========================================================
  // BUTTONS
  // =========================================================

  enableControls: function () {
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
  },

  enableReset: function () {
    if (document.getElementsByClassName("resetBtn").length > 0) {
      document
        .getElementsByClassName("resetBtn")[0]
        .classList.remove("disabled");
    }
  },

  focusNextSpellingInput: function (currentInput) {
    var ob = this.ob;
    var inputs = ob.activity_area.querySelectorAll(".writing-spelling-input");
    var currentIndex = Array.prototype.indexOf.call(inputs, currentInput);

    if (currentIndex < inputs.length - 1) {
      inputs[currentIndex + 1].focus();
    } else {
      var textarea = ob.activity_area.querySelector(".writing-letter-textarea");
      if (textarea) {
        textarea.focus();
      }
    }
  },

  // =========================================================
  // STORY RESULT
  // =========================================================

  hideStoryResult: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) return;

    var tick = e.querySelector(".writing-story-tick");
    var cross = e.querySelector(".writing-story-cross");

    if (tick) tick.style.display = "none";
    if (cross) cross.style.display = "none";
  },

  showStoryResult: function (isCorrect) {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) return;

    var tick = e.querySelector(".writing-story-tick");
    var cross = e.querySelector(".writing-story-cross");

    if (tick) tick.style.display = "none";
    if (cross) cross.style.display = "none";

    if (isCorrect) {
      if (tick) tick.style.display = "inline-flex";
    } else {
      if (cross) cross.style.display = "inline-flex";
    }
  },

  // =========================================================
  // SINGLE SPELLING RESULT
  // =========================================================

  hideResultForInput: function (input) {
    var parent = input.parentNode;
    if (!parent) return;

    var tick = parent.querySelector(".writing-result-tick");
    var cross = parent.querySelector(".writing-result-cross");

    if (tick) tick.style.display = "none";
    if (cross) cross.style.display = "none";
  },

  hideSpellingResults: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) return;

    var ticks = e.querySelectorAll(
      ".writing-spelling-group .writing-result-tick",
    );
    var crosses = e.querySelectorAll(
      ".writing-spelling-group .writing-result-cross",
    );

    for (var i = 0; i < ticks.length; i++) {
      ticks[i].style.display = "none";
    }

    for (var j = 0; j < crosses.length; j++) {
      crosses[j].style.display = "none";
    }
  },

  validateSpellingInput: function (input) {
    var userAnswer = $.trim(input.value);
    var correctAnswer = $.trim(input.dataset.answer);

    var parent = input.parentNode;
    var tick = parent.querySelector(".writing-result-tick");
    var cross = parent.querySelector(".writing-result-cross");

    if (tick) tick.style.display = "none";
    if (cross) cross.style.display = "none";

    input.style.color = "black";

    if (userAnswer === correctAnswer) {
      if (tick) tick.style.display = "inline-flex";
      return true;
    } else {
      if (cross) cross.style.display = "inline-flex";
      return false;
    }
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) return;

    var paragraphInputs = e.querySelectorAll(".writing-correction-input");
    var spellingInputs = e.querySelectorAll(".writing-spelling-input");

    var paragraphCorrect = true;
    var allCorrect = true;

    // paragraph -> one result only
    for (var i = 0; i < paragraphInputs.length; i++) {
      var userAnswer = $.trim(paragraphInputs[i].value);
      var correctAnswer = $.trim(paragraphInputs[i].dataset.answer);

      paragraphInputs[i].style.color = "black";

      if (userAnswer !== correctAnswer) {
        paragraphCorrect = false;
        allCorrect = false;
      }
    }

    this.showStoryResult(paragraphCorrect);

    // spelling words -> each one has its own result
    for (var j = 0; j < spellingInputs.length; j++) {
      var spellingCorrect = this.validateSpellingInput(spellingInputs[j]);

      if (!spellingCorrect) {
        allCorrect = false;
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      if (document.getElementsByClassName("resetBtn").length > 0) {
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      }
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) return;

    var paragraphInputs = e.querySelectorAll(".writing-correction-input");

    for (var i = 0; i < paragraphInputs.length; i++) {
      var initialValue = paragraphInputs[i].dataset.initial || "";
      paragraphInputs[i].value = initialValue;
      paragraphInputs[i].style.color = "black";
    }

    var spellingInputs = e.querySelectorAll(".writing-spelling-input");

    for (var j = 0; j < spellingInputs.length; j++) {
      spellingInputs[j].value = "";
      spellingInputs[j].style.color = "black";
    }

    var textarea = e.querySelector(".writing-letter-textarea");
    if (textarea) {
      textarea.value = "";
    }

    this.hideStoryResult();
    this.hideSpellingResults();

    if (document.getElementsByClassName("checkBtn").length > 0) {
      document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
    }

    if (document.getElementsByClassName("resetBtn").length > 0) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
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
