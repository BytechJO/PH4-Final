function buildConversationWritingBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    return;
  }

  // =========================================================
  // NAVIGATION
  // =========================================================

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
  // HEADING
  // =========================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle !== "") {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // CONTENT
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="conversation_writing_page">';
  htmlStmt +=
    '<div class="conversation_toolbar">' +
    '<button type="button" class="conversation_circle_btn active">' +
    '<span class="circle_tool_icon">Aa</span>' +
    "<span>Circle</span>" +
    "</button>" +
    "</div>";
  for (var i = 0; i < aObj.questions.length; i++) {
    var q = aObj.questions[i];

    htmlStmt += '<div class="conversation_row">';

    htmlStmt += '<div class="speaker_label">' + q.speaker + "</div>";

    htmlStmt += '<div class="conversation_lines">';

    for (var r = 0; r < q.rows; r++) {
      htmlStmt += '<div class="writing_line_wrap">';

      htmlStmt +=
        '<div class="conversation_input conversation_editable" ' +
        'contenteditable="true" ' +
        'spellcheck="false">' +
        "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
