//  ****************************************** //
//  WordSearch - Updated
//  Supports horizontal / vertical / diagonal
//  Words with spaces supported
//  ****************************************** //

window.WordSearch = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    num_rows: dataObj.questions[0].rows,

    num_columns: dataObj.questions[0].columns,

    matrix_holder: ob[0].querySelector(".wordmatrix"),

    word_holder: ob[0].querySelector(".wordlist"),

    letters: dataObj.questions[0].letters,

    words: dataObj.questions[0].words,

    css_words:
      ob[0].dataset.css_words != undefined && ob[0].dataset.css_words != null
        ? ob[0].dataset.css_words
        : "none",

    data_obj: dataObj,

    activity_area: ob[0],

    parent_holder: obj[0],
  };

  this.orientationAdjust = "yes";

  this.init(this.settings);
};

WordSearch.prototype = {
  /* =====================================================
     INIT
  ===================================================== */

  init: function (ob) {
    ob.wordList = this.getWordsFromOb(ob.words);

    ob._startSelect = false;

    ob._selCellArr = [];

    ob._selStart = "";

    ob._selEnd = "";

    ob._selWordArr = [];

    ob.boxSize = 0;

    ob.fontSize = 30;

    ob.matrixbuilt = "no";

    ob.wordlistbuilt = "no";

    ob.mobileView = "no";

    ob._rectOb = {
      left: 0,

      top: 0,

      width: 0,

      height: 0,

      endX: 0,

      endY: 0,

      angle: 0,

      offsetPose: 0,

      originalwidth: 0,

      transformPerc: "",

      borderRadius: "",
    };

    ob.correctCount = 0;

    ob.allCorrect = 0;

    ob.rightOffset = 0;

    ob.corrWords = [];

    ob.rLeft = 0;

    ob.rTop = 0;

    ob.trackTxt = "";

    this.buildWordList(ob);

    this.buildMatrix(ob);

    this.addSlideListeners(ob);

    this.ob = ob;
  },

  /* =====================================================
     SCREEN SIZE
  ===================================================== */

  screenPoseAdjustments: function () {
    var self = this;

    var ob = this.ob;

    var $options = $(ob.activity_area);

    var $parent = $(ob.parent_holder);

    var $data = ob.data_obj.questions[0];

    ob.mobileView = "no";

    var holderHeight = $options.height() - 10;

    if (holderHeight > 0) {
      $options.find(".wordmatrix_holder").css("height", holderHeight);
    }

    ob.rightOffset = $(".container").css("margin-left");

    if (typeof isMobile === "function" && isMobile()) {
      ob.rightOffset = 0;
    }

    if (ob.wordlistbuilt === "yes") {
      var availWidth = $options.find(".all_cont").innerWidth();

      var holder = $options.find(".wordmatrix_holder");

      /*
        نخلي الـboxSize يعتمد على
        الحجم الفعلي المتاح.
      */

      var matrixWidth = holder.innerWidth();

      var matrixHeight = holder.innerHeight();

      if (!matrixWidth || matrixWidth <= 0) {
        matrixWidth = ob.num_columns * 30;
      }

      if (!matrixHeight || matrixHeight <= 0) {
        matrixHeight = ob.num_rows * 30;
      }

      var tmpWid = matrixWidth / ob.num_columns;

      var tmpHt = matrixHeight / ob.num_rows;

      ob.boxSize = tmpWid <= tmpHt ? tmpWid : tmpHt;

      /*
        Desktop
      */

      if (availWidth >= 900) {
        ob.mobileView = "no";

        $parent.find(".wordlist_but").addClass("d-none");

        $options
          .find(".wordlist")
          .removeClass("onPop d-none")
          .addClass("d-flex");

        /*
        Tablet / mobile
      */
      } else {
        ob.mobileView = "yes";

        /*
          بما إن الكلمات عندنا فوق
          ما نخفيهم popup.
        */

        $options
          .find(".wordlist")
          .removeClass("onPop d-none")
          .addClass("d-flex");

        $parent.find(".wordlist_but").addClass("d-none");
      }

      var min_font_size =
        typeof $data.fontsizemin !== "undefined" && $data.fontsizemin != null
          ? parseInt($data.fontsizemin)
          : 30;

      ob.fontSize = min_font_size;
    }

    $parent
      .find(".wordlist_but")
      .css("right", parseInt(ob.rightOffset) + 10 + "px");

    self.setSizes();
  },

  /* =====================================================
     SHOW WORD LIST
  ===================================================== */

  showWordList: function (bool) {
    var ob = this.ob;

    var $options = $(ob.activity_area);

    var $wordList = $options.find(".wordlist");

    /*
      الكلمات عنا دايماً فوق،
      فلا نخفيها أثناء السحب.
    */

    $wordList.removeClass("d-none").addClass("d-flex");
  },

  /* =====================================================
     BUILD MATRIX
  ===================================================== */

  buildMatrix: function (ob) {
    this.deleteChild(ob.matrix_holder);

    var self = this;

    var letArr = this.getletters(ob.letters);

    var divCorrect = document.createElement("div");

    divCorrect.setAttribute("class", "corrHolder");

    ob.matrix_holder.appendChild(divCorrect);

    var divRect = document.createElement("div");

    divRect.setAttribute("class", "rect");

    ob.matrix_holder.appendChild(divRect);

    for (var row = 0; row < ob.num_rows; row++) {
      var divEl = document.createElement("div");

      divEl.setAttribute("class", "ws_row row_" + (row + 1));

      divEl.classList.add("d-flex");

      ob.matrix_holder.appendChild(divEl);

      for (var col = 0; col < ob.num_columns; col++) {
        var colEl = document.createElement("div");

        var t = document.createElement("p");

        colEl.setAttribute(
          "class",
          "ws_col col_" + (row + 1) + "_" + (col + 1),
        );

        colEl.appendChild(t);

        if (letArr[row] && typeof letArr[row][col] !== "undefined") {
          t.innerHTML = letArr[row][col];
        }

        divEl.appendChild(colEl);
      }
    }

    ob.matrixbuilt = "yes";

    var matrix = $(ob.matrix_holder);

    var cells = matrix.find(".ws_col");

    /* =========================================
       TOUCH START
    ========================================= */

    cells.on("touchstart", function (event) {
      self.cellDown($(this), event);
    });

    /* =========================================
       MOUSE DOWN
    ========================================= */

    cells.on("mousedown", function (event) {
      self.cellDown($(this), event);
    });

    /* =========================================
       MOUSE MOVE
    ========================================= */

    cells.on("mouseover", function () {
      var fCl = $(this).attr("class").split(" ")[1];

      self.cellMove(fCl);
    });

    /* =========================================
       MOUSE UP
    ========================================= */

    cells.on("mouseup", function () {
      self.cellUp($(this).attr("class"));
    });
  },

  /* =====================================================
     SET SIZES
  ===================================================== */

  setSizes: function () {
    var self = this;

    var ob = this.ob;

    var $options = $(ob.activity_area);

    var matrix = $(ob.matrix_holder);

    if (ob.matrixbuilt === "yes") {
      /*
        CSS عندنا يتحكم بالحجم،
        فنجيب الحجم الحقيقي بدل
        ما نفرض ob.boxSize.
      */

      var firstCell = $options.find(".ws_col").first();

      if (firstCell.length) {
        ob.boxSize = firstCell.outerWidth();
      }

      $options.find(".ws_col").each(function () {
        $(this).find("p").css({
          position: "absolute",

          top: "50%",

          left: "50%",

          "margin-right": "-50%",

          transform: "translate(-50%, -50%)",
        });
      });

      var lastXBox = matrix.find(".col_1_" + ob.num_columns);

      var lastYBox = matrix.find(".col_" + ob.num_rows + "_" + ob.num_columns);

      if (lastXBox.length && lastYBox.length) {
        ob._rectOb.endX = lastXBox.position().left + lastXBox.innerWidth();

        ob._rectOb.endY = lastYBox.position().top + lastYBox.innerHeight();

        ob._rectOb.borderRadius = lastYBox.height();

        ob._rectOb.height = Math.round(0.8 * firstCell.outerHeight());

        ob._rectOb.transformPerc = Math.round(ob._rectOb.height) / 2;

        ob._rectOb.originalwidth = Math.round(0.8 * firstCell.outerWidth());

        ob._rectOb.width = ob._rectOb.originalwidth;

        ob._rectOb.offsetPose = Math.round(0.1 * firstCell.outerWidth());
      }

      /*
        نخلي المصفوفة بمكانها الطبيعي.
      */

      $options.find(".wordmatrix").css("margin-top", "0px");

      var firstMatrixCell = $options.find(".col_1_1");

      if (firstMatrixCell.length) {
        ob.rLeft = firstMatrixCell.offset().left;

        ob.rTop = firstMatrixCell.offset().top;
      }
    }

    /* =========================================
       REDRAW CORRECT WORDS
    ========================================= */

    if (ob.corrWords.length > 0) {
      var e = $(ob.matrix_holder);

      var corr = e.find(".corrHolder");

      corr.empty();

      for (var cc = 0; cc < ob.corrWords.length; cc++) {
        self.drawRect(ob.corrWords[cc], "redraw", ob.corrWords[cc].word);
      }
    }

    /* =========================================
       TOUCH MOVE
    ========================================= */

    matrix.off("touchmove.wordSearch").on("touchmove.wordSearch", function (e) {
      var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;

      var touch = evt.touches[0] || evt.changedTouches[0];

      if (!touch) {
        return;
      }

      var x = touch.clientX;

      var y = touch.clientY;

      if (y >= ob.rTop && x >= ob.rLeft) {
        var col = Math.floor((x - ob.rLeft) / ob.boxSize) + 1;

        var row = Math.floor((y - ob.rTop) / ob.boxSize) + 1;

        if (
          row >= 1 &&
          row <= ob.num_rows &&
          col >= 1 &&
          col <= ob.num_columns
        ) {
          self.cellMove("col_" + row + "_" + col);
        }
      }
    });

    matrix
      .off("touchend.wordSearch touchcancel.wordSearch")
      .on("touchend.wordSearch touchcancel.wordSearch", function () {
        self.cellTouchEnd();
      });
  },

  /* =====================================================
     CELL DOWN
  ===================================================== */

  cellDown: function (cell, evt) {
    var self = this;

    var ob = this.ob;

    ob._startSelect = true;

    ob._selWordArr = [];

    if (ob._startSelect && cell != undefined) {
      var thisCell = cell.attr("class").split(" ")[1];

      var $thisCell = $(ob.matrix_holder).find("." + thisCell);

      ob._rectOb.left = $thisCell.position().left + ob._rectOb.offsetPose;

      ob._rectOb.top = $thisCell.position().top + ob._rectOb.offsetPose;

      ob._selStart = thisCell;

      ob._selEnd = thisCell;

      self.drawRect(ob, "start", "");
    }
  },

  /* =====================================================
     CELL MOVE
  ===================================================== */

  cellMove: function (cell) {
    var self = this;

    var ob = this.ob;

    var eMatrix = $(ob.matrix_holder);

    var cellCls;

    if (typeof cell === "string") {
      cellCls = cell;
    } else if (cell && cell.value) {
      cellCls = cell.value;
    }

    if (!ob._startSelect || !cellCls) {
      return;
    }

    var fCell = eMatrix.find("." + cellCls);

    if (!fCell.length) {
      return;
    }

    ob._selEnd = cellCls;

    var centerX = fCell.position().left + ob._rectOb.offsetPose;

    var centerY = fCell.position().top + ob._rectOb.offsetPose;

    var dx = centerX - ob._rectOb.left;

    var dy = centerY - ob._rectOb.top;

    var tmpWidth = Math.sqrt(dx * dx + dy * dy);

    ob._rectOb.width = tmpWidth + Math.round(0.8 * fCell.outerWidth());

    var ang = self.angleBetweenTwoPoints(
      ob._rectOb.endX,
      ob._rectOb.top,
      centerX,
      centerY,
      ob._rectOb.left,
      ob._rectOb.top,
    );

    ob._rectOb.angle = ang * (180 / Math.PI) * -1;

    self.drawRect(ob, "move", "");
  },

  /* =====================================================
     CELL UP
  ===================================================== */

  cellUp: function (cell) {
    var self = this;

    var ob = this.ob;

    if (ob._startSelect && cell != undefined) {
      var classes = cell.split(" ");

      var thisCell = classes.length > 1 ? classes[1] : classes[0];

      ob._selEnd = thisCell;

      self.validate(ob);

      ob._startSelect = false;
    }
  },

  /* =====================================================
     TOUCH END
  ===================================================== */

  cellTouchEnd: function () {
    var ob = this.ob;

    var self = this;

    if (ob._startSelect) {
      self.validate(ob);

      ob._startSelect = false;
    }
  },

  /* =====================================================
     DRAW RECT
  ===================================================== */

  drawRect: function (ob, axn, nam) {
    /*
      redraw يستخدم saved object.
      start / move / correct يستخدم activity object.
    */

    var isRedraw = axn === "redraw";

    var activityOb = isRedraw ? this.ob : ob;

    var e = $(activityOb.matrix_holder);

    var corr = e.find(".corrHolder");

    var rect;

    var $data = activityOb.data_obj.questions[0];

    var rect_color =
      typeof $data.selectionbooxcolor !== "undefined" &&
      $data.selectionbooxcolor != null
        ? $data.selectionbooxcolor
        : "blue";

    if (nam === "") {
      rect = e.find(".rect");
    } else {
      var safeName = nam.replace(/\s+/g, "");

      if (corr.find(".corr_" + safeName).length === 0) {
        corr.append('<div class="corr corr_' + safeName + '"></div>');
      }

      rect = corr.find(".corr_" + safeName);
    }

    var obj = isRedraw ? ob.rectObj : activityOb._rectOb;

    if (axn === "start") {
      rect.css({
        top: obj.top + "px",

        left: obj.left + "px",

        width: obj.width + "px",

        height: obj.height + "px",

        "border-color": rect_color,

        transform: "rotate(0deg)",
      });
    } else if (axn === "move") {
      rect.css({
        width: obj.width + "px",

        transform: "rotate(" + obj.angle + "deg)",

        "transform-origin":
          obj.transformPerc + "px " + obj.transformPerc + "px 0px",
      });
    } else if (axn === "correct" || axn === "redraw") {
      rect.css({
        top: obj.top + "px",

        left: obj.left + "px",

        width: obj.width + "px",

        height: obj.height + "px",

        transform: "rotate(" + obj.angle + "deg)",

        "transform-origin":
          obj.transformPerc + "px " + obj.transformPerc + "px 0px",
      });
    }

    rect.css({
      "border-radius": obj.borderRadius,

      display: "block",
    });
  },

  /* =====================================================
     ANGLE
  ===================================================== */

  angleBetweenTwoPoints: function (
    point1X,
    point1Y,
    point2X,
    point2Y,
    fixedX,
    fixedY,
  ) {
    var angle1 = Math.atan2(point1Y - fixedY, point1X - fixedX);

    var angle2 = Math.atan2(point2Y - fixedY, point2X - fixedX);

    return angle1 - angle2;
  },

  /* =====================================================
     SLIDE EVENTS
  ===================================================== */

  addSlideListeners: function (ob) {
    var self = this;

    var parentEl = ob.parent_holder;

    parentEl.addEventListener("mouseup", function () {
      if (ob._startSelect) {
        self.validate(ob);

        ob._startSelect = false;
      }
    });
  },

  /* =====================================================
     VALIDATE
  ===================================================== */

  validate: function (ob) {
    var self = this;

    var wordArr = this.changeCase(ob.wordList);

    wordArr = this.trimSpaces(wordArr);

    var e = $(ob.matrix_holder);

    var e1 = ob.word_holder;

    var corr = e.find(".corrHolder");

    ob._selWordArr = [];

    ob.allCorrect = self.checkTotals(ob);

    if (ob.allCorrect != 1) {
      var startCell = ob._selStart;

      var endCell = ob._selEnd;

      if (!startCell || !endCell) {
        self.resetDraw("tmp");

        return;
      }

      var startArr = getIntArray(startCell.split("_"));

      var endArr = getIntArray(endCell.split("_"));

      var startRow = startArr[1];

      var startCol = startArr[2];

      var endRow = endArr[1];

      var endCol = endArr[2];

      var rowDiff = endRow - startRow;

      var colDiff = endCol - startCol;

      var rowStep = 0;

      var colStep = 0;

      /* =========================================
         HORIZONTAL
      ========================================= */

      if (rowDiff === 0 && colDiff !== 0) {
        rowStep = 0;

        colStep = colDiff > 0 ? 1 : -1;

        /* =========================================
         VERTICAL
      ========================================= */
      } else if (colDiff === 0 && rowDiff !== 0) {
        rowStep = rowDiff > 0 ? 1 : -1;

        colStep = 0;

        /* =========================================
         DIAGONAL
      ========================================= */
      } else if (Math.abs(rowDiff) === Math.abs(colDiff) && rowDiff !== 0) {
        rowStep = rowDiff > 0 ? 1 : -1;

        colStep = colDiff > 0 ? 1 : -1;
      } else {
        ob._rectOb.width = ob._rectOb.originalwidth;

        self.resetDraw("tmp");

        return;
      }

      /* =========================================
         COLLECT LETTERS
      ========================================= */

      var currentRow = startRow;

      var currentCol = startCol;

      while (true) {
        var thisCell = e.find(".col_" + currentRow + "_" + currentCol);

        if (thisCell.length) {
          ob._selWordArr.push(thisCell.find("p").html());
        }

        if (currentRow === endRow && currentCol === endCol) {
          break;
        }

        currentRow += rowStep;

        currentCol += colStep;
      }

      /* =========================================
         CHECK WORD
      ========================================= */

      if (ob._selWordArr.length > 0) {
        var tWord = ob._selWordArr.join("").toLowerCase();

        var isCorrect = false;

        var theIndx = $.inArray(tWord, wordArr);

        /* normal */

        if (theIndx >= 0) {
          isCorrect = true;

          /* reverse */
        } else {
          var reversedWord = ob._selWordArr
            .slice()
            .reverse()
            .join("")
            .toLowerCase();

          var reverseIndex = $.inArray(reversedWord, wordArr);

          if (reverseIndex >= 0) {
            tWord = reversedWord;

            theIndx = reverseIndex;

            isCorrect = true;
          }
        }

        /* =========================================
           CORRECT
        ========================================= */

        if (isCorrect) {
          var safeWord = tWord.replace(/\s+/g, "");

          if (corr.find(".corr_" + safeWord).length === 0) {
            var _w = e1.getElementsByClassName("word_" + (theIndx + 1))[0];

            if (_w) {
              var _p = _w.getElementsByTagName("p")[0];

              var _i = _w.getElementsByTagName("i")[0];

              var _tAns = this.trimSpaces([_p.innerHTML]);

              if (_tAns[0] === tWord && _i.style.display === "none") {
                ob.correctCount++;

                _i.style.display = "block";
              }
            }

            /* =====================================
               SAVE RECT
            ===================================== */

            var newObj = {
              word: safeWord,

              rectObj: {
                left: ob._rectOb.left,

                top: ob._rectOb.top,

                width: ob._rectOb.width,

                height: ob._rectOb.height,

                endX: ob._rectOb.endX,

                endY: ob._rectOb.endY,

                angle: ob._rectOb.angle,

                offsetPose: ob._rectOb.offsetPose,

                originalwidth: ob._rectOb.originalwidth,

                transformPerc: ob._rectOb.transformPerc,

                borderRadius: ob._rectOb.borderRadius,
              },
            };

            ob.corrWords.push(newObj);

            /*
              الصحيح هون ob
              وليس newObj
            */

            self.drawRect(ob, "correct", safeWord);

            var resetBtn = document.getElementsByClassName("resetBtn")[0];

            if (resetBtn) {
              resetBtn.classList.remove("disabled");
            }
          }
        }
      }

      /* =========================================
         ALL CORRECT
      ========================================= */

      ob.allCorrect = self.checkTotals(ob);

      if (ob.allCorrect == 1) {
        showFeedback(true, true);
      }
    }

    ob._rectOb.width = ob._rectOb.originalwidth;

    self.resetDraw("tmp");
  },

  /* =====================================================
     CHECK TOTAL
  ===================================================== */

  checkTotals: function (ob) {
    var ret = 0;

    if (ob.wordList.length > 0) {
      if (ob.correctCount === ob.wordList.length) {
        ret = 1;
      }
    }

    return ret;
  },

  /* =====================================================
     BUILD WORD LIST
  ===================================================== */

  buildWordList: function (ob) {
    this.deleteChild(ob.word_holder);

    var cssArr = [];

    if (ob.css_words !== "none") {
      cssArr = ob.css_words.toString().split(",");
    }

    if (ob.wordList.length > 0) {
      for (var r = 0; r < ob.wordList.length; r++) {
        var divEl = document.createElement("div");

        divEl.setAttribute("class", "word word_" + (r + 1));

        divEl.classList.add("inLine");

        /*
            هذا العنصر هو اللي
            الـCSS يحوله لشحطة
          */

        var i = document.createElement("i");

        i.setAttribute("class", "fa fa-check green");

        i.style.display = "none";

        divEl.appendChild(i);

        var t = document.createElement("p");

        if (ob.css_words !== "none") {
          if (cssArr[r] && cssArr[r].length > 0) {
            var tcss = cssArr[r].split("|");

            if (tcss.length > 0) {
              divEl.style.position = "absolute";

              for (var css = 0; css < tcss.length; css++) {
                var tArr = tcss[css].split(":");

                if ($.trim(tArr[0]) === "left") {
                  divEl.style.left = tArr[1];
                }

                if ($.trim(tArr[0]) === "top") {
                  divEl.style.top = tArr[1];
                }
              }
            }
          }
        }

        t.innerHTML = ob.wordList[r];

        divEl.appendChild(t);

        ob.word_holder.appendChild(divEl);

        ob.wordlistbuilt = "yes";
      }
    }
  },

  /* =====================================================
     RESET DRAW
  ===================================================== */

  resetDraw: function (val) {
    var ob = this.ob;

    var e = $(ob.matrix_holder);

    var corr = e.find(".corrHolder");

    var rect = e.find(".rect");

    if (val === "all") {
      corr.empty();

      rect.css({
        display: "none",
      });
    } else if (val === "tmp") {
      rect.css({
        display: "none",
      });
    }
  },

  /* =====================================================
     RESET
  ===================================================== */

  reset: function () {
    var self = this;

    var ob = this.ob;

    var el = ob.word_holder;

    var elsIcon = el.querySelectorAll("i");

    for (var j = 0; j < elsIcon.length; j++) {
      elsIcon[j].style.display = "none";
    }

    self.resetDraw("all");

    ob.correctCount = 0;

    ob.allCorrect = 0;

    ob.corrWords = [];

    ob._selWordArr = [];

    ob._selStart = "";

    ob._selEnd = "";
  },

  /* =====================================================
     DELETE CHILDREN
  ===================================================== */

  deleteChild: function (obj) {
    var child = obj.lastElementChild;

    while (child) {
      obj.removeChild(child);

      child = obj.lastElementChild;
    }
  },

  /* =====================================================
     GET WORD LIST
  ===================================================== */

  getWordsFromOb: function (arr) {
    var fArr = [];

    if (arr.length > 0) {
      for (var a = 0; a < arr.length; a++) {
        fArr[a] = $.trim(arr[a].text);
      }
    }

    return fArr;
  },

  /* =====================================================
     GET WORDS
  ===================================================== */

  getWords: function (str) {
    var arr = [];

    if (str != null) {
      str = str.toString().split(",");

      for (var i = 0; i < str.length; i++) {
        var tmpStr = $.trim(str[i]).split("-");

        arr[i] = tmpStr[0];
      }
    }

    return arr;
  },

  /* =====================================================
     GET LETTERS
  ===================================================== */

  getletters: function (str) {
    var arr = [];

    if (str != null) {
      str = str.toString().split(",");

      for (var i = 0; i < str.length; i++) {
        arr[i] = [];

        var tmpStr = $.trim(str[i]);

        arr[i] = tmpStr.split("");
      }
    }

    return arr;
  },

  /* =====================================================
     LOWER CASE
  ===================================================== */

  changeCase: function (arr) {
    var arr1 = [];

    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        arr1[i] = arr[i].toLowerCase();
      }
    }

    return arr1;
  },

  /* =====================================================
     REMOVE SPACES
  ===================================================== */

  trimSpaces: function (arr) {
    var arr1 = [];

    if (arr.length > 0) {
      for (var i = 0; i < arr.length; i++) {
        var tmpArr = arr[i].split(" ");

        arr1[i] = tmpArr.join("");
      }
    }

    return arr1;
  },

  /* =====================================================
     INITIAL SETTINGS
  ===================================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
