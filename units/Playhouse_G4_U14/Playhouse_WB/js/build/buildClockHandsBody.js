function buildClockHandsBody(aObj) {
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

  // =====================================================
  // HEADER
  // =====================================================

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

  htmlStmt += '<div class="clock_activity_container">';

  // =====================================================
  // CLOCKS
  // =====================================================

  htmlStmt += '<div class="clock_questions_group">';

  for (var i = 0; i < aObj.questions.length; i++) {
    var question = aObj.questions[i];

    // =================================================
    // QUESTION
    // =================================================

    htmlStmt +=
      "<div " +
      'class="clock_question" ' +
      'data-q-index="' +
      i +
      '" ' +
      'data-hour="' +
      aObj.startTime.hour +
      '" ' +
      'data-minute="' +
      aObj.startTime.minute +
      '">';

    // =================================================
    // CLOCK FACE
    // =================================================

    htmlStmt += '<div class="clock_face">';

    // =================================================
    // MINUTE TICKS
    // =================================================

    htmlStmt += '<div class="clock_ticks">';

    for (var tick = 0; tick < 60; tick++) {
      var tickClass =
        tick % 5 === 0 ? "clock_tick clock_tick_hour" : "clock_tick";

      htmlStmt +=
        "<span " +
        'class="' +
        tickClass +
        '" ' +
        'style="transform:rotate(' +
        tick * 6 +
        'deg);">' +
        "<i></i>" +
        "</span>";
    }

    htmlStmt += "</div>";

    // =================================================
    // NUMBERS
    // =================================================

    for (var num = 1; num <= 12; num++) {
      var angle = ((num * 30 - 90) * Math.PI) / 180;

      var left = 50 + 37 * Math.cos(angle);

      var top = 50 + 37 * Math.sin(angle);

      htmlStmt +=
        "<span " +
        'class="clock_number" ' +
        'style="' +
        "left:" +
        left +
        "%;" +
        "top:" +
        top +
        "%;" +
        '">' +
        num +
        "</span>";
    }

    // =================================================
    // HOUR HAND
    // =================================================

    htmlStmt +=
      "<div " +
      'class="clock_hand clock_hour_hand" ' +
      'data-hand="hour">' +
      '<span class="clock_hand_drag_area"></span>' +
      "</div>";

    // =================================================
    // MINUTE HAND
    // =================================================

    htmlStmt +=
      "<div " +
      'class="clock_hand clock_minute_hand" ' +
      'data-hand="minute">' +
      '<span class="clock_hand_drag_area"></span>' +
      "</div>";

    // =================================================
    // CENTER
    // =================================================

    htmlStmt += '<div class="clock_center_dot"></div>';

    // =================================================
    // FEEDBACK
    // Same project icons
    // =================================================

    htmlStmt += '<div class="icon_wrap clock_feedback_icon">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // clock_face

    // =================================================
    // TIME TEXT
    // =================================================

    htmlStmt += '<div class="clock_time_text">' + question.timeText + "</div>";

    htmlStmt += "</div>"; // clock_question
  }

  htmlStmt += "</div>"; // clock_questions_group

  htmlStmt += "</div>"; // clock_activity_container

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
