// ******************************************
// KN WORD SEARCH
// ******************************************

window.KnWordSearch = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    has_audio:
      obj[0].dataset.audio != undefined && obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.selectedLines = []; document.querySelector(".resetBtn")?.classList.add("disabled");

  this.dragStart = null;

  this.isDragging = false;

  this.completed = false;

  this.init(this.settings);
};

KnWordSearch.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  // =====================================================
  // NORMALIZE
  // =====================================================

  normalize: function (value) {
    if (value == undefined || value == null) {
      return "";
    }

    return value
      .toString()
      .toLowerCase()
      .replace(/[^a-z]/g, "")
      .trim();
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function (ob) {
    var self = this;

    var e = ob.activity_area;

    // =====================================================
    // POINTER DOWN
    // =====================================================

    $(e).on("pointerdown", ".kn_letter_cell", function (event) {
      if (self.completed === true) {
        return;
      }

      event.preventDefault();

      var cell = $(this);

      self.dragStart = {
        row: parseInt(cell.attr("data-row")),

        col: parseInt(cell.attr("data-col")),
      };

      self.isDragging = true;

      self.startPreview(self.dragStart);
    });

    // =====================================================
    // POINTER MOVE
    // =====================================================

    $(document).on("pointermove.knwordsearch", function (event) {
      if (self.isDragging !== true || self.completed === true) {
        return;
      }

      self.updatePreviewFromPointer(event);
    });

    // =====================================================
    // POINTER UP
    // =====================================================

    $(document).on("pointerup.knwordsearch", function (event) {
      if (self.isDragging !== true) {
        return;
      }

      self.isDragging = false;

      var endCell = self.getCellFromPoint(event.clientX, event.clientY);

      self.hidePreview();

      if (endCell == null || self.dragStart == null) {
        self.dragStart = null;

        return;
      }

      var end = {
        row: parseInt(endCell.attr("data-row")),

        col: parseInt(endCell.attr("data-col")),
      };

      self.createSelection(self.dragStart, end);

      self.dragStart = null;
    });
  },

  // =====================================================
  // GET GRID
  // =====================================================

  getGrid: function () {
    return $(this.ob.activity_area).find(".kn_grid");
  },

  // =====================================================
  // GET REAL CELL CENTER
  // =====================================================

  getPointPercent: function (row, col) {
    var grid = this.getGrid();

    if (grid.length === 0) {
      return {
        x: 0,
        y: 0,
      };
    }

    var cell = grid.find(
      '.kn_letter_cell[data-row="' + row + '"][data-col="' + col + '"]',
    );

    if (cell.length === 0) {
      return {
        x: 0,
        y: 0,
      };
    }

    var gridRect = grid[0].getBoundingClientRect();

    var cellRect = cell[0].getBoundingClientRect();

    var centerX = cellRect.left + cellRect.width / 2 - gridRect.left;

    var centerY = cellRect.top + cellRect.height / 2 - gridRect.top;

    return {
      x: (centerX / gridRect.width) * 100,

      y: (centerY / gridRect.height) * 100,
    };
  },

  // =====================================================
  // START PREVIEW
  // =====================================================

  startPreview: function (point) {
    var p = this.getPointPercent(point.row, point.col);

    this.getGrid()
      .find(".kn_preview_line")
      .attr({
        x1: p.x,

        y1: p.y,

        x2: p.x,

        y2: p.y,
      })
      .show();
  },

  // =====================================================
  // UPDATE PREVIEW
  // =====================================================

  updatePreviewFromPointer: function (event) {
    var grid = this.getGrid();

    if (grid.length === 0) {
      return;
    }

    var rect = grid[0].getBoundingClientRect();

    var x = ((event.clientX - rect.left) / rect.width) * 100;

    var y = ((event.clientY - rect.top) / rect.height) * 100;

    x = Math.max(0, Math.min(100, x));

    y = Math.max(0, Math.min(100, y));

    grid.find(".kn_preview_line").attr({
      x2: x,

      y2: y,
    });
  },

  // =====================================================
  // HIDE PREVIEW
  // =====================================================

  hidePreview: function () {
    this.getGrid().find(".kn_preview_line").hide();
  },

  // =====================================================
  // GET CELL FROM POINTER
  // =====================================================

  getCellFromPoint: function (x, y) {
    var element = document.elementFromPoint(x, y);

    if (element == null) {
      return null;
    }

    var cell = $(element).closest(".kn_letter_cell");

    if (cell.length === 0) {
      return null;
    }

    return cell;
  },

  // =====================================================
  // GET PATH CELLS
  //
  // horizontal
  // vertical
  // diagonal
  // =====================================================

  getPathCells: function (start, end) {
    var rowDiff = end.row - start.row;

    var colDiff = end.col - start.col;

    // same cell
    if (rowDiff === 0 && colDiff === 0) {
      return null;
    }

    var isHorizontal = rowDiff === 0;

    var isVertical = colDiff === 0;

    var isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);

    if (!isHorizontal && !isVertical && !isDiagonal) {
      return null;
    }

    var rowStep = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;

    var colStep = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;

    var length = Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;

    var cells = [];

    for (var i = 0; i < length; i++) {
      cells.push({
        row: start.row + rowStep * i,

        col: start.col + colStep * i,
      });
    }

    return cells;
  },

  // =====================================================
  // READ WORD FROM GRID
  // =====================================================

  getWordFromCells: function (cells) {
    var data = this.ob.data_obj;

    var word = "";

    for (var i = 0; i < cells.length; i++) {
      var row = cells[i].row - 1;

      var col = cells[i].col - 1;

      word += data.grid[row][col];
    }

    return this.normalize(word);
  },

  // =====================================================
  // SAME PLACEMENT
  //
  // IMPORTANT:
  // start -> end
  // OR
  // end -> start
  // BOTH VALID
  // =====================================================

  samePlacement: function (start, end, placement) {
    var normalDirection =
      start.row === placement.start.row &&
      start.col === placement.start.col &&
      end.row === placement.end.row &&
      end.col === placement.end.col;

    var reverseDirection =
      start.row === placement.end.row &&
      start.col === placement.end.col &&
      end.row === placement.start.row &&
      end.col === placement.start.col;

    return normalDirection || reverseDirection;
  },

  // =====================================================
  // GET TARGET WORDS
  // =====================================================

  getTargetWords: function () {
    var result = [];

    var targets = this.ob.data_obj.targetWords;

    for (var i = 0; i < targets.length; i++) {
      result.push(this.normalize(targets[i].word));
    }

    return result;
  },

  // =====================================================
  // FIND MATCHED TARGET
  //
  // يتأكد من:
  // 1. الكلمة نفسها
  // 2. المكان صحيح
  // 3. الاتجاهين صح
  // 4. multiple placements مثل KNEE
  // =====================================================

  findMatchedTarget: function (start, end, normalWord, reverseWord) {
    var targets = this.ob.data_obj.targetWords;

    for (var i = 0; i < targets.length; i++) {
      var target = targets[i];

      var targetWord = this.normalize(target.word);

      // =================================================
      // WORD MUST MATCH
      // =================================================

      if (normalWord !== targetWord && reverseWord !== targetWord) {
        continue;
      }

      // =================================================
      // MULTIPLE PLACEMENTS
      // =================================================

      if (
        target.placements != undefined &&
        target.placements != null &&
        target.placements.length > 0
      ) {
        for (var p = 0; p < target.placements.length; p++) {
          if (this.samePlacement(start, end, target.placements[p])) {
            return targetWord;
          }
        }

        continue;
      }

      // =================================================
      // NORMAL SINGLE PLACEMENT
      // =================================================

      if (
        target.start != undefined &&
        target.end != undefined &&
        this.samePlacement(start, end, target)
      ) {
        return targetWord;
      }
    }

    return null;
  },

  // =====================================================
  // CHECK WORD ALREADY FOUND
  // =====================================================

  isWordAlreadyFound: function (word) {
    for (var i = 0; i < this.selectedLines.length; i++) {
      if (this.selectedLines[i].matchedWord === word) {
        return true;
      }
    }

    return false;
  },

  // =====================================================
  // CREATE SELECTION
  // =====================================================

  createSelection: function (start, end) {
    var cells = this.getPathCells(start, end);

    if (cells == null) {
      return;
    }

    // =====================================================
    // READ NORMAL
    // =====================================================

    var normalWord = this.getWordFromCells(cells);

    // =====================================================
    // REVERSE
    // =====================================================

    var reverseWord = normalWord.split("").reverse().join("");

    // =====================================================
    // FIND VALID TARGET
    // =====================================================

    var matchedWord = this.findMatchedTarget(
      start,
      end,
      normalWord,
      reverseWord,
    );

    // =====================================================
    // WRONG LINE
    // DON'T SAVE ANYTHING
    // =====================================================

    if (matchedWord == null) {
      return;
    }

    // =====================================================
    // SAME WORD ALREADY FOUND
    //
    // KNEE in place 1 found?
    // then KNEE in place 2 does not count again.
    // =====================================================

    if (this.isWordAlreadyFound(matchedWord)) {
      return;
    }

    // =====================================================
    // SAVE WORD
    // =====================================================

    this.selectedLines.push({
      start: {
        row: start.row,

        col: start.col,
      },

      end: {
        row: end.row,

        col: end.col,
      },

      cells: cells,

      matchedWord: matchedWord,
    });

    // =====================================================
    // DRAW CAPSULE
    // =====================================================

    this.renderSelections(); document.querySelector(".resetBtn")?.classList.remove("disabled");

    // =====================================================
    // AUTO WRITE
    // =====================================================

    this.writeWordToInput(matchedWord);

    // =====================================================
    // AUTO COMPLETE
    // =====================================================

    this.checkAutoComplete();
  },

  // =====================================================
  // RENDER SELECTIONS
  //
  // capsule lines
  // overlapping words become darker automatically
  // =====================================================

  renderSelections: function () {
    var grid = this.getGrid();

    var group = grid.find(".kn_saved_lines");

    // clear old SVG capsules
    group.empty();

    // =====================================================
    // COUNT CELL USAGE
    // =====================================================

    var counts = {};

    for (var i = 0; i < this.selectedLines.length; i++) {
      var selected = this.selectedLines[i];

      for (var c = 0; c < selected.cells.length; c++) {
        var key = selected.cells[c].row + "_" + selected.cells[c].col;

        if (counts[key] == undefined) {
          counts[key] = 0;
        }

        counts[key]++;
      }
    }

    // =====================================================
    // RESET CONNECTED CLASSES
    // =====================================================

    grid
      .find(".kn_letter_cell")
      .removeClass("connected connected-1 connected-2 connected-3 connected-4");

    // =====================================================
    // APPLY DARKNESS LEVEL
    // =====================================================

    for (var key in counts) {
      if (!counts.hasOwnProperty(key)) {
        continue;
      }

      var parts = key.split("_");

      var level = Math.min(counts[key], 4);

      grid
        .find(
          '.kn_letter_cell[data-row="' +
            parts[0] +
            '"][data-col="' +
            parts[1] +
            '"]',
        )
        .addClass("connected connected-" + level);
    }

    // =====================================================
    // DRAW CAPSULE FOR EACH WORD
    // =====================================================

    for (var s = 0; s < this.selectedLines.length; s++) {
      var line = this.selectedLines[s];

      var startPoint = this.getPointPercent(line.start.row, line.start.col);

      var endPoint = this.getPointPercent(line.end.row, line.end.col);

      var svgLine = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );

      $(svgLine).attr({
        x1: startPoint.x,

        y1: startPoint.y,

        x2: endPoint.x,

        y2: endPoint.y,

        class: "kn_saved_line",
      });

      group.append(svgLine);
    }
  },

  // =====================================================
  // WRITE FOUND WORD TO FIRST EMPTY INPUT
  // =====================================================

  writeWordToInput: function (word) {
    var e = this.ob.activity_area;

    var normalizedWord = this.normalize(word);

    // =====================================================
    // ALREADY WRITTEN?
    // =====================================================

    var exists = false;

    $(e)
      .find(".kn_answer_input")
      .each(function () {
        var value = $(this)
          .val()
          .toLowerCase()
          .replace(/[^a-z]/g, "")
          .trim();

        if (value === normalizedWord) {
          exists = true;

          return false;
        }
      });

    if (exists) {
      return;
    }

    // =====================================================
    // FIND FIRST EMPTY
    // =====================================================

    var emptyInput = null;

    $(e)
      .find(".kn_answer_input")
      .each(function () {
        if ($.trim($(this).val()) === "") {
          emptyInput = $(this);

          return false;
        }
      });

    if (emptyInput == null) {
      return;
    }

    // =====================================================
    // WRITE
    // =====================================================

    emptyInput.val(word.toUpperCase()).css("color", "#000");
  },

  // =====================================================
  // CHECK AUTO COMPLETE
  // =====================================================

  checkAutoComplete: function () {
    if (this.completed === true) {
      return;
    }

    var targetWords = this.getTargetWords();

    var found = [];

    for (var i = 0; i < this.selectedLines.length; i++) {
      var word = this.selectedLines[i].matchedWord;

      if (found.indexOf(word) === -1) {
        found.push(word);
      }
    }

    // =====================================================
    // NOT DONE
    // =====================================================

    if (found.length !== targetWords.length) {
      return;
    }

    // =====================================================
    // COMPLETE
    // =====================================================

    this.completed = true;

    this.isDragging = false;

    this.dragStart = null;

    this.hidePreview();

    // =====================================================
    // SUCCESS IMMEDIATELY
    // =====================================================

    showFeedback(true, true);
  },

  // =====================================================
  // VALIDATE
  //
  // intentionally unused
  // no Check button
  // =====================================================

  validate: function () {
    return;
  },

  // =====================================================
  // RESET
  //
  // kept only because activity system may call it
  // no Reset button shown
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    this.selectedLines = []; document.querySelector(".resetBtn")?.classList.add("disabled");

    this.dragStart = null;

    this.isDragging = false;

    this.completed = false;

    $(e).find(".kn_saved_lines").empty();

    $(e).find(".kn_preview_line").hide();

    $(e)
      .find(".kn_letter_cell")
      .removeClass("connected connected-1 connected-2 connected-3 connected-4");

    $(e).find(".kn_answer_input").val("").css("color", "#000");
  },

  // =====================================================
  // INITIAL
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};

