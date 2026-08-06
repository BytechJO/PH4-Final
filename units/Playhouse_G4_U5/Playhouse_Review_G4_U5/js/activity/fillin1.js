//  ****************************************** //
//  FillIn - Version no: 1
//  Updated for:
//  - Auto next
//  - Final puzzle validation
//  - Fixed letters
//  - Safe reset
//  ****************************************** //

window.FillIn = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  console.log("FillIn > ", $(".activity_area"));

  this.settings = {
    activity_area: ob[0],

    has_audio:
      obj[0].dataset.audio !== undefined && obj[0].dataset.audio !== null
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

    this.listen(ob);
  },

  /* =========================================
     Listen
  ========================================= */

  listen: function (ob) {
    var e = ob.activity_area;

    e.addEventListener("input", function (event) {
      var currentInput = event.target;

      if (!currentInput.classList.contains("text_input_area")) {
        return;
      }

      /*
       * حماية الحرف الثابت في السؤال الأخير.
       */
      if (currentInput.dataset.fixed !== undefined) {
        currentInput.value = currentInput.dataset.fixed || "";

        return;
      }

      currentInput.style.color = "black";

      /*
       * السماح بالأرقام فقط.
       */
      if (currentInput.dataset.type === "number") {
        currentInput.value = currentInput.value.replace(/\D/g, "");
      }

      /*
       * احترام maxlength.
       */
      var maxLength = parseInt(currentInput.getAttribute("maxlength"), 10);

      if (
        !isNaN(maxLength) &&
        maxLength > 0 &&
        currentInput.value.length > maxLength
      ) {
        currentInput.value = currentInput.value.slice(0, maxLength);
      }

      /*
       * إخفاء نتيجة السؤال عند التعديل.
       */
      var currentQuestion = currentInput.closest(".que");

      if (currentQuestion) {
        var currentIconWrap = currentQuestion.querySelector(".icon_wrap");

        var currentTick = currentQuestion.querySelector(".tick");

        var currentCross = currentQuestion.querySelector(".cross");

        if (currentIconWrap) {
          currentIconWrap.style.display = "none";
        }

        if (currentTick) {
          currentTick.style.display = "none";
        }

        if (currentCross) {
          currentCross.style.display = "none";
        }
      }

      /*
       * تفعيل Check.
       */
      var checkBtn = document.querySelector(".checkBtn");

      if (checkBtn) {
        checkBtn.classList.remove("disabled");
      }

      /*
       * تفعيل Reset.
       */
      var resetBtn = document.querySelector(".resetBtn");

      if (resetBtn) {
        resetBtn.classList.remove("disabled");
      }

      /*
       * الانتقال التلقائي.
       */
      if (ob.data_obj.autoNext !== true) {
        return;
      }

      /*
       * يعمل فقط في حقول الحرف الواحد.
       */
      if (maxLength !== 1 || currentInput.value.length < 1) {
        return;
      }

      /*
       * نأخذ جميع الحقول القابلة للكتابة،
       * ونتجاوز readonly وdisabled والحروف الثابتة.
       */
      var allInputs = Array.prototype.filter.call(
        e.querySelectorAll(".text_input_area"),
        function (input) {
          return (
            input.disabled === false &&
            input.readOnly === false &&
            input.dataset.fixed === undefined
          );
        },
      );

      var currentIndex = allInputs.indexOf(currentInput);

      if (currentIndex !== -1 && currentIndex < allInputs.length - 1) {
        var nextInput = allInputs[currentIndex + 1];

        setTimeout(function () {
          nextInput.focus();
          nextInput.select();
        }, 0);
      }
    });

    /*
     * منع تعديل الحروف الثابتة.
     */
    e.addEventListener("keydown", function (event) {
      var currentInput = event.target;

      if (!currentInput.classList.contains("text_input_area")) {
        return;
      }

      if (currentInput.dataset.fixed === undefined) {
        return;
      }

      var allowedKeys = [
        "Tab",
        "Shift",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ];

      if (allowedKeys.indexOf(event.key) === -1) {
        event.preventDefault();
      }
    });

    /*
     * منع لصق نص فوق الحرف الثابت.
     */
    e.addEventListener("paste", function (event) {
      var currentInput = event.target;

      if (
        currentInput.classList.contains("text_input_area") &&
        currentInput.dataset.fixed !== undefined
      ) {
        event.preventDefault();

        currentInput.value = currentInput.dataset.fixed || "";
      }
    });
  },

  /* =========================================
     Validate
  ========================================= */

  validate: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var resultArr = [];

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno, 10);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      if (!fDataObj) {
        resultArr[i] = 0;
        continue;
      }

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      var strictCase =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? String(fDataObj.strictcase).toLowerCase()
          : "no";

      var correctAnswers = getStrArray(fDataObj.answer, "activity");

      var userAnswers = [];

      var inputBoxes = elsQue[i].querySelectorAll("input");

      /*
       * جمع جميع الإجابات حسب ترتيب الحقول.
       */
      for (var a = 0; a < inputBoxes.length; a++) {
        var inputValue = inputBoxes[a].value || "";

        if (inputBoxes[a].dataset.type === "number") {
          userAnswers[a] = inputValue;
        } else {
          userAnswers[a] =
            strictCase === "yes" ? inputValue : inputValue.toLowerCase();
        }
      }

      var questionCorrect = true;

      /*
       * يجب أن يكون عدد الحقول مطابقًا
       * لعدد عناصر الإجابة.
       */
      if (correctAnswers.length !== userAnswers.length) {
        questionCorrect = false;
      } else {
        for (
          var answerIndex = 0;
          answerIndex < correctAnswers.length;
          answerIndex++
        ) {
          var correctValue =
            correctAnswers[answerIndex] !== undefined
              ? String(correctAnswers[answerIndex])
              : "";

          var userValue =
            userAnswers[answerIndex] !== undefined
              ? String(userAnswers[answerIndex])
              : "";

          if (strictCase !== "yes") {
            correctValue = correctValue.toLowerCase();

            userValue = userValue.toLowerCase();
          }

          /*
           * تجاهل المسافات والنقاط الأخيرة.
           */
          correctValue = correctValue
            .trim()
            .replace(/\.+$/, "")
            .replace(/\s/g, "");

          userValue = userValue.trim().replace(/\.+$/, "").replace(/\s/g, "");

          if (correctValue !== userValue) {
            questionCorrect = false;
            break;
          }
        }
      }

      if (questionCorrect) {
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

        if (
          fDataObj.audio !== "" &&
          fDataObj.audio !== "no" &&
          fDataObj.audioenable === "correct"
        ) {
          var audioIcons = elsQue[i].querySelectorAll(".audioIcon");

          for (
            var audioIndex = 0;
            audioIndex < audioIcons.length;
            audioIndex++
          ) {
            audioIcons[audioIndex].classList.remove("disabled");
          }
        }
      } else {
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

        if (
          fDataObj.audio !== "" &&
          fDataObj.audio !== "no" &&
          fDataObj.audioenable === "correct"
        ) {
          var disabledAudioIcons = elsQue[i].querySelectorAll(".audioIcon");

          for (
            var disabledAudioIndex = 0;
            disabledAudioIndex < disabledAudioIcons.length;
            disabledAudioIndex++
          ) {
            disabledAudioIcons[disabledAudioIndex].classList.add("disabled");
          }
        }
      }
    }

    console.log("FillIn result:", resultArr);

    var allCorrect =
      resultArr.length === numOfFillIns &&
      resultArr.every(function (result) {
        return result === 1;
      });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetBtn = document.querySelector(".resetBtn");

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },

  /* =========================================
     Reset
  ========================================= */

  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno, 10);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      var tick = elsQue[i].querySelector(".tick");

      var cross = elsQue[i].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (fDataObj) {
        if (fDataObj.audio !== "" && fDataObj.audio !== "no") {
          var audioIcons = elsQue[i].querySelectorAll(".audioIcon");

          for (
            var audioIndex = 0;
            audioIndex < audioIcons.length;
            audioIndex++
          ) {
            if (fDataObj.audioenable === "correct") {
              audioIcons[audioIndex].classList.add("disabled");
            } else if (fDataObj.audioenable === "default") {
              audioIcons[audioIndex].classList.remove("disabled");
            }
          }
        }
      }

      var inputBoxes = elsQue[i].querySelectorAll("input");

      for (var a = 0; a < inputBoxes.length; a++) {
        /*
         * الحروف الثابتة ترجع لقيمتها.
         */
        if (inputBoxes[a].dataset.fixed !== undefined) {
          inputBoxes[a].value = inputBoxes[a].dataset.fixed || "";

          inputBoxes[a].style.color = "black";

          continue;
        }

        /*
         * لا نحذف readonly مثل السؤال الأول.
         */
        if (
          inputBoxes[a].disabled === false &&
          inputBoxes[a].readOnly === false
        ) {
          inputBoxes[a].value = "";
          inputBoxes[a].style.color = "black";
        }
      }
    }

    var checkBtn = document.querySelector(".checkBtn");

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }

    var resetBtn = document.querySelector(".resetBtn");

    if (resetBtn) {
      resetBtn.classList.add("disabled");
    }
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
