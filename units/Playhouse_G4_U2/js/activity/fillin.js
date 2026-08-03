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
function normalizeFlexibleFillInAnswer(value, strictCase) {
  if (value === undefined || value === null) {
    return "";
  }

  var normalized = value.toString();

  /*
    توحيد apostrophe:
    didn’t
    didn't
  */
  normalized = normalized.replace(/[’‘`´]/g, "'");

  /*
    حذف علامات الترقيم الشائعة:
    English comma
    Arabic comma
    full stop
    question marks
    exclamation marks
    semicolon
    colon
  */
  normalized = normalized.replace(/[,.،؛;:!?؟]/g, "");

  /*
    توحيد المسافات
  */
  normalized = normalized.replace(/\s+/g, " ");

  normalized = normalized.trim();

  if (strictCase != "yes") {
    normalized = normalized.toLowerCase();
  }

  return normalized;
}

function getFillInAcceptedAnswers(questionObj) {
  var acceptedAnswers = [];

  /*
    الإجابة الأساسية
  */
  if (questionObj.answer !== undefined && questionObj.answer !== null) {
    if (Array.isArray(questionObj.answer)) {
      acceptedAnswers = acceptedAnswers.concat(questionObj.answer);
    } else {
      acceptedAnswers.push(questionObj.answer);
    }
  }

  /*
    الإجابات البديلة
  */
  if (
    questionObj.alternateanswer !== undefined &&
    questionObj.alternateanswer !== null
  ) {
    var alternate = questionObj.alternateanswer;

    if (Array.isArray(alternate)) {
      for (var i = 0; i < alternate.length; i++) {
        if (Array.isArray(alternate[i])) {
          acceptedAnswers = acceptedAnswers.concat(alternate[i]);
        } else {
          acceptedAnswers.push(alternate[i]);
        }
      }
    } else {
      acceptedAnswers.push(alternate);
    }
  }

  /*
    حذف القيم الفاضية
  */
  return acceptedAnswers.filter(function (answer) {
    return (
      answer !== undefined && answer !== null && answer.toString().trim() !== ""
    );
  });
}
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

    var resultArr = [];

    /*
    نخزن الإجابات المستخدمة داخل كل مجموعة
    حتى نمنع تكرار نفس الجواب في العمود نفسه.
  */
    var usedAnswersByGroup = {};

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

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
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var flexibleAnswer =
        fDataObj.flexibleanswer != undefined && fDataObj.flexibleanswer != null
          ? fDataObj.flexibleanswer.toLowerCase()
          : "no";

      /*
      هذا اختياري.
      الأسئلة القديمة ما فيها answergroup،
      لذلك لا تتأثر.
    */
      var answerGroup =
        fDataObj.answergroup != undefined && fDataObj.answergroup != null
          ? fDataObj.answergroup
          : "";

      var inputBoxes = elsQue[i].querySelectorAll("input");
      var editableInputs = [];
      var allInputsFilled = true;

      for (var a = 0; a < inputBoxes.length; a++) {
        var isReadOnly =
          inputBoxes[a].getAttribute("readonly") != null ||
          inputBoxes[a].getAttribute("disabled") != null;

        if (!isReadOnly) {
          editableInputs.push(inputBoxes[a]);

          if (inputBoxes[a].value.trim() == "") {
            allInputsFilled = false;
          }
        }
      }

      /*
      الأيقونة تظهر فقط إذا الحقل معبأ.
    */
      elsQue[i].dataset.showIcon =
        allInputsFilled && editableInputs.length > 0 ? "true" : "false";

      var questionCorrect = false;
      var normalizedUserAnswer = "";

      /*
      التصحيح المرن:
      يقبل answer و alternateanswer،
      ويتجاهل الفواصل وعلامات الترقيم والمسافات الزائدة.
    */
      if (
        flexibleAnswer == "yes" &&
        editableInputs.length == 1 &&
        allInputsFilled
      ) {
        normalizedUserAnswer = normalizeFlexibleFillInAnswer(
          editableInputs[0].value,
          strictCase,
        );

        var acceptedAnswers = getFillInAcceptedAnswers(fDataObj);

        for (var ansIndex = 0; ansIndex < acceptedAnswers.length; ansIndex++) {
          var normalizedAcceptedAnswer = normalizeFlexibleFillInAnswer(
            acceptedAnswers[ansIndex],
            strictCase,
          );

          if (normalizedUserAnswer == normalizedAcceptedAnswer) {
            questionCorrect = true;
            break;
          }
        }
      } else {
        /*
        التصحيح القديم للأسئلة التي لا تحتوي:
        flexibleanswer: "yes"
      */

        var correctAnswers = getStrArray(fDataObj.answer, "activity");

        var userAnswers = [];
        var correctCount = 0;
        var wrongCount = 0;

        for (var u = 0; u < inputBoxes.length; u++) {
          if (inputBoxes[u].value.length > 0) {
            if (inputBoxes[u].dataset.type != "number") {
              userAnswers[u] =
                strictCase == "yes"
                  ? inputBoxes[u].value
                  : inputBoxes[u].value.toLowerCase();
            } else {
              userAnswers[u] = inputBoxes[u].value;
            }
          }
        }

        if (
          userAnswers.length > 0 &&
          correctAnswers.length == userAnswers.length
        ) {
          for (var cc = 0; cc < correctAnswers.length; cc++) {
            correctAnswers[cc] =
              strictCase == "yes"
                ? correctAnswers[cc]
                : correctAnswers[cc].toLowerCase();

            correctAnswers[cc] = correctAnswers[cc].replace(/\s/g, "");

            userAnswers[cc] = userAnswers[cc].replace(/\s/g, "");

            if (correctAnswers[cc] == userAnswers[cc]) {
              correctCount++;
            } else {
              wrongCount++;
            }
          }
        } else {
          wrongCount++;
        }

        questionCorrect =
          correctCount == userAnswers.length &&
          wrongCount == 0 &&
          userAnswers.length > 0;
      }

      /*
      منع تكرار نفس الإجابة داخل المجموعة نفسها.
      يعمل فقط إذا السؤال يحتوي answergroup.
    */
      if (questionCorrect && answerGroup != "" && normalizedUserAnswer != "") {
        if (!usedAnswersByGroup[answerGroup]) {
          usedAnswersByGroup[answerGroup] = [];
        }

        if (
          usedAnswersByGroup[answerGroup].indexOf(normalizedUserAnswer) != -1
        ) {
          questionCorrect = false;
        } else {
          usedAnswersByGroup[answerGroup].push(normalizedUserAnswer);
        }
      }

      if (questionCorrect) {
        resultArr[i] = 1;

        if (tick) {
          tick.style.display = "block";
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

      if (iconWrap && elsQue[i].dataset.showIcon == "true") {
        iconWrap.style.display = "block";
      }
    }

    var allCorrect =
      resultArr.indexOf(0) == -1 && resultArr.length == numOfFillIns;

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
