function buildDrawCanvasBody(aObj) {
  var htmlStmt = "";

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
  htmlStmt += "<div class='page_sub_title'>";
  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  htmlStmt +=
    "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // CONTENT
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont draw_canvas_all_cont">';

  htmlStmt += '<div class="draw_canvas_activity">';

  // =====================================================
  // TOOLBAR
  // =====================================================

  htmlStmt += '<div class="draw_toolbar">';

  htmlStmt +=
    '<button type="button" class="draw_tool_btn active" data-tool="pen">' +
    "✏️" +
    "</button>";

  htmlStmt +=
    '<button type="button" class="draw_tool_btn" data-tool="eraser">' +
    "🧽" +
    "</button>";

  htmlStmt +=
    '<button type="button" class="draw_clear_btn">' + "Clear" + "</button>";

  htmlStmt += "</div>";

  // =====================================================
  // ITEMS
  // =====================================================

  for (var i = 0; i < aObj.items.length; i++) {
    var item = aObj.items[i];

    htmlStmt += '<div class="draw_row">';

    // =================================================
    // SOURCE IMAGE
    // =================================================

    htmlStmt += '<div class="draw_source_image">';

    htmlStmt += '<img src="' + item.image + '">';

    htmlStmt += "</div>";

    // =================================================
    // ARROW
    // =================================================

    htmlStmt += '<div class="draw_arrow">';

    htmlStmt += "<span>→</span>";

    htmlStmt += "</div>";

    // =================================================
    // CANVAS
    // =================================================

    htmlStmt += '<div class="draw_canvas_wrapper">';

    htmlStmt +=
      "<canvas " +
      'id="' +
      item.canvasId +
      '" ' +
      'class="student_draw_canvas">' +
      "</canvas>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
