function buildFillInBody(aObj) {
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

  //====================================================================== header ======================
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
      ' style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
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
  htmlStmt += "<div class='page_sub_title'>";
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

  htmlStmt += '<div class="all_cont calendar_all_cont">';

  htmlStmt += '<div class="calendar_activity">';

  // =====================================================
  // MONTH TITLE
  // =====================================================

  htmlStmt +=
    '<div class="calendar_month_title">' + aObj.calendarTitle + "</div>";

  // =====================================================
  // CALENDAR GRID
  // =====================================================

  htmlStmt += '<div class="ordinal_calendar">';

  // =====================================================
  // DAYS HEADER
  // =====================================================

  for (var d = 0; d < aObj.days.length; d++) {
    htmlStmt += '<div class="calendar_day_header">' + aObj.days[d] + "</div>";
  }

  // =====================================================
  // DATE CELLS
  // =====================================================

  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    var qNo = i + 1;

    var isDefault = aObj.defaultAnswer.indexOf(qNo) !== -1;

    // =================================================
    // CELL
    // =================================================

    htmlStmt += '<div class="calendar_date_cell">';

    // =================================================
    // ORDINAL NUMBER
    // =================================================

    htmlStmt += '<div class="calendar_ordinal">' + q.number + "</div>";

    // =================================================
    // QUESTION WRAPPER
    // مهم للـ FillIn.js
    // =================================================

    htmlStmt += '<div class="que calendar_que" ' + 'data-qno="' + qNo + '">';

    htmlStmt += '<div class="fillin_set Box calendar_fillin_set">';

    // =================================================
    // DEFAULT ANSWER
    // =================================================

    if (isDefault) {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="calendar_default_input" ' +
        "readonly " +
        'value="' +
        q.answer[0] +
        '">';

      // dummy feedback
      // حتى يظل structure متوافق مع FillIn
      htmlStmt +=
        '<div class="icon_wrap calendar_icon_wrap calendar_default_icon">';

      htmlStmt += '<div class="tick">' + '<img src="">' + "</div>";

      htmlStmt += '<div class="cross">' + '<img src="">' + "</div>";

      htmlStmt += "</div>";
    }

    // =================================================
    // STUDENT INPUT
    // =================================================
    else {
      htmlStmt += '<div class="calendar_answer_line">';

      // =================================================
      // PREFIX
      // مثال:
      // sixteen + [th]
      // twenty- + [third]
      // =================================================

      if (q.prefix != undefined && q.prefix != "") {
        htmlStmt +=
          '<span class="calendar_help_text calendar_prefix">' +
          q.prefix +
          "</span>";
      }

      // =================================================
      // INPUT
      // =================================================

      htmlStmt +=
        "<input " +
        'class="text_input_area calendar_input" ' +
        'type="text" ' +
        'maxlength="' +
        q.maxlength +
        '" ' +
        'data-type="' +
        q.type +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false">';

      // =================================================
      // SUFFIX
      // إذا احتجناه لاحقاً
      // =================================================

      if (q.suffix != undefined && q.suffix != "") {
        htmlStmt +=
          '<span class="calendar_help_text calendar_suffix">' +
          q.suffix +
          "</span>";
      }

      htmlStmt += "</div>";

      // =================================================
      // FEEDBACK
      // =================================================

      htmlStmt += '<div class="icon_wrap calendar_icon_wrap">';

      htmlStmt += '<div class="tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =================================================
    // CLOSE CELL CONTENT
    // =================================================

    htmlStmt += "</div>"; // fillin_set

    htmlStmt += "</div>"; // que

    htmlStmt += "</div>"; // calendar_date_cell
  }

  // =====================================================
  // EMPTY CALENDAR CELLS
  // December = 31 days
  // Grid uses 5 weeks = 35 cells
  // =====================================================

  for (var emptyIndex = 0; emptyIndex < 4; emptyIndex++) {
    htmlStmt += '<div class="calendar_date_cell calendar_empty_cell"></div>';
  }

  // =====================================================
  // CLOSE CALENDAR
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE ACTIVITY
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE ALL CONT
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE OPTIONS
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  // =====================================================
  // LOADED
  // =====================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
