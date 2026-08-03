window.Coloring = function (obj, dataObj) {
  var options = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

Coloring.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.selectedColourId = "";
    this.selectedColourValue = "";

    this.answers = {};

    this.listen(ob);
  },

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    var colours = e.querySelectorAll(".palette_colour");

    /*
      نختار فقط قطع المثلث الثاني.
      القطع الثابتة لا تستقبل click.
    */

    var pieces = e.querySelectorAll(".colour_piece:not(.fixed_piece)");

    for (var i = 0; i < colours.length; i++) {
      colours[i].addEventListener("click", function () {
        for (var c = 0; c < colours.length; c++) {
          colours[c].classList.remove("selected");
        }

        this.classList.add("selected");

        self.selectedColourId = this.dataset.colourId;

        self.selectedColourValue = this.dataset.colourValue;
      });
    }

    /*
      اختيار أول لون افتراضيًا
    */

    if (colours.length > 0) {
      this.selectedColourId = colours[0].dataset.colourId;

      this.selectedColourValue = colours[0].dataset.colourValue;

      colours[0].classList.add("selected");
    }

    /*
      الضغط يعمل فقط على المثلث الثاني
    */

    for (var p = 0; p < pieces.length; p++) {
      pieces[p].addEventListener("click", function () {
        self.colourPiece(this);
      });
    }
  },

  colourPiece: function (piece) {
    if (this.selectedColourId == "" || this.selectedColourValue == "") {
      return;
    }

    var wordId = piece.dataset.wordId;

    this.answers[wordId] = this.selectedColourId;

    piece.style.setProperty("--piece-fill", this.selectedColourValue);

    piece.classList.add("coloured");

    piece.classList.remove("correct");

    piece.classList.remove("wrong");

    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  validate: function () {
    var e = this.ob.activity_area;

    var pieces = e.querySelectorAll(".colour_piece:not(.fixed_piece)");

    var allAnswered = true;
    var allCorrect = true;

    for (var i = 0; i < pieces.length; i++) {
      var wordId = pieces[i].dataset.wordId;

      var correctColour = pieces[i].dataset.answerColour;

      var userColour = this.answers[wordId];

      var tick = pieces[i].querySelector(".piece_tick");

      var cross = pieces[i].querySelector(".piece_cross");

      pieces[i].classList.remove("correct");

      pieces[i].classList.remove("wrong");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }

      if (userColour == undefined || userColour == null || userColour == "") {
        allAnswered = false;
        allCorrect = false;

        pieces[i].classList.add("wrong");

        if (cross) {
          cross.style.display = "block";
        }
      } else if (userColour == correctColour) {
        pieces[i].classList.add("correct");

        if (tick) {
          tick.style.display = "block";
        }
      } else {
        allCorrect = false;

        pieces[i].classList.add("wrong");

        if (cross) {
          cross.style.display = "block";
        }
      }
    }

    showFeedback(true, allAnswered && allCorrect);

    if (allAnswered && allCorrect) {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    } else {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    }
  },

  reset: function () {
    var e = this.ob.activity_area;

    /*
    نمسح المثلث الثاني فقط
  */

    var pieces = e.querySelectorAll(".colour_piece:not(.fixed_piece)");

    var colours = e.querySelectorAll(".palette_colour");

    this.answers = {};

    for (var i = 0; i < pieces.length; i++) {
      pieces[i].style.setProperty("--piece-fill", "#ffffff");

      pieces[i].classList.remove("coloured");

      pieces[i].classList.remove("correct");

      pieces[i].classList.remove("wrong");

      var tick = pieces[i].querySelector(".piece_tick");

      var cross = pieces[i].querySelector(".piece_cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    for (var c = 0; c < colours.length; c++) {
      colours[c].classList.remove("selected");
    }

    if (colours.length > 0) {
      colours[0].classList.add("selected");

      this.selectedColourId = colours[0].dataset.colourId;

      this.selectedColourValue = colours[0].dataset.colourValue;
    }

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },

  orientationAdjust: "no",
};
