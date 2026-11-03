// ******************************************
// Tell About It - FillIn
// ******************************************

window.FillIn = function (obj, dataObj) {
  var options = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

FillIn.prototype = {
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
    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var inputs = e.querySelectorAll(".tell_input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        this.style.color = "black";

        var checkBtn = document.getElementsByClassName("checkBtn")[0];

        var resetBtn = document.getElementsByClassName("resetBtn")[0];

        if (checkBtn) {
          checkBtn.classList.remove("disabled");
        }

        if (resetBtn) {
          resetBtn.classList.remove("disabled");
        }
      });
    }
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var questions = e.querySelectorAll(".tell_question");

    var resultArr = [];

    // =================================================
    // LOOP QUESTIONS
    // =================================================

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var input = question.querySelector(".tell_input");

      var tick = question.querySelector(".tick");

      var cross = question.querySelector(".cross");

      var iconWrap = question.querySelector(".icon_wrap");

      if (!input) {
        continue;
      }

      // ---------------------------------------------
      // USER ANSWER
      // ---------------------------------------------

      var value = input.value.trim().toLowerCase();

      // توحيد apostrophe
      value = value.replace(/[’‘`´]/g, "'");

      var section = parseInt(question.dataset.section);

      var correct = false;

      // ---------------------------------------------
      // HIDE ICONS
      // ---------------------------------------------

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      // =================================================
      // POSITIVE
      // Must contain WILL
      // Must NOT contain WON'T / WILL NOT
      // =================================================

      if (section === 0) {
        var hasWill = /\bwill\b/.test(value);

        var hasWillNot = /\bwill\s+not\b/.test(value);

        var hasWont = /\bwon'?t\b/.test(value);

        if (value.length > 0 && hasWill && !hasWillNot && !hasWont) {
          correct = true;
        }
      }

      // =================================================
      // NEGATIVE
      // Accept:
      // won't
      // wont
      // will not
      // =================================================

      if (section === 1) {
        var negativeWont = /\bwon'?t\b/.test(value);

        var negativeWontNoApostrophe = /\bwont\b/.test(value);

        var negativeWillNot = /\bwill\s+not\b/.test(value);

        if (
          value.length > 0 &&
          (negativeWont || negativeWontNoApostrophe || negativeWillNot)
        ) {
          correct = true;
        }
      }

      // =================================================
      // RESULT
      // =================================================

      if (correct) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        resultArr[i] = 0;

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }
    }

    // =================================================
    // ALL CORRECT
    // =================================================

    var allCorrect =
      questions.length > 0 &&
      resultArr.length === questions.length &&
      resultArr.every(function (item) {
        return item === 1;
      });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.remove("disabled");
      }
    }
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var questions = e.querySelectorAll(".tell_question");

    for (var i = 0; i < questions.length; i++) {
      var question = questions[i];

      var input = question.querySelector(".tell_input");

      var iconWrap = question.querySelector(".icon_wrap");

      var tick = question.querySelector(".tick");

      var cross = question.querySelector(".cross");

      // ---------------------------------------------
      // INPUT
      // ---------------------------------------------

      if (input) {
        input.value = "";

        input.style.color = "black";
      }

      // ---------------------------------------------
      // ICONS
      // ---------------------------------------------

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    // ---------------------------------------------
    // BUTTONS
    // ---------------------------------------------

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
