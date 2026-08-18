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
    var numOfFillIns = elsQue.length;

    var allCorrect = false;
    var resultArr = [];

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

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // =====================================================
      // CHECK IF THIS QUESTION IS FIXED / READONLY
      // =====================================================

      var editableInputs = [];

      for (var a = 0; a < inputBoxes.length; a++) {
        var isReadOnly =
          inputBoxes[a].getAttribute("readonly") != null ||
          inputBoxes[a].getAttribute("disabled") != null;

        if (!isReadOnly) {
          editableInputs.push(inputBoxes[a]);
        }
      }

      // =====================================================
      // IF ALL INPUTS ARE FIXED -> AUTOMATICALLY CORRECT
      // =====================================================

      if (inputBoxes.length > 0 && editableInputs.length === 0) {
        resultArr[i] = 1;

        // لا نظهر tick أو cross للإجابات الثابتة
        elsQue[i].dataset.showIcon = "false";

        continue;
      }

      // =====================================================
      // VALIDATE ONLY STUDENT INPUTS
      // =====================================================

      var _uAns = [];
      var _corr = 0;
      var _wrong = 0;

      for (var a = 0; a < editableInputs.length; a++) {
        var input = editableInputs[a];

        if (input.value.trim().length > 0) {
          if (input.dataset.type != "number") {
            _uAns[a] = _case == "yes" ? input.value : input.value.toLowerCase();
          } else {
            _uAns[a] = input.value;
          }
        }
      }

      // =====================================================
      // SHOW ICON ONLY IF STUDENT FILLED THE ANSWER
      // =====================================================

      var allFilled = true;

      for (var a = 0; a < editableInputs.length; a++) {
        if (editableInputs[a].value.trim() === "") {
          allFilled = false;
          break;
        }
      }

      elsQue[i].dataset.showIcon = allFilled ? "true" : "false";

      // =====================================================
      // COMPARE ANSWERS
      // =====================================================

      if (allFilled && _uAns.length > 0 && _cAns.length == _uAns.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          _cAns[cc] = _case == "yes" ? _cAns[cc] : _cAns[cc].toLowerCase();

          _cAns[cc] = _cAns[cc].replace(/\s/g, "");
          _uAns[cc] = _uAns[cc].replace(/\s/g, "");

          if (_cAns[cc] == _uAns[cc]) {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      // =====================================================
      // RESULT FOR THIS QUESTION
      // =====================================================

      if (_corr == _cAns.length && _wrong == 0) {
        resultArr[i] = 1;

        if (elsQue[i].dataset.showIcon == "true" && tick) {
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

        if (elsQue[i].dataset.showIcon == "true" && cross) {
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

      // =====================================================
      // ICON WRAPPER
      // =====================================================

      if (iconWrap && elsQue[i].dataset.showIcon == "true") {
        iconWrap.style.display = "block";
      }
    }

    // =========================================================
    // CHECK ALL QUESTIONS
    // readonly/default answers are already resultArr = 1
    // =========================================================

    allCorrect = resultArr.every(function (result) {
      return result === 1;
    });

    console.log("RESULT:", resultArr);
    console.log("ALL CORRECT:", allCorrect);

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
