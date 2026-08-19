window.DynamicCalendar = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.selectedTool = null;

  var now = new Date();

  this.today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  this.calendarYear = this.today.getFullYear();

  this.init(this.settings);
};

DynamicCalendar.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // TOOL
  // =====================================================

  getToolById: function (id) {
    var tools = this.ob.data_obj.colorTools;

    for (var i = 0; i < tools.length; i++) {
      if (tools[i].id === id) {
        return tools[i];
      }
    }

    return null;
  },

  // =====================================================
  // LISTEN
  // =====================================================

  listen: function () {
    var self = this;

    var e = this.ob.activity_area;

    // =================================================
    // SELECT COLOR
    // =================================================

    $(e).on("click", ".dc_color_tool", function () {
      $(e).find(".dc_color_tool").removeClass("selected");

      $(this).addClass("selected");

      self.selectedTool = self.getToolById($(this).attr("data-tool-id"));
    });

    // =================================================
    // CLICK DAY
    // =================================================

    $(e).on("click", ".dc_real_day", function () {
      if (self.selectedTool == null) {
        return;
      }

      if (self.selectedTool.target !== "day") {
        return;
      }

      self.toggleDayMark($(this), self.selectedTool);

      self.clearFeedback();

      self.updateControls();
    });

    // =================================================
    // CLICK MONTH
    // =================================================

    $(e).on("click", ".dc_month_title", function () {
      if (self.selectedTool == null) {
        return;
      }

      if (self.selectedTool.target !== "month") {
        return;
      }

      self.toggleMonthMark($(this), self.selectedTool);

      self.clearFeedback();

      self.updateControls();
    });
  },

  // =====================================================
  // GET MARKS
  // =====================================================

  getMarks: function (element) {
    var value = element.attr("data-marks");

    if (value == undefined || value == "") {
      return [];
    }

    return value.split(",").filter(function (item) {
      return item != "";
    });
  },

  // =====================================================
  // SAVE MARKS
  // =====================================================

  saveMarks: function (element, marks) {
    if (marks.length === 0) {
      element.removeAttr("data-marks");

      return;
    }

    element.attr("data-marks", marks.join(","));
  },

  // =====================================================
  // UPDATE INSTRUCTION
  // =====================================================

  updateInstructionStatus: function (toolId) {
    var e = this.ob.activity_area;

    var hasSelection = false;

    $(e)
      .find(".dc_real_day, .dc_month_title")
      .each(function () {
        var marks = $(this).attr("data-marks");

        if (marks == undefined || marks == "") {
          return;
        }

        var marksArray = marks.split(",");

        if (marksArray.indexOf(toolId) !== -1) {
          hasSelection = true;

          return false;
        }
      });

    var instruction = $(e).find(
      '.dc_instruction_item[data-tool-id="' + toolId + '"]',
    );

    if (hasSelection) {
      instruction.addClass("completed");
    } else {
      instruction.removeClass("completed");
    }
  },

  // =====================================================
  // DAY MARK
  // =====================================================

  toggleDayMark: function (element, tool) {
    var marks = this.getMarks(element);

    var index = marks.indexOf(tool.id);

    // =================================================
    // REMOVE
    // =================================================

    if (index !== -1) {
      marks.splice(index, 1);
    } else {
      // =================================================
      // EACH DAY TOOL CAN EXIST ON ONE DAY
      // =================================================

      this.removeToolFromAllDays(tool.id);

      marks = this.getMarks(element);

      marks.push(tool.id);
    }

    this.saveMarks(element, marks);

    this.renderDayColor(element);

    this.updateInstructionStatus(tool.id);
  },

  // =====================================================
  // REMOVE TOOL FROM ALL DAYS
  // =====================================================

  removeToolFromAllDays: function (toolId) {
    var self = this;

    var e = this.ob.activity_area;

    $(e)
      .find(".dc_real_day")
      .each(function () {
        var element = $(this);

        var marks = self.getMarks(element);

        var index = marks.indexOf(toolId);

        if (index !== -1) {
          marks.splice(index, 1);

          self.saveMarks(element, marks);

          self.renderDayColor(element);
        }
      });
  },

  // =====================================================
  // RENDER DAY
  // =====================================================

  renderDayColor: function (element) {
    var marks = this.getMarks(element);

    var holder = element.find(".dc_day_marks");

    holder.empty();

    if (marks.length === 0) {
      return;
    }

    for (var i = 0; i < marks.length; i++) {
      var tool = this.getToolById(marks[i]);

      if (tool == null) {
        continue;
      }

      holder.append(
        "<span " +
          'class="dc_colour_mark" ' +
          'style="background:' +
          tool.hex +
          ';">' +
          "</span>",
      );
    }
  },

  // =====================================================
  // MONTH MARK
  // =====================================================

  toggleMonthMark: function (element, tool) {
    var marks = this.getMarks(element);

    var index = marks.indexOf(tool.id);

    // =================================================
    // REMOVE
    // =================================================

    if (index !== -1) {
      marks.splice(index, 1);
    } else {
      // =================================================
      // NEXT MONTH ONLY ONE MONTH
      // =================================================

      if (tool.id === "nextMonth") {
        this.removeToolFromAllMonths("nextMonth");

        marks = this.getMarks(element);
      }

      marks.push(tool.id);
    }

    this.saveMarks(element, marks);

    this.renderMonthColor(element);

    this.updateInstructionStatus(tool.id);
  },

  // =====================================================
  // REMOVE TOOL FROM MONTHS
  // =====================================================

  removeToolFromAllMonths: function (toolId) {
    var self = this;

    var e = this.ob.activity_area;

    $(e)
      .find(".dc_month_title")
      .each(function () {
        var element = $(this);

        var marks = self.getMarks(element);

        var index = marks.indexOf(toolId);

        if (index !== -1) {
          marks.splice(index, 1);

          self.saveMarks(element, marks);

          self.renderMonthColor(element);
        }
      });
  },

  // =====================================================
  // RENDER MONTH
  // SPLIT BETWEEN MULTIPLE COLORS
  // =====================================================

  renderMonthColor: function (element) {
    var marks = this.getMarks(element);

    // =================================================
    // DEFAULT
    // =================================================

    if (marks.length === 0) {
      element.css("background", "#3f3f3f");

      return;
    }

    // =================================================
    // COLORS
    // =================================================

    var colors = [];

    for (var i = 0; i < marks.length; i++) {
      var tool = this.getToolById(marks[i]);

      if (tool != null) {
        colors.push(tool.hex);
      }
    }

    if (colors.length === 0) {
      element.css("background", "#3f3f3f");

      return;
    }

    // =================================================
    // ONE COLOR
    // =================================================

    if (colors.length === 1) {
      element.css("background", colors[0]);

      return;
    }

    // =================================================
    // MULTIPLE COLORS
    // =================================================

    var gradientParts = [];

    var step = 100 / colors.length;

    for (var colorIndex = 0; colorIndex < colors.length; colorIndex++) {
      var start = colorIndex * step;

      var end = (colorIndex + 1) * step;

      gradientParts.push(colors[colorIndex] + " " + start + "%");

      gradientParts.push(colors[colorIndex] + " " + end + "%");
    }

    var gradient =
      "linear-gradient(to right, " + gradientParts.join(", ") + ")";

    element.css("background", gradient);
  },

  // =====================================================
  // CONTROLS
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasMarks = false;

    $(e)
      .find(".dc_real_day, .dc_month_title")
      .each(function () {
        var marks = $(this).attr("data-marks");

        if (marks != undefined && marks != "") {
          hasMarks = true;

          return false;
        }
      });

    if (hasMarks) {
      $(".checkBtn").removeClass("disabled");

      $(".resetBtn").removeClass("disabled");
    } else {
      $(".checkBtn").addClass("disabled");

      $(".resetBtn").addClass("disabled");
    }
  },

  // =====================================================
  // DAY ELEMENT
  // =====================================================

  getDayElement: function (date) {
    return $(this.ob.activity_area).find(
      ".dc_real_day" +
        '[data-year="' +
        date.getFullYear() +
        '"]' +
        '[data-month="' +
        date.getMonth() +
        '"]' +
        '[data-day="' +
        date.getDate() +
        '"]',
    );
  },

  // =====================================================
  // ELEMENT HAS MARK
  // =====================================================

  elementHasMark: function (element, toolId) {
    if (element.length === 0) {
      return false;
    }

    return this.getMarks(element).indexOf(toolId) !== -1;
  },

  // =====================================================
  // FEEDBACK
  // =====================================================

  clearFeedback: function () {
    var e = this.ob.activity_area;

    $(e).find(".dc_feedback_icon .tick, .dc_feedback_icon .cross").hide();
  },

  showCorrect: function (element) {
    element.children(".dc_feedback_icon").find(".cross").hide();

    element.children(".dc_feedback_icon").find(".tick").show();
  },

  showWrong: function (element) {
    element.children(".dc_feedback_icon").find(".tick").hide();

    element.children(".dc_feedback_icon").find(".cross").show();
  },

  // =====================================================
  // VALIDATE DAY
  // =====================================================

  validateDayTool: function (toolId, expectedDate) {
    var self = this;

    var e = this.ob.activity_area;

    var correct = true;

    var selectedCount = 0;

    $(e)
      .find(".dc_real_day")
      .each(function () {
        var element = $(this);

        if (!self.elementHasMark(element, toolId)) {
          return;
        }

        selectedCount++;

        var year = parseInt(element.attr("data-year"));

        var month = parseInt(element.attr("data-month"));

        var day = parseInt(element.attr("data-day"));

        if (
          year === expectedDate.getFullYear() &&
          month === expectedDate.getMonth() &&
          day === expectedDate.getDate()
        ) {
          self.showCorrect(element);
        } else {
          self.showWrong(element);

          correct = false;
        }
      });

    if (selectedCount !== 1) {
      correct = false;
    }

    var expectedElement = this.getDayElement(expectedDate);

    if (
      expectedElement.length === 0 ||
      !this.elementHasMark(expectedElement, toolId)
    ) {
      correct = false;
    }

    return correct;
  },

  // =====================================================
  // VALIDATE MONTH
  // =====================================================

  validateMonthTool: function (toolId, expectedMonths) {
    var self = this;

    var e = this.ob.activity_area;

    var selectedMonths = [];

    var correct = true;

    $(e)
      .find(".dc_month_title")
      .each(function () {
        var element = $(this);

        if (!self.elementHasMark(element, toolId)) {
          return;
        }

        var month = parseInt(element.attr("data-month"));

        selectedMonths.push(month);

        if (expectedMonths.indexOf(month) !== -1) {
          self.showCorrect(element);
        } else {
          self.showWrong(element);

          correct = false;
        }
      });

    for (var i = 0; i < expectedMonths.length; i++) {
      if (selectedMonths.indexOf(expectedMonths[i]) === -1) {
        correct = false;
      }
    }

    if (selectedMonths.length !== expectedMonths.length) {
      correct = false;
    }

    return correct;
  },

  // =====================================================
  // VALIDATE
  // =====================================================

  validate: function () {
    var allCorrect = true;

    this.clearFeedback();

    // =================================================
    // TODAY
    // =================================================

    if (!this.validateDayTool("today", this.today)) {
      allCorrect = false;
    }

    // =================================================
    // DAY AFTER TOMORROW
    // =================================================

    var dayAfterTomorrow = new Date(this.today);

    dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

    if (dayAfterTomorrow.getFullYear() === this.calendarYear) {
      if (!this.validateDayTool("dayAfterTomorrow", dayAfterTomorrow)) {
        allCorrect = false;
      }
    }

    // =================================================
    // NEXT WEEK
    // TODAY + 7
    // =================================================

    var nextWeek = new Date(this.today);

    nextWeek.setDate(nextWeek.getDate() + 7);

    if (nextWeek.getFullYear() === this.calendarYear) {
      if (!this.validateDayTool("nextWeek", nextWeek)) {
        allCorrect = false;
      }
    }

    // =================================================
    // NEXT MONTH
    // =================================================

    var nextMonth = this.today.getMonth() + 1;

    if (nextMonth <= 11) {
      if (!this.validateMonthTool("nextMonth", [nextMonth])) {
        allCorrect = false;
      }
    }

    // =================================================
    // SPRING
    // =================================================

    if (!this.validateMonthTool("spring", [2, 3, 4])) {
      allCorrect = false;
    }

    // =================================================
    // SUMMER
    // =================================================

    if (!this.validateMonthTool("summer", [5, 6, 7])) {
      allCorrect = false;
    }

    // =================================================
    // AUTUMN
    // =================================================

    if (!this.validateMonthTool("autumn", [8, 9, 10])) {
      allCorrect = false;
    }

    // =================================================
    // WINTER
    // =================================================

    if (!this.validateMonthTool("winter", [11, 0, 1])) {
      allCorrect = false;
    }

    // =================================================
    // REGULAR
    // NO VALIDATION
    // =================================================

    // =================================================
    // GLOBAL FEEDBACK
    // =================================================

    showFeedback(true, allCorrect);
  },

  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    this.selectedTool = null;

    // =================================================
    // TOOL
    // =================================================

    $(e).find(".dc_color_tool").removeClass("selected");

    // =================================================
    // MARKS
    // =================================================

    $(e).find(".dc_real_day, .dc_month_title").removeAttr("data-marks");

    // =================================================
    // DAYS
    // =================================================

    $(e).find(".dc_day_marks").empty();

    // =================================================
    // MONTHS
    // =================================================

    $(e).find(".dc_month_title").css("background", "#3f3f3f");

    // =================================================
    // INSTRUCTIONS
    // =================================================

    $(e).find(".dc_instruction_item").removeClass("completed");

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
  // INITIAL
  // =====================================================

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
