function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  /* =========================================================
     NAVIGATION
  ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png" />' +
    "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png" />' +
    "</a>" +
    "</div>";

  /* =========================================================
     HEADER
  ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

  if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
       SUBTITLE
    ===================================================== */

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

  htmlStmt += '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================================
     ACTIVITY
  ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  /* =========================================================
     SURVEY TABLE
  ========================================================= */

  if (aObj.layout == "survey_table") {
    htmlStmt += '<div class="survey_fillin_page">';

    htmlStmt += '<div class="survey_fillin_table">';

    /* ===================================================
           HEADER
        =================================================== */

    htmlStmt += '<div class="survey_fillin_header">';

    for (var h = 0; h < aObj.tableHeaders.length; h++) {
      htmlStmt +=
        '<div class="survey_header_cell">' + aObj.tableHeaders[h] + "</div>";
    }

    htmlStmt += "</div>";

    /* ===================================================
           ROWS
        =================================================== */

    for (var rowIndex = 0; rowIndex < aObj.rows.length; rowIndex++) {
      var rowNumber = rowIndex + 1;

      htmlStmt +=
        '<div class="survey_fillin_row que" ' + 'data-qno="' + rowNumber + '">';

      /* ===============================================
               QUESTION CELL
            =============================================== */

      htmlStmt += '<div class="survey_question_cell">';

      htmlStmt +=
        '<span class="survey_row_number">' +
        aObj.rows[rowIndex].number +
        "</span>";

      htmlStmt +=
        "<input " +
        'class="text_input_area survey_input survey_question_input" ' +
        'type="text" ' +
        'data-type="text" ' +
        'maxlength="200">';

      htmlStmt += "</div>";

      /* ===============================================
               THREE ANSWERS
            =============================================== */

      for (var answerIndex = 0; answerIndex < 3; answerIndex++) {
        htmlStmt += '<div class="survey_answer_cell">';

        htmlStmt +=
          "<input " +
          'class="text_input_area survey_input survey_answer_input" ' +
          'type="text" ' +
          'data-type="text" ' +
          'maxlength="100">';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  /* =========================================================
     APPEND
  ========================================================= */

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
