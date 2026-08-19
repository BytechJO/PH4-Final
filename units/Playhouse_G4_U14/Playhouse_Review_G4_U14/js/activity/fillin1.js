// ******************************************
// FillIn - Version no: 1
// Updated validation:
// - supports answer
// - supports alternateanswer
// - ignores case when strictcase = no
// - ignores spaces
// - ignores punctuation
// - supports apostrophe variations
// ******************************************

// ======================================================
// NORMALIZE ANSWER
// ======================================================

function normalizeFillinAnswer(value, strictCase) {
  if (value === undefined || value === null) {
    return "";
  }

  value = String(value).trim();

  // ---------------------------------------------
  // CASE
  // ---------------------------------------------
  if (strictCase !== "yes") {
    value = value.toLowerCase();
  }

  // ---------------------------------------------
  // NORMALIZE APOSTROPHES
  // won't / won’t / won‘t
  // ---------------------------------------------
  value = value.replace(/[’‘`´]/g, "'");

  // ---------------------------------------------
  // REMOVE PUNCTUATION
  // English + Arabic punctuation
  // ---------------------------------------------
  value = value.replace(/[.,!?;:،؛؟"'“”()[\]{}]/g, "");

  // ---------------------------------------------
  // REMOVE DASH / HYPHEN
  // twenty-first == twenty first
  // ---------------------------------------------
  value = value.replace(/[-–—_]/g, "");

  // ---------------------------------------------
  // REMOVE ALL SPACES
  // ---------------------------------------------
  value = value.replace(/\s+/g, "");

  return value;
}

// ======================================================
// FILL IN
// ======================================================

window.FillIn = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  console.log("FillIn > ", $(".activity_area"));

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

// ======================================================
// PROTOTYPE
// ======================================================

FillIn.prototype = {
  // ==================================================
  // INIT
  // ==================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // ==================================================
  // LISTEN
  // ==================================================

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

        console.log($(this).data("type"));

        var v = this.value;

        // -----------------------------------
        // NUMBER ONLY
        // -----------------------------------

        if ($(this).data("type") == "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }

        // -----------------------------------
        // ENABLE BUTTONS
        // -----------------------------------

        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");

        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },

  // ==================================================
  // VALIDATE
  // ==================================================

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var allCorrect = false;

    var resultArr = [];

    // ==================================================
    // QUESTIONS LOOP
    // ==================================================

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // ----------------------------------------------
      // HIDE ICONS
      // ----------------------------------------------

      elsQue[i].querySelector(".tick").style.display = "none";

      elsQue[i].querySelector(".cross").style.display = "none";

      // ----------------------------------------------
      // STRICT CASE
      // ----------------------------------------------

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      // ----------------------------------------------
      // CORRECT ANSWERS
      // ----------------------------------------------

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var _uAns = [];

      var _isReadOnly = [];

      var _corr = 0;

      var _wrong = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // ==================================================
      // GET USER ANSWERS
      // ==================================================

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          console.log(a, inputBoxes[a].dataset.type);

          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          if (inputBoxes[a].value.length > 0) {
            if (inputBoxes[a].dataset.type != "number") {
              _uAns[a] = inputBoxes[a].value;
            } else {
              _uAns[a] = inputBoxes[a].value;
            }
          }
        }
      }

      // ==================================================
      // SHOW ICON
      // ==================================================

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      console.log(
        "_uAns:",
        _uAns,

        "_cAns:",
        _cAns,

        "question:",
        i,

        "showIcon:",
        elsQue[i].dataset.showIcon,
      );

      // ==================================================
      // VALIDATE ANSWERS
      // ==================================================

      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        // ----------------------------------------------
        // EACH INPUT
        // ----------------------------------------------

        for (var cc = 0; cc < _cAns.length; cc++) {
          // ------------------------------------------
          // USER ANSWER
          // ------------------------------------------

          var userAnswer = normalizeFillinAnswer(_uAns[cc], _case);

          // ------------------------------------------
          // MAIN ANSWER
          // ------------------------------------------

          var possibleAnswers = [fDataObj.answer[cc]];

          // ------------------------------------------
          // ALTERNATE ANSWERS
          // ------------------------------------------

          if (
            fDataObj.alternateanswer != undefined &&
            fDataObj.alternateanswer != null &&
            fDataObj.alternateanswer[cc] != undefined &&
            Array.isArray(fDataObj.alternateanswer[cc])
          ) {
            possibleAnswers = possibleAnswers.concat(
              fDataObj.alternateanswer[cc],
            );
          }

          var isCorrect = false;

          // ------------------------------------------
          // CHECK ALL POSSIBLE ANSWERS
          // ------------------------------------------

          for (
            var ansIndex = 0;
            ansIndex < possibleAnswers.length;
            ansIndex++
          ) {
            var correctAnswer = normalizeFillinAnswer(
              possibleAnswers[ansIndex],
              _case,
            );

            console.log("USER:", userAnswer, "ANSWER:", correctAnswer);

            if (userAnswer === correctAnswer) {
              isCorrect = true;

              break;
            }
          }

          // ------------------------------------------
          // RESULT
          // ------------------------------------------

          if (isCorrect) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      // ==================================================
      // QUESTION RESULT
      // ==================================================

      if (_corr == _uAns.length && _wrong == 0) {
        resultArr[i] = 1;

        elsQue[i].querySelector(".tick").style.display = "block";

        // ----------------------------------------------
        // AUDIO
        // ----------------------------------------------

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      } else {
        resultArr[i] = 0;

        elsQue[i].querySelector(".cross").style.display = "block";

        // ----------------------------------------------
        // AUDIO
        // ----------------------------------------------

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }

      // ==================================================
      // ICON WRAP
      // ==================================================

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    // ==================================================
    // ALL QUESTIONS RESULT
    // ==================================================

    console.log(resultArr, numOfFillIns);

    allCorrect = resultArr.join("").split("0")[0].length == numOfFillIns;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },

  // ==================================================
  // RESET
  // ==================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      // ----------------------------------------------
      // HIDE ICONS
      // ----------------------------------------------

      elsQue[i].querySelector(".icon_wrap").style.display = "none";

      elsQue[i].querySelector(".tick").style.display = "none";

      elsQue[i].querySelector(".cross").style.display = "none";

      // ----------------------------------------------
      // AUDIO RESET
      // ----------------------------------------------

      if (fDataObj.audio != "" && fDataObj.audio != "no") {
        if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
          if (fDataObj.audioenable == "correct") {
            elsQue[i].querySelector(".audioIcon").style.display = "block";

            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          } else if (fDataObj.audioenable == "default") {
            elsQue[i].querySelector(".audioIcon").style.display = "block";

            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      }

      // ----------------------------------------------
      // CLEAR INPUTS
      // ----------------------------------------------

      var inputBoxes = elsQue[i].querySelectorAll("input");

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          if (
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
          ) {
            inputBoxes[a].value = "";

            inputBoxes[a].style.color = "black";
          }
        }
      }
    }

    // ==================================================
    // DISABLE CHECK
    // ==================================================

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },

  // ==================================================
  // INITIAL SETTINGS
  // ==================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
