window.WeekWriting = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.activeCanvas = null;

  this.activeContext = null;

  this.isDrawing = false;

  this.drawMode = "pen";

  this.lastX = 0;

  this.lastY = 0;

  this.init(this.settings);
};

WeekWriting.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.prepareCanvases();

    this.listen();
  },

  // =====================================================
  // PREPARE CANVASES
  // =====================================================

  prepareCanvases: function () {
    var self = this;

    var e = this.ob.activity_area;

    $(e)
      .find(".ww_canvas")
      .each(function () {
        self.resizeCanvas(this);
      });
  },

  // =====================================================
  // RESIZE CANVAS
  // =====================================================

  resizeCanvas: function (canvas) {
    var rect = canvas.parentElement.getBoundingClientRect();

    var oldImage = null;

    if (canvas.width > 0 && canvas.height > 0) {
      try {
        oldImage = canvas.toDataURL();
      } catch (error) {}
    }

    canvas.width = Math.max(1, Math.round(rect.width));

    canvas.height = Math.max(1, Math.round(rect.height));

    if (oldImage != null) {
      var img = new Image();

      img.onload = function () {
        var ctx = canvas.getContext("2d");

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };

      img.src = oldImage;
    }
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // FILE UPLOAD
    // =================================================

    $(e).on("change", ".ww_file_input", function (event) {
      var file = event.target.files[0];

      if (!file) {
        return;
      }

      if (!file.type.match(/^image\//)) {
        return;
      }

      var cell = $(this).closest(".ww_day_cell");

      var image = cell.find(".ww_uploaded_image");

      var reader = new FileReader();

      reader.onload = function (loadEvent) {
        image.attr("src", loadEvent.target.result).addClass("visible");
        $(".resetBtn").removeClass("disabled");

        cell.find(".ww_empty_hint").hide();
      };

      reader.readAsDataURL(file);
    });

    // =================================================
    // DRAW BUTTON
    // =================================================

    $(e).on("click", ".ww_draw_btn", function () {
      var cell = $(this).closest(".ww_day_cell");

      self.activateCanvas(cell, "pen");

      cell.find(".ww_tool_btn").removeClass("active");

      $(this).addClass("active");
    });

    // =================================================
    // ERASER BUTTON
    // =================================================

    $(e).on("click", ".ww_eraser_btn", function () {
      var cell = $(this).closest(".ww_day_cell");

      self.activateCanvas(cell, "eraser");

      cell.find(".ww_tool_btn").removeClass("active");

      $(this).addClass("active");
    });

    // =================================================
    // CLEAR MEDIA
    // =================================================

    $(e).on("click", ".ww_clear_media_btn", function () {
      var cell = $(this).closest(".ww_day_cell");

      self.clearMedia(cell);

      cell.find(".ww_tool_btn").removeClass("active");
    });

    // =================================================
    // POINTER DOWN ON CANVAS
    // =================================================

    $(e).on("pointerdown", ".ww_canvas", function (event) {
      var canvas = this;

      if (!$(canvas).hasClass("drawing_enabled")) {
        return;
      }

      event.preventDefault();

      self.activeCanvas = canvas;

      self.activeContext = canvas.getContext("2d");

      self.isDrawing = true;
      $(".resetBtn").removeClass("disabled");

      var point = self.getCanvasPoint(event, canvas);

      self.lastX = point.x;

      self.lastY = point.y;

      try {
        canvas.setPointerCapture(event.pointerId);
      } catch (error) {}
    });

    // =================================================
    // POINTER MOVE
    // =================================================

    $(document).on("pointermove.weekwriting", function (event) {
      if (!self.isDrawing || self.activeCanvas == null) {
        return;
      }

      event.preventDefault();

      self.draw(event);
    });

    // =================================================
    // POINTER UP
    // =================================================

    $(document).on(
      "pointerup.weekwriting pointercancel.weekwriting",
      function () {
        self.isDrawing = false;

        self.activeCanvas = null;

        self.activeContext = null;
      },
    );
  },

  // =====================================================
  // ACTIVATE CANVAS
  // =====================================================

  activateCanvas: function (cell, mode) {
    var canvas = cell.find(".ww_canvas")[0];

    this.resizeCanvas(canvas);

    this.drawMode = mode;

    $(canvas).addClass("visible drawing_enabled");

    cell.find(".ww_empty_hint").hide();
  },

  // =====================================================
  // CANVAS POINT
  // =====================================================

  getCanvasPoint: function (event, canvas) {
    var rect = canvas.getBoundingClientRect();

    var scaleX = canvas.width / rect.width;

    var scaleY = canvas.height / rect.height;

    return {
      x: (event.clientX - rect.left) * scaleX,

      y: (event.clientY - rect.top) * scaleY,
    };
  },

  // =====================================================
  // DRAW
  // =====================================================

  draw: function (event) {
    var canvas = this.activeCanvas;

    var ctx = this.activeContext;

    var point = this.getCanvasPoint(event, canvas);

    ctx.beginPath();

    ctx.moveTo(this.lastX, this.lastY);

    ctx.lineTo(point.x, point.y);

    ctx.lineCap = "round";

    ctx.lineJoin = "round";

    if (this.drawMode === "eraser") {
      ctx.globalCompositeOperation = "destination-out";

      ctx.lineWidth = 18;
    } else {
      ctx.globalCompositeOperation = "source-over";

      ctx.strokeStyle = "#222";

      ctx.lineWidth = 3;
    }

    ctx.stroke();

    ctx.closePath();

    this.lastX = point.x;

    this.lastY = point.y;
  },

  // =====================================================
  // CLEAR MEDIA
  // image + drawing only
  // textarea stays
  // =====================================================

  clearMedia: function (cell) {
    var image = cell.find(".ww_uploaded_image");

    image.attr("src", "").removeClass("visible");

    var input = cell.find(".ww_file_input");

    input.val("");

    var canvas = cell.find(".ww_canvas")[0];

    if (canvas) {
      var ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      $(canvas).removeClass("visible drawing_enabled");
    }

    cell.find(".ww_empty_hint").show();
  },

  // =====================================================
  // RESET
  // موجودة فقط لو احتاجها النظام
  // ما في controls بالنشاط
  // =====================================================

  reset: function () {
    var self = this;

    var e = this.ob.activity_area;

    $(e).find(".ww_textarea").val("");

    $(e)
      .find(".ww_day_cell")
      .each(function () {
        self.clearMedia($(this));
      });

    $(e).find(".ww_tool_btn").removeClass("active");
  },

  // =====================================================
  // NO VALIDATION
  // =====================================================

  validate: function () {
    return true;
  },

  // =====================================================
  // INITIAL
  // =====================================================

  initialSettings: function () {
    $(".resetBtn").addClass("disabled");
    initialSettingsDone(1);
  },
};
