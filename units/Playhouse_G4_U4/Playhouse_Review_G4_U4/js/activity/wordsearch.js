//  ****************************************** //
//  Word Search Activity
//  ****************************************** //

window.WordSearch = function (obj, dataObj) {
  var optionsElements = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: optionsElements.length > 0 ? optionsElements[0] : null,

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.orientationAdjust = "no";

  this.dragging = false;
  this.startCell = null;
  this.currentCell = null;

  this.currentPreviewCells = [];
  this.foundSelections = [];
  this.wrongSelections = [];
  this.foundWords = [];

  this.init(this.settings);
};

WordSearch.prototype = {
  /* =====================================
     Initialize
  ===================================== */

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  /* =====================================
     Listeners
  ===================================== */

  listen: function () {
    var self = this;

    var activityArea = this.ob.activity_area;

    if (!activityArea) {
      return;
    }

    var cells = activityArea.querySelectorAll(".ws_col");

    for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      cells[cellIndex].addEventListener("mousedown", function (event) {
        event.preventDefault();

        self.startSelection(this);
      });

      cells[cellIndex].addEventListener("mouseenter", function () {
        if (!self.dragging) {
          return;
        }

        self.updateSelection(this);
      });

      cells[cellIndex].addEventListener(
        "touchstart",
        function (event) {
          event.preventDefault();

          self.startSelection(this);
        },
        {
          passive: false,
        },
      );

      cells[cellIndex].addEventListener(
        "touchmove",
        function (event) {
          event.preventDefault();

          var touch = event.touches[0];

          if (!touch) {
            return;
          }

          var target = document.elementFromPoint(touch.clientX, touch.clientY);

          if (target && !target.classList.contains("ws_col")) {
            target = target.closest(".ws_col");
          }

          if (target) {
            self.updateSelection(target);
          }
        },
        {
          passive: false,
        },
      );

      cells[cellIndex].addEventListener(
        "touchend",
        function (event) {
          event.preventDefault();

          self.finishSelection();
        },
        {
          passive: false,
        },
      );
    }

    document.addEventListener("mouseup", function () {
      if (self.dragging) {
        self.finishSelection();
      }
    });
  },

  /* =====================================
     Begin selection
  ===================================== */

  startSelection: function (cellElement) {
    this.clearPreview();

    this.dragging = true;

    this.startCell = cellElement;

    this.currentCell = cellElement;

    this.previewSelection(cellElement);
  },

  /* =====================================
     Update selection
  ===================================== */

  updateSelection: function (cellElement) {
    if (!this.dragging || !this.startCell || !cellElement) {
      return;
    }

    this.currentCell = cellElement;

    this.previewSelection(cellElement);
  },

  /* =====================================
     Preview selected path
  ===================================== */

  previewSelection: function (endCell) {
    this.clearPreview();

    var path = this.getStraightPath(this.startCell, endCell);

    this.currentPreviewCells = path;

    for (var pathIndex = 0; pathIndex < path.length; pathIndex++) {
      path[pathIndex].classList.add("ws_preview");
    }
  },

  /* =====================================
     Finish selection
  ===================================== */

  finishSelection: function () {
    if (!this.dragging) {
      return;
    }

    this.dragging = false;

    var selectedCells = this.currentPreviewCells.slice();

    this.clearPreview();

    if (selectedCells.length < 2) {
      this.startCell = null;
      this.currentCell = null;

      return;
    }

    var selectedWord = this.getWordFromCells(selectedCells);

    var reverseWord = selectedWord.split("").reverse().join("");

    var acceptedWords = this.getAcceptedWords();

    var matchedWord = "";

    if (acceptedWords.indexOf(selectedWord) !== -1) {
      matchedWord = selectedWord;
    } else if (acceptedWords.indexOf(reverseWord) !== -1) {
      matchedWord = reverseWord;
    }

    if (matchedWord !== "" && this.foundWords.indexOf(matchedWord) === -1) {
      this.foundWords.push(matchedWord);

      this.foundSelections.push({
        word: matchedWord,
        cells: selectedCells,
      });

      this.applyClassToCells(selectedCells, "ws_found");

      this.markWordAsSelected(matchedWord);
    } else if (matchedWord === "") {
      this.wrongSelections.push({
        cells: selectedCells,
      });

      this.applyClassToCells(selectedCells, "ws_wrong_selection");
    }

    this.startCell = null;
    this.currentCell = null;

    var checkButton = document.querySelector(".checkBtn");

    var resetButton = document.querySelector(".resetBtn");

    if (checkButton) {
      checkButton.classList.remove("disabled");
    }

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  },

  /* =====================================
     Build straight path
  ===================================== */

  getStraightPath: function (startCell, endCell) {
    if (!startCell || !endCell) {
      return [];
    }

    var startRow = parseInt(startCell.dataset.row, 10);

    var startColumn = parseInt(startCell.dataset.column, 10);

    var endRow = parseInt(endCell.dataset.row, 10);

    var endColumn = parseInt(endCell.dataset.column, 10);

    var rowDifference = endRow - startRow;

    var columnDifference = endColumn - startColumn;

    var absoluteRows = Math.abs(rowDifference);

    var absoluteColumns = Math.abs(columnDifference);

    var isHorizontal = rowDifference === 0;

    var isVertical = columnDifference === 0;

    var isDiagonal = absoluteRows === absoluteColumns;

    if (!isHorizontal && !isVertical && !isDiagonal) {
      return [];
    }

    var rowStep = rowDifference === 0 ? 0 : rowDifference > 0 ? 1 : -1;

    var columnStep = columnDifference === 0 ? 0 : columnDifference > 0 ? 1 : -1;

    var numberOfSteps = Math.max(absoluteRows, absoluteColumns);

    var path = [];

    for (var stepIndex = 0; stepIndex <= numberOfSteps; stepIndex++) {
      var row = startRow + rowStep * stepIndex;

      var column = startColumn + columnStep * stepIndex;

      var cell = this.ob.activity_area.querySelector(
        '.ws_col[data-row="' + row + '"][data-column="' + column + '"]',
      );

      if (cell) {
        path.push(cell);
      }
    }

    return path;
  },

  /* =====================================
     Read selected word
  ===================================== */

  getWordFromCells: function (cells) {
    var word = "";

    for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      word += String(cells[cellIndex].textContent || "")
        .trim()
        .toLowerCase();
    }

    return word;
  },

  /* =====================================
     Accepted words
  ===================================== */

  getAcceptedWords: function () {
    var words = Array.isArray(this.ob.data_obj.words)
      ? this.ob.data_obj.words
      : [];

    return words.map(function (word) {
      return String(word).trim().toLowerCase();
    });
  },

  /* =====================================
     Apply class
  ===================================== */

  applyClassToCells: function (cells, className) {
    for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      cells[cellIndex].classList.add(className);
    }
  },

  /* =====================================
     Clear preview
  ===================================== */

  clearPreview: function () {
    var previewCells = this.ob.activity_area.querySelectorAll(".ws_preview");

    for (var cellIndex = 0; cellIndex < previewCells.length; cellIndex++) {
      previewCells[cellIndex].classList.remove("ws_preview");
    }

    this.currentPreviewCells = [];
  },

  /* =====================================
     Mark word while selecting
  ===================================== */

  markWordAsSelected: function (word) {
    var wordElement = this.ob.activity_area.querySelector(
      '.wordsearch_word[data-word="' + word + '"]',
    );

    if (wordElement) {
      wordElement.classList.add("word_selected");
    }
  },

  /* =====================================
     Validate
  ===================================== */

  validate: function () {
    var acceptedWords = this.getAcceptedWords();

    var allCorrect = this.foundWords.length === acceptedWords.length;

    var wordElements =
      this.ob.activity_area.querySelectorAll(".wordsearch_word");

    for (var wordIndex = 0; wordIndex < wordElements.length; wordIndex++) {
      var wordElement = wordElements[wordIndex];

      var word = String(wordElement.dataset.word || "").toLowerCase();

      var tick = wordElement.querySelector(".word_tick");

      var cross = wordElement.querySelector(".word_cross");

      var isFound = this.foundWords.indexOf(word) !== -1;

      if (isFound) {
        wordElement.classList.add("word_correct");

        wordElement.classList.remove("word_missing");

        if (tick) {
          tick.style.display = "block";
        }

        if (cross) {
          cross.style.display = "none";
        }
      } else {
        wordElement.classList.remove("word_correct");

        wordElement.classList.add("word_missing");

        if (tick) {
          tick.style.display = "none";
        }

        if (cross) {
          cross.style.display = "block";
        }
      }
    }

    showFeedback(true, allCorrect);

    if (allCorrect) {
      var resetButton = document.querySelector(".resetBtn");

      if (resetButton) {
        resetButton.classList.add("disabled");
      }
    }
  },

  /* =====================================
     Reset
  ===================================== */

  reset: function () {
    this.dragging = false;
    this.startCell = null;
    this.currentCell = null;

    this.currentPreviewCells = [];
    this.foundSelections = [];
    this.wrongSelections = [];
    this.foundWords = [];

    if (!this.ob.activity_area) {
      return;
    }

    var cells = this.ob.activity_area.querySelectorAll(".ws_col");

    for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
      cells[cellIndex].classList.remove(
        "ws_preview",
        "ws_found",
        "ws_wrong_selection",
      );
    }

    var wordElements =
      this.ob.activity_area.querySelectorAll(".wordsearch_word");

    for (var wordIndex = 0; wordIndex < wordElements.length; wordIndex++) {
      wordElements[wordIndex].classList.remove(
        "word_selected",
        "word_correct",
        "word_missing",
      );

      var tick = wordElements[wordIndex].querySelector(".word_tick");

      var cross = wordElements[wordIndex].querySelector(".word_cross");

      if (tick) {
        tick.style.display = "none";
      }

      if (cross) {
        cross.style.display = "none";
      }
    }

    var checkButton = document.querySelector(".checkBtn");

    var resetButton = document.querySelector(".resetBtn");

    if (checkButton) {
      checkButton.classList.add("disabled");
    }

    /*
      Word search يحتاج Reset متاحًا
      من البداية حسب نظام المشروع.
    */

    if (resetButton) {
      resetButton.classList.remove("disabled");
    }
  },

  /* =====================================
     Methods expected by project touch code
  ===================================== */

  cellMove: function (classValue) {
    var classes = String(classValue || "").split(/\s+/);

    var row = null;
    var column = null;

    for (var classIndex = 0; classIndex < classes.length; classIndex++) {
      if (classes[classIndex].indexOf("ws-r-") === 0) {
        row = parseInt(classes[classIndex].replace("ws-r-", ""), 10);
      }

      if (classes[classIndex].indexOf("ws-c-") === 0) {
        column = parseInt(classes[classIndex].replace("ws-c-", ""), 10);
      }
    }

    if (row === null || column === null || isNaN(row) || isNaN(column)) {
      return;
    }

    var cell = this.ob.activity_area.querySelector(
      '.ws_col[data-row="' + row + '"][data-column="' + column + '"]',
    );

    if (!cell) {
      return;
    }

    if (!this.dragging) {
      this.startSelection(cell);
    } else {
      this.updateSelection(cell);
    }
  },

  cellTouchEnd: function () {
    this.finishSelection();
  },

  /* =====================================
     Initial settings
  ===================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
