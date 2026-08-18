function buildSuffixCrossWriteBody(aObj) {
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
  // TITLE
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

  htmlStmt += '<div class="all_cont scw_all_cont">';

  htmlStmt += '<div class="scw_activity">';

  // =====================================================
  // WORD BOX
  // =====================================================

  htmlStmt += '<div class="scw_word_box">';

  for (var w = 0; w < aObj.wordBank.length; w++) {
    var item = aObj.wordBank[w];

    htmlStmt +=
      '<div class="scw_word_item ' +
      (item.defaultUsed === true ? "used" : "") +
      '" ' +
      'data-source="' +
      item.source.toLowerCase() +
      '" ' +
      'data-answer="' +
      item.answer.toLowerCase() +
      '" ' +
      'data-group="' +
      item.group +
      '">';

    htmlStmt += '<span class="scw_source_word">' + item.source + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // TABLE WRAP
  // =====================================================

  htmlStmt += '<div class="scw_table_wrap">';

  htmlStmt += '<div class="scw_table">';

  // =====================================================
  // HEADERS
  // =====================================================

  for (var g = 0; g < aObj.groups.length; g++) {
    htmlStmt +=
      '<div class="scw_header" ' +
      'data-group="' +
      aObj.groups[g].id +
      '">' +
      aObj.groups[g].title +
      "</div>";
  }

  // =====================================================
  // ROWS
  // =====================================================

  for (var row = 0; row < aObj.maxRows; row++) {
    for (var col = 0; col < aObj.groups.length; col++) {
      var group = aObj.groups[col];

      var defaultValue = "";

      // ===============================================
      // DEFAULT ANSWER
      // ===============================================

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

      // ===============================================
      // CELL
      // ===============================================

      htmlStmt +=
        '<div class="scw_cell" ' +
        'data-group="' +
        group.id +
        '" ' +
        'data-row="' +
        row +
        '" ' +
        'data-col="' +
        col +
        '">';

      if (defaultValue !== "") {
        htmlStmt +=
          '<div class="scw_default_answer">' + defaultValue + "</div>";
      } else {
        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="scw_input" ' +
          'data-group="' +
          group.id +
          '" ' +
          'autocomplete="off" ' +
          'spellcheck="false" ' +
          'maxlength="30">';

        htmlStmt += '<div class="scw_input_feedback">';

        htmlStmt +=
          '<span class="scw_input_tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</span>";

        htmlStmt +=
          '<span class="scw_input_cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</span>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
