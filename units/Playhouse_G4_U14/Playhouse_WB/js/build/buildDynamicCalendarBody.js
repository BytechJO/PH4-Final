function buildDynamicCalendarBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

  // =====================================================
  // CURRENT YEAR
  // =====================================================

  var today = new Date();

  var currentYear = today.getFullYear();

  // =====================================================
  // NAVIGATION
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt += '<div class="act_head_group justify-content-center">';
  htmlStmt +=
    '<div class="audioIcon off contant " data-slideNum="' +
    1 +
    '" data-audio="' +
    aObj.mainTitleAudio +
    '">';
  htmlStmt += '<div class="q-type-img-container">';
  htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
  if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    htmlStmt +=
      '<img class="mainTitleIcon" src=' +
      aObj.mainTitleIcon +
      ' style="right: ' +
      aObj.mainTitleIconPos.right +
      '">';
  }
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';
  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
    1 +
    '" data-audio="' +
    aObj.subTitleAudio +
    '">';
  htmlStmt += "<div class='page_sub_title '>";
  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  htmlStmt +=
    "<p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont dc_all_cont">';

  htmlStmt += '<div class="dc_activity">';

  // =====================================================
  // PALETTE
  // =====================================================

  htmlStmt += '<div class="dc_palette">';

  for (var toolIndex = 0; toolIndex < aObj.colorTools.length; toolIndex++) {
    var tool = aObj.colorTools[toolIndex];

    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="dc_color_tool" ' +
      'data-tool-id="' +
      tool.id +
      '" ' +
      'data-color="' +
      tool.color +
      '" ' +
      'data-hex="' +
      tool.hex +
      '" ' +
      'data-target="' +
      tool.target +
      '">';

    htmlStmt +=
      "<span " +
      'class="dc_palette_colour" ' +
      'style="background:' +
      tool.hex +
      ';">' +
      "</span>";

    htmlStmt += '<span class="dc_palette_label">' + tool.label + "</span>";

    htmlStmt += "</button>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // MAIN CONTENT
  // =====================================================

  htmlStmt += '<div class="dc_main_content">';

  // =====================================================
  // CALENDAR
  // =====================================================

  htmlStmt += '<div class="dc_calendar_grid">';

  for (var monthIndex = 0; monthIndex < 12; monthIndex++) {
    var firstDay = new Date(currentYear, monthIndex, 1).getDay();

    var daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();

    // =================================================
    // MONTH
    // =================================================

    htmlStmt +=
      "<div " +
      'class="dc_month" ' +
      'data-year="' +
      currentYear +
      '" ' +
      'data-month="' +
      monthIndex +
      '">';

    // =================================================
    // MONTH TITLE
    // =================================================

    htmlStmt +=
      "<div " +
      'class="dc_month_title" ' +
      'data-year="' +
      currentYear +
      '" ' +
      'data-month="' +
      monthIndex +
      '">';

    htmlStmt +=
      '<span class="dc_month_title_text">' +
      aObj.monthNames[monthIndex] +
      "</span>";

    // =================================================
    // MONTH FEEDBACK
    // =================================================

    htmlStmt += '<div class="icon_wrap dc_feedback_icon dc_month_feedback">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =================================================
    // WEEK HEADER
    // =================================================

    htmlStmt += '<div class="dc_week_header">';

    for (
      var dayNameIndex = 0;
      dayNameIndex < aObj.dayNames.length;
      dayNameIndex++
    ) {
      htmlStmt +=
        '<div class="dc_week_day">' + aObj.dayNames[dayNameIndex] + "</div>";
    }

    htmlStmt += "</div>";

    // =================================================
    // DAYS GRID
    // =================================================

    htmlStmt += '<div class="dc_days_grid">';

    // =================================================
    // EMPTY DAYS
    // =================================================

    for (var emptyIndex = 0; emptyIndex < firstDay; emptyIndex++) {
      htmlStmt += '<div class="dc_day dc_empty_day"></div>';
    }

    // =================================================
    // ACTUAL DAYS
    // =================================================

    for (var day = 1; day <= daysInMonth; day++) {
      htmlStmt +=
        "<div " +
        'class="dc_day dc_real_day" ' +
        'data-year="' +
        currentYear +
        '" ' +
        'data-month="' +
        monthIndex +
        '" ' +
        'data-day="' +
        day +
        '">';

      htmlStmt += '<span class="dc_day_number">' + day + "</span>";

      // =================================================
      // DAY COLORS
      // =================================================

      htmlStmt += '<div class="dc_day_marks"></div>';

      // =================================================
      // DAY FEEDBACK
      // =================================================

      htmlStmt += '<div class="icon_wrap dc_feedback_icon dc_day_feedback">';

      htmlStmt +=
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // dc_days_grid

    htmlStmt += "</div>"; // dc_month
  }

  htmlStmt += "</div>"; // dc_calendar_grid

  // =====================================================
  // INSTRUCTIONS
  // =====================================================

  htmlStmt += '<div class="dc_instructions">';

  for (
    var instructionIndex = 0;
    instructionIndex < aObj.instructions.length;
    instructionIndex++
  ) {
    var instruction = aObj.instructions[instructionIndex];

    htmlStmt +=
      "<div " +
      'class="dc_instruction_item" ' +
      'data-tool-id="' +
      instruction.toolId +
      '">';

    htmlStmt += '<span class="dc_instruction_bullet">•</span>';

    htmlStmt +=
      '<span class="dc_instruction_text">' + instruction.text + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>"; // instructions

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>"; // main content

  htmlStmt += "</div>"; // activity

  htmlStmt += "</div>"; // all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  // =====================================================
  // LOAD COMPLETE
  // =====================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
