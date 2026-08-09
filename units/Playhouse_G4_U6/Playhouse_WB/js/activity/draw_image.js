window.DrawImageActivity = function (obj, dataObj) {
  this.container = obj;
  this.data = dataObj;

  this.orientationAdjust = "no";

  this.canvases = [];

  this.init();
};

DrawImageActivity.prototype = {
  /* =========================================
     INIT
  ========================================= */

  init: function () {
    this.prepareCanvases();
  },

  /* =========================================
     Initial Settings
  ========================================= */

  initialSettings: function () {
    this.listen();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");

    initialSettingsDone(1);
  },

  /* =========================================
     Prepare Canvas
  ========================================= */

  prepareCanvases: function () {
    var self = this;

    $(".draw_image_canvas").each(function (index) {
      var canvas = this;

      var holder = canvas.parentElement;

      var rect = holder.getBoundingClientRect();

      canvas.width = Math.max(1, Math.floor(rect.width));

      canvas.height = Math.max(1, Math.floor(rect.height));

      var ctx = canvas.getContext("2d");

      ctx.lineWidth = 3;

      ctx.lineCap = "round";

      ctx.lineJoin = "round";

      self.canvases.push({
        canvas: canvas,
        ctx: ctx,
        drawing: false,
        lastX: 0,
        lastY: 0,
      });
    });
  },

  /* =========================================
     Events
  ========================================= */

  listen: function () {
    var self = this;

    /* -----------------------------------------
       Upload button
    ----------------------------------------- */

    this.container
      .off("click.drawImageUpload", ".upload_image_btn")
      .on("click.drawImageUpload", ".upload_image_btn", function () {
        $(this)
          .closest(".draw_image_card")
          .find(".draw_image_file")
          .trigger("click");
      });

    /* -----------------------------------------
       Upload file
    ----------------------------------------- */

    this.container
      .off("change.drawImageFile", ".draw_image_file")
      .on("change.drawImageFile", ".draw_image_file", function (event) {
        var file = event.target.files[0];

        if (!file) {
          return;
        }

        var $card = $(this).closest(".draw_image_card");

        var $img = $card.find(".draw_uploaded_image");

        var $canvas = $card.find(".draw_image_canvas");

        var reader = new FileReader();

        reader.onload = function (e) {
          $img.attr("src", e.target.result).show();

          $canvas.hide();

          $card.addClass("has_content image_mode");

          self.enableReset();
        };

        reader.readAsDataURL(file);
      });

    /* -----------------------------------------
       Draw mode
    ----------------------------------------- */

    this.container
      .off("click.drawMode", ".draw_mode_btn")
      .on("click.drawMode", ".draw_mode_btn", function () {
        var $card = $(this).closest(".draw_image_card");

        $card.removeClass("image_mode").addClass("draw_mode");

        $card.find(".draw_uploaded_image").hide();

        $card.find(".draw_image_canvas").show();
      });

    /* -----------------------------------------
       Clear single card
    ----------------------------------------- */

    this.container
      .off("click.clearDrawCard", ".clear_card_btn")
      .on("click.clearDrawCard", ".clear_card_btn", function () {
        var $card = $(this).closest(".draw_image_card");

        self.clearCard($card);

        self.updateResetState();
      });

    /* -----------------------------------------
       Mouse
    ----------------------------------------- */

    $(".draw_image_canvas").each(function (index) {
      var canvas = this;

      $(canvas).off(".drawCanvas");

      $(canvas).on("mousedown.drawCanvas", function (e) {
        self.startDrawing(index, e);
      });

      $(canvas).on("mousemove.drawCanvas", function (e) {
        self.draw(index, e);
      });

      $(canvas).on("mouseup.drawCanvas mouseleave.drawCanvas", function () {
        self.stopDrawing(index);
      });

      /* Touch */

      canvas.addEventListener(
        "touchstart",
        function (e) {
          e.preventDefault();

          self.startDrawing(index, e.touches[0]);
        },
        {
          passive: false,
        },
      );

      canvas.addEventListener(
        "touchmove",
        function (e) {
          e.preventDefault();

          self.draw(index, e.touches[0]);
        },
        {
          passive: false,
        },
      );

      canvas.addEventListener("touchend", function () {
        self.stopDrawing(index);
      });
    });
  },

  /* =========================================
     Coordinates
  ========================================= */

  getCoords: function (canvas, event) {
    var rect = canvas.getBoundingClientRect();

    var scaleX = canvas.width / rect.width;

    var scaleY = canvas.height / rect.height;

    return {
      x: (event.clientX - rect.left) * scaleX,

      y: (event.clientY - rect.top) * scaleY,
    };
  },

  /* =========================================
     Start Drawing
  ========================================= */

  startDrawing: function (index, event) {
    var item = this.canvases[index];

    if (!item) {
      return;
    }

    var coords = this.getCoords(item.canvas, event);

    item.drawing = true;

    item.lastX = coords.x;
    item.lastY = coords.y;

    $(item.canvas)
      .closest(".draw_image_card")
      .removeClass("image_mode")
      .addClass("draw_mode has_content");

    this.enableReset();
  },

  /* =========================================
     Draw
  ========================================= */

  draw: function (index, event) {
    var item = this.canvases[index];

    if (!item || !item.drawing) {
      return;
    }

    var coords = this.getCoords(item.canvas, event);

    item.ctx.beginPath();

    item.ctx.moveTo(item.lastX, item.lastY);

    item.ctx.lineTo(coords.x, coords.y);

    item.ctx.stroke();

    item.lastX = coords.x;

    item.lastY = coords.y;
  },

  /* =========================================
     Stop Drawing
  ========================================= */

  stopDrawing: function (index) {
    if (this.canvases[index]) {
      this.canvases[index].drawing = false;
    }
  },

  /* =========================================
     Clear Card
  ========================================= */

  clearCard: function ($card) {
    var index = parseInt($card.attr("data-index"));

    var item = this.canvases[index];

    if (item) {
      item.ctx.clearRect(0, 0, item.canvas.width, item.canvas.height);
    }

    $card.find(".draw_uploaded_image").attr("src", "").hide();

    $card.find(".draw_image_canvas").show();

    $card.find(".draw_image_file").val("");

    $card.removeClass("has_content image_mode draw_mode");
  },

  /* =========================================
     Reset State
  ========================================= */

  enableReset: function () {
    $(".resetBtn").removeClass("disabled");
  },

  updateResetState: function () {
    if ($(".draw_image_card.has_content").length > 0) {
      $(".resetBtn").removeClass("disabled");
    } else {
      $(".resetBtn").addClass("disabled");
    }
  },

  /* =========================================
     CHECK

     This activity doesn't have answers,
     so no normal validation.
  ========================================= */

  validate: function () {
    return true;
  },

  /* =========================================
     RESET
  ========================================= */

  reset: function () {
    var self = this;

    $(".draw_image_card").each(function () {
      self.clearCard($(this));
    });

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  screenPoseAdjustments: function () {},
};
