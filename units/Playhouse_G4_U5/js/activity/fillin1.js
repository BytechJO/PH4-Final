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

    var resultArr = [];
    var checkedQuestionsCount = 0;

    for (var i = 0; i < elsQue.length; i++) {
      var questionElement = elsQue[i];
      var fIndx = parseInt(questionElement.dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var tick = questionElement.querySelector(".tick");
      var cross = questionElement.querySelector(".cross");
      var iconWrap = questionElement.querySelector(".icon_wrap");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      var _case =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      /*
       * حذف الإجابات الفارغة.
       * السؤال الذي لا يحتوي على جواب فعلي لن يدخل في التقييم.
       */
      _cAns = _cAns.filter(function (answer) {
        return (
          answer !== undefined &&
          answer !== null &&
          String(answer).trim() !== ""
        );
      });

      /*
       * تجاهل الأسطر النصية التي لا تحتوي على إجابات.
       */
      if (_cAns.length === 0) {
        questionElement.dataset.showIcon = "false";
        continue;
      }

      checkedQuestionsCount++;

      var inputBoxes = questionElement.querySelectorAll("input");
      var _uAns = [];
      var _isReadOnly = [];
      var _corr = 0;
      var _wrong = 0;

      for (var a = 0; a < inputBoxes.length; a++) {
        var isReadOnly =
          inputBoxes[a].getAttribute("disabled") !== null ||
          inputBoxes[a].getAttribute("readonly") !== null;

        _isReadOnly[a] = isReadOnly ? 1 : 0;

        /*
         * ندخل فقط الحقول القابلة للإجابة في المقارنة.
         */
        if (!isReadOnly) {
          var value = inputBoxes[a].value.trim();

          if (inputBoxes[a].dataset.type !== "number") {
            value = _case === "yes" ? value : value.toLowerCase();
          }

          _uAns.push(value);
        }
      }

      questionElement.dataset.showIcon = "true";

      /*
       * يجب أن يكون عدد الحقول مساويًا لعدد الإجابات.
       */
      if (_cAns.length === _uAns.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          var correctAnswer = String(_cAns[cc]);
          var userAnswer = String(_uAns[cc]);

          if (_case !== "yes") {
            correctAnswer = correctAnswer.toLowerCase();
            userAnswer = userAnswer.toLowerCase();
          }

          /*
           * تجاهل المسافات عند المقارنة.
           */
          correctAnswer = correctAnswer.replace(/\s/g, "");
          userAnswer = userAnswer.replace(/\s/g, "");

          if (userAnswer !== "" && correctAnswer === userAnswer) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      var isQuestionCorrect = _corr === _cAns.length && _wrong === 0;

      if (isQuestionCorrect) {
        resultArr.push(1);

        if (tick) {
          tick.style.display = "block";
        }

        if (
          fDataObj.audio !== "" &&
          fDataObj.audio !== "no" &&
          fDataObj.audioenable === "correct"
        ) {
          var correctAudioIcon = questionElement.querySelector(".audioIcon");

          if (correctAudioIcon) {
            correctAudioIcon.classList.remove("disabled");
          }
        }
      } else {
        resultArr.push(0);

        if (cross) {
          cross.style.display = "block";
        }

        if (
          fDataObj.audio !== "" &&
          fDataObj.audio !== "no" &&
          fDataObj.audioenable === "correct"
        ) {
          var wrongAudioIcon = questionElement.querySelector(".audioIcon");

          if (wrongAudioIcon) {
            wrongAudioIcon.classList.add("disabled");
          }
        }
      }

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    /*
     * النجاح يعتمد فقط على الأسئلة التي تحتوي على إجابات فعلية.
     */
    var allCorrect =
      checkedQuestionsCount > 0 &&
      resultArr.length === checkedQuestionsCount &&
      resultArr.every(function (result) {
        return result === 1;
      });

    console.log(
      "Results:",
      resultArr,
      "Checked questions:",
      checkedQuestionsCount,
    );

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
