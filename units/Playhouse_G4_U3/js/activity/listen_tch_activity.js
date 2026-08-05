//  ****************************************** //
//  Listen and Sort 'tch' Words
//  Custom FillIn activity
//  ****************************************** //

window.ListenTch = function (obj, dataObj) {
  var options = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: options[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ListenTch.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen();
  },

  listen: function () {
    var self = this;
    var ob = this.ob;
    var area = ob.activity_area;

    var wordButtons = area.querySelectorAll(".tch-word");

    var inputs = area.querySelectorAll(".tch-answer-input");

    wordButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var isSelected = this.classList.toggle("selected");

        this.setAttribute("aria-pressed", isSelected ? "true" : "false");

        self.enableControls();
      });
    });

    inputs.forEach(function (input) {
      input.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z'-\s]/g, "");

        this.style.color = "black";

        self.clearColumnResult(this.dataset.column);

        self.enableControls();
      });
    });
  },

  enableControls: function () {
    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    var resetBtn = document.getElementsByClassName("resetBtn")[0];

    if (checkBtn) {
      checkBtn.classList.remove("disabled");
    }

    if (resetBtn) {
      resetBtn.classList.remove("disabled");
    }
  },

  normalize: function (value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ");
  },

  sortNormalized: function (arr) {
    var self = this;

    return arr
      .map(function (value) {
        return self.normalize(value);
      })
      .filter(function (value) {
        return value !== "";
      })
      .sort();
  },

  arraysEqual: function (a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  },

  getSelectedWords: function () {
    var area = this.ob.activity_area;

    return Array.from(area.querySelectorAll(".tch-word.selected")).map(
      function (button) {
        return button.dataset.word;
      },
    );
  },

  getColumnAnswers: function (columnKey) {
    var area = this.ob.activity_area;

    return Array.from(
      area.querySelectorAll(
        '.tch-answer-input[data-column="' + columnKey + '"]',
      ),
    )
      .map(function (input) {
        return input.value;
      })
      .filter(function (value) {
        return value.trim() !== "";
      });
  },

  setColumnResult: function (columnKey, isCorrect) {
    var column = this.ob.activity_area.querySelector(
      '.tch-column[data-column="' + columnKey + '"]',
    );

    if (!column) {
      return;
    }

    column.classList.remove("correct", "wrong");

    column.classList.add(isCorrect ? "correct" : "wrong");
  },

  clearColumnResult: function (columnKey) {
    var column = this.ob.activity_area.querySelector(
      '.tch-column[data-column="' + columnKey + '"]',
    );

    if (column) {
      column.classList.remove("correct", "wrong");
    }
  },

  validate: function () {
    var ob = this.ob;
    var data = ob.data_obj;

    var expectedHeard = this.sortNormalized(data.heardWords);

    var selectedHeard = this.sortNormalized(this.getSelectedWords());

    var wordsCorrect = this.arraysEqual(selectedHeard, expectedHeard);

    var wordButtons = ob.activity_area.querySelectorAll(".tch-word");

    var heardSet = new Set(expectedHeard);

    wordButtons.forEach(function (button) {
      var word = this.normalize(button.dataset.word);

      var selected = button.classList.contains("selected");

      var shouldBeSelected = heardSet.has(word);

      button.classList.remove(
        "correct-choice",
        "wrong-choice",
        "missed-choice",
      );

      if (selected && shouldBeSelected) {
        button.classList.add("correct-choice");
      } else if (selected && !shouldBeSelected) {
        button.classList.add("wrong-choice");
      } else if (!selected && shouldBeSelected) {
        button.classList.add("missed-choice");
      }
    }, this);

    var columnsCorrect = true;

    for (var i = 0; i < data.columns.length; i++) {
      var column = data.columns[i];

      var expected = this.sortNormalized(column.answers);

      var userAnswers = this.sortNormalized(this.getColumnAnswers(column.key));

      var isCorrect = this.arraysEqual(userAnswers, expected);

      this.setColumnResult(column.key, isCorrect);

      if (!isCorrect) {
        columnsCorrect = false;
      }
    }

    var allCorrect = wordsCorrect && columnsCorrect;

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    if (allCorrect) {
      var checkBtn = document.getElementsByClassName("checkBtn")[0];

      if (checkBtn) {
        checkBtn.classList.add("disabled");
      }
    }
  },

  reset: function () {
    var ob = this.ob;
    var area = ob.activity_area;

    var wordButtons = area.querySelectorAll(".tch-word");

    wordButtons.forEach(function (button) {
      button.classList.remove(
        "selected",
        "correct-choice",
        "wrong-choice",
        "missed-choice",
      );

      button.setAttribute("aria-pressed", "false");
    });

    var inputs = area.querySelectorAll(".tch-answer-input");

    inputs.forEach(function (input) {
      input.value = "";
      input.style.color = "black";
    });

    var columns = area.querySelectorAll(".tch-column");

    columns.forEach(function (column) {
      column.classList.remove("correct", "wrong");
    });

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  initialSettings: function () {
    this.reset();

    if (typeof initialSettingsDone === "function") {
      initialSettingsDone(1);
    }
  },
};
