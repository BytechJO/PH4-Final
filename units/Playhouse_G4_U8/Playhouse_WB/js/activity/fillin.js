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

  // =========================================
  // Normalize Answer
  // =========================================
  function normalizeAnswer(str, strictCase) {
    if (str == null) return "";

    str = String(str).trim();

    if (strictCase !== "yes") {
      str = str.toLowerCase();
    }

    return str
      .replace(/[’‘`]/g, "'")
      .replace(/[.,!?;:"()[\]{}]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  // =========================================
  // Loop Questions
  // =========================================
  for (var i = 0; i < elsQue.length; i++) {
    resultArr[i] = 0;

    var fIndx = parseInt(elsQue[i].dataset.qno);
    var fDataObj = ob.data_obj.questions[fIndx - 1];

    var tick = elsQue[i].querySelector(".tick");
    var cross = elsQue[i].querySelector(".cross");

    if (tick) {
      tick.style.display = "none";
    }

    if (cross) {
      cross.style.display = "none";
    }

    var _case =
      fDataObj.strictcase != undefined &&
      fDataObj.strictcase != null
        ? fDataObj.strictcase.toLowerCase()
        : "no";

    var inputBoxes = elsQue[i].querySelectorAll("input");

    // =========================================
    // Get editable inputs only
    // =========================================
    var editableInputs = [];

    for (var a = 0; a < inputBoxes.length; a++) {
      var isReadOnly =
        inputBoxes[a].getAttribute("disabled") != null ||
        inputBoxes[a].getAttribute("readonly") != null;

      if (!isReadOnly) {
        editableInputs.push(inputBoxes[a]);
      }
    }

    // =========================================
    // Question has NO editable inputs
    // Fixed sentence / default answer only
    // =========================================
    if (editableInputs.length === 0) {
      resultArr[i] = 1;
      elsQue[i].dataset.showIcon = "false";

      continue;
    }

    // =========================================
    // ALTERNATIVES MODE
    // One input can accept many answers
    // =========================================
    if (
      fDataObj.answerMode === "alternatives" &&
      editableInputs.length === 1
    ) {
      var userAnswer = normalizeAnswer(
        editableInputs[0].value,
        _case
      );

      var possibleAnswers = fDataObj.answer || [];

      if (!Array.isArray(possibleAnswers)) {
        possibleAnswers = [possibleAnswers];
      }

      var correct = false;

      if (userAnswer !== "") {
        for (var x = 0; x < possibleAnswers.length; x++) {
          var correctAnswer = normalizeAnswer(
            possibleAnswers[x],
            _case
          );

          if (userAnswer === correctAnswer) {
            correct = true;
            break;
          }
        }
      }

      elsQue[i].dataset.showIcon = "true";

      if (correct) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }

        if (
          fDataObj.audio != "" &&
          fDataObj.audio != "no" &&
          fDataObj.audioenable == "correct" &&
          elsQue[i].querySelectorAll(".audioIcon").length > 0
        ) {
          elsQue[i]
            .querySelector(".audioIcon")
            .classList.remove("disabled");
        }
      } else {
        resultArr[i] = 0;

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

        if (
          fDataObj.audio != "" &&
          fDataObj.audio != "no" &&
          fDataObj.audioenable == "correct" &&
          elsQue[i].querySelectorAll(".audioIcon").length > 0
        ) {
          elsQue[i]
            .querySelector(".audioIcon")
            .classList.add("disabled");
        }
      }
    }

    // =========================================
    // NORMAL MODE
    // Multiple normal fill-in inputs
    // =========================================
    else {
      var _cAns = getStrArray(
        fDataObj.answer,
        "activity"
      );

      var _uAns = [];
      var _corr = 0;
      var _wrong = 0;

      // =========================================
      // Read student answers
      // editable inputs ONLY
      // =========================================
      for (
        var b = 0;
        b < editableInputs.length;
        b++
      ) {
        var currentInput = editableInputs[b];

        if (
          currentInput.value.trim().length > 0
        ) {
          if (
            currentInput.dataset.type != "number"
          ) {
            _uAns[b] =
              _case == "yes"
                ? currentInput.value
                : currentInput.value.toLowerCase();
          } else {
            _uAns[b] = currentInput.value;
          }
        } else {
          _uAns[b] = "";
        }
      }

      // =========================================
      // Show question icon
      // =========================================
      elsQue[i].dataset.showIcon =
        editableInputs.length == _cAns.length
          ? "true"
          : "false";

      // =========================================
      // Compare answers
      // =========================================
      if (
        _cAns.length == _uAns.length
      ) {
        for (
          var cc = 0;
          cc < _cAns.length;
          cc++
        ) {
          var correctAnswer =
            _case == "yes"
              ? String(_cAns[cc])
              : String(
                  _cAns[cc]
                ).toLowerCase();

          var userAnswer =
            _case == "yes"
              ? String(_uAns[cc])
              : String(
                  _uAns[cc]
                ).toLowerCase();

          correctAnswer = correctAnswer
            .trim()
            .replace(/[.,!?;:]+$/g, "")
            .replace(/\s+/g, "");

          userAnswer = userAnswer
            .trim()
            .replace(/[.,!?;:]+$/g, "")
            .replace(/\s+/g, "");

          if (
            userAnswer !== "" &&
            correctAnswer == userAnswer
          ) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      // =========================================
      // Question Correct
      // =========================================
      if (
        _corr == _cAns.length &&
        _wrong == 0
      ) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }

        if (
          fDataObj.audio != "" &&
          fDataObj.audio != "no"
        ) {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon")
              .length > 0
          ) {
            elsQue[i]
              .querySelector(".audioIcon")
              .classList.remove("disabled");
          }
        }
      }

      // =========================================
      // Question Wrong
      // =========================================
      else {
        resultArr[i] = 0;

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }

        if (
          fDataObj.audio != "" &&
          fDataObj.audio != "no"
        ) {
          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i].querySelectorAll(".audioIcon")
              .length > 0
          ) {
            elsQue[i]
              .querySelector(".audioIcon")
              .classList.add("disabled");
          }
        }
      }
    }

    // =========================================
    // Show Tick / Cross Wrapper
    // =========================================
    if (
      elsQue[i].querySelectorAll(".icon_wrap")
        .length > 0
    ) {
      if (
        elsQue[i].dataset.showIcon == "true"
      ) {
        elsQue[i]
          .querySelector(".icon_wrap")
          .style.display = "block";
      }
    }
  }

  // =========================================
  // Final Result
  // =========================================
  console.log(
    "FillIn Result:",
    resultArr,
    "Questions:",
    numOfFillIns
  );

  allCorrect =
    resultArr.indexOf(0) === -1;

  showFeedback(true, allCorrect);

  if (allCorrect) {
    document
      .getElementsByClassName("resetBtn")[0]
      .classList.add("disabled");
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
