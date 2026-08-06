//  ****************************************** //
//  FillIn - Silent E Words Activity
//  ****************************************** //

window.FillIn = function (
  obj,
  dataObj
) {
  var optionsElements =
    obj[0].getElementsByClassName(
      "options"
    );

  this.settings = {
    activity_area:
      optionsElements.length > 0
        ? optionsElements[0]
        : null,

    has_audio:
      obj[0].dataset.audio !==
        undefined &&
      obj[0].dataset.audio !== null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};


/* =========================================
   Normalize answer
========================================= */

function normalizeSilentEAnswer(value) {
  return String(value || "")
    .toLowerCase()

    /*
      توحيد apostrophe في حال وجد.
    */
    .replace(/[’‘`´]/g, "'")

    /*
      حذف علامات الترقيم.
    */
    .replace(
      /[,،，﹐､.!?؟؛;:'"]/g,
      ""
    )

    /*
      حذف المسافات كلها.
    */
    .replace(/\s+/g, "")

    .trim();
}


/* =========================================
   Hide result icons
========================================= */

function hideSilentEResult(
  questionElement
) {
  if (!questionElement) {
    return;
  }

  var iconWrap =
    questionElement.querySelector(
      ".icon_wrap"
    );

  var tick =
    questionElement.querySelector(
      ".tick"
    );

  var cross =
    questionElement.querySelector(
      ".cross"
    );

  if (iconWrap) {
    iconWrap.style.display =
      "none";
  }

  if (tick) {
    tick.style.display =
      "none";
  }

  if (cross) {
    cross.style.display =
      "none";
  }
}


/* =========================================
   Show result icon
========================================= */

function showSilentEResult(
  questionElement,
  isCorrect
) {
  if (!questionElement) {
    return;
  }

  var iconWrap =
    questionElement.querySelector(
      ".icon_wrap"
    );

  var tick =
    questionElement.querySelector(
      ".tick"
    );

  var cross =
    questionElement.querySelector(
      ".cross"
    );

  if (iconWrap) {
    iconWrap.style.display =
      "block";
  }

  if (isCorrect) {
    if (tick) {
      tick.style.display =
        "block";
    }

    if (cross) {
      cross.style.display =
        "none";
    }
  } else {
    if (tick) {
      tick.style.display =
        "none";
    }

    if (cross) {
      cross.style.display =
        "block";
    }
  }
}


/* =========================================
   FillIn prototype
========================================= */

FillIn.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },


  /* =====================================
     Input listener
  ===================================== */

  listen: function (ob) {
    var activityArea =
      ob.activity_area;

    if (!activityArea) {
      return;
    }

    var inputs =
      activityArea.querySelectorAll(
        "input"
      );

    for (
      var inputIndex = 0;
      inputIndex < inputs.length;
      inputIndex++
    ) {
      inputs[
        inputIndex
      ].addEventListener(
        "input",
        function () {
          this.style.color =
            "black";

          if (
            this.dataset.type ===
            "number"
          ) {
            this.value =
              this.value.replace(
                /\D/g,
                ""
              );
          }

          /*
            عند تعديل الإجابة نخفي
            علامتها حتى يعمل Check مرة ثانية.
          */

          var questionElement =
            this.closest(".que");

          hideSilentEResult(
            questionElement
          );

          var checkButton =
            document.querySelector(
              ".checkBtn"
            );

          var resetButton =
            document.querySelector(
              ".resetBtn"
            );

          if (checkButton) {
            checkButton.classList.remove(
              "disabled"
            );
          }

          if (resetButton) {
            resetButton.classList.remove(
              "disabled"
            );
          }
        }
      );
    }
  },


  /* =====================================
     Validate
  ===================================== */

  validate: function () {
    var ob = this.ob;

    if (!ob.activity_area) {
      return;
    }

    /*
      الفاليديشن الخاص بهذا النشاط.
    */

    if (
      ob.data_obj.validationMode ===
      "silent_e_words"
    ) {
      this.validateSilentEWords();

      return;
    }

    /*
      حماية في حال تم استخدام الملف
      مع نشاط آخر بالغلط.
    */

    showFeedback(false, false);
  },


  /* =====================================
     Silent E validation
  ===================================== */

  validateSilentEWords:
    function () {
      var activityArea =
        this.ob.activity_area;

      var questions =
        activityArea.querySelectorAll(
          ".silent_e_question"
        );

      var acceptedAnswers =
        Array.isArray(
          this.ob.data_obj
            .unorderedAnswers
        )
          ? this.ob.data_obj
              .unorderedAnswers
          : [];

      var normalizedAnswers = [];

      for (
        var answerIndex = 0;
        answerIndex <
        acceptedAnswers.length;
        answerIndex++
      ) {
        normalizedAnswers.push(
          normalizeSilentEAnswer(
            acceptedAnswers[
              answerIndex
            ]
          )
        );
      }

      /*
        usedAnswers تمنع تكرار
        نفس الكلمة مرتين.
      */

      var usedAnswers = [];

      var resultArr = [];

      for (
        var questionIndex = 0;
        questionIndex <
        questions.length;
        questionIndex++
      ) {
        var questionElement =
          questions[questionIndex];

        var input =
          questionElement.querySelector(
            "input"
          );

        var userValue =
          input ? input.value : "";

        var normalizedUserValue =
          normalizeSilentEAnswer(
            userValue
          );

        var isFilled =
          normalizedUserValue !== "";

        var isAccepted =
          normalizedAnswers.indexOf(
            normalizedUserValue
          ) !== -1;

        var isDuplicate =
          usedAnswers.indexOf(
            normalizedUserValue
          ) !== -1;

        /*
          صحيح فقط إذا:
          1. الخانة ليست فارغة.
          2. الكلمة ضمن الأجوبة.
          3. لم يتم استخدامها سابقًا.
        */

        var isCorrect =
          isFilled &&
          isAccepted &&
          !isDuplicate;

        if (isCorrect) {
          usedAnswers.push(
            normalizedUserValue
          );

          resultArr[
            questionIndex
          ] = 1;
        } else {
          resultArr[
            questionIndex
          ] = 0;
        }

        /*
          عند Check تظهر علامة
          لكل خانة حتى لو كانت فارغة.
        */

        showSilentEResult(
          questionElement,
          isCorrect
        );
      }

      var allCorrect =
        resultArr.length ===
          questions.length &&
        resultArr.every(
          function (result) {
            return result === 1;
          }
        );

      showFeedback(
        true,
        allCorrect
      );

      if (allCorrect) {
        var resetButton =
          document.querySelector(
            ".resetBtn"
          );

        if (resetButton) {
          resetButton.classList.add(
            "disabled"
          );
        }
      }
    },


  /* =====================================
     Reset
  ===================================== */

  reset: function () {
    var activityArea =
      this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    var questions =
      activityArea.querySelectorAll(
        ".silent_e_question"
      );

    for (
      var questionIndex = 0;
      questionIndex <
      questions.length;
      questionIndex++
    ) {
      var questionElement =
        questions[questionIndex];

      var input =
        questionElement.querySelector(
          "input"
        );

      if (input) {
        var isEditable =
          input.getAttribute(
            "disabled"
          ) === null &&
          input.getAttribute(
            "readonly"
          ) === null;

        if (isEditable) {
          input.value = "";

          input.style.color =
            "black";
        }
      }

      hideSilentEResult(
        questionElement
      );
    }

    var checkButton =
      document.querySelector(
        ".checkBtn"
      );

    var resetButton =
      document.querySelector(
        ".resetBtn"
      );

    if (checkButton) {
      checkButton.classList.add(
        "disabled"
      );
    }

    if (resetButton) {
      resetButton.classList.add(
        "disabled"
      );
    }
  },


  /* =====================================
     Initial settings
  ===================================== */

  initialSettings:
    function () {
      this.reset();

      initialSettingsDone(1);
    },
};