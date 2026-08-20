function buildCalendarFindBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

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

  // =========================================================
  // Header
  // =========================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
    htmlStmt += '<div class="mainTitleText">' + aObj.mainTitle + "</div>";
  }

  if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    htmlStmt +=
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // instruction
  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
      }
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont cf_all_cont">';

  htmlStmt += '<div class="cf_activity">';

  // =====================================================
  // CALENDAR GRID
  // =====================================================

  htmlStmt += '<div class="cf_calendar_grid">';

  // =====================================================
  // BUILD MONTHS
  // =====================================================

  for (var monthIndex = 0; monthIndex < aObj.months.length; monthIndex++) {
    var monthObj = aObj.months[monthIndex];

    var realMonth = monthObj.realMonth;

    var firstDay = new Date(aObj.year, realMonth, 1).getDay();

    var daysInMonth = new Date(aObj.year, realMonth + 1, 0).getDate();

    // =================================================
    // MONTH WRAPPER
    // =================================================

    htmlStmt +=
      "<div " + 'class="cf_month" ' + 'data-month="' + realMonth + '">';

    // =================================================
    // MONTH NAME
    // =================================================

    var monthGroupId = monthObj.groupId != undefined ? monthObj.groupId : "";

    htmlStmt +=
      "<div " +
      'class="cf_month_name cf_clickable" ' +
      'data-mistake="' +
      (monthObj.nameMistake ? "true" : "false") +
      '" ' +
      'data-group-id="' +
      monthGroupId +
      '">';

    htmlStmt +=
      '<span class="cf_month_name_text">' +
      (monthObj.displayName != "" ? monthObj.displayName : "&nbsp;") +
      "</span>";

    // =================================================
    // MONTH FEEDBACK
    // =================================================

    htmlStmt += '<div class="icon_wrap cf_feedback_icon">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png"/>' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png"/>' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // cf_month_name

    // =================================================
    // WEEK HEADER
    // =================================================

    htmlStmt += '<div class="cf_week_header">';

    for (
      var dayNameIndex = 0;
      dayNameIndex < aObj.dayNames.length;
      dayNameIndex++
    ) {
      var displayDay = aObj.dayNames[dayNameIndex];

      var isWrongWeekDay = false;

      var weekGroupId = "";

      // =================================================
      // OCTOBER WRONG WEDNESDAY
      // =================================================

      if (
        monthObj.wrongWeekDay != undefined &&
        monthObj.wrongWeekDay != null &&
        monthObj.wrongWeekDay.index == dayNameIndex
      ) {
        displayDay = monthObj.wrongWeekDay.display;

        isWrongWeekDay = true;

        weekGroupId = monthObj.wrongWeekDay.groupId;
      }

      // =================================================
      // WRONG WEEK DAY = CLICKABLE
      // =================================================

      if (isWrongWeekDay) {
        htmlStmt +=
          "<div " +
          'class="cf_week_day cf_clickable cf_wrong_week_day" ' +
          'data-mistake="true" ' +
          'data-group-id="' +
          weekGroupId +
          '">';

        htmlStmt += '<span class="cf_week_day_text">' + displayDay + "</span>";

        htmlStmt += '<div class="icon_wrap cf_feedback_icon cf_week_feedback">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png"/>' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png"/>' +
          "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      } else {
        // =================================================
        // NORMAL WEEK DAY
        // =================================================

        htmlStmt += '<div class="cf_week_day">' + displayDay + "</div>";
      }
    }

    htmlStmt += "</div>"; // cf_week_header

    // =================================================
    // DAYS GRID
    // =================================================

    htmlStmt += '<div class="cf_days_grid">';

    // =================================================
    // EMPTY DAYS BEFORE MONTH
    // =================================================

    for (var emptyIndex = 0; emptyIndex < firstDay; emptyIndex++) {
      htmlStmt += '<div class="cf_day cf_empty_day"></div>';
    }

    // =================================================
    // DAYS
    // =================================================

    for (var day = 1; day <= daysInMonth; day++) {
      var isMissingDay =
        monthObj.missingDay != undefined && monthObj.missingDay == day;

      // =================================================
      // MISSING DAY
      // =================================================

      if (isMissingDay) {
        var missingGroupId =
          monthObj.missingDayGroupId != undefined
            ? monthObj.missingDayGroupId
            : "";

        htmlStmt +=
          "<div " +
          'class="cf_day cf_clickable cf_missing_day" ' +
          'data-mistake="true" ' +
          'data-group-id="' +
          missingGroupId +
          '" ' +
          'data-day="' +
          day +
          '">';

        htmlStmt += '<span class="cf_missing_placeholder">&nbsp;</span>';

        htmlStmt += '<div class="icon_wrap cf_feedback_icon cf_day_feedback">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png"/>' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png"/>' +
          "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        continue;
      }

      // =================================================
      // NORMAL DAY
      // كل يوم clickable لأنه الطالب ممكن يختار غلط
      // =================================================

      htmlStmt +=
        "<div " +
        'class="cf_day cf_clickable" ' +
        'data-mistake="false" ' +
        'data-group-id="" ' +
        'data-day="' +
        day +
        '">';

      htmlStmt += '<span class="cf_day_number">' + day + "</span>";

      htmlStmt += '<div class="icon_wrap cf_feedback_icon cf_day_feedback">';

      htmlStmt +=
        '<div class="tick">' +
        '<img src="../images/icons/check_btn.png"/>' +
        "</div>";

      htmlStmt +=
        '<div class="cross">' +
        '<img src="../images/icons/cross_btn.png"/>' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // cf_days_grid

    htmlStmt += "</div>"; // cf_month
  }

  htmlStmt += "</div>"; // cf_calendar_grid

  htmlStmt += "</div>"; // cf_activity

  htmlStmt += "</div>"; // cf_all_cont

  htmlStmt += "</div>"; // options

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  // =====================================================
  // LOADED
  // =====================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
