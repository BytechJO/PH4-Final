// ******************************************
// FillIn - Version no: 1
// Updated validation:
// - Supports alternate answers
// - Supports fixed rows without inputs
// - Ignores final punctuation
// - Supports strictcase
// ******************************************

window.FillIn = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

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

    this.listen(ob);
  },

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener("input", function () {
        $(this).css("color", "black");

        var value = this.value;

        if ($(this).data("type") === "number") {
          if ($.isNumeric(value) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }

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

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var resultArr = [];

    /*
     * توحيد الإجابة قبل المقارنة
     */
    function normalizeAnswer(value, strictCase) {
      value = value === undefined || value === null ? "" : String(value);

      /*
       * توحيد apostrophe
       */
      value = value.replace(/[’‘`]/g, "'").trim();

      /*
       * تجاهل حالة الأحرف
       */
      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      /*
       * تجاهل النقطة أو علامة السؤال أو التعجب
       * فقط إذا كانت في نهاية الجملة
       */
      value = value.replace(/[.?!]+$/g, "");

      /*
       * حذف المسافات الزائدة
       */
      value = value.replace(/\s+/g, " ");

      /*
       * إزالة المسافة قبل علامات الترقيم
       */
      value = value.replace(/\s+([,;:])/g, "$1");

      /*
       * توحيد المسافة بعد الفاصلة
       */
      value = value.replace(/,\s*/g, ", ");

      return value.trim();
    }

    /*
     * تحويل الإجابة إلى array
     */
    function toArray(value) {
      if (Array.isArray(value)) {
        return value;
      }

      if (value === undefined || value === null || value === "") {
        return [];
      }

      return [value];
    }

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var questionElement = elsQue[i];

      var questionIndex = parseInt(questionElement.dataset.qno, 10);

      var questionData = ob.data_obj.questions[questionIndex - 1];

      var tick = questionElement.querySelector(".tick");

      var cross = questionElement.querySelector(".cross");

      var iconWrap = questionElement.querySelector(".icon_wrap");

      /*
       * إخفاء الأيقونات قبل الفحص
       */
      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      var inputBoxes = questionElement.querySelectorAll("input");

      /*
       * السطر الثابت الذي لا يحتوي input
       * يعتبر صحيحًا تلقائيًا
       */
      if (inputBoxes.length === 0) {
        resultArr[i] = 1;

        questionElement.dataset.showIcon = "false";

        continue;
      }

      var strictCase =
        questionData.strictcase !== undefined &&
        questionData.strictcase !== null
          ? String(questionData.strictcase).toLowerCase()
          : "no";

      var correctAnswers = toArray(questionData.answer);

      var alternateAnswers = toArray(questionData.alternateanswer);

      var questionCorrect = true;

      var allInputsAnswered = true;

      var editableInputsCount = 0;

      for (var inputIndex = 0; inputIndex < inputBoxes.length; inputIndex++) {
        var input = inputBoxes[inputIndex];

        var isReadOnly =
          input.hasAttribute("disabled") || input.hasAttribute("readonly");

        /*
         * تجاهل الحقول readonly
         */
        if (isReadOnly) {
          continue;
        }

        editableInputsCount++;

        var userAnswer = normalizeAnswer(input.value, strictCase);

        /*
         * input فارغ
         */
        if (userAnswer === "") {
          allInputsAnswered = false;

          questionCorrect = false;

          continue;
        }

        var acceptedAnswers = [];

        /*
         * الإجابة الأساسية لهذا input
         */
        if (
          correctAnswers[inputIndex] !== undefined &&
          correctAnswers[inputIndex] !== null &&
          correctAnswers[inputIndex] !== ""
        ) {
          acceptedAnswers.push(correctAnswers[inputIndex]);
        }

        /*
         * الإجابات البديلة
         *
         * الشكل المتوقع:
         *
         * alternateanswer: [
         *   ["answer 1", "answer 2"]
         * ]
         */
        if (Array.isArray(alternateAnswers[inputIndex])) {
          acceptedAnswers = acceptedAnswers.concat(
            alternateAnswers[inputIndex],
          );
        } else if (
          alternateAnswers[inputIndex] !== undefined &&
          alternateAnswers[inputIndex] !== null &&
          alternateAnswers[inputIndex] !== ""
        ) {
          acceptedAnswers.push(alternateAnswers[inputIndex]);
        }

        var inputCorrect = false;

        for (
          var answerIndex = 0;
          answerIndex < acceptedAnswers.length;
          answerIndex++
        ) {
          var acceptedAnswer = normalizeAnswer(
            acceptedAnswers[answerIndex],
            strictCase,
          );

          if (userAnswer === acceptedAnswer) {
            inputCorrect = true;

            break;
          }
        }

        if (!inputCorrect) {
          questionCorrect = false;
        }
      }
      // السؤال الذي يحتوي فقط على readonly يعتبر صحيحًا
      if (editableInputsCount === 0) {
        resultArr[i] = 1;
        questionElement.dataset.showIcon = "false";

        if (iconWrap) {
          iconWrap.style.display = "none";
        }

        continue;
      }
      questionElement.dataset.showIcon =
        allInputsAnswered && editableInputsCount > 0 ? "true" : "false";

      /*
       * السؤال صحيح
       */
      if (questionCorrect && allInputsAnswered && editableInputsCount > 0) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (
          questionData.audio !== "" &&
          questionData.audio !== "no" &&
          questionData.audioenable === "correct"
        ) {
          var correctAudio = questionElement.querySelector(".audioIcon");

          if (correctAudio) {
            correctAudio.classList.remove("disabled");
          }
        }
      } else {
        /*
         * السؤال خطأ
         */
        resultArr[i] = 0;

        if (cross) {
          cross.style.display = "block";
        }

        if (
          questionData.audio !== "" &&
          questionData.audio !== "no" &&
          questionData.audioenable === "correct"
        ) {
          var wrongAudio = questionElement.querySelector(".audioIcon");

          if (wrongAudio) {
            wrongAudio.classList.add("disabled");
          }
        }
      }

      /*
       * إظهار icon_wrap فقط للأسئلة
       * التي تحتوي inputs مكتملة
       */
      if (iconWrap && questionElement.dataset.showIcon === "true") {
        iconWrap.style.display = "block";
      }
    }

    /*
     * جميع النتائج يجب أن تكون 1
     */
    var allCorrect = resultArr.every(function (result) {
      return result === 1;
    });

    console.log(
      "FillIn results:",
      resultArr,
      "Total:",
      numOfFillIns,
      "All correct:",
      allCorrect,
    );

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var questionIndex = parseInt(elsQue[i].dataset.qno, 10);

      var questionData = ob.data_obj.questions[questionIndex - 1];

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

      /*
       * إعادة إعداد الصوت
       */
      if (questionData.audio !== "" && questionData.audio !== "no") {
        var audioIcon = elsQue[i].querySelector(".audioIcon");

        if (audioIcon) {
          audioIcon.style.display = "block";

          if (questionData.audioenable === "correct") {
            audioIcon.classList.add("disabled");
          } else if (questionData.audioenable === "default") {
            audioIcon.classList.remove("disabled");
          }
        }
      }

      /*
       * تفريغ inputs القابلة للتعديل فقط
       */
      var inputBoxes = elsQue[i].querySelectorAll("input");

      for (var inputIndex = 0; inputIndex < inputBoxes.length; inputIndex++) {
        var input = inputBoxes[inputIndex];

        var isReadOnly =
          input.hasAttribute("disabled") || input.hasAttribute("readonly");

        if (!isReadOnly) {
          input.value = "";

          input.style.color = "black";
        }
      }
    }

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
