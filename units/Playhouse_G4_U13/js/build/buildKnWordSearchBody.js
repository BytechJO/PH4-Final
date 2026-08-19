function buildKnWordSearchBody(aObj) {
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
            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
                if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                    htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
                }
                htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="activityHeading">'
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += "<div class='page_sub_title'>";
                    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
                    for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                    }
                    htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
                htmlStmt += "</div>";
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont kn_word_search_all_cont">';

  htmlStmt += '<div class="kn_word_search_activity">';

  // =====================================================
  // PUZZLE WRAPPER
  // =====================================================

  htmlStmt += '<div class="kn_puzzle_wrapper">';

  // =====================================================
  // GRID
  // =====================================================

  htmlStmt +=
    '<div class="kn_grid" ' +
    'style="' +
    "--kn-cols:" +
    aObj.grid[0].length +
    ";" +
    "--kn-rows:" +
    aObj.grid.length +
    ';">';

  // =====================================================
  // SVG LAYER
  // saved capsules + preview
  // =====================================================

  htmlStmt +=
    '<svg class="kn_lines_svg" ' +
    'viewBox="0 0 100 100" ' +
    'preserveAspectRatio="none">';

  htmlStmt += '<g class="kn_saved_lines"></g>';

  htmlStmt +=
    '<line class="kn_preview_line" ' +
    'x1="0" ' +
    'y1="0" ' +
    'x2="0" ' +
    'y2="0">' +
    "</line>";

  htmlStmt += "</svg>";

  // =====================================================
  // LETTER CELLS
  // =====================================================

  for (var r = 0; r < aObj.grid.length; r++) {
    for (var c = 0; c < aObj.grid[r].length; c++) {
      htmlStmt +=
        '<div class="kn_letter_cell" ' +
        'data-row="' +
        (r + 1) +
        '" ' +
        'data-col="' +
        (c + 1) +
        '" ' +
        'data-letter="' +
        aObj.grid[r][c] +
        '">';

      htmlStmt += '<span class="kn_letter">' + aObj.grid[r][c] + "</span>";

      htmlStmt += "</div>";
    }
  }

  // =====================================================
  // CLOSE GRID
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE PUZZLE
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // ANSWERS AREA
  // الكلمات تنكتب تلقائياً
  // =====================================================

  htmlStmt += '<div class="kn_answers_area">';

  for (var i = 0; i < aObj.inputCount; i++) {
    htmlStmt +=
      '<div class="kn_answer_item" ' + 'data-input-index="' + i + '">';

    htmlStmt +=
      "<input " +
      'type="text" ' +
      'class="kn_answer_input" ' +
      "readonly " +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'maxlength="30">';

    htmlStmt += "</div>";
  }

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
