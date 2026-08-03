//  ****************************************** //
//  LINE DRAW (revamped) - Version no: 1.2
//  Date created - July 25, 2020
//  Date updated - August 06, 2020 (startDraw reset)
//  Date updated - August 20, 2020 (line color maintained at screen resize)
//  Modified: allow changing connections without full reset
//  ****************************************** //

window.LineDraw = function (obj, dataObj) {
  var optionsElements = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: optionsElements[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.orientationAdjust = "yes";
  this.init(this.settings);
};

LineDraw.prototype = {
  init: function (ob) {
    ob.startDraw = false;

    ob.dropConnections = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;
    ob.resultArr = [];

    ob.lineObjects = [];
    ob.lineOb = {};

    ob.lineOb.startNode;
    ob.lineOb.endNode;

    ob.lineOb.startX = 0;
    ob.lineOb.startY = 0;
    ob.lineOb.endX = 0;
    ob.lineOb.endY = 0;
    ob.lineOb.distance = 0;
    ob.lineOb.angle = 0;
    ob.lineOb.startElement = "";
    ob.lineOb.color = "";

    ob.lineColor = "";
    ob.lineThickness = 0;
    ob.connectType = "";
    ob.selectionColor = "";
    ob.transformPerc = "";

    ob.rightOffset;
    ob.containerRight = 0;
    ob.topOffset = 0;
    ob.setI;

    this.ob = ob;
    this.listen(ob);
  },

  screenPoseAdjustments: function () {
    var self = this;
    var ob = this.ob;

    if (ob.lineObjects.length > 0) {
      for (var ln = 0; ln < ob.lineObjects.length; ln++) {
        self.setValuesForLine(ob.lineObjects[ln]);
        self.drawRect(ob.lineObjects[ln], "draw", "");
      }
    }
  },

  listen: function (ob) {
    var self = this;
    var $area = $(ob.activity_area);

    ob.lineColor =
      typeof ob.data_obj.linecolor != undefined && ob.data_obj.linecolor != null
        ? ob.data_obj.linecolor
        : "blue";

    ob.nodeColor =
      typeof ob.data_obj.nodecolor != undefined && ob.data_obj.nodecolor != null
        ? ob.data_obj.nodecolor
        : "#5d5d5d";

    ob.lineThickness =
      typeof ob.data_obj.strokewidth != undefined &&
      ob.data_obj.strokewidth != null
        ? parseInt(ob.data_obj.strokewidth)
        : 4;

    ob.connectType =
      typeof ob.data_obj.connect != undefined && ob.data_obj.connect != null
        ? ob.data_obj.connect
        : "single";

    ob.selectionColor =
      typeof ob.data_obj.nodeselectioncolor != undefined &&
      ob.data_obj.nodeselectioncolor != null
        ? ob.data_obj.nodeselectioncolor
        : "#38a3ff";

    ob.transformPerc = parseInt(ob.lineThickness) / 2;

    $area.find(".node").off("click.lineDraw");

    $area.find(".node").on("click.lineDraw", function () {
      var $clickedNode = $(this);

      var classList = $clickedNode.attr("class").split(" ");
      var thisNode =
        $.inArray("dragPoint", classList) !== -1 ? "dragPoint" : "dropPoint";

      var thisID = $clickedNode.parent().attr("id");

      if ($clickedNode.css("cursor") !== "pointer") {
        return;
      }

      /*
       * اختيار النقطة الثانية.
       */
      if (ob.startDraw) {
        var connectCondition =
          ob.lineOb.startElement === "dragPoint"
            ? thisNode === "dropPoint"
            : thisNode === "dragPoint";

        /*
         * إذا ضغط الطالب مرة ثانية على نفس النقطة
         * نلغي الاختيار الحالي.
         */
        if (ob.lineOb.startID === thisID) {
          $clickedNode.css("border-color", "transparent");

          ob.lineOb = {};
          ob.startDraw = false;

          return;
        }

        /*
         * لا نسمح بتوصيل drag مع drag
         * أو drop مع drop.
         */
        if (!connectCondition) {
          return;
        }

        /*
         * في وضع single:
         * إذا كانت النقطة الثانية موصولة، نحذف خطها القديم.
         */
        if (
          ob.connectType === "single" &&
          self.getConnectedValue($clickedNode) !== ""
        ) {
          self.removeNodeConnection($clickedNode);
        }

        ob.lineOb.endNode = $clickedNode;
        ob.lineOb.endID = thisID;
        ob.lineOb.color = ob.lineColor;

        /*
         * حفظ الاتصال على النقطتين.
         */
        self.addConnectionData(ob.lineOb.startNode, ob.lineOb.endID);

        self.addConnectionData(ob.lineOb.endNode, ob.lineOb.startID);

        self.setValuesForLine(ob.lineOb);
        self.drawRect(ob.lineOb, "draw", "");

        ob.lineOb.startNode.css("border-color", ob.selectionColor);

        ob.lineOb.endNode.css("border-color", ob.selectionColor);

        ob.lineObjects.push(ob.lineOb);

        ob.lineOb = {};
        ob.startDraw = false;

        clearInterval(ob.setI);

        ob.setI = setInterval(function () {
          self.resetNodes("draw", true);
        }, 500);

        if (ob.lineObjects.length > 0) {
          var checkBtn = document.getElementsByClassName("checkBtn")[0];

          var resetBtn = document.getElementsByClassName("resetBtn")[0];

          if (checkBtn) {
            checkBtn.classList.remove("disabled");
          }

          if (resetBtn) {
            resetBtn.classList.remove("disabled");
          }
        }

        return;
      }

      /*
       * اختيار النقطة الأولى.
       *
       * إذا كانت موصولة في وضع single،
       * نحذف خطها القديم ثم نبدأ خطًا جديدًا.
       */
      if (
        ob.connectType === "single" &&
        self.getConnectedValue($clickedNode) !== ""
      ) {
        self.removeNodeConnection($clickedNode);
      }

      ob.lineOb = {};

      ob.lineOb.startNode = $clickedNode;
      ob.lineOb.startID = thisID;
      ob.lineOb.startElement = thisNode;

      $clickedNode.css("border-color", ob.selectionColor);

      ob.startDraw = true;
    });
  },

  /*
   * ترجع قيمة data-connected بشكل آمن.
   */
  getConnectedValue: function ($node) {
    var connectedValue = $node.data("connected");

    if (connectedValue === undefined || connectedValue === null) {
      return "";
    }

    return String(connectedValue);
  },

  /*
   * إضافة ID جديد إلى data-connected بدون تكرار.
   */
  addConnectionData: function ($node, connectedID) {
    var currentValue = this.getConnectedValue($node);

    if (currentValue === "") {
      $node.data("connected", connectedID);
      return;
    }

    var connectionArray = currentValue.split(",");

    if ($.inArray(connectedID, connectionArray) === -1) {
      connectionArray.push(connectedID);
    }

    $node.data("connected", connectionArray.join(","));
  },

  /*
   * حذف ID محدد من data-connected.
   */
  removeConnectionData: function ($node, connectedID) {
    var currentValue = this.getConnectedValue($node);

    if (currentValue === "") {
      $node.data("connected", "");
      return;
    }

    var connectionArray = currentValue.split(",");

    connectionArray = $.grep(connectionArray, function (value) {
      return value !== connectedID && value !== "";
    });

    $node.data("connected", connectionArray.join(","));

    if (connectionArray.length === 0) {
      $node.css("border-color", "transparent");
    }
  },

  /*
   * حذف جميع الخطوط المرتبطة بنقطة معينة.
   * تستخدم عند تغيير الطالب لإجابته.
   */
  removeNodeConnection: function ($node) {
    var ob = this.ob;
    var $area = $(ob.activity_area);

    var nodeID = $node.parent().attr("id");

    for (var i = ob.lineObjects.length - 1; i >= 0; i--) {
      var lineObject = ob.lineObjects[i];

      var belongsToNode =
        lineObject.startID === nodeID || lineObject.endID === nodeID;

      if (!belongsToNode) {
        continue;
      }

      var otherNodeID =
        lineObject.startID === nodeID ? lineObject.endID : lineObject.startID;

      var $otherNode = $area.find("#" + otherNodeID).find(".node");

      /*
       * حذف الخط من الشاشة.
       */
      $area.find("#" + lineObject.name).remove();

      /*
       * حذف بيانات الاتصال من النقطة المقابلة.
       */
      selfReference = this;

      selfReference.removeConnectionData($otherNode, nodeID);

      /*
       * حذف الخط من المصفوفة.
       */
      ob.lineObjects.splice(i, 1);
    }

    /*
     * تفريغ النقطة التي ضغط عليها الطالب.
     */
    $node.data("connected", "");
    $node.css("border-color", "transparent");
    $node.css("cursor", "pointer");

    /*
     * إخفاء نتيجة التصحيح القديمة.
     */
    this.showIcons(false, []);

    ob.dropConnections = [];
    ob.resultArr = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;

    /*
     * إعادة لون الخطوط المتبقية للون الأساسي،
     * في حال كانت قد أصبحت حمراء أو خضراء بعد Check.
     */
    for (var lineIndex = 0; lineIndex < ob.lineObjects.length; lineIndex++) {
      ob.lineObjects[lineIndex].color = ob.lineColor;

      $area.find("#" + ob.lineObjects[lineIndex].name).css({
        "border-color": ob.lineColor,
        "background-color": ob.lineColor,
      });
    }
  },

  setValuesForLine: function (lineOb) {
    var ob = this.ob;

    var halfWidth = parseInt(lineOb.startNode.outerWidth()) / 2;

    lineOb.height = ob.lineThickness;

    var lineHalfHeight = lineOb.height / 2;

    var startMarginLeft = parseInt(lineOb.startNode.css("margin-left")) || 0;

    var startMarginTop = parseInt(lineOb.startNode.css("margin-top")) || 0;

    lineOb.startY =
      lineOb.startNode.position().top +
      startMarginTop +
      halfWidth -
      lineHalfHeight;

    lineOb.startX =
      lineOb.startNode.position().left +
      startMarginLeft +
      halfWidth -
      lineHalfHeight;

    var endMarginLeft = parseInt(lineOb.endNode.css("margin-left")) || 0;

    var endMarginTop = parseInt(lineOb.endNode.css("margin-top")) || 0;

    lineOb.endY =
      lineOb.endNode.position().top + endMarginTop + halfWidth - lineHalfHeight;

    lineOb.endX =
      lineOb.endNode.position().left +
      endMarginLeft +
      halfWidth -
      lineHalfHeight;

    lineOb.distance = Math.sqrt(
      (lineOb.endX - lineOb.startX) * (lineOb.endX - lineOb.startX) +
        (lineOb.endY - lineOb.startY) * (lineOb.endY - lineOb.startY),
    );

    lineOb.distance = lineOb.distance + lineOb.height;

    lineOb.angle =
      (Math.atan2(lineOb.endY - lineOb.startY, lineOb.endX - lineOb.startX) *
        180) /
      Math.PI;

    lineOb.name = "line-" + lineOb.startID + "-" + lineOb.endID;
  },

  drawRect: function (lineOb, axn, nam) {
    var ob = this.ob;
    var $area = $(ob.activity_area);
    var $lines = $area.find(".lines");
    var obj = lineOb;

    /*
     * منع تكرار نفس عنصر الخط عند تغيير حجم الشاشة.
     */
    var $rect = $lines.find("#" + obj.name);

    if ($rect.length === 0) {
      $lines.append('<div class="line" id="' + obj.name + '"></div>');

      $rect = $lines.find("#" + obj.name);
    }

    if (axn === "draw") {
      $rect.css({
        top: obj.startY + "px",
        left: obj.startX + "px",
        width: obj.distance + "px",
        height: obj.height + "px",
        transform: "rotate(" + obj.angle + "deg)",
      });

      $rect.css({
        "transform-origin":
          ob.transformPerc + "px " + ob.transformPerc + "px 0px",
      });
    }

    $rect.css({
      "border-color": obj.color,
      "background-color": obj.color,
      display: "block",
    });
  },

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

    for (var dp = 0; dp < numOfDrops; dp++) {
      ob.dropConnections[dp] = [];
    }

    for (var ll = 0; ll < ob.lineObjects.length; ll++) {
      var lineObject = ob.lineObjects[ll];

      var dropElement =
        lineObject.startElement === "dropPoint"
          ? lineObject.startID
          : lineObject.endID;

      var dragElement =
        dropElement === lineObject.startID
          ? lineObject.endID
          : lineObject.startID;

      var dropArray = dropElement.split("_");

      var dragArray = dragElement.split("_");

      var dropIndex = parseInt(dropArray[2]) - 1;

      var dragIndex = parseInt(dragArray[2]);

      var correctAnswer = dataQuestion.drops[dropIndex].answer;

      ob.dropConnections[dropIndex].push(dragIndex);

      if (correctAnswer.length > 0) {
        var isCorrect = $.inArray(dragIndex, getIntArray(correctAnswer)) >= 0;

        lineObject.color = isCorrect ? "green" : "red";

        ob.lineObjects[ll].color = lineObject.color;

        $area.find("#" + lineObject.name).css({
          "border-color": lineObject.color,

          "background-color": lineObject.color,
        });
      }
    }

    for (var dp1 = 0; dp1 < numOfDrops; dp1++) {
      var thisIsCorrect = compareArrays(
        ob.dropConnections[dp1],
        dataQuestion.drops[dp1].answer,
      );

      if (
        ob.dropConnections[dp1][0] === undefined &&
        dataQuestion.drops[dp1].answer[0] == "0"
      ) {
        thisIsCorrect = true;
      }

      if (thisIsCorrect) {
        ob.correctCount++;
        ob.resultArr[dp1] = 1;
      } else {
        ob.wrongCount++;
        ob.resultArr[dp1] = 0;
      }
    }

    /*
     * لا نقفل النقاط بعد Check.
     * نبقي data-connected كما هي حتى يمكن تعديل جواب واحد.
     */
    self.resetNodes("draw", true);

    $area.find(".node").css("cursor", "pointer");

    self.showIcons(true, ob.resultArr);

    var allCorrect = ob.correctCount === numOfDrops && ob.wrongCount === 0;

    showFeedback(true, allCorrect);
  },

  showIcons: function (show, resultArray) {
    var ob = this.ob;
    var $area = $(ob.activity_area);

    $area.find(".drop").each(function () {
      var dropIndex = parseInt($(this).attr("id").split("_")[2]) - 1;

      if (show) {
        $(this).find(".icon_wrap").css("display", "block");

        if (resultArray[dropIndex] === 1) {
          $(this).find(".tick").css("display", "block");

          $(this).find(".cross").css("display", "none");
        } else {
          $(this).find(".cross").css("display", "block");

          $(this).find(".tick").css("display", "none");
        }
      } else {
        $(this).find(".icon_wrap").css("display", "none");

        $(this).find(".tick").css("display", "none");

        $(this).find(".cross").css("display", "none");
      }
    });
  },

  resetNodes: function (value, clearConnections) {
    var ob = this.ob;
    var $area = $(ob.activity_area);

    clearInterval(ob.setI);

    $area.find(".node").each(function () {
      $(this).css("background-color", ob.nodeColor);

      if (value === "all") {
        if (clearConnections) {
          $(this).css("cursor", "pointer");

          $(this).data("connected", "");
        } else {
          $(this).css("cursor", "default");
        }

        $(this).css("border-color", "transparent");
      } else {
        /*
         * فقط إزالة إطار الاختيار،
         * بدون حذف الاتصال.
         */
        $(this).css("border-color", "transparent");
      }
    });
  },

  reset: function () {
    var self = this;
    var ob = this.ob;
    var $area = $(ob.activity_area);

    clearInterval(ob.setI);

    $area.find(".lines").empty();

    ob.lineObjects = [];

    self.showIcons(false, []);
    self.resetNodes("all", true);

    ob.startDraw = false;
    ob.lineOb = {};

    ob.dropConnections = [];
    ob.resultArr = [];
    ob.correctCount = 0;
    ob.wrongCount = 0;
  },

  initialSettings: function () {
    this.reset();
    initialSettingsDone(1);
  },
};
