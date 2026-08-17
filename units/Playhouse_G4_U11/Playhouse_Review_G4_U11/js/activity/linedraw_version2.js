//  ****************************************** //
//  LINE DRAW
//  TOP / BOTTOM LAYOUT
//  SINGLE CONNECTION + REPLACE CONNECTION
//  SELECTED NODE STATE
//  ****************************************** //

window.LineDraw = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.orientationAdjust = "yes";

  this.init(this.settings);
};

LineDraw.prototype = {
  // =========================================================
  // INIT
  // =========================================================

  init: function (ob) {
    ob.startDraw = false;

    ob.dropConnections = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;

    ob.resultArr = [];

    ob.lineObjects = [];

    ob.lineOb = {};

    ob.lineColor = "";

    ob.nodeColor = "";

    ob.lineThickness = 0;

    ob.connectType = "";

    ob.selectionColor = "";

    ob.setI = null;

    this.ob = ob;

    this.listen(ob);
  },

  // =========================================================
  // RESIZE / ORIENTATION
  // =========================================================

  screenPoseAdjustments: function () {
    var self = this;

    var ob = this.ob;

    if (ob.lineObjects.length > 0) {
      for (var ln = 0; ln < ob.lineObjects.length; ln++) {
        self.setValuesForLine(ob.lineObjects[ln]);

        self.drawRect(ob.lineObjects[ln], "redraw", "");
      }
    }
  },

  // =========================================================
  // LISTEN
  // =========================================================

  listen: function (ob) {
    var self = this;

    var $area = $(ob.activity_area);

    // =====================================================
    // SETTINGS
    // =====================================================

    ob.lineColor =
      ob.data_obj.linecolor !== undefined && ob.data_obj.linecolor !== null
        ? ob.data_obj.linecolor
        : "#20a94b";

    ob.nodeColor =
      ob.data_obj.nodecolor !== undefined && ob.data_obj.nodecolor !== null
        ? ob.data_obj.nodecolor
        : "#20a94b";

    ob.lineThickness =
      ob.data_obj.strokewidth !== undefined && ob.data_obj.strokewidth !== null
        ? parseInt(ob.data_obj.strokewidth)
        : 3;

    ob.connectType =
      ob.data_obj.connect !== undefined && ob.data_obj.connect !== null
        ? ob.data_obj.connect
        : "single";

    ob.selectionColor =
      ob.data_obj.nodeselectioncolor !== undefined &&
      ob.data_obj.nodeselectioncolor !== null
        ? ob.data_obj.nodeselectioncolor
        : "#0bc53a";

    // =====================================================
    // INITIALIZE NODES
    // =====================================================

    $area.find(".node").each(function () {
      $(this).data("connected", "").removeClass("node_selected").css({
        cursor: "pointer",
        backgroundColor: ob.nodeColor,
        borderColor: "transparent",
      });
    });

    // =====================================================
    // NODE CLICK
    // =====================================================

    $area
      .find(".node")
      .off("click.lineDraw")
      .on("click.lineDraw", function () {
        var $thisNode = $(this);

        var thisNodeType = $thisNode.hasClass("dragPoint")
          ? "dragPoint"
          : "dropPoint";

        var thisID = $thisNode.parent().attr("id");

        if (!thisID) {
          return;
        }

        // =================================================
        // SECOND NODE
        // =================================================

        if (ob.startDraw) {
          var startType = ob.lineOb.startElement;

          // drag لازم يتوصل مع drop والعكس
          var connectCondition =
            startType === "dragPoint"
              ? thisNodeType === "dropPoint"
              : thisNodeType === "dragPoint";

          // كبس على نفس النوع
          if (!connectCondition) {
            self.resetCurrentSelection();

            return;
          }

          // حماية
          if (ob.lineOb.startID === thisID) {
            self.resetCurrentSelection();

            return;
          }

          // =================================================
          // إذا الطرف الثاني متوصل من قبل
          // نحذف الخط القديم ونحط الجديد
          // =================================================

          if (ob.connectType === "single") {
            var endConnected = $thisNode.data("connected") || "";

            if (endConnected !== "") {
              self.removeConnectionForNode(thisID);
            }
          }

          var $startNode = ob.lineOb.startNode;

          // =================================================
          // CREATE NEW CONNECTION
          // =================================================

          ob.lineOb.endNode = $thisNode;

          ob.lineOb.endID = thisID;

          ob.lineOb.color = ob.lineColor;

          // الطرف الأول يعرف الطرف الثاني
          $startNode.data("connected", thisID);

          // الطرف الثاني يعرف الطرف الأول
          $thisNode.data("connected", ob.lineOb.startID);

          // =================================================
          // CALCULATE + DRAW
          // =================================================

          self.setValuesForLine(ob.lineOb);

          self.drawRect(ob.lineOb, "draw", "");

          // =================================================
          // REMOVE SELECTED STATE
          // =================================================

          $startNode.removeClass("node_selected");

          $thisNode.removeClass("node_selected");

          // =================================================
          // SAVE LINE
          // =================================================

          ob.lineObjects.push(ob.lineOb);

          ob.lineOb = {};

          ob.startDraw = false;

          // =================================================
          // BUTTONS
          // =================================================

          $(".checkBtn").removeClass("disabled");

          $(".resetBtn").removeClass("disabled");
        } else {
          // =================================================
          // FIRST NODE
          // =================================================

          var existingConnection = $thisNode.data("connected") || "";

          // =================================================
          // إذا النقطة متوصلة
          // نشيل توصيلتها القديمة أولاً
          // =================================================

          if (ob.connectType === "single" && existingConnection !== "") {
            self.removeConnectionForNode(thisID);
          }

          // نشيل selected من أي نقطة ثانية
          $area.find(".node").removeClass("node_selected");

          ob.lineOb = {};

          ob.lineOb.startNode = $thisNode;

          ob.lineOb.startID = thisID;

          ob.lineOb.startElement = thisNodeType;

          // =================================================
          // SELECTED STYLE
          // =================================================

          $thisNode.addClass("node_selected");

          ob.startDraw = true;

          $(".resetBtn").removeClass("disabled");
        }
      });
  },

  // =========================================================
  // REMOVE EXISTING CONNECTION
  // =========================================================

  removeConnectionForNode: function (nodeId) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    for (var i = ob.lineObjects.length - 1; i >= 0; i--) {
      var lineObj = ob.lineObjects[i];

      if (lineObj.startID === nodeId || lineObj.endID === nodeId) {
        var otherId =
          lineObj.startID === nodeId ? lineObj.endID : lineObj.startID;

        // =====================================================
        // REMOVE SVG
        // =====================================================

        $area
          .find("#" + lineObj.name)
          .closest("svg")
          .remove();

        // =====================================================
        // CLEAR CLICKED NODE
        // =====================================================

        $area
          .find("#" + nodeId)
          .find(".node")
          .data("connected", "")
          .removeClass("node_selected")
          .css("border-color", "transparent");

        // =====================================================
        // CLEAR OTHER NODE
        // =====================================================

        $area
          .find("#" + otherId)
          .find(".node")
          .data("connected", "")
          .removeClass("node_selected")
          .css("border-color", "transparent");

        // =====================================================
        // REMOVE FROM ARRAY
        // =====================================================

        ob.lineObjects.splice(i, 1);
      }
    }

    // =====================================================
    // BUTTON STATE
    // =====================================================

    if (ob.lineObjects.length === 0) {
      $(".checkBtn").addClass("disabled");
    } else {
      $(".checkBtn").removeClass("disabled");
    }

    $(".resetBtn").removeClass("disabled");
  },

  // =========================================================
  // CANCEL CURRENT SELECTED NODE
  // =========================================================

  resetCurrentSelection: function () {
    var ob = this.ob;

    if (ob.lineOb && ob.lineOb.startNode) {
      ob.lineOb.startNode.removeClass("node_selected");
    }

    ob.lineOb = {};

    ob.startDraw = false;
  },

  // =========================================================
  // CALCULATE NODE POSITIONS
  // =========================================================

  setValuesForLine: function (lineOb) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    var $lines = $area.find(".lines");

    var $startNode = lineOb.startNode;

    var $endNode = lineOb.endNode;

    if (
      !$startNode ||
      !$endNode ||
      $startNode.length === 0 ||
      $endNode.length === 0 ||
      $lines.length === 0
    ) {
      return;
    }

    var linesOffset = $lines.offset();

    var startOffset = $startNode.offset();

    var endOffset = $endNode.offset();

    // =====================================================
    // START NODE CENTER
    // =====================================================

    lineOb.startX =
      startOffset.left - linesOffset.left + $startNode.outerWidth() / 2;

    lineOb.startY =
      startOffset.top - linesOffset.top + $startNode.outerHeight() / 2;

    // =====================================================
    // END NODE CENTER
    // =====================================================

    lineOb.endX = endOffset.left - linesOffset.left + $endNode.outerWidth() / 2;

    lineOb.endY = endOffset.top - linesOffset.top + $endNode.outerHeight() / 2;

    lineOb.height = ob.lineThickness;

    lineOb.distance = Math.sqrt(
      Math.pow(lineOb.endX - lineOb.startX, 2) +
        Math.pow(lineOb.endY - lineOb.startY, 2),
    );

    lineOb.angle =
      (Math.atan2(
        lineOb.endY - lineOb.startY,

        lineOb.endX - lineOb.startX,
      ) *
        180) /
      Math.PI;

    lineOb.name = "line-" + lineOb.startID + "-" + lineOb.endID;
  },

  // =========================================================
  // GET PATH
  // =========================================================

  getPathValue: function (obj) {
    var data = this.ob.data_obj;

    var pathType =
      data.path !== undefined && data.path !== null ? data.path : "line";

    // =====================================================
    // STRAIGHT
    // =====================================================

    if (pathType === "line" || pathType === "straight") {
      return (
        "M " + obj.startX + " " + obj.startY + " L " + obj.endX + " " + obj.endY
      );
    }

    // =====================================================
    // CURVE
    // =====================================================

    var curveAmount =
      data.curveAmount !== undefined ? parseInt(data.curveAmount) : 40;

    var curveDirection = data.curveDirection || "vertical";

    // =====================================================
    // VERTICAL CURVE
    // مناسب للصور فوق والكلمات تحت
    // =====================================================

    if (curveDirection === "vertical") {
      var middleY = (obj.startY + obj.endY) / 2;

      return (
        "M " +
        obj.startX +
        " " +
        obj.startY +
        " C " +
        obj.startX +
        " " +
        (middleY - curveAmount) +
        ", " +
        obj.endX +
        " " +
        (middleY + curveAmount) +
        ", " +
        obj.endX +
        " " +
        obj.endY
      );
    }

    // =====================================================
    // HORIZONTAL CURVE
    // =====================================================

    var middleX = (obj.startX + obj.endX) / 2;

    return (
      "M " +
      obj.startX +
      " " +
      obj.startY +
      " C " +
      (middleX - curveAmount) +
      " " +
      obj.startY +
      ", " +
      (middleX + curveAmount) +
      " " +
      obj.endY +
      ", " +
      obj.endX +
      " " +
      obj.endY
    );
  },

  // =========================================================
  // DRAW SVG LINE
  // =========================================================

  drawRect: function (lineOb, axn, nam) {
    var ob = this.ob;

    var data = ob.data_obj;

    var $area = $(ob.activity_area);

    var $lines = $area.find(".lines");

    var obj = lineOb;

    if (!obj.name) {
      return;
    }

    // =====================================================
    // REMOVE OLD VERSION OF SAME LINE
    // =====================================================

    $lines
      .find("#" + obj.name)
      .closest("svg")
      .remove();

    var pathValue = this.getPathValue(obj);

    // =====================================================
    // LINE STYLE
    // =====================================================

    var lineStyle = data.lineStyle || "solid";

    var dashValue = "";

    if (lineStyle === "dashed") {
      dashValue = ' stroke-dasharray="8,6" ';
    } else if (lineStyle === "dotted") {
      dashValue = ' stroke-dasharray="2,6" ';
    }

    var lineColor = obj.color || ob.lineColor;

    var svg =
      '<svg class="line_svg" ' +
      'width="100%" ' +
      'height="100%" ' +
      'style="' +
      "position:absolute;" +
      "top:0;" +
      "left:0;" +
      "overflow:visible;" +
      "pointer-events:none;" +
      '">' +
      "<path " +
      'id="' +
      obj.name +
      '" ' +
      'd="' +
      pathValue +
      '" ' +
      'stroke="' +
      lineColor +
      '" ' +
      'stroke-width="' +
      ob.lineThickness +
      '" ' +
      dashValue +
      'fill="none" ' +
      'stroke-linecap="round" ' +
      'stroke-linejoin="round" ' +
      "/>" +
      "</svg>";

    $lines.append(svg);
  },

  // =========================================================
  // VALIDATE
  // =========================================================

  validate: function () {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    var self = this;

    var dataQuestion = ob.data_obj.questions;

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;

    var numOfDrops = dataQuestion.drops.length;

    // =====================================================
    // INITIALIZE
    // =====================================================

    for (var dp = 0; dp < numOfDrops; dp++) {
      ob.dropConnections[dp] = [];
    }

    // =====================================================
    // CHECK LINES
    // =====================================================

    for (var ll = 0; ll < ob.lineObjects.length; ll++) {
      var tOb = ob.lineObjects[ll];

      var dropElement =
        tOb.startElement === "dropPoint" ? tOb.startID : tOb.endID;

      var dragElement = dropElement === tOb.startID ? tOb.endID : tOb.startID;

      var dropArr = dropElement.split("_");

      var dragArr = dragElement.split("_");

      var dropIndex = parseInt(dropArr[2]) - 1;

      var dragIndex = parseInt(dragArr[2]);

      var correctAns = dataQuestion.drops[dropIndex].answer;

      ob.dropConnections[dropIndex].push(dragIndex);

      var isAns = $.inArray(dragIndex, getIntArray(correctAns)) >= 0;

      tOb.color = isAns ? "green" : "red";

      ob.lineObjects[ll].color = tOb.color;

      // =====================================================
      // CHANGE SVG COLOR
      // =====================================================

      $area.find("#" + tOb.name).attr("stroke", tOb.color);
    }

    // =====================================================
    // CHECK EACH DROP
    // =====================================================

    for (var dp1 = 0; dp1 < numOfDrops; dp1++) {
      var thisIsCorr = compareArrays(
        ob.dropConnections[dp1],

        dataQuestion.drops[dp1].answer,
      );

      if (
        ob.dropConnections[dp1][0] === undefined &&
        dataQuestion.drops[dp1].answer[0] == "0"
      ) {
        thisIsCorr = true;
      }

      if (thisIsCorr) {
        ob.correctCount++;

        ob.resultArr[dp1] = 1;
      } else {
        ob.wrongCount++;

        ob.resultArr[dp1] = 0;
      }
    }

    // =====================================================
    // REMOVE SELECTED STATE
    // =====================================================

    $area.find(".node").removeClass("node_selected");

    ob.startDraw = false;

    ob.lineOb = {};

    // =====================================================
    // LOCK AFTER CHECK
    // =====================================================

    self.resetNodes("all", false);

    self.showIcons(true, ob.resultArr);

    var allCorrect = ob.correctCount === numOfDrops && ob.wrongCount === 0;

    showFeedback(true, allCorrect);
  },

  // =========================================================
  // SHOW FEEDBACK ICONS
  // =========================================================

  showIcons: function (aBoo, aResult) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    $area.find(".drop").each(function () {
      var thisDrp = parseInt($(this).attr("id").split("_")[2]) - 1;

      var $tick = $(this).find(".tick");

      var $cross = $(this).find(".cross");

      var $wrap = $(this).find(".icon_wrap");

      if (aBoo) {
        $wrap.show();

        if (aResult[thisDrp] === 1) {
          $tick.show();

          $cross.hide();
        } else {
          $cross.show();

          $tick.hide();
        }
      } else {
        $wrap.hide();

        $tick.hide();

        $cross.hide();
      }
    });
  },

  // =========================================================
  // RESET NODES
  // =========================================================

  resetNodes: function (aVal, aBoo) {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    clearInterval(ob.setI);

    $area.find(".node").each(function () {
      $(this)
        .removeClass("node_selected")
        .css("background-color", ob.nodeColor);

      if (aVal === "all") {
        if (aBoo) {
          $(this).css("cursor", "pointer").data("connected", "");
        } else {
          $(this).css("cursor", "default");
        }

        $(this).css("border-color", "transparent");
      } else {
        $(this).css("border-color", "transparent");
      }
    });
  },

  // =========================================================
  // RESET
  // =========================================================

  reset: function () {
    var self = this;

    var ob = this.ob;

    var $area = $(ob.activity_area);

    // =====================================================
    // REMOVE LINES
    // =====================================================

    $area.find(".lines").empty();

    // =====================================================
    // RESET DATA
    // =====================================================

    ob.lineObjects = [];

    ob.lineOb = {};

    ob.startDraw = false;

    ob.dropConnections = [];

    ob.resultArr = [];

    ob.correctCount = 0;

    ob.wrongCount = 0;

    // =====================================================
    // REMOVE SELECTED
    // =====================================================

    $area.find(".node").removeClass("node_selected");

    // =====================================================
    // HIDE ICONS
    // =====================================================

    self.showIcons(false, []);

    // =====================================================
    // RESET NODES
    // =====================================================

    self.resetNodes("all", true);

    // =====================================================
    // BUTTONS
    // =====================================================

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =========================================================
  // INITIAL SETTINGS
  // =========================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
