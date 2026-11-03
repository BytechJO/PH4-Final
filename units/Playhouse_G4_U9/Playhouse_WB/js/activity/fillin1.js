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

    var allCorrect = false;

    var resultArr = [];

    // ============================================
    // BUILD ONE MASTER ANSWERS ARRAY
    // ============================================

    var allAnswers = [];

    for (var q = 0; q < ob.data_obj.questions.length; q++) {
      var qAnswers = getStrArray(ob.data_obj.questions[q].answer, "activity");

      for (var a = 0; a < qAnswers.length; a++) {
        allAnswers.push(qAnswers[a].toLowerCase().replace(/\s/g, ""));
      }
    }

    // ============================================
    // USED ANSWERS
    // prevents same correct answer being used twice
    // ============================================

    var usedAnswers = [];

    // ============================================
    // VALIDATE EACH INPUT
    // ============================================

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var questionCorrect = true;

      if (inputBoxes.length > 0) {
        for (var b = 0; b < inputBoxes.length; b++) {
          var userAnswer = inputBoxes[b].value.toLowerCase().replace(/\s/g, "");

          inputBoxes[b].style.color = "black";

          // ==================================
          // EMPTY INPUT
          // ==================================

          if (userAnswer == "") {
            questionCorrect = false;

            continue;
          }

          // ==================================
          // FIND ANSWER IN MASTER ARRAY
          // ==================================

          var foundIndex = allAnswers.indexOf(userAnswer);

          // Correct answer exists
          // and hasn't already been used
          if (foundIndex !== -1 && usedAnswers.indexOf(userAnswer) === -1) {
            usedAnswers.push(userAnswer);
          } else {
            questionCorrect = false;
          }
        }
      } else {
        questionCorrect = false;
      }

      // ============================================
      // SHOW RESULT
      // ============================================

      if (questionCorrect) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }
      } else {
        resultArr[i] = 0;

        if (cross) {
          cross.style.display = "block";
        }
      }

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // ============================================
    // FINAL RESULT
    // ============================================

    var correctCount = 0;

    for (var r = 0; r < resultArr.length; r++) {
      if (resultArr[r] == 1) {
        correctCount++;
      }
    }

    allCorrect =
      correctCount === elsQue.length &&
      usedAnswers.length === allAnswers.length;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.remove("disabled");
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
