//  ****************************************** //
//  FillIn - Group Words
//  Custom FillIn Activity
//  ****************************************** //

window.FillIn = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  console.log("FillIn Group > ", $(".activity_area"));

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
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll(".group_word_input");

    for (var i = 0; i < inputs.length; i++) {
      // readonly example
      if (inputs[i].hasAttribute("readonly")) {
        continue;
      }

      inputs[i].addEventListener("input", function () {
        this.style.color = "black";

        // =============================
        // أخفي نتيجة هذا input
        // إذا عدله الطالب
        // =============================

        var row = this.closest(".group_input_row");

        if (row) {
          var iconWrap = row.querySelector(".icon_wrap");

          var tick = row.querySelector(".tick");

          var cross = row.querySelector(".cross");

          if (iconWrap) {
            iconWrap.style.display = "none";
          }

          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "none";
          }
        }

        // =============================
        // BUTTONS
        // =============================

        document
          .getElementsByClassName("checkBtn")[0]
          .classList.remove("disabled");

        document
          .getElementsByClassName("resetBtn")[0]
          .classList.remove("disabled");
      });
    }
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalizeWord: function (value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var data = ob.data_obj;

    var allInputs = e.querySelectorAll(".group_word_input");

    var allCorrect = true;

    // ===================================================
    // كل الكلمات المكتوبة
    // حتى نعرف التكرار
    // ===================================================

    var enteredValues = [];

    for (var i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];

      // المثال الجاهز ما بندخله
      // بالتكرار
      if (input.hasAttribute("readonly")) {
        continue;
      }

      var value = this.normalizeWord(input.value);

      if (value != "") {
        enteredValues.push(value);
      }
    }

    // ===================================================
    // COUNT DUPLICATES
    // ===================================================

    var wordCount = {};

    for (var d = 0; d < enteredValues.length; d++) {
      var currentWord = enteredValues[d];

      if (wordCount[currentWord] == undefined) {
        wordCount[currentWord] = 1;
      } else {
        wordCount[currentWord]++;
      }
    }

    // ===================================================
    // VALIDATE EACH INPUT
    // ===================================================

    for (var i = 0; i < allInputs.length; i++) {
      var input = allInputs[i];

      var row = input.closest(".group_input_row");

      var iconWrap = row.querySelector(".icon_wrap");

      var tick = row.querySelector(".tick");

      var cross = row.querySelector(".cross");

      // reset icons first
      if (iconWrap) {
        iconWrap.style.display = "none";
      }

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      // =================================================
      // DEFAULT EXAMPLE
      // =================================================

      if (input.hasAttribute("readonly")) {
        // المثال ما بدنا نطلعله icon
        continue;
      }

      var userValue = this.normalizeWord(input.value);

      // =================================================
      // EMPTY
      //
      // مسموح لأنه عنا inputs زيادة
      // =================================================

      if (userValue == "") {
        continue;
      }

      var columnIndex = parseInt(input.dataset.column);

      var correctAnswers = [];

      for (var a = 0; a < data.columns[columnIndex].answers.length; a++) {
        correctAnswers.push(
          this.normalizeWord(data.columns[columnIndex].answers[a]),
        );
      }

      var isInCorrectColumn = correctAnswers.indexOf(userValue) != -1;

      var isDuplicate = wordCount[userValue] > 1;

      // =================================================
      // CORRECT
      // =================================================

      if (isInCorrectColumn && !isDuplicate) {
        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (tick) {
          tick.style.display = "block";
        }
      }

      // =================================================
      // WRONG
      // =================================================
      else {
        allCorrect = false;

        if (iconWrap) {
          iconWrap.style.display = "block";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }
    }

    // ===================================================
    // لازم نتأكد إنه كل الإجابات موجودة
    //
    // الترتيب غير مهم
    // ===================================================

    for (var c = 0; c < data.columns.length; c++) {
      var expected = [];

      for (var ex = 0; ex < data.columns[c].answers.length; ex++) {
        var expectedWord = this.normalizeWord(data.columns[c].answers[ex]);

        // ===============================================
        // إذا هي default answer
        // ما بنطلب من الطالب يكتبها
        // ===============================================

        var isDefault =
          data.defaultAnswer != undefined &&
          data.defaultAnswer.enabled == true &&
          data.defaultAnswer.column == c &&
          this.normalizeWord(data.defaultAnswer.answer) == expectedWord;

        if (!isDefault) {
          expected.push(expectedWord);
        }
      }

      // ===============================================
      // USER ANSWERS IN THIS COLUMN
      // ===============================================

      var columnValues = [];

      var columnInputs = e.querySelectorAll(
        '.group_word_input[data-column="' + c + '"]',
      );

      for (var u = 0; u < columnInputs.length; u++) {
        if (columnInputs[u].hasAttribute("readonly")) {
          continue;
        }

        var columnValue = this.normalizeWord(columnInputs[u].value);

        if (columnValue != "") {
          columnValues.push(columnValue);
        }
      }

      // ===============================================
      // CHECK REQUIRED ANSWERS
      // ===============================================

      for (var ex = 0; ex < expected.length; ex++) {
        if (columnValues.indexOf(expected[ex]) == -1) {
          allCorrect = false;
        }
      }
    }

    // ===================================================
    // لازم عدد الكلمات المكتوبة يكون صحيح
    //
    // 12 total - 1 default = 11
    // ===================================================

    var requiredCount = 0;

    for (var c = 0; c < data.columns.length; c++) {
      requiredCount += data.columns[c].answers.length;
    }

    if (data.defaultAnswer != undefined && data.defaultAnswer.enabled == true) {
      requiredCount--;
    }

    if (enteredValues.length != requiredCount) {
      allCorrect = false;
    }

    // ===================================================
    // FEEDBACK
    // ===================================================

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
    }
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    var inputs = e.querySelectorAll(".group_word_input");

    for (var i = 0; i < inputs.length; i++) {
      // default answer stays
      if (inputs[i].hasAttribute("readonly")) {
        continue;
      }

      inputs[i].value = "";

      inputs[i].style.color = "black";
    }

    // ===================================================
    // HIDE ICONS
    // ===================================================

    var iconWraps = e.querySelectorAll(".icon_wrap");

    for (var i = 0; i < iconWraps.length; i++) {
      iconWraps[i].style.display = "none";
    }

    var ticks = e.querySelectorAll(".tick");

    var crosses = e.querySelectorAll(".cross");

    for (var i = 0; i < ticks.length; i++) {
      ticks[i].style.display = "none";
    }

    for (var i = 0; i < crosses.length; i++) {
      crosses[i].style.display = "none";
    }

    // ===================================================
    // BUTTONS
    // ===================================================

    document.getElementsByClassName("checkBtn")[0].classList.add("disabled");

    document.getElementsByClassName("resetBtn")[0].classList.add("disabled");
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
