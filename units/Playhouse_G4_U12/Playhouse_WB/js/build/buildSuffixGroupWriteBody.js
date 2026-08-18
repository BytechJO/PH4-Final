function buildSuffixGroupWriteBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
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

  if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
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
  }

  // =====================================================
  // ACTIVITY TITLE
  // =====================================================

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleTextRight != undefined && aObj.subTitleTextRight != "") {
    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont sgw_all_cont">';

  htmlStmt += '<div class="sgw_activity">';

  // =====================================================
  // GRID TABLE WRAPPER
  // =====================================================

  htmlStmt += '<div class="sgw_table_wrap">';

  htmlStmt += '<div class="sgw_grid_table">';

  // =====================================================
  // HEADERS
  // =====================================================

  for (var g = 0; g < aObj.groups.length; g++) {
    htmlStmt +=
      '<div class="sgw_grid_header" ' +
      'data-group="' +
      aObj.groups[g].id +
      '">' +
      aObj.groups[g].title +
      "</div>";
  }

  // =====================================================
  // TABLE BODY
  // 6 ROWS × 5 COLUMNS
  // =====================================================

  for (var row = 0; row < aObj.maxRows; row++) {
    for (var col = 0; col < aObj.groups.length; col++) {
      var group = aObj.groups[col];

      var defaultValue = "";

      // =================================================
      // FIND DEFAULT ANSWER
      // =================================================

      if (
        group.defaultAnswers != undefined &&
        group.defaultAnswers != null &&
        group.defaultAnswers.length > 0
      ) {
        for (var d = 0; d < group.defaultAnswers.length; d++) {
          var defaultRow =
            group.defaultAnswers[d].row != undefined
              ? group.defaultAnswers[d].row
              : d;

          if (defaultRow === row) {
            defaultValue = group.defaultAnswers[d].answer;

            break;
          }
        }
      }

      // =================================================
      // CELL OPEN
      // =================================================

      htmlStmt +=
        '<div class="sgw_cell" ' +
        'data-group="' +
        group.id +
        '" ' +
        'data-row="' +
        row +
        '" ' +
        'data-col="' +
        col +
        '">';

      // =================================================
      // DEFAULT ANSWER
      // =================================================

      if (defaultValue !== "") {
        htmlStmt +=
          '<div class="sgw_default_answer">' + defaultValue + "</div>";
      }

      // =================================================
      // EDITABLE INPUT
      // =================================================
      else {
        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="sgw_input" ' +
          'data-group="' +
          group.id +
          '" ' +
          'data-row="' +
          row +
          '" ' +
          'data-col="' +
          col +
          '" ' +
          'autocomplete="off" ' +
          'spellcheck="false" ' +
          'maxlength="30">';

        // =================================================
        // FEEDBACK
        // =================================================

        htmlStmt += '<div class="sgw_input_feedback">';

        htmlStmt += '<span class="sgw_input_tick">';

        htmlStmt += '<img src="../images/icons/check_btn.png">';

        htmlStmt += "</span>";

        htmlStmt += '<span class="sgw_input_cross">';

        htmlStmt += '<img src="../images/icons/cross_btn.png">';

        htmlStmt += "</span>";

        htmlStmt += "</div>";
      }

      // =================================================
      // CELL CLOSE
      // =================================================

      htmlStmt += "</div>";
    }
  }

  // =====================================================
  // CLOSE GRID TABLE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // BOTTOM AREA
  // =====================================================

  htmlStmt += '<div class="sgw_bottom_area">';

  // =====================================================
  // WORD BANK
  // =====================================================

  htmlStmt += '<div class="sgw_word_bank">';

  for (var w = 0; w < aObj.wordBank.length; w++) {
    var item = aObj.wordBank[w];

    htmlStmt +=
      '<div class="sgw_word_item ' +
      (item.defaultUsed === true ? "used" : "") +
      '" ' +
      'data-answer="' +
      item.answer.toLowerCase() +
      '" ' +
      'data-source="' +
      item.source.toLowerCase() +
      '" ' +
      'data-group="' +
      item.group +
      '">';

    // =================================================
    // BLUE USED TICK
    // =================================================

    htmlStmt += '<span class="sgw_used_tick">✓</span>';

    // =================================================
    // SOURCE WORD
    // =================================================

    htmlStmt += '<span class="sgw_source_word">' + item.source + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // SIDE IMAGE
  // =====================================================

  if (aObj.image != undefined && aObj.image != "") {
    htmlStmt += '<div class="sgw_side_image">';

    htmlStmt += '<img src="' + aObj.image + '">';

    htmlStmt += "</div>";
  }

  // =====================================================
  // CLOSE BOTTOM AREA
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
