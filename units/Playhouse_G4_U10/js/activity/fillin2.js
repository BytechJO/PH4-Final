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
  /* =========================================================
       INIT
    ========================================================= */

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  /* =========================================================
       LISTEN
    ========================================================= */

  listen: function (ob) {
    var e = ob.activity_area;

    /* =====================================================
           SURVEY TABLE
        ===================================================== */

    if (
      ob.data_obj.layout != undefined &&
      ob.data_obj.layout == "survey_table"
    ) {
      var surveyInputs = e.querySelectorAll(".survey_input");

      function updateSurveyButtons() {
        var allFilled = true;

        var hasAnyValue = false;

        for (var i = 0; i < surveyInputs.length; i++) {
          var value = surveyInputs[i].value.trim();

          if (value != "") {
            hasAnyValue = true;
          }

          if (value == "") {
            allFilled = false;
          }
        }

        /* =========================
                   RESET BUTTON
                ========================= */

        if (document.getElementsByClassName("resetBtn").length > 0) {
          if (hasAnyValue) {
            document
              .getElementsByClassName("resetBtn")[0]
              .classList.remove("disabled");
          } else {
            document
              .getElementsByClassName("resetBtn")[0]
              .classList.add("disabled");
          }
        }

        /* =========================
                   CHECK BUTTON
                ========================= */

        if (document.getElementsByClassName("checkBtn").length > 0) {
          if (allFilled && surveyInputs.length > 0) {
            document
              .getElementsByClassName("checkBtn")[0]
              .classList.remove("disabled");
          } else {
            document
              .getElementsByClassName("checkBtn")[0]
              .classList.add("disabled");
          }
        }
      }

      for (var i = 0; i < surveyInputs.length; i++) {
        surveyInputs[i].addEventListener("input", function () {
          this.style.color = "black";

          updateSurveyButtons();
        });
      }

      updateSurveyButtons();

      return;
    }

    /* =====================================================
           NORMAL FILLIN
        ===================================================== */

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

        if (document.getElementsByClassName("checkBtn").length > 0) {
          document
            .getElementsByClassName("checkBtn")[0]
            .classList.remove("disabled");
        }

        if (document.getElementsByClassName("resetBtn").length > 0) {
          document
            .getElementsByClassName("resetBtn")[0]
            .classList.remove("disabled");
        }
      });
    }
  },

  /* =========================================================
       VALIDATE
    ========================================================= */

  validate: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    /* =====================================================
           SURVEY TABLE
        ===================================================== */

    if (
      ob.data_obj.layout != undefined &&
      ob.data_obj.layout == "survey_table"
    ) {
      var surveyInputs = e.querySelectorAll(".survey_input");

      var allFilled = true;

      for (var i = 0; i < surveyInputs.length; i++) {
        if (surveyInputs[i].value.trim() == "") {
          allFilled = false;

          break;
        }
      }

      showFeedback(true, allFilled);

      if (allFilled) {
        if (document.getElementsByClassName("checkBtn").length > 0) {
          document
            .getElementsByClassName("checkBtn")[0]
            .classList.add("disabled");
        }
      }

      return;
    }

    /* =====================================================
           NORMAL FILLIN
        ===================================================== */

    var elsQue = e.querySelectorAll(".que");

    var numOfFillIns = elsQue.length;

    var allCorrect = false;

    var resultArr = [];

    for (var i = 0; i < elsQue.length; i++) {
      resultArr[i] = 0;

      var fIndx = parseInt(elsQue[i].dataset.qno);

      if (
        ob.data_obj.questions == undefined ||
        ob.data_obj.questions[fIndx - 1] == undefined
      ) {
        continue;
      }

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      if (elsQue[i].querySelector(".tick")) {
        elsQue[i].querySelector(".tick").style.display = "none";
      }

      if (elsQue[i].querySelector(".cross")) {
        elsQue[i].querySelector(".cross").style.display = "none";
      }

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var _uAns = [];

      var _isReadOnly = [];

      var _corr = 0;

      var _wrong = 0;

      var inputBoxes = elsQue[i].querySelectorAll("input");

      if (inputBoxes.length > 0) {
        for (var a = 0; a < inputBoxes.length; a++) {
          console.log(a, inputBoxes[a].dataset.type);

          _isReadOnly[a] =
            inputBoxes[a].getAttribute("disabled") == null &&
            inputBoxes[a].getAttribute("readonly") == null
              ? 0
              : 1;

          if (inputBoxes[a].value.length > 0) {
            if (inputBoxes[a].dataset.type != "number") {
              _uAns[a] =
                _case == "yes"
                  ? inputBoxes[a].value
                  : inputBoxes[a].value.toLowerCase();
            } else {
              _uAns[a] = inputBoxes[a].value;
            }
          }
        }
      }

      elsQue[i].dataset.showIcon =
        _isReadOnly.join("").split("1")[0].length == _cAns.length;

      console.log(_uAns, _cAns, elsQue[i].dataset.showIcon);

      /* =================================================
               ORDER VALIDATION
            ================================================= */

      if (_uAns.length > 0 && _cAns.length == _uAns.length) {
        var strictOrder =
          fDataObj.strictorder != undefined
            ? fDataObj.strictorder.toLowerCase()
            : "yes";

        var correctAnswers = _cAns.map(function (ans) {
          ans = _case == "yes" ? ans : ans.toLowerCase();

          return ans.replace(/\s/g, "");
        });

        var userAnswers = _uAns.map(function (ans) {
          ans = _case == "yes" ? ans : ans.toLowerCase();

          return ans.replace(/\s/g, "");
        });

        /* =========================
                   STRICT ORDER = YES
                ========================= */

        if (strictOrder == "yes") {
          for (var cc = 0; cc < correctAnswers.length; cc++) {
            if (correctAnswers[cc] == userAnswers[cc]) {
              _corr++;
            } else {
              _wrong++;
            }
          }
        } else {
          /* =========================
                       STRICT ORDER = NO
                       بأي ترتيب وبدون تكرار
                    ========================= */

          var uniqueAnswers = Array.from(new Set(userAnswers));

          if (uniqueAnswers.length != userAnswers.length) {
            _wrong++;
          } else {
            for (var ua = 0; ua < userAnswers.length; ua++) {
              if (correctAnswers.indexOf(userAnswers[ua]) !== -1) {
                _corr++;
              } else {
                _wrong++;
              }
            }
          }
        }
      } else {
        _wrong++;
      }

      /* =================================================
               RESULT
            ================================================= */

      if (_corr == _uAns.length && _wrong == 0) {
        resultArr[i] = 1;

        if (elsQue[i].querySelector(".tick")) {
          elsQue[i].querySelector(".tick").style.display = "block";
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

        if (elsQue[i].querySelector(".cross")) {
          elsQue[i].querySelector(".cross").style.display = "block";
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

      if (elsQue[i].querySelectorAll(".icon_wrap").length > 0) {
        if (elsQue[i].dataset.showIcon == "true") {
          elsQue[i].querySelector(".icon_wrap").style.display = "block";
        }
      }
    }

    console.log(resultArr, numOfFillIns);

    allCorrect = resultArr.join("").split("0")[0].length == numOfFillIns;

    showFeedback(true, allCorrect);

    if (allCorrect) {
      if (document.getElementsByClassName("resetBtn").length > 0) {
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.add("disabled");
      }
    }
  },

  /* =========================================================
       RESET
    ========================================================= */

  reset: function () {
    var ob = this.ob;

    var e = ob.activity_area;

    /* =====================================================
           SURVEY TABLE RESET
        ===================================================== */

    if (
      ob.data_obj.layout != undefined &&
      ob.data_obj.layout == "survey_table"
    ) {
      var surveyInputs = e.querySelectorAll(".survey_input");

      for (var i = 0; i < surveyInputs.length; i++) {
        surveyInputs[i].value = "";

        surveyInputs[i].style.color = "black";
      }

      if (document.getElementsByClassName("checkBtn").length > 0) {
        document
          .getElementsByClassName("checkBtn")[0]
          .classList.add("disabled");
      }

      if (document.getElementsByClassName("resetBtn").length > 0) {
        document
          .getElementsByClassName("resetBtn")[0]
          .classList.add("disabled");
      }

      return;
    }

    /* =====================================================
           NORMAL FILLIN RESET
        ===================================================== */

    var elsQue = e.querySelectorAll(".que");

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);

      if (
        ob.data_obj.questions == undefined ||
        ob.data_obj.questions[fIndx - 1] == undefined
      ) {
        continue;
      }

      var fDataObj = ob.data_obj.questions[fIndx - 1];

      if (elsQue[i].querySelector(".icon_wrap")) {
        elsQue[i].querySelector(".icon_wrap").style.display = "none";
      }

      if (elsQue[i].querySelector(".tick")) {
        elsQue[i].querySelector(".tick").style.display = "none";
      }

      if (elsQue[i].querySelector(".cross")) {
        elsQue[i].querySelector(".cross").style.display = "none";
      }

      /* =================================================
               AUDIO
            ================================================= */

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
      }

      /* =================================================
               INPUTS
            ================================================= */

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

    if (document.getElementsByClassName("checkBtn").length > 0) {
      document.getElementsByClassName("checkBtn")[0].classList.add("disabled");
    }
  },

  /* =========================================================
       INITIAL SETTINGS
    ========================================================= */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
