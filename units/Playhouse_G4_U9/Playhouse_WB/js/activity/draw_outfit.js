window.DrawOutfit = function (obj, dataObj) {
  this.settings = {
    parent_holder: obj[0],
    data_obj: dataObj,
  };

  this.init(this.settings);
};

DrawOutfit.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.canvas = document.getElementById("drawOutfitCanvas");

    if (!this.canvas) {
      return;
    }

    this.ctx = this.canvas.getContext("2d");

    this.tool = "pencil";

    this.color = ob.data_obj.defaultColor || "#000000";

    this.size = ob.data_obj.defaultSize || 4;

    this.isDrawing = false;

    this.startX = 0;
    this.startY = 0;

    this.snapshot = null;

    this.history = [];
    this.redoHistory = [];

    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";

    this.saveState();

    this.listen();

    initialSettingsDone(1);
  },

  listen: function () {
    var self = this;

    // =========================================================
    // TOOL BUTTONS
    // =========================================================

    $(".draw-tool").on("click", function () {
      $(".draw-tool").removeClass("active");

      $(this).addClass("active");

      self.tool = $(this).data("tool");
    });

    // =========================================================
    // COLORS
    // =========================================================

    $(".draw-color").on("click", function () {
      $(".draw-color").removeClass("active");

      $(this).addClass("active");

      self.color = $(this).data("color");

      $(".draw-custom-color").val(self.color);
    });

    $(".draw-custom-color").on("input", function () {
      self.color = this.value;

      $(".draw-color").removeClass("active");
    });

    // =========================================================
    // SIZE
    // =========================================================

    $(".draw-size-slider").on("input", function () {
      self.size = parseInt(this.value);

      $(".draw-size-value").text(self.size + " px");
    });
    // =========================================================
    // ACTIONS
    // =========================================================

    $(".draw-clear").on("click", function () {
      self.clearCanvas();
    });

    $(".draw-undo").on("click", function () {
      self.undo();
    });

    $(".draw-redo").on("click", function () {
      self.redo();
    });

    // =========================================================
    // MOUSE
    // =========================================================

    this.canvas.addEventListener("mousedown", function (e) {
      self.startDrawing(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.draw(e);
    });

    window.addEventListener("mouseup", function (e) {
      self.stopDrawing(e);
    });

    // =========================================================
    // TOUCH
    // =========================================================

    this.canvas.addEventListener(
      "touchstart",
      function (e) {
        e.preventDefault();

        var touch = e.touches[0];

        self.startDrawing(touch);
      },
      { passive: false },
    );

    this.canvas.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();

        var touch = e.touches[0];

        self.draw(touch);
      },
      { passive: false },
    );

    this.canvas.addEventListener(
      "touchend",
      function (e) {
        e.preventDefault();

        self.stopDrawing(e);
      },
      { passive: false },
    );
  },

  getPosition: function (e) {
    var rect = this.canvas.getBoundingClientRect();

    var scaleX = this.canvas.width / rect.width;

    var scaleY = this.canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,

      y: (e.clientY - rect.top) * scaleY,
    };
  },

  startDrawing: function (e) {
    var pos = this.getPosition(e);

    this.startX = pos.x;
    this.startY = pos.y;

    this.isDrawing = true;

    this.snapshot = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height,
    );

    if (this.tool === "pencil" || this.tool === "eraser") {
      this.ctx.beginPath();

      this.ctx.moveTo(this.startX, this.startY);
    }
  },

  draw: function (e) {
    if (!this.isDrawing) {
      return;
    }

    var pos = this.getPosition(e);

    // =========================================================
    // PENCIL
    // =========================================================

    if (this.tool === "pencil") {
      this.ctx.globalCompositeOperation = "source-over";

      this.ctx.strokeStyle = this.color;

      this.ctx.lineWidth = this.size;

      this.ctx.lineTo(pos.x, pos.y);

      this.ctx.stroke();
    }

    // =========================================================
    // ERASER
    // =========================================================
    else if (this.tool === "eraser") {
      this.ctx.globalCompositeOperation = "destination-out";

      this.ctx.lineWidth = this.size * 3;

      this.ctx.lineTo(pos.x, pos.y);

      this.ctx.stroke();
    }

    // =========================================================
    // SHAPES
    // =========================================================
    else {
      this.ctx.putImageData(this.snapshot, 0, 0);

      this.ctx.globalCompositeOperation = "source-over";

      this.ctx.strokeStyle = this.color;

      this.ctx.lineWidth = this.size;

      if (this.tool === "line") {
        this.ctx.beginPath();

        this.ctx.moveTo(this.startX, this.startY);

        this.ctx.lineTo(pos.x, pos.y);

        this.ctx.stroke();
      } else if (this.tool === "rectangle") {
        this.ctx.strokeRect(
          this.startX,
          this.startY,
          pos.x - this.startX,
          pos.y - this.startY,
        );
      } else if (this.tool === "circle") {
        var radiusX = Math.abs(pos.x - this.startX) / 2;

        var radiusY = Math.abs(pos.y - this.startY) / 2;

        var centerX = (pos.x + this.startX) / 2;

        var centerY = (pos.y + this.startY) / 2;

        this.ctx.beginPath();

        this.ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);

        this.ctx.stroke();
      }
    }
  },

  stopDrawing: function () {
    if (!this.isDrawing) {
      return;
    }

    this.isDrawing = false;

    this.ctx.beginPath();

    this.ctx.globalCompositeOperation = "source-over";

    this.saveState();
  },

  saveState: function () {
    var data = this.canvas.toDataURL();

    this.history.push(data);

    if (this.history.length > 50) {
      this.history.shift();
    }

    this.redoHistory = [];
  },

  loadState: function (data) {
    var self = this;

    var img = new Image();

    img.onload = function () {
      self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

      self.ctx.drawImage(img, 0, 0);
    };

    img.src = data;
  },

  undo: function () {
    if (this.history.length <= 1) {
      return;
    }

    var current = this.history.pop();

    this.redoHistory.push(current);

    var previous = this.history[this.history.length - 1];

    this.loadState(previous);
  },

  redo: function () {
    if (this.redoHistory.length === 0) {
      return;
    }

    var state = this.redoHistory.pop();

    this.history.push(state);

    this.loadState(state);
  },

  clearCanvas: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.saveState();
  },

  reset: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.history = [];
    this.redoHistory = [];

    this.saveState();
  },

  validate: function () {
    // intentionally empty
    // this activity has no check
  },

  initialSettings: function () {
    initialSettingsDone(1);
  },
};
