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

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var editableInputs = [];

      var editableAnswers = [];

      /* =========================================
           Get only editable inputs
        ========================================= */

      for (var a = 0; a < inputBoxes.length; a++) {
        var isDisabled = inputBoxes[a].getAttribute("disabled") != null;

        var isReadOnly = inputBoxes[a].getAttribute("readonly") != null;

        if (!isDisabled && !isReadOnly) {
          editableInputs.push(inputBoxes[a]);

          if (_cAns[a] != undefined) {
            editableAnswers.push(_cAns[a]);
          }
        }
      }

      /* =========================================
           No editable input = default answer
           consider it correct
        ========================================= */

      if (editableInputs.length === 0) {
        resultArr[i] = 1;

        elsQue[i].dataset.showIcon = "false";

        continue;
      }

      /* =========================================
           Validate editable inputs
        ========================================= */

      var questionCorrect = true;

      for (var cc = 0; cc < editableInputs.length; cc++) {
        var userAnswer = $.trim(editableInputs[cc].value);

        var correctAnswer =
          editableAnswers[cc] != undefined ? $.trim(editableAnswers[cc]) : "";

        /* Empty = wrong */

        if (userAnswer === "") {
          questionCorrect = false;

          continue;
        }

        if (_case != "yes") {
          userAnswer = userAnswer.toLowerCase();

          correctAnswer = correctAnswer.toLowerCase();
        }

        /* Ignore spaces */

        userAnswer = userAnswer.replace(/\s/g, "");

        correctAnswer = correctAnswer.replace(/\s/g, "");

        if (userAnswer !== correctAnswer) {
          questionCorrect = false;
        }
      }

      /* =========================================
           Result
        ========================================= */

      elsQue[i].dataset.showIcon = "true";

      if (questionCorrect) {
        resultArr[i] = 1;

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
      } else {
        resultArr[i] = 0;

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

      /* =========================================
           Show icon
        ========================================= */

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    /* =========================================
       All Correct
    ========================================= */

    allCorrect = resultArr.every(function (result) {
      return result === 1;
    });

    console.log("resultArr:", resultArr, "allCorrect:", allCorrect);

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
