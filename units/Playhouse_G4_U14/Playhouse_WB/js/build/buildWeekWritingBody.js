function buildWeekWritingBody(aObj) {
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

  // ===================================================================== heading =====================
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
  if (aObj.title_position != undefined && aObj.title_position == "under") {
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
  } else {
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
  }
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="ww_all_cont">';

  htmlStmt += '<div class="ww_activity">';

  // =====================================================
  // REMEMBER AREA
  // [PENCIL] [TEXT] [KIDS IMAGE]
  // =====================================================

  htmlStmt += '<div class="ww_remember_area">';

  // =====================================================
  // PENCIL IMAGE
  // =====================================================

  if (aObj.rememberPencilImage != undefined && aObj.rememberPencilImage != "") {
    htmlStmt += '<div class="ww_pencil_image">';

    htmlStmt += "<img " + 'src="' + aObj.rememberPencilImage + '" ' + 'alt="">';

    htmlStmt += "</div>";
  }

  // =====================================================
  // REMEMBER CONTENT
  // =====================================================

  htmlStmt += '<div class="ww_remember_content">';

  htmlStmt += '<div class="ww_remember_title">' + aObj.rememberTitle + "</div>";

  for (var r = 0; r < aObj.remember.length; r++) {
    htmlStmt += '<div class="ww_remember_row">';

    htmlStmt +=
      '<span class="ww_remember_number">' + aObj.remember[r].number + "</span>";

    htmlStmt +=
      '<span class="ww_remember_text">' + aObj.remember[r].text + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>"; // ww_remember_content

  // =====================================================
  // KIDS IMAGE
  // =====================================================

  if (aObj.rememberImage != undefined && aObj.rememberImage != "") {
    htmlStmt += '<div class="ww_remember_side_image">';

    htmlStmt += "<img " + 'src="' + aObj.rememberImage + '" ' + 'alt="">';

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>"; // ww_remember_area

  // =====================================================
  // SCHEDULE TITLE
  // =====================================================

  htmlStmt += '<div class="ww_schedule_title">' + aObj.scheduleTitle + "</div>";

  // =====================================================
  // WEEK GRID
  // =====================================================

  htmlStmt += '<div class="ww_week_grid">';

  for (var i = 0; i < aObj.days.length; i++) {
    var dayObj = aObj.days[i];

    // =================================================
    // CELL
    // =================================================

    htmlStmt += "<div " + 'class="ww_day_cell" ' + 'data-index="' + i + '">';

    // =================================================
    // DAY NAME
    // =================================================

    htmlStmt += '<div class="ww_day_name">' + dayObj.day + "</div>";

    // =================================================
    // BODY
    // =================================================

    htmlStmt += '<div class="ww_day_body">';

    // =================================================
    // MEDIA AREA
    // =================================================

    htmlStmt += '<div class="ww_media_area">';

    // =================================================
    // UPLOADED IMAGE
    // =================================================

    htmlStmt += "<img " + 'class="ww_uploaded_image" ' + 'src="" ' + 'alt="">';

    // =================================================
    // DRAWING CANVAS
    // =================================================

    htmlStmt += '<canvas class="ww_canvas"></canvas>';

    // =================================================
    // EMPTY HINT
    // =================================================

    htmlStmt +=
      '<div class="ww_empty_hint">' + "Add a picture or draw" + "</div>";

    htmlStmt += "</div>"; // ww_media_area

    // =================================================
    // TOOLS
    // =================================================

    htmlStmt += '<div class="ww_tools">';

    // =================================================
    // IMAGE UPLOAD
    // =================================================

    htmlStmt += '<label class="ww_tool_btn ww_upload_btn">';

    htmlStmt += "<span>Image</span>";

    htmlStmt +=
      "<input " +
      'type="file" ' +
      'class="ww_file_input" ' +
      'accept="image/*">';

    htmlStmt += "</label>";

    // =================================================
    // DRAW
    // =================================================

    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="ww_tool_btn ww_draw_btn">' +
      "Draw" +
      "</button>";

    // =================================================
    // ERASER
    // =================================================

    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="ww_tool_btn ww_eraser_btn">' +
      "Eraser" +
      "</button>";

    // =================================================
    // CLEAR
    // =================================================

    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="ww_tool_btn ww_clear_media_btn">' +
      "Clear" +
      "</button>";

    htmlStmt += "</div>"; // ww_tools

    // =================================================
    // WRITING AREA
    // =================================================

    htmlStmt += '<div class="ww_write_area">';

    htmlStmt +=
      "<textarea " +
      'class="ww_textarea" ' +
      'placeholder="' +
      dayObj.placeholder +
      '" ' +
      'spellcheck="false">' +
      "</textarea>";

    htmlStmt += "</div>"; // ww_write_area

    htmlStmt += "</div>"; // ww_day_body

    htmlStmt += "</div>"; // ww_day_cell
  }

  htmlStmt += "</div>"; // ww_week_grid

  htmlStmt += "</div>"; // ww_activity

  htmlStmt += "</div>"; // ww_all_cont

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
