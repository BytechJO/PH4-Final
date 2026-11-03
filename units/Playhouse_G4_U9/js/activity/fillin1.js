// ******************************************
// FillIn
// ******************************************

window.FillIn = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  console.log("FillIn > ", $(".activity_area"));

  this.settings = {
    activity_area: ob[0],

    has_audio:
      obj[0].dataset.audio != undefined &&
      obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};


// =========================================================
// FillIn Prototype
// =========================================================

FillIn.prototype = {

  // =======================================================
  // INIT
  // =======================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },


  // =======================================================
  // LISTEN
  // =======================================================

  listen: function (ob) {
    var e = ob.activity_area;

    var inputs = e.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {

      inputs[i].addEventListener("input", function () {

        // النص دائماً أسود
        $(this).css("color", "black");

        console.log($(this).data("type"));

        var v = this.value;

        // =================================================
        // NUMBER INPUT
        // =================================================

        if ($(this).data("type") == "number") {

          if ($.isNumeric(v) === false) {
            this.value = this.value.replace(/\D/g, "");
          }
        }

        // =================================================
        // HIDE CURRENT INPUT VALIDATION
        // إذا الطالب رجع وعدل الجواب
        // =================================================

        var row = this.closest(".bag_input_row");

        if (row) {

          var tick = row.querySelector(".input_tick");
          var cross = row.querySelector(".input_cross");

          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "none";
          }
        }

        // =================================================
        // ENABLE CHECK
        // =================================================

        var checkBtn =
          document.getElementsByClassName("checkBtn")[0];

        if (checkBtn) {
          checkBtn.classList.remove("disabled");
        }

        // =================================================
        // ENABLE RESET
        // =================================================

        var resetBtn =
          document.getElementsByClassName("resetBtn")[0];

        if (resetBtn) {
          resetBtn.classList.remove("disabled");
        }

      });
    }
  },


  // =======================================================
  // VALIDATE
  // =======================================================

  validate: function () {

    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var allCorrect = false;

    var resultArr = [];


    // =====================================================
    // NORMALIZE ANSWER
    // =====================================================

    function normalizeAnswer(value, strictCase) {

      if (value == null) {
        return "";
      }

      value = String(value).trim();

      // تجاهل حالة الأحرف
      if (strictCase !== "yes") {
        value = value.toLowerCase();
      }

      // تجاهل المسافات
      value = value.replace(/\s/g, "");

      return value;
    }


    // =====================================================
    // QUESTIONS
    // =====================================================

    for (var i = 0; i < elsQue.length; i++) {

      resultArr[i] = 0;

      var fIndx =
        parseInt(elsQue[i].dataset.qno);

      var fDataObj =
        ob.data_obj.questions[fIndx - 1];


      // ===================================================
      // STRICT CASE
      // ===================================================

      var _case =
        fDataObj.strictcase != undefined &&
        fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";


      // ===================================================
      // CORRECT ANSWERS
      // ===================================================

      var correctAnswers =
        Array.isArray(fDataObj.answer)
          ? fDataObj.answer.slice()
          : [fDataObj.answer];


      // نحذف الإجابات الفاضية لو موجودة
      correctAnswers =
        correctAnswers.filter(function (answer) {

          return (
            answer != null &&
            String(answer).trim() !== ""
          );

        });


      // ===================================================
      // ALTERNATE ANSWERS
      // ===================================================

      var alternateAnswers =
        Array.isArray(fDataObj.alternateanswer)
          ? fDataObj.alternateanswer
          : [];


      // ===================================================
      // ACCEPTED GROUPS
      // ===================================================

      var acceptedGroups = [];


      for (
        var c = 0;
        c < correctAnswers.length;
        c++
      ) {

        acceptedGroups[c] = [];


        // ===============================================
        // MAIN ANSWER
        // ===============================================

        acceptedGroups[c].push(
          normalizeAnswer(
            correctAnswers[c],
            _case
          )
        );


        // ===============================================
        // ALTERNATE ANSWERS
        // ===============================================

        if (
          alternateAnswers[c] != undefined &&
          alternateAnswers[c] != null
        ) {

          var alternatives =
            Array.isArray(alternateAnswers[c])
              ? alternateAnswers[c]
              : [alternateAnswers[c]];


          for (
            var alt = 0;
            alt < alternatives.length;
            alt++
          ) {

            if (
              alternatives[alt] != null &&
              alternatives[alt] !== ""
            ) {

              acceptedGroups[c].push(
                normalizeAnswer(
                  alternatives[alt],
                  _case
                )
              );

            }
          }
        }
      }


      // ===================================================
      // INPUT ROWS
      // ===================================================

      var inputRows =
        elsQue[i].querySelectorAll(
          ".bag_input_row"
        );


      // ===================================================
      // USED CORRECT ANSWERS
      // ===================================================

      var usedCorrectAnswers = [];


      for (
        var u = 0;
        u < acceptedGroups.length;
        u++
      ) {

        usedCorrectAnswers[u] = false;

      }


      var questionCorrect = true;

      var correctCount = 0;

      var filledCount = 0;


      // ===================================================
      // CHECK EVERY INPUT
      // ===================================================

      for (
        var a = 0;
        a < inputRows.length;
        a++
      ) {

        var row = inputRows[a];

        var input =
          row.querySelector("input");

        var tick =
          row.querySelector(".input_tick");

        var cross =
          row.querySelector(".input_cross");


        // ===============================================
        // HIDE OLD ICONS FIRST
        // ===============================================

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "none";
        }


        if (!input) {
          continue;
        }


        // ===============================================
        // IGNORE READONLY / DISABLED
        // ===============================================

        if (
          input.getAttribute("disabled") != null ||
          input.getAttribute("readonly") != null
        ) {
          continue;
        }


        // ===============================================
        // USER ANSWER
        // ===============================================

        var userAnswer =
          normalizeAnswer(
            input.value,
            _case
          );


        // ===============================================
        // EMPTY INPUT
        //
        // ما بنطلع عليه لا صح ولا غلط
        // ===============================================

        if (userAnswer === "") {
          continue;
        }


        filledCount++;


        // ===============================================
        // FIND MATCH
        // ===============================================

        var foundMatch = false;


        for (
          var ca = 0;
          ca < acceptedGroups.length;
          ca++
        ) {

          // الجواب مستخدم من قبل
          if (
            usedCorrectAnswers[ca] === true
          ) {
            continue;
          }


          // =============================================
          // MATCH
          // =============================================

          if (
            acceptedGroups[ca].indexOf(
              userAnswer
            ) !== -1
          ) {

            foundMatch = true;

            usedCorrectAnswers[ca] = true;

            correctCount++;

            break;
          }
        }


        // ===============================================
        // SHOW RESULT FOR THIS INPUT
        // ===============================================

        if (foundMatch) {

          // صح
          if (tick) {
            tick.style.display = "block";
          }

          if (cross) {
            cross.style.display = "none";
          }

        } else {

          // غلط
          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "block";
          }

          questionCorrect = false;
        }
      }


      // ===================================================
      // QUESTION COMPLETE?
      //
      // لازم يجيب كل الإجابات المطلوبة
      // ===================================================

      if (
        correctCount !== correctAnswers.length
      ) {

        questionCorrect = false;

      }


      // ===================================================
      // لو كتب inputs أكثر من عدد الأجوبة
      // ===================================================

      if (
        filledCount > correctAnswers.length
      ) {

        questionCorrect = false;

      }


      // ===================================================
      // RESULT
      // ===================================================

      if (questionCorrect) {

        resultArr[i] = 1;


        // ===============================================
        // AUDIO
        // ===============================================

        if (
          fDataObj.audio != "" &&
          fDataObj.audio != "no"
        ) {

          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i]
              .querySelectorAll(".audioIcon")
              .length > 0
          ) {

            elsQue[i]
              .querySelector(".audioIcon")
              .classList.remove("disabled");

          }
        }

      } else {

        resultArr[i] = 0;


        // ===============================================
        // AUDIO
        // ===============================================

        if (
          fDataObj.audio != "" &&
          fDataObj.audio != "no"
        ) {

          if (
            fDataObj.audioenable == "correct" &&
            elsQue[i]
              .querySelectorAll(".audioIcon")
              .length > 0
          ) {

            elsQue[i]
              .querySelector(".audioIcon")
              .classList.add("disabled");

          }
        }
      }
    }


    // =====================================================
    // FINAL RESULT
    // =====================================================

    allCorrect =
      resultArr.indexOf(0) === -1 &&
      resultArr.length === numOfFillIns;


    console.log(
      "FillIn Result:",
      resultArr,
      allCorrect
    );


    showFeedback(
      true,
      allCorrect
    );


    // =====================================================
    // ALL CORRECT
    // =====================================================

    if (allCorrect) {

      var resetBtn =
        document.getElementsByClassName(
          "resetBtn"
        )[0];

      if (resetBtn) {
        resetBtn.classList.remove(
          "disabled"
        );
      }
    }
  },


  // =======================================================
  // RESET
  // =======================================================

  reset: function () {

    var ob = this.ob;

    var e = ob.activity_area;

    var elsQue =
      e.querySelectorAll(".que");


    // =====================================================
    // QUESTIONS
    // =====================================================

    for (
      var i = 0;
      i < elsQue.length;
      i++
    ) {

      var fIndx =
        parseInt(
          elsQue[i].dataset.qno
        );

      var fDataObj =
        ob.data_obj.questions[
          fIndx - 1
        ];


      // ===================================================
      // REMOVE EACH INPUT ICON
      // ===================================================

      var inputRows =
        elsQue[i].querySelectorAll(
          ".bag_input_row"
        );


      for (
        var r = 0;
        r < inputRows.length;
        r++
      ) {

        var inputTick =
          inputRows[r].querySelector(
            ".input_tick"
          );

        var inputCross =
          inputRows[r].querySelector(
            ".input_cross"
          );


        if (inputTick) {
          inputTick.style.display =
            "none";
        }


        if (inputCross) {
          inputCross.style.display =
            "none";
        }
      }


      // ===================================================
      // OLD ICONS
      // لو موجودة من نظام قديم
      // ===================================================

      var oldIconWrap =
        elsQue[i].querySelector(
          ".icon_wrap"
        );

      var oldTick =
        elsQue[i].querySelector(
          ".tick"
        );

      var oldCross =
        elsQue[i].querySelector(
          ".cross"
        );


      if (oldIconWrap) {
        oldIconWrap.style.display =
          "none";
      }


      if (oldTick) {
        oldTick.style.display =
          "none";
      }


      if (oldCross) {
        oldCross.style.display =
          "none";
      }


      // ===================================================
      // AUDIO
      // ===================================================

      if (
        fDataObj.audio != "" &&
        fDataObj.audio != "no"
      ) {

        if (
          elsQue[i]
            .querySelectorAll(
              ".audioIcon"
            )
            .length > 0
        ) {

          if (
            fDataObj.audioenable ==
            "correct"
          ) {

            elsQue[i]
              .querySelector(
                ".audioIcon"
              )
              .style.display = "block";

            elsQue[i]
              .querySelector(
                ".audioIcon"
              )
              .classList.add(
                "disabled"
              );

          } else if (
            fDataObj.audioenable ==
            "default"
          ) {

            elsQue[i]
              .querySelector(
                ".audioIcon"
              )
              .style.display = "block";

            elsQue[i]
              .querySelector(
                ".audioIcon"
              )
              .classList.remove(
                "disabled"
              );

          }
        }
      }


      // ===================================================
      // CLEAR INPUTS
      // ===================================================

      var inputBoxes =
        elsQue[i].querySelectorAll(
          "input"
        );


      if (inputBoxes.length > 0) {

        for (
          var a = 0;
          a < inputBoxes.length;
          a++
        ) {

          if (
            inputBoxes[a]
              .getAttribute(
                "disabled"
              ) == null &&
            inputBoxes[a]
              .getAttribute(
                "readonly"
              ) == null
          ) {

            inputBoxes[a].value = "";

            inputBoxes[a].style.color =
              "black";

          }
        }
      }
    }


    // =====================================================
    // DISABLE CHECK
    // =====================================================

    var checkBtn =
      document.getElementsByClassName(
        "checkBtn"
      )[0];


    if (checkBtn) {

      checkBtn.classList.add(
        "disabled"
      );

    }
  },


  // =======================================================
  // INITIAL SETTINGS
  // =======================================================

  initialSettings: function () {

    this.reset();

    initialSettingsDone(1);

  },

};