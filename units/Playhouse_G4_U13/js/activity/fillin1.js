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

    var resultArr = new Array(elsQue.length).fill(0);

    // Correct answers
    var recipeAnswers = [
      ["mix", "melt", "chop", "cook"], // Recipe 1
      ["chop", "slice", "mix", "squeeze"], // Recipe 2
    ];

    /*
        DOM order:

        0 = Recipe 1 row 1
        1 = Recipe 2 row 1
        2 = Recipe 1 row 2
        3 = Recipe 2 row 2
        4 = Recipe 1 row 3
        5 = Recipe 2 row 3
        6 = Recipe 1 row 4
        7 = Recipe 2 row 4
    */

    var recipeIndexes = [
      [0, 2, 4, 6], // Recipe 1
      [1, 3, 5, 7], // Recipe 2
    ];

    // Reset icons
    for (var i = 0; i < elsQue.length; i++) {
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
    }

    // Validate each recipe separately
    for (
      var recipeIndex = 0;
      recipeIndex < recipeAnswers.length;
      recipeIndex++
    ) {
      var indexes = recipeIndexes[recipeIndex];

      var correctAnswers = recipeAnswers[recipeIndex].map(function (answer) {
        return answer.toLowerCase().trim().replace(/\s/g, "");
      });

      var userAnswers = [];

      // Get answers for this recipe
      for (var x = 0; x < indexes.length; x++) {
        var queIndex = indexes[x];
        var input = elsQue[queIndex].querySelector("input");

        var value = "";

        if (input) {
          value = input.value.toLowerCase().trim().replace(/\s/g, "");
        }

        userAnswers.push(value);
      }

      // Check each answer
      for (var x = 0; x < indexes.length; x++) {
        var queIndex = indexes[x];
        var userAnswer = userAnswers[x];

        var tick = elsQue[queIndex].querySelector(".tick");
        var cross = elsQue[queIndex].querySelector(".cross");
        var iconWrap = elsQue[queIndex].querySelector(".icon_wrap");

        var duplicateCount = userAnswers.filter(function (answer) {
          return answer === userAnswer && answer !== "";
        }).length;

        var isCorrect =
          userAnswer !== "" &&
          correctAnswers.includes(userAnswer) &&
          duplicateCount === 1;

        if (isCorrect) {
          resultArr[queIndex] = 1;

          if (tick) {
            tick.style.display = "block";
          }

          if (cross) {
            cross.style.display = "none";
          }
        } else {
          resultArr[queIndex] = 0;

          if (tick) {
            tick.style.display = "none";
          }

          if (cross) {
            cross.style.display = "block";
          }
        }

        if (iconWrap && userAnswer !== "") {
          iconWrap.style.display = "block";
        }
      }
    }

    // Final result
    var allCorrect = resultArr.every(function (result) {
      return result === 1;
    });

    console.log("FillIn Results:", resultArr);
    console.log("All Correct:", allCorrect);

    showFeedback(true, allCorrect);

    if (allCorrect) {
      document.getElementsByClassName("resetBtn")[0].classList.remove("disabled");
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
