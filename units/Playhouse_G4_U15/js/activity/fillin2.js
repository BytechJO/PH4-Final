//  ****************************************** //
//  FillIn - Version no: 1
//  Date updated - June 3, 2020
//  ****************************************** //
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
FillIn.prototype = {
  init: function (ob) {
    this.ob = ob;
    // this.reset();
    this.listen(ob);
  },
  listen: function (ob) {
    var e = ob.activity_area;
    var inputs = e.querySelectorAll("input");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");
        console.log($(this).data("type"));
        var v = this.value;
        if ($(this).data("type") == "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }
        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },
  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    var numOfFillIns = elsQue.length;
    var allCorrect = false;
    var resultArr = [];

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var tick = elsQue[i].querySelector(".tick");
      var cross = elsQue[i].querySelector(".cross");
      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (tick) tick.style.display = "none";
      if (cross) cross.style.display = "none";
      if (iconWrap) iconWrap.style.display = "none";

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      // =========================
      // MAIN ANSWER
      // =========================
      var _cAns = getStrArray(fDataObj.answer, "activity");

      // =========================
      // ALTERNATE ANSWERS
      // =========================
      var _alternateAnswers = fDataObj.alternateanswer || [];

      var _uAns = [];
      var inputBoxes = elsQue[i].querySelectorAll("input");

      var hasEditableInput = false;
      var allEditableInputsFilled = true;

      // =========================
      // GET USER ANSWERS
      // =========================
      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          var isReadOnly =
            inputBoxes[a].getAttribute("readonly") != null ||
            inputBoxes[a].getAttribute("disabled") != null;

          if (!isReadOnly) {
            hasEditableInput = true;

            if (inputBoxes[a].value.trim() == "") {
              allEditableInputsFilled = false;
            }
          }

          if (inputBoxes[a].value.length > 0) {
            if (inputBoxes[a].dataset.type != "number") {
              _uAns[a] =
                _case == "yes"
                  ? inputBoxes[a].value
                  : inputBoxes[a].value.toLowerCase();
            } else {
              _uAns[a] = inputBoxes[a].value;
            }
          }
        }
      }

      // =============================================
      // NORMALIZE ANSWER
      // =============================================
      function normalizeAnswer(value) {
        if (value === undefined || value === null) {
          return "";
        }

        value = String(value);

        if (_case !== "yes") {
          value = value.toLowerCase();
        }

        return (
          value
            // apostrophes: ' ’ ‘ ` ´
            .replace(/['’‘`´ʼ]/g, "")

            // punctuation
            .replace(/[.,!?;:،؛؟"“”()[\]{}\-–—_]/g, "")

            // all spaces
            .replace(/[\s\u00A0\u2007\u202F]+/g, "")

            .trim()
        );
      }

      // =============================================
      // COMPARE ANSWER SET
      // =============================================
      function compareAnswerSet(correctSet, userSet) {
        // لا تستخدم getStrArray هون مرة ثانية
        if (!Array.isArray(correctSet)) {
          correctSet = [correctSet];
        }

        if (!Array.isArray(userSet)) {
          userSet = [userSet];
        }

        if (correctSet.length !== userSet.length) {
          return false;
        }

        for (var x = 0; x < correctSet.length; x++) {
          var correctValue = normalizeAnswer(correctSet[x]);
          var userValue = normalizeAnswer(userSet[x]);

          console.log("QUESTION:", fIndx);
          console.log("CORRECT NORMALIZED:", correctValue);
          console.log("USER NORMALIZED:", userValue);

          if (correctValue !== userValue) {
            return false;
          }
        }

        return true;
      }
      // =========================
      // VALIDATION
      // =========================
      var isCorrect = false;

      if (_uAns.length > 0) {
        // main answer
        if (compareAnswerSet(_cAns, _uAns)) {
          isCorrect = true;
        }

        // alternate answers
        if (!isCorrect && _alternateAnswers.length > 0) {
          for (var alt = 0; alt < _alternateAnswers.length; alt++) {
            var altAnswer = _alternateAnswers[alt];

            if (!Array.isArray(altAnswer)) {
              altAnswer = [altAnswer];
            }

            if (compareAnswerSet(altAnswer, _uAns)) {
              isCorrect = true;
              break;
            }
          }
        }
      }

      // =========================
      // READONLY / DEFAULT ANSWER
      // =========================
      if (!hasEditableInput) {
        resultArr[i] = 1;
        continue;
      }

      // =========================
      // DON'T SHOW ICON
      // IF EMPTY
      // =========================
      if (!allEditableInputsFilled) {
        resultArr[i] = 0;

        if (iconWrap) {
          iconWrap.style.display = "none";
        }

        continue;
      }

      // =========================
      // CORRECT
      // =========================
      if (isCorrect) {
        resultArr[i] = 1;

        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      }

      // =========================
      // WRONG
      // =========================
      else {
        resultArr[i] = 0;

        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

        if (fDataObj.audio != "" && fDataObj.audio != "no") {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon").length > 0
          ) {
            elsQue[i].querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }
    }

    // =========================
    // FINAL RESULT
    // =========================
    console.log("Result:", resultArr);

    allCorrect = resultArr.every(function (value) {
      return value === 1;
    });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
    }
  },
  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;
    var elsQue = e.querySelectorAll(".que");
    // console.log('reset function >> ', elsQue.length, (ob.data_obj));
    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];
      elsQue[i].querySelector(".icon_wrap").style.display = "none";
      elsQue[i].querySelector(".tick").style.display = "none";
      elsQue[i].querySelector(".cross").style.display = "none";
      // console.log('reset function >> ', fIndx, ((ob.data_obj).questions[fIndx-1]));
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
      } else {
        if (elsQue[i].querySelectorAll(".audioIcon").length > 0) {
          // (elsQue[i].querySelector('.audioIcon')).style.display = 'none';
        }
      }
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
    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
  },
  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
