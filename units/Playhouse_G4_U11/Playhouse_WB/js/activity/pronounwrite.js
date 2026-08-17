window.PronounWrite = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

PronounWrite.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    $(e).on("input", ".pronoun_write_input", function () {
      $(this).removeClass("correct_answer wrong_answer");

      $(this)
        .closest(".pronoun_input_row")
        .find(".pronoun_tick, .pronoun_cross")
        .hide();

      self.updateButtons();
    });
  },

  normalize: function (str) {
    return String(str || "")
      .toLowerCase()
      .trim();
  },

  updateButtons: function () {
    var e = this.ob.activity_area;

    var hasText = false;

    $(e)
      .find(".pronoun_write_input")
      .each(function () {
        if ($.trim($(this).val()) !== "") {
          hasText = true;

          return false;
        }
      });

    if (hasText) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  validate: function () {
    var self = this;

    var e = this.ob.activity_area;

    var data = this.ob.data_obj;

    var allCorrect = true;

    $(e)
      .find(".pronoun_write_box")
      .each(function () {
        var boxIndex = parseInt($(this).attr("data-box-index"));

        var boxData = data.boxes[boxIndex];

        // copy answers because we remove matched ones
        var remainingAnswers = boxData.answers.map(function (answer) {
          return self.normalize(answer);
        });

        $(this)
          .find(".pronoun_write_input")
          .each(function () {
            var input = $(this);

            var value = self.normalize(input.val());

            var row = input.closest(".pronoun_input_row");

            var tick = row.find(".pronoun_tick");

            var cross = row.find(".pronoun_cross");

            tick.hide();
            cross.hide();

            input.removeClass("correct_answer wrong_answer");

            if (value === "") {
              allCorrect = false;

              return;
            }

            var answerIndex = remainingAnswers.indexOf(value);

            if (answerIndex !== -1) {
              input.addClass("correct_answer");

              tick.show();

              // مهم للتكرار:
              // نحذف occurrence واحد فقط
              remainingAnswers.splice(answerIndex, 1);
            } else {
              allCorrect = false;

              input.addClass("wrong_answer");

              cross.show();
            }
          });

        if (remainingAnswers.length > 0) {
          allCorrect = false;
        }
      });

    showFeedback(true, allCorrect);

    if (allCorrect) {
      $(".checkBtn").addClass("disabled");
    }

    $(".resetBtn").removeClass("disabled");
  },

  reset: function () {
    var e = this.ob.activity_area;

    $(e)
      .find(".pronoun_write_input")
      .val("")
      .removeClass("correct_answer wrong_answer");

    $(e).find(".pronoun_tick, .pronoun_cross").hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
