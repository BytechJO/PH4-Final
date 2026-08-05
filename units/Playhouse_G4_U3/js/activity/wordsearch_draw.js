window.WordSearch = function (obj, dataObj) {
  if (!obj || !obj[0] || !dataObj || !dataObj.questions) {
    console.error("WordSearch: invalid constructor parameters.");
    return;
  }

  var options =
    obj[0].getElementsByClassName("options")[0];

  var question =
    dataObj.questions[0];

  this.settings = {
    num_rows: Number(question.rows),
    num_columns: Number(question.columns),

    matrix_holder:
      options.querySelector(".wordmatrix"),

    word_holder:
      options.querySelector(".wordlist"),

    letters:
      question.letters,

    words:
      question.words || [],

    data_obj:
      dataObj,

    activity_area:
      options,

    parent_holder:
      obj[0],

    selectionColor:
      question.selectionbooxcolor ||
      "rgb(39, 150, 166)",
  };

  this.init(this.settings);
};

WordSearch.prototype = {
  init: function (ob) {
    ob.wordList =
      this.getWordsFromOb(ob.words);

    ob.correctWords = [];

    ob.isSelecting = false;

    ob.startCell = null;
    ob.endCell = null;

    this.ob = ob;

    this.buildWordList();
    this.buildMatrix();
    this.bindGlobalEvents();
  },

  buildMatrix: function () {
    var ob = this.ob;

    var rows =
      this.getLetters(ob.letters);

    ob.matrix_holder.innerHTML = "";

    var corrHolder =
      document.createElement("div");

    corrHolder.className =
      "corrHolder";

    ob.matrix_holder.appendChild(
      corrHolder
    );

    var rect =
      document.createElement("div");

    rect.className = "rect";
    rect.style.display = "none";

    ob.matrix_holder.appendChild(rect);

    for (
      var row = 0;
      row < ob.num_rows;
      row++
    ) {
      var rowElement =
        document.createElement("div");

      rowElement.className =
        "ws_row row_" + (row + 1);

      for (
        var col = 0;
        col < ob.num_columns;
        col++
      ) {
        var cell =
          document.createElement("div");

        cell.className =
          "ws_col col_" +
          (row + 1) +
          "_" +
          (col + 1);

        cell.dataset.row =
          row + 1;

        cell.dataset.col =
          col + 1;

        var letter =
          document.createElement("p");

        letter.textContent =
          rows[row] &&
          rows[row][col] !== undefined
            ? rows[row][col]
            : "";

        cell.appendChild(letter);
        rowElement.appendChild(cell);
      }

      ob.matrix_holder.appendChild(
        rowElement
      );
    }

    this.bindCellEvents();
  },

  buildWordList: function () {
    var ob = this.ob;

    ob.word_holder.innerHTML = "";

    for (
      var i = 0;
      i < ob.wordList.length;
      i++
    ) {
      var item =
        document.createElement("div");

      item.className =
        "word word_" +
        (i + 1) +
        " inLine";

      var icon =
        document.createElement("i");

      icon.className =
        "fa fa-check green";

      icon.style.display =
        "none";

      var text =
        document.createElement("p");

      text.textContent =
        ob.wordList[i];

      item.appendChild(icon);
      item.appendChild(text);

      ob.word_holder.appendChild(
        item
      );
    }
  },

  bindCellEvents: function () {
    var self = this;
    var ob = this.ob;

    var cells =
      ob.matrix_holder.querySelectorAll(
        ".ws_col"
      );

    cells.forEach(function (cell) {
      cell.addEventListener(
        "mousedown",
        function (event) {
          event.preventDefault();
          self.startSelection(cell);
        }
      );

      cell.addEventListener(
        "mouseenter",
        function () {
          if (ob.isSelecting) {
            self.moveSelection(cell);
          }
        }
      );

      cell.addEventListener(
        "mouseup",
        function () {
          if (ob.isSelecting) {
            self.endSelection(cell);
          }
        }
      );

      cell.addEventListener(
        "touchstart",
        function (event) {
          event.preventDefault();
          self.startSelection(cell);
        },
        {
          passive: false,
        }
      );
    });

    ob.matrix_holder.addEventListener(
      "touchmove",
      function (event) {
        if (!ob.isSelecting) {
          return;
        }

        event.preventDefault();

        var touch =
          event.touches[0];

        var target =
          document.elementFromPoint(
            touch.clientX,
            touch.clientY
          );

        var cell =
          target && target.closest
            ? target.closest(".ws_col")
            : null;

        if (
          cell &&
          ob.matrix_holder.contains(cell)
        ) {
          self.moveSelection(cell);
        }
      },
      {
        passive: false,
      }
    );

    ob.matrix_holder.addEventListener(
      "touchend",
      function () {
        if (ob.isSelecting) {
          self.finishSelection();
        }
      }
    );

    ob.matrix_holder.addEventListener(
      "touchcancel",
      function () {
        if (ob.isSelecting) {
          self.cancelSelection();
        }
      }
    );
  },

  bindGlobalEvents: function () {
    var self = this;
    var ob = this.ob;

    ob.parent_holder.addEventListener(
      "mouseup",
      function () {
        if (ob.isSelecting) {
          self.finishSelection();
        }
      }
    );

    window.addEventListener(
      "resize",
      function () {
        self.redrawCorrectSelections();
      }
    );
  },

  startSelection: function (cell) {
    var ob = this.ob;

    ob.isSelecting = true;

    ob.startCell = cell;
    ob.endCell = cell;

    this.drawTemporarySelection();
  },

  moveSelection: function (cell) {
    var ob = this.ob;

    if (
      !ob.isSelecting ||
      !cell
    ) {
      return;
    }

    ob.endCell = cell;

    this.drawTemporarySelection();
  },

  endSelection: function (cell) {
    var ob = this.ob;

    if (cell) {
      ob.endCell = cell;
    }

    this.finishSelection();
  },

  finishSelection: function () {
    var ob = this.ob;

    if (
      !ob.startCell ||
      !ob.endCell
    ) {
      this.cancelSelection();
      return;
    }

    var selectedCells =
      this.getSelectedCells(
        ob.startCell,
        ob.endCell
      );

    if (!selectedCells.length) {
      this.cancelSelection();
      return;
    }

    var selectedWord =
      selectedCells
        .map(function (cell) {
          return cell.textContent.trim();
        })
        .join("")
        .toLowerCase();

    var reverseWord =
      selectedWord
        .split("")
        .reverse()
        .join("");

    var matchIndex = -1;

    for (
      var i = 0;
      i < ob.wordList.length;
      i++
    ) {
      var target =
        this.normalizeWord(
          ob.wordList[i]
        );

      if (
        selectedWord === target ||
        reverseWord === target
      ) {
        matchIndex = i;
        break;
      }
    }

    if (
      matchIndex >= 0 &&
      !ob.correctWords.some(
        function (item) {
          return item.index ===
            matchIndex;
        }
      )
    ) {
      ob.correctWords.push({
        index:
          matchIndex,

        startClass:
          this.getCellClass(
            ob.startCell
          ),

        endClass:
          this.getCellClass(
            ob.endCell
          ),
      });

      this.markWordCorrect(
        matchIndex
      );

      this.drawPermanentSelection(
        ob.startCell,
        ob.endCell,
        "word_" + matchIndex
      );

      var resetBtn =
        document.getElementsByClassName(
          "resetBtn"
        )[0];

      if (resetBtn) {
        resetBtn.classList.remove(
          "disabled"
        );
      }

      if (
        ob.correctWords.length ===
          ob.wordList.length &&
        typeof showFeedback ===
          "function"
      ) {
        showFeedback(true, true);
      }
    }

    this.cancelSelection();
  },

  cancelSelection: function () {
    var ob = this.ob;

    var rect =
      ob.matrix_holder.querySelector(
        ".rect"
      );

    ob.isSelecting = false;

    ob.startCell = null;
    ob.endCell = null;

    if (rect) {
      rect.style.display =
        "none";

      rect.style.transform =
        "";
    }
  },

  getSelectedCells: function (
    startCell,
    endCell
  ) {
    var ob = this.ob;

    var startRow =
      Number(
        startCell.dataset.row
      );

    var startCol =
      Number(
        startCell.dataset.col
      );

    var endRow =
      Number(
        endCell.dataset.row
      );

    var endCol =
      Number(
        endCell.dataset.col
      );

    var rowDiff =
      endRow - startRow;

    var colDiff =
      endCol - startCol;

    var isHorizontal =
      rowDiff === 0;

    var isVertical =
      colDiff === 0;

    var isDiagonal =
      Math.abs(rowDiff) ===
      Math.abs(colDiff);

    if (
      !isHorizontal &&
      !isVertical &&
      !isDiagonal
    ) {
      return [];
    }

    var rowStep =
      rowDiff === 0
        ? 0
        : rowDiff > 0
          ? 1
          : -1;

    var colStep =
      colDiff === 0
        ? 0
        : colDiff > 0
          ? 1
          : -1;

    var length =
      Math.max(
        Math.abs(rowDiff),
        Math.abs(colDiff)
      ) + 1;

    var result = [];

    for (
      var i = 0;
      i < length;
      i++
    ) {
      var row =
        startRow +
        rowStep * i;

      var col =
        startCol +
        colStep * i;

      var cell =
        ob.matrix_holder.querySelector(
          ".col_" +
          row +
          "_" +
          col
        );

      if (cell) {
        result.push(cell);
      }
    }

    return result;
  },

  drawTemporarySelection: function () {
    var ob = this.ob;

    var rect =
      ob.matrix_holder.querySelector(
        ".rect"
      );

    if (
      !rect ||
      !ob.startCell ||
      !ob.endCell
    ) {
      return;
    }

    this.positionSelection(
      rect,
      ob.startCell,
      ob.endCell
    );

    rect.style.borderColor =
      ob.selectionColor;

    rect.style.display =
      "block";
  },

  drawPermanentSelection: function (
    startCell,
    endCell,
    className
  ) {
    var ob = this.ob;

    var holder =
      ob.matrix_holder.querySelector(
        ".corrHolder"
      );

    var rect =
      document.createElement("div");

    rect.className =
      "corr corr_" + className;

    holder.appendChild(rect);

    this.positionSelection(
      rect,
      startCell,
      endCell
    );

    rect.style.display =
      "block";
  },

  positionSelection: function (
    rect,
    startCell,
    endCell
  ) {
    var matrixRect =
      this.ob.matrix_holder
        .getBoundingClientRect();

    var startRect =
      startCell
        .getBoundingClientRect();

    var endRect =
      endCell
        .getBoundingClientRect();

    var startX =
      startRect.left -
      matrixRect.left +
      startRect.width / 2;

    var startY =
      startRect.top -
      matrixRect.top +
      startRect.height / 2;

    var endX =
      endRect.left -
      matrixRect.left +
      endRect.width / 2;

    var endY =
      endRect.top -
      matrixRect.top +
      endRect.height / 2;

    var dx =
      endX - startX;

    var dy =
      endY - startY;

    var thickness =
      Math.min(
        startRect.width,
        startRect.height
      ) * 0.72;

    var length =
      Math.sqrt(
        dx * dx +
        dy * dy
      ) + thickness;

    var angle =
      Math.atan2(
        dy,
        dx
      ) * (180 / Math.PI);

    rect.style.left =
      startX -
      thickness / 2 +
      "px";

    rect.style.top =
      startY -
      thickness / 2 +
      "px";

    rect.style.width =
      length + "px";

    rect.style.height =
      thickness + "px";

    rect.style.transformOrigin =
      thickness / 2 +
      "px " +
      thickness / 2 +
      "px";

    rect.style.transform =
      "rotate(" +
      angle +
      "deg)";
  },

  markWordCorrect: function (
    index
  ) {
    var item =
      this.ob.word_holder
        .querySelector(
          ".word_" +
          (index + 1)
        );

    if (!item) {
      return;
    }

    item.classList.add(
      "word-found"
    );

    var icon =
      item.querySelector("i");

    if (icon) {
      icon.style.display =
        "inline-block";
    }
  },

  redrawCorrectSelections:
    function () {
      var ob = this.ob;

      var holder =
        ob.matrix_holder
          .querySelector(
            ".corrHolder"
          );

      if (!holder) {
        return;
      }

      holder.innerHTML = "";

      for (
        var i = 0;
        i < ob.correctWords.length;
        i++
      ) {
        var item =
          ob.correctWords[i];

        var startCell =
          ob.matrix_holder
            .querySelector(
              "." +
              item.startClass
            );

        var endCell =
          ob.matrix_holder
            .querySelector(
              "." +
              item.endClass
            );

        if (
          startCell &&
          endCell
        ) {
          this.drawPermanentSelection(
            startCell,
            endCell,
            "word_" +
            item.index
          );
        }
      }
    },

  getCellClass: function (cell) {
    var classes =
      Array.from(
        cell.classList
      );

    return classes.find(
      function (className) {
        return (
          className.indexOf(
            "col_"
          ) === 0
        );
      }
    );
  },

  normalizeWord: function (word) {
    return String(word)
      .replace(/\s+/g, "")
      .toLowerCase();
  },

  getWordsFromOb: function (
    words
  ) {
    return words.map(
      function (item) {
        return String(
          item.text || ""
        ).trim();
      }
    );
  },

  getLetters: function (
    letters
  ) {
    return String(letters)
      .split(",")
      .map(function (row) {
        return row
          .trim()
          .split("");
      });
  },

  reset: function () {
    var ob = this.ob;

    ob.correctWords = [];

    ob.isSelecting = false;

    ob.startCell = null;
    ob.endCell = null;

    var rect =
      ob.matrix_holder
        .querySelector(
          ".rect"
        );

    var corrHolder =
      ob.matrix_holder
        .querySelector(
          ".corrHolder"
        );

    if (rect) {
      rect.style.display =
        "none";
    }

    if (corrHolder) {
      corrHolder.innerHTML =
        "";
    }

    var wordItems =
      ob.word_holder
        .querySelectorAll(
          ".word"
        );

    wordItems.forEach(
      function (item) {
        item.classList.remove(
          "word-found"
        );

        var icon =
          item.querySelector("i");

        if (icon) {
          icon.style.display =
            "none";
        }
      }
    );
  },

  initialSettings: function () {
    this.reset();

    if (
      typeof initialSettingsDone ===
      "function"
    ) {
      initialSettingsDone(1);
    }
  },

  screenPoseAdjustments:
    function () {
      this.redrawCorrectSelections();
    },
};
