//  ****************************************** //
//  FillIn
//  Linked polite requests validation
//  ****************************************** //

window.FillIn = function (obj, dataObj) {
  var optionsElements = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: optionsElements.length > 0 ? optionsElements[0] : null,

    has_audio:
      obj[0].dataset.audio !== undefined && obj[0].dataset.audio !== null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

/* =========================================================
   Normalize linked answers
========================================================= */

function normalizeLinkedAnswer(value) {
  return (
    String(value || "")
      .toLowerCase()

      /*
          توحيد apostrophe:
          don't
          don’t
          dont
        */
      .replace(/[’‘`´]/g, "'")

      /*
          حذف apostrophe.
        */
      .replace(/'/g, "")

      /*
          حذف جميع أنواع الفواصل
          وعلامات الترقيم.
        */
      .replace(/[,،，﹐､.!?؟؛;:]/g, "")

      /*
          حذف المسافات.
        */
      .replace(/\s+/g, "")

      .trim()
  );
}

/* =========================================================
   Check one linked pair
========================================================= */

function validateLinkedPair(questionValue, responseValue, pairType) {
  var question = normalizeLinkedAnswer(questionValue);

  var response = normalizeLinkedAnswer(responseValue);

  var isWouldQuestion = question === "wouldyoulike";

  var isDoQuestion = question === "doyouwant";

  if (!isWouldQuestion && !isDoQuestion) {
    return false;
  }

  /* Positive conversation */

  if (pairType === "positive") {
    if (isWouldQuestion) {
      return ["iwould", "idloveto", "iwouldloveto"].indexOf(response) !== -1;
    }

    if (isDoQuestion) {
      return ["ido"].indexOf(response) !== -1;
    }
  }

  /* Negative conversation */

  if (pairType === "negative") {
    if (isWouldQuestion) {
      return ["iwouldnt", "iwouldnot"].indexOf(response) !== -1;
    }

    if (isDoQuestion) {
      return ["idont", "idonot"].indexOf(response) !== -1;
    }
  }

  return false;
}

/* =========================================================
   Hide one pair result
========================================================= */

function hideLinkedPairResult(pairElement) {
  if (!pairElement) {
    return;
  }

  var result = pairElement.querySelector(".linked_pair_result");

  var tick = pairElement.querySelector(".linked_pair_tick");

  var cross = pairElement.querySelector(".linked_pair_cross");

  if (result) {
    result.style.display = "none";
  }

  if (tick) {
    tick.style.display = "none";
  }

  if (cross) {
    cross.style.display = "none";
  }
}

/* =========================================================
   Show one result for the whole pair
========================================================= */

function showLinkedPairResult(pairElement, isCorrect) {
  if (!pairElement) {
    return;
  }

  var result = pairElement.querySelector(".linked_pair_result");

  var tick = pairElement.querySelector(".linked_pair_tick");

  var cross = pairElement.querySelector(".linked_pair_cross");

  if (result) {
    result.style.display = "flex";
  }

  if (isCorrect) {
    if (tick) {
      tick.style.display = "block";
    }

    if (cross) {
      cross.style.display = "none";
    }
  } else {
    if (tick) {
      tick.style.display = "none";
    }

    if (cross) {
      cross.style.display = "block";
    }
  }
}

/* =========================================================
   FillIn prototype
========================================================= */

FillIn.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  /* =====================================================
       Input listener
    ===================================================== */

  listen: function (ob) {
    var activityArea = ob.activity_area;

    if (!activityArea) {
      return;
    }

    var inputs = activityArea.querySelectorAll("input");

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      inputs[inputIndex].addEventListener("input", function () {
        this.style.color = "black";

        if (this.dataset.type === "number") {
          this.value = this.value.replace(/\D/g, "");
        }

        /*
                      عند التعديل نخفي نتيجة
                      المجموعة حتى يضغط Check مرة أخرى.
                    */

        var pairElement = this.closest(".linked_pair");

        if (pairElement) {
          hideLinkedPairResult(pairElement);
        }

        var checkButton = document.querySelector(".checkBtn");

        var resetButton = document.querySelector(".resetBtn");

        if (checkButton) {
          checkButton.classList.remove("disabled");
        }

        if (resetButton) {
          resetButton.classList.remove("disabled");
        }
      });
    }
  },

  /* =====================================================
       Main validation
    ===================================================== */

  validate: function () {
    var ob = this.ob;

    if (!ob.activity_area) {
      return;
    }

    if (ob.data_obj.validationMode === "linked_polite_requests") {
      this.validateLinkedPoliteRequests();

      return;
    }

    this.validateDefaultFillIn();
  },

  /* =====================================================
       Linked validation
    ===================================================== */

  validateLinkedPoliteRequests: function () {
    var activityArea = this.ob.activity_area;

    var pairElements = activityArea.querySelectorAll(".linked_pair");

    var pairResults = [];

    for (var pairIndex = 0; pairIndex < pairElements.length; pairIndex++) {
      var pairElement = pairElements[pairIndex];

      var questionInput = pairElement.querySelector(
        'input[data-pair-role="question"]',
      );

      var responseInput = pairElement.querySelector(
        'input[data-pair-role="response"]',
      );

      var questionValue = questionInput ? questionInput.value : "";

      var responseValue = responseInput ? responseInput.value : "";

      var pairType = pairElement.dataset.pairType || "";

      /*
          حتى لو أحد الفراغين أو كلاهما فارغ،
          النتيجة ستكون خطأ ويظهر X.
        */
      var pairCorrect = validateLinkedPair(
        questionValue,
        responseValue,
        pairType,
      );

      pairResults[pairIndex] = pairCorrect ? 1 : 0;

      /*
          عند الضغط على Check تظهر علامة واحدة
          دائمًا لكل مجموعة:
          صح إذا الاثنان صحيحان، وإكس في أي حالة أخرى.
        */
      showLinkedPairResult(pairElement, pairCorrect);
    }

    var allCorrect =
      pairResults.length === pairElements.length &&
      pairResults.every(function (result) {
        return result === 1;
      });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.querySelector(".resetBtn");

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /* =====================================================
       Original validation for other activities
    ===================================================== */

  validateDefaultFillIn: function () {
    var ob = this.ob;

    var activityArea = ob.activity_area;

    var questions = activityArea.querySelectorAll(".que");

    var numOfFillIns = questions.length;

    var resultArr = [];

    for (
      var questionIndex = 0;
      questionIndex < questions.length;
      questionIndex++
    ) {
      resultArr[questionIndex] = 0;

      var dataIndex = parseInt(questions[questionIndex].dataset.qno, 10);

      var questionData = ob.data_obj.questions[dataIndex - 1];

      if (!questionData) {
        continue;
      }

      var tick = questions[questionIndex].querySelector(".tick");

      var cross = questions[questionIndex].querySelector(".cross");

      var iconWrap = questions[questionIndex].querySelector(".icon_wrap");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      var strictCase =
        questionData.strictcase !== undefined &&
        questionData.strictcase !== null
          ? String(questionData.strictcase).toLowerCase()
          : "no";

      var correctAnswers = getStrArray(questionData.answer, "activity");

      var inputBoxes = questions[questionIndex].querySelectorAll("input");

      var userAnswers = [];

      var correctCount = 0;

      var wrongCount = 0;

      for (var inputIndex = 0; inputIndex < inputBoxes.length; inputIndex++) {
        if (inputBoxes[inputIndex].value.length > 0) {
          var inputValue = inputBoxes[inputIndex].value;

          if (strictCase !== "yes") {
            inputValue = inputValue.toLowerCase();
          }

          userAnswers[inputIndex] = inputValue;
        }
      }

      if (
        userAnswers.length > 0 &&
        correctAnswers.length === userAnswers.length
      ) {
        for (
          var answerIndex = 0;
          answerIndex < correctAnswers.length;
          answerIndex++
        ) {
          var correctValue = String(correctAnswers[answerIndex]);

          var userValue = String(userAnswers[answerIndex]);

          if (strictCase !== "yes") {
            correctValue = correctValue.toLowerCase();
          }

          correctValue = correctValue.replace(/\s/g, "");

          userValue = userValue.replace(/\s/g, "");

          if (correctValue === userValue) {
            correctCount++;
          } else {
            wrongCount++;
          }
        }
      } else {
        wrongCount++;
      }

      var questionCorrect =
        correctCount === correctAnswers.length && wrongCount === 0;

      if (iconWrap) {
        iconWrap.style.display = "block";
      }

      if (questionCorrect) {
        resultArr[questionIndex] = 1;

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        resultArr[questionIndex] = 0;

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }
    }

    var allCorrect =
      resultArr.length === numOfFillIns &&
      resultArr.every(function (result) {
        return result === 1;
      });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.querySelector(".resetBtn");

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /* =====================================================
       Reset
    ===================================================== */

  reset: function () {
    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    var inputs = activityArea.querySelectorAll("input");

    for (var inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      var input = inputs[inputIndex];

      var isEditable =
        input.getAttribute("disabled") === null &&
        input.getAttribute("readonly") === null;

      if (isEditable) {
        input.value = "";

        input.style.color = "black";
      }
    }

    var pairElements = activityArea.querySelectorAll(".linked_pair");

    for (var pairIndex = 0; pairIndex < pairElements.length; pairIndex++) {
      hideLinkedPairResult(pairElements[pairIndex]);
    }

    var iconWraps = activityArea.querySelectorAll(".icon_wrap");

    for (var iconIndex = 0; iconIndex < iconWraps.length; iconIndex++) {
      iconWraps[iconIndex].style.display = "none";
    }

    var checkButton = document.querySelector(".checkBtn");

    var resetButton = document.querySelector(".resetBtn");

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    if (resetButton) {
      resetButton.classList.add("disabled");
    }
  },

  /* =====================================================
       Initial settings
    ===================================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
