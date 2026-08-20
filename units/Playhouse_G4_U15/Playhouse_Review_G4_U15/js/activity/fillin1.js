//  ****************************************** //
//  FillIn - Version no: 2
//  Character Inputs + Auto Next + Word Validation
//  ****************************************** //

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
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =========================================================
  // هل السؤال يحتاج جواب؟
  // =========================================================

  isAnswerQuestion: function (questionObj) {
    if (!questionObj || !Array.isArray(questionObj.answer)) {
      return false;
    }

    // لازم يكون في Answer حقيقي مش ""
    return questionObj.answer.some(function (ans) {
      return ans !== undefined && ans !== null && String(ans).trim() !== "";
    });
  },

  // =========================================================
  // هل السؤال Character By Character؟
  // مثال:
  // answer: ["m","i","n","e"]
  // =========================================================

  isCharacterQuestion: function (questionObj, inputs) {
    if (!this.isAnswerQuestion(questionObj)) {
      return false;
    }

    if (!inputs || inputs.length === 0) {
      return false;
    }

    // عدد الإجابات لازم يساوي عدد الـ inputs
    if (questionObj.answer.length !== inputs.length) {
      return false;
    }

    // كل Answer لازم يكون حرف واحد
    return questionObj.answer.every(function (ans) {
      return String(ans).length === 1;
    });
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    var groups = e.querySelectorAll(".img_fillin_gr");

    // -----------------------------------------------------
    // نمر على كل كلمة / سؤال
    // -----------------------------------------------------

    for (var g = 0; g < groups.length; g++) {
      var qNo = parseInt(groups[g].dataset.qno);

      if (isNaN(qNo)) {
        continue;
      }

      var questionObj = ob.data_obj.questions[qNo - 1];

      // نتجاهل Subject / Object / I / me ...
      if (!self.isAnswerQuestion(questionObj)) {
        continue;
      }

      var inputs = groups[g].querySelectorAll("input");

      // -------------------------------------------------
      // إذا الإجابات حروف منفصلة
      // -------------------------------------------------

      var characterMode = self.isCharacterQuestion(questionObj, inputs);

      if (characterMode) {
        for (var c = 0; c < inputs.length; c++) {
          inputs[c].setAttribute("maxlength", "1");

          inputs[c].classList.add("character_input");
        }
      }
    }

    // =====================================================
    // جميع الـ Inputs القابلة للكتابة
    // =====================================================

    var allInputs = e.querySelectorAll("input");

    for (var i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];

      // -------------------------------------------------
      // INPUT
      // -------------------------------------------------

      input.addEventListener("input", function () {
        $(this).css("color", "black");

        var v = this.value;

        // =========================================
        // Number
        // =========================================

        if ($(this).data("type") === "number") {
          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }

        // =========================================
        // Character mode
        // حرف واحد فقط
        // =========================================

        if (this.classList.contains("character_input")) {
          if (this.value.length > 1) {
            this.value = this.value.charAt(0);
          }

          // -------------------------------------
          // إذا كتب حرف انتقل للي بعده
          // -------------------------------------

          if (this.value.length === 1) {
            self.focusNextInput(this);
          }
        }

        // =========================================
        // Enable buttons
        // =========================================

        var checkBtn = document.getElementsByClassName("checkBtn")[0];

        var resetBtn = document.getElementsByClassName("resetBtn")[0];

        if (checkBtn) {
          checkBtn.classList.remove("disabled");
        }

        if (resetBtn) {
          resetBtn.classList.remove("disabled");
        }
      });

      // -------------------------------------------------
      // KEYDOWN
      // -------------------------------------------------

      input.addEventListener("keydown", function (event) {
        // =========================================
        // Backspace
        // إذا الخانة فاضية ارجع للي قبلها
        // =========================================

        if (
          event.key === "Backspace" &&
          this.value === "" &&
          this.classList.contains("character_input")
        ) {
          var previous = self.getPreviousInput(this);

          if (previous) {
            event.preventDefault();

            previous.focus();

            previous.value = "";
          }
        }

        // =========================================
        // Arrow Right
        // =========================================

        if (event.key === "ArrowRight") {
          var next = self.getNextInput(this);

          if (next) {
            event.preventDefault();

            next.focus();
          }
        }

        // =========================================
        // Arrow Left
        // =========================================

        if (event.key === "ArrowLeft") {
          var prev = self.getPreviousInput(this);

          if (prev) {
            event.preventDefault();

            prev.focus();
          }
        }
      });
    }
  },

  // =========================================================
  // Get editable inputs only
  // =========================================================

  getEditableInputs: function () {
    var e = this.ob.activity_area;

    var inputs = e.querySelectorAll("input");

    var editable = [];

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].disabled || inputs[i].readOnly) {
        continue;
      }

      var group = inputs[i].closest(".img_fillin_gr");

      if (!group) {
        continue;
      }

      var qNo = parseInt(group.dataset.qno);

      if (isNaN(qNo)) {
        continue;
      }

      var questionObj = this.ob.data_obj.questions[qNo - 1];

      // فقط الأسئلة اللي بدها جواب
      if (!this.isAnswerQuestion(questionObj)) {
        continue;
      }

      editable.push(inputs[i]);
    }

    return editable;
  },

  // =========================================================
  // Next Input
  // =========================================================

  getNextInput: function (current) {
    var inputs = this.getEditableInputs();

    var index = inputs.indexOf(current);

    if (index !== -1 && index < inputs.length - 1) {
      return inputs[index + 1];
    }

    return null;
  },

  // =========================================================
  // Previous Input
  // =========================================================

  getPreviousInput: function (current) {
    var inputs = this.getEditableInputs();

    var index = inputs.indexOf(current);

    if (index > 0) {
      return inputs[index - 1];
    }

    return null;
  },

  // =========================================================
  // Focus Next
  // =========================================================

  focusNextInput: function (current) {
    var next = this.getNextInput(current);

    if (next) {
      next.focus();

      // إذا في قيمة حددها
      if (next.value) {
        next.select();
      }
    }
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var self = this;

    var ob = this.ob;

    var e = ob.activity_area;

    // جميع الـ groups الموجودة
    var allGroups = e.querySelectorAll(".img_fillin_gr");

    // =============================================
    // نخزن فقط الكلمات اللي بدها جواب
    // =============================================

    var answerGroups = [];

    for (var g = 0; g < allGroups.length; g++) {
      var qNo = parseInt(allGroups[g].dataset.qno);

      if (isNaN(qNo)) {
        continue;
      }

      var qData = ob.data_obj.questions[qNo - 1];

      if (!self.isAnswerQuestion(qData)) {
        // static cell
        // لا نحسبها نهائياً
        continue;
      }

      var inputs = allGroups[g].querySelectorAll("input");

      if (inputs.length === 0) {
        continue;
      }

      answerGroups.push(allGroups[g]);
    }

    var numOfFillIns = answerGroups.length;

    var resultArr = [];

    // =============================================
    // Validate each WORD
    // =============================================

    for (var i = 0; i < answerGroups.length; i++) {
      var group = answerGroups[i];

      var fIndx = parseInt(group.dataset.qno);

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var tick = group.querySelector(".tick");

      var cross = group.querySelector(".cross");

      var iconWrap = group.querySelector(".icon_wrap");

      // نخفي القديم
      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      var inputBoxes = group.querySelectorAll("input");

      var correctAnswers = getStrArray(fDataObj.answer, "activity");

      var strictCase =
        fDataObj.strictcase !== undefined && fDataObj.strictcase !== null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var wordCorrect = true;

      // =========================================
      // لازم عدد الـ inputs يساوي الإجابات
      // =========================================

      if (inputBoxes.length !== correctAnswers.length) {
        wordCorrect = false;
      } else {
        // =====================================
        // نفحص الكلمة كاملة
        // =====================================

        for (var a = 0; a < correctAnswers.length; a++) {
          var correct = String(correctAnswers[a]).replace(/\s/g, "");

          var user = String(inputBoxes[a].value || "").replace(/\s/g, "");

          if (strictCase !== "yes") {
            correct = correct.toLowerCase();

            user = user.toLowerCase();
          }

          // خلية فاضية أو جواب غلط
          if (user === "" || user !== correct) {
            wordCorrect = false;

            break;
          }
        }
      }

      // =========================================
      // نتيجة الكلمة كاملة
      // =========================================

      if (wordCorrect) {
        resultArr.push(1);

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }

        // Audio
        if (fDataObj.audio !== "" && fDataObj.audio !== "no") {
          if (
            fDataObj.audioenable === "correct" &&
            group.querySelectorAll(".audioIcon").length > 0
          ) {
            group.querySelector(".audioIcon").classList.remove("disabled");
          }
        }
      } else {
        resultArr.push(0);

        // =====================================
        // X واحدة للكلمة كلها
        // =====================================

        if (cross) {
          cross.style.display = "block";
        }

        if (tick) {
          tick.style.display = "none";
        }

        if (fDataObj.audio !== "" && fDataObj.audio !== "no") {
          if (
            fDataObj.audioenable === "correct" &&
            group.querySelectorAll(".audioIcon").length > 0
          ) {
            group.querySelector(".audioIcon").classList.add("disabled");
          }
        }
      }

      // =========================================
      // Icon Wrap واحد للكلمة
      // =========================================

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    // =====================================================
    // ALL CORRECT
    // فقط الكلمات المطلوبة
    // =====================================================

    var allCorrect =
      numOfFillIns > 0 &&
      resultArr.length === numOfFillIns &&
      resultArr.every(function (result) {
        return result === 1;
      });

    console.log("Answer words:", numOfFillIns);

    console.log("Results:", resultArr);

    console.log("All correct:", allCorrect);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var self = this;

    var ob = this.ob;

    var e = ob.activity_area;

    var groups = e.querySelectorAll(".img_fillin_gr");

    for (var i = 0; i < groups.length; i++) {
      var fIndx = parseInt(groups[i].dataset.qno);

      if (isNaN(fIndx)) {
        continue;
      }

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var iconWrap = groups[i].querySelector(".icon_wrap");

      var tick = groups[i].querySelector(".tick");

      var cross = groups[i].querySelector(".cross");

      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      // =========================================
      // AUDIO RESET
      // =========================================

      if (fDataObj.audio !== "" && fDataObj.audio !== "no") {
        if (groups[i].querySelectorAll(".audioIcon").length > 0) {
          var audioIcon = groups[i].querySelector(".audioIcon");

          if (fDataObj.audioenable === "correct") {
            audioIcon.style.display = "block";

            audioIcon.classList.add("disabled");
          } else if (fDataObj.audioenable === "default") {
            audioIcon.style.display = "block";

            audioIcon.classList.remove("disabled");
          }
        }
      }

      // =========================================
      // Inputs
      // =========================================

      var inputBoxes = groups[i].querySelectorAll("input");

      for (var a = 0; a < inputBoxes.length; a++) {
        if (!inputBoxes[a].disabled && !inputBoxes[a].readOnly) {
          inputBoxes[a].value = "";

          inputBoxes[a].style.color = "black";
        }
      }
    }

    // =====================================================
    // Disable check
    // =====================================================

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
