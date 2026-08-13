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

    var allCorrect = false;
    var resultArr = [];
    var numOfFillIns = 0;

    for (var i = 0; i < elsQue.length; i++) {
      var fIndx = parseInt(elsQue[i].dataset.qno);
      var fDataObj = ob.data_obj.questions[fIndx - 1];

      var tick = elsQue[i].querySelector(".tick");
      var cross = elsQue[i].querySelector(".cross");
      var iconWrap = elsQue[i].querySelector(".icon_wrap");

      if (tick) tick.style.display = "none";
      if (cross) cross.style.display = "none";
      if (iconWrap) iconWrap.style.display = "none";

      var inputBoxes = elsQue[i].querySelectorAll("input");

      // ==========================================
      // جيب فقط الـ inputs اللي الطالب بقدر يكتب فيها
      // ==========================================
      var editableInputs = [];

      for (var a = 0; a < inputBoxes.length; a++) {
        if (
          inputBoxes[a].getAttribute("disabled") == null &&
          inputBoxes[a].getAttribute("readonly") == null
        ) {
          editableInputs.push(inputBoxes[a]);
        }
      }

      // ==========================================
      // إذا الجملة ثابتة وما فيها أي input
      // لا نحسبها كسؤال نهائياً
      // ==========================================
      if (editableInputs.length === 0) {
        continue;
      }

      numOfFillIns++;

      var _case =
        fDataObj.strictcase != undefined && fDataObj.strictcase != null
          ? fDataObj.strictcase.toLowerCase()
          : "no";

      var _cAns = getStrArray(fDataObj.answer, "activity");

      // ==========================================
      // شيل أي جواب فاضي من answer
      // ==========================================
      _cAns = _cAns.filter(function (ans) {
        return ans != null && String(ans).trim() !== "";
      });

      var _uAns = [];
      var _corr = 0;
      var _wrong = 0;

      // ==========================================
      // جيب إجابات الطالب
      // ==========================================
      for (var b = 0; b < editableInputs.length; b++) {
        var value = editableInputs[b].value;

        if (value.length > 0) {
          if (editableInputs[b].dataset.type != "number") {
            _uAns[b] = _case == "yes" ? value : value.toLowerCase();
          } else {
            _uAns[b] = value;
          }
        } else {
          // مهم حتى لو الفراغ فاضي ينحسب غلط
          _uAns[b] = "";
        }
      }

      elsQue[i].dataset.showIcon = "true";

      // ==========================================
      // validation
      // ==========================================
      if (_cAns.length === editableInputs.length) {
        for (var cc = 0; cc < _cAns.length; cc++) {
          var correctAnswer =
            _case == "yes"
              ? String(_cAns[cc])
              : String(_cAns[cc]).toLowerCase();

          var userAnswer = _uAns[cc] != undefined ? String(_uAns[cc]) : "";

          correctAnswer = correctAnswer.replace(/\s/g, "");
          userAnswer = userAnswer.replace(/\s/g, "");

          if (correctAnswer === userAnswer && userAnswer !== "") {
            _corr++;
          } else {
            _wrong++;
          }
        }
      } else {
        _wrong++;
      }

      // ==========================================
      // النتيجة
      // ==========================================
      if (_corr === _cAns.length && _wrong === 0 && _cAns.length > 0) {
        resultArr.push(1);

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
        resultArr.push(0);

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

      if (iconWrap) {
        iconWrap.style.display = "block";
      }
    }

    console.log("resultArr:", resultArr);
    console.log("numOfFillIns:", numOfFillIns);

    // ==========================================
    // نفحص فقط الأسئلة اللي فيها inputs
    // ==========================================
    allCorrect =
      numOfFillIns > 0 &&
      resultArr.length === numOfFillIns &&
      resultArr.every(function (result) {
        return result === 1;
      });

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
