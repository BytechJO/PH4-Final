window.DrawCanvas = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.currentTool = "pen";

  this.lineWidth = 3;

  this.canvases = [];

  this.init(this.settings);
};

DrawCanvas.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.setupCanvases();

    this.listen();
  },

  // =====================================================
  // SETUP ALL CANVASES
  // =====================================================

  setupCanvases: function () {
    var self = this;

    $(this.ob.activity_area)
      .find(".student_draw_canvas")
      .each(function () {
        self.prepareCanvas(this);
      });
  },

  // =====================================================
  // PREPARE ONE CANVAS
  // =====================================================

  prepareCanvas: function (canvas) {
    var rect = canvas.getBoundingClientRect();

    var dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;

    canvas.height = rect.height * dpr;

    var ctx = canvas.getContext("2d");

    ctx.scale(dpr, dpr);

    ctx.lineCap = "round";

    ctx.lineJoin = "round";

    ctx.strokeStyle = "#111";

    ctx.lineWidth = this.lineWidth;

    this.canvases.push({
      canvas: canvas,

      ctx: ctx,

      drawing: false,

      lastX: 0,

      lastY: 0,
    });
  },

  // =====================================================
  // GET CANVAS DATA
  // =====================================================

  getCanvasData: function (canvas) {
    for (var i = 0; i < this.canvases.length; i++) {
      if (this.canvases[i].canvas === canvas) {
        return this.canvases[i];
      }
    }

    return null;
  },

  // =====================================================
  // POINTER POSITION
  // =====================================================

  getPointerPosition: function (canvas, event) {
    var rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,

      y: event.clientY - rect.top,
    };
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // TOOL
    // =================================================

    $(e).on("click", ".draw_tool_btn", function () {
      $(".draw_tool_btn").removeClass("active");

      $(this).addClass("active");

      self.currentTool = $(this).attr("data-tool");
    });

    // =================================================
    // CLEAR ALL
    // =================================================

    $(e).on("click", ".draw_clear_btn", function () {
      self.clearAll();
    });

    // =================================================
    // POINTER DOWN
    // =================================================

    $(e).on("pointerdown", ".student_draw_canvas", function (event) {
      event.preventDefault();

      var canvasData = self.getCanvasData(this);

      if (canvasData == null) {
        return;
      }

      var pos = self.getPointerPosition(this, event);

      canvasData.drawing = true;

      canvasData.lastX = pos.x;

      canvasData.lastY = pos.y;

      if (this.setPointerCapture) {
        this.setPointerCapture(event.pointerId);
      }
    });

    // =================================================
    // POINTER MOVE
    // =================================================

    $(e).on("pointermove", ".student_draw_canvas", function (event) {
      var canvasData = self.getCanvasData(this);

      if (canvasData == null || canvasData.drawing !== true) {
        return;
      }

      event.preventDefault();

      var pos = self.getPointerPosition(this, event);

      self.drawLine(canvasData, pos.x, pos.y);
    });

    // =================================================
    // POINTER END
    // =================================================

    $(e).on(
      "pointerup pointercancel pointerleave",
      ".student_draw_canvas",
      function () {
        var canvasData = self.getCanvasData(this);

        if (canvasData != null) {
          canvasData.drawing = false;
        }
      },
    );
  },

  // =====================================================
  // DRAW
  // =====================================================

  drawLine: function (canvasData, x, y) {
    var ctx = canvasData.ctx;

    ctx.save();

    if (this.currentTool === "eraser") {
      ctx.globalCompositeOperation = "destination-out";

      ctx.lineWidth = 20;
    } else {
      ctx.globalCompositeOperation = "source-over";

      ctx.strokeStyle = "#111";

      ctx.lineWidth = this.lineWidth;
    }

    ctx.beginPath();

    ctx.moveTo(canvasData.lastX, canvasData.lastY);

    ctx.lineTo(x, y);

    ctx.stroke();

    ctx.restore();

    canvasData.lastX = x;

    canvasData.lastY = y;
  },

  // =====================================================
  // CLEAR
  // =====================================================

  clearAll: function () {
    for (var i = 0; i < this.canvases.length; i++) {
      var item = this.canvases[i];

      var rect = item.canvas.getBoundingClientRect();

      item.ctx.clearRect(0, 0, rect.width, rect.height);
    }
  },

  // =====================================================
  // VALIDATE
  // NO VALIDATION
  // =====================================================

  validate: function () {
    return;
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    this.clearAll();

    this.currentTool = "pen";

    $(".draw_tool_btn").removeClass("active");

    $('.draw_tool_btn[data-tool="pen"]').addClass("active");
  },

  // =====================================================
  // INITIAL
  // =====================================================

  initialSettings: function () {
    initialSettingsDone(1);
  },
};
