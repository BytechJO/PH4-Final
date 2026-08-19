window.ClockHands = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.activeClock = null;

  this.activeHand = null;

  this.init(this.settings);
};

ClockHands.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // EVENTS
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // START DRAG
    // =================================================

    $(e).on("pointerdown", ".clock_hand", function (event) {
      event.preventDefault();

      self.activeHand = $(this);

      self.activeClock = $(this).closest(".clock_question");

      try {
        this.setPointerCapture(event.pointerId);
      } catch (error) {}

      $("body").addClass("clock_dragging");

      self.moveHand(event);
    });

    // =================================================
    // MOVE
    // =================================================

    $(document).on("pointermove.clockhands", function (event) {
      if (self.activeHand == null || self.activeClock == null) {
        return;
      }

      event.preventDefault();

      self.moveHand(event);
    });

    // =================================================
    // STOP
    // =================================================

    $(document).on(
      "pointerup.clockhands pointercancel.clockhands",
      function () {
        if (self.activeHand == null) {
          return;
        }

        self.activeHand = null;

        self.activeClock = null;

        $("body").removeClass("clock_dragging");
      },
    );
  },

  // =====================================================
  // POINTER ANGLE
  // 12 o'clock = 0 degrees
  // =====================================================

  getPointerAngle: function (event, clockElement) {
    var face = clockElement.find(".clock_face")[0];

    var rect = face.getBoundingClientRect();

    var centerX = rect.left + rect.width / 2;

    var centerY = rect.top + rect.height / 2;

    var x = event.clientX - centerX;

    var y = event.clientY - centerY;

    var angle = (Math.atan2(y, x) * 180) / Math.PI;

    // Convert:
    // right = 90
    // bottom = 180
    // left = 270
    // top = 0

    angle += 90;

    if (angle < 0) {
      angle += 360;
    }

    return angle;
  },

  // =====================================================
  // MOVE HAND
  // =====================================================

  moveHand: function (event) {
    var angle = this.getPointerAngle(event, this.activeClock);

    var handType = this.activeHand.attr("data-hand");

    // =================================================
    // MINUTE HAND
    // =================================================

    if (handType === "minute") {
      this.moveMinuteHand(angle);
    }

    // =================================================
    // HOUR HAND
    // =================================================
    else if (handType === "hour") {
      this.moveHourHand(angle);
    }

    // =================================================
    // FEEDBACK CLEAR
    // =================================================

    this.clearClockFeedback(this.activeClock);

    // =================================================
    // BUTTONS
    // =================================================

    this.enableControls();
  },

  // =====================================================
  // MOVE MINUTE
  // Snap every 5 minutes
  // =====================================================

  moveMinuteHand: function (angle) {
    var minute = Math.round(angle / 30) * 5;

    if (minute >= 60) {
      minute = 0;
    }

    this.activeClock.attr("data-minute", minute);

    this.renderClock(this.activeClock);
  },

  // =====================================================
  // MOVE HOUR
  // =====================================================

  moveHourHand: function (angle) {
    var hour = Math.round(angle / 30);

    if (hour === 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour = hour % 12;
    }

    this.activeClock.attr("data-hour", hour);

    this.renderClock(this.activeClock);
  },

  // =====================================================
  // RENDER CLOCK
  // =====================================================

  renderClock: function (clock) {
    var hour = parseInt(clock.attr("data-hour"));

    var minute = parseInt(clock.attr("data-minute"));

    // =================================================
    // MINUTE HAND
    // =================================================

    var minuteAngle = minute * 6;

    // =================================================
    // HOUR HAND
    // مستقل عن الدقائق
    // =================================================

    var hourAngle = (hour % 12) * 30;

    clock
      .find(".clock_minute_hand")
      .css("transform", "translateX(-50%) rotate(" + minuteAngle + "deg)");

    clock
      .find(".clock_hour_hand")
      .css("transform", "translateX(-50%) rotate(" + hourAngle + "deg)");
  },

  // =====================================================
  // RENDER ALL
  // =====================================================

  renderAllClocks: function () {
    var self = this;

    var e = this.ob.activity_area;

    $(e)
      .find(".clock_question")
      .each(function () {
        self.renderClock($(this));
      });
  },

  // =====================================================
  // ENABLE CONTROLS
  // =====================================================

  enableControls: function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  },

  // =====================================================
  // CLEAR ONE CLOCK FEEDBACK
  // =====================================================

  clearClockFeedback: function (clock) {
    clock
      .find(".clock_feedback_icon .tick, .clock_feedback_icon .cross")
      .hide();
  },

  // =====================================================
  // CLEAR ALL FEEDBACK
  // =====================================================

  clearFeedback: function () {
    var e = this.ob.activity_area;

    $(e).find(".clock_feedback_icon .tick, .clock_feedback_icon .cross").hide();
  },

  // =====================================================
  // CORRECT
  // =====================================================

  showCorrect: function (clock) {
    clock.find(".clock_feedback_icon .cross").hide();

    clock.find(".clock_feedback_icon .tick").show();
  },

  // =====================================================
  // WRONG
  // =====================================================

  showWrong: function (clock) {
    clock.find(".clock_feedback_icon .tick").hide();

    clock.find(".clock_feedback_icon .cross").show();
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var self = this;

    var e = this.ob.activity_area;

    var questions = this.ob.data_obj.questions;

    var allCorrect = true;

    this.clearFeedback();

    $(e)
      .find(".clock_question")
      .each(function (index) {
        var clock = $(this);

        var studentHour = parseInt(clock.attr("data-hour"));

        var studentMinute = parseInt(clock.attr("data-minute"));

        var answer = questions[index];

        var isCorrect =
          studentHour === answer.hour && studentMinute === answer.minute;

        if (isCorrect) {
          self.showCorrect(clock);
        } else {
          self.showWrong(clock);

          allCorrect = false;
        }
      });

    showFeedback(true, allCorrect);
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var self = this;

    var e = this.ob.activity_area;

    var startTime = this.ob.data_obj.startTime;

    // =================================================
    // RESET EACH CLOCK TO 3:45
    // =================================================

    $(e)
      .find(".clock_question")
      .each(function () {
        var clock = $(this);

        clock.attr("data-hour", startTime.hour);

        clock.attr("data-minute", startTime.minute);

        self.renderClock(clock);
      });

    // =================================================
    // FEEDBACK
    // =================================================

    this.clearFeedback();

    // =================================================
    // BUTTONS
    // =================================================

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
