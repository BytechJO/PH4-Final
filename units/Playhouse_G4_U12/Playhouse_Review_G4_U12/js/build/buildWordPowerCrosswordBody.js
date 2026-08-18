function buildWordPowerCrosswordBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  // =====================================================
  // CREATE CELL MAP
  // =====================================================

  var cellMap = {};

  for (var w = 0; w < aObj.words.length; w++) {
    var word = aObj.words[w];

    var answer = word.answer.replace(/\s+/g, "").toLowerCase();

    for (var i = 0; i < answer.length; i++) {
      var row = word.row;

      var col = word.col;

      if (word.direction === "across") {
        col += i;
      } else {
        row += i;
      }

      var key = row + "_" + col;

      // =================================================
      // CREATE CELL
      // =================================================

      if (cellMap[key] == undefined) {
        cellMap[key] = {
          row: row,
          col: col,
          letter: answer.charAt(i),
          number: "",
          directions: [],
          words: [],
        };
      }

      // =================================================
      // STORE DIRECTION
      // =================================================

      if (cellMap[key].directions.indexOf(word.direction) === -1) {
        cellMap[key].directions.push(word.direction);
      }

      // =================================================
      // STORE WORD INDEX
      // مهم لإخفاء feedback عند تعديل حرف
      // =================================================

      if (cellMap[key].words.indexOf(w) === -1) {
        cellMap[key].words.push(w);
      }

      // =================================================
      // NUMBER
      // =================================================

      if (i === 0) {
        cellMap[key].number = word.number;
      }
    }
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

  htmlStmt += '<div class="all_cont wp_crossword_all_cont">';

  htmlStmt += '<div class="wp_crossword_activity">';

  // =====================================================
  // CLUES
  // =====================================================

  htmlStmt += '<div class="wp_crossword_clues">';

  // =====================================================
  // DOWN
  // =====================================================

  htmlStmt += '<div class="wp_crossword_clue_group">';

  htmlStmt += '<div class="wp_crossword_clue_title">Down</div>';

  for (var d = 0; d < aObj.words.length; d++) {
    if (aObj.words[d].direction !== "down") {
      continue;
    }

    htmlStmt += '<div class="wp_crossword_clue">';

    htmlStmt +=
      '<span class="wp_crossword_clue_number">' +
      aObj.words[d].number +
      "</span>";

    htmlStmt +=
      '<span class="wp_crossword_clue_text">' + aObj.words[d].clue + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // ACROSS
  // =====================================================

  htmlStmt += '<div class="wp_crossword_clue_group wp_crossword_across_group">';

  htmlStmt += '<div class="wp_crossword_clue_title">Across</div>';

  for (var a = 0; a < aObj.words.length; a++) {
    if (aObj.words[a].direction !== "across") {
      continue;
    }

    htmlStmt += '<div class="wp_crossword_clue">';

    htmlStmt +=
      '<span class="wp_crossword_clue_number">' +
      aObj.words[a].number +
      "</span>";

    htmlStmt +=
      '<span class="wp_crossword_clue_text">' + aObj.words[a].clue + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // BOARD WRAPPER
  // =====================================================

  htmlStmt += '<div class="wp_crossword_board_wrap">';

  htmlStmt +=
    '<div class="wp_crossword_board" ' +
    'style="' +
    "--cw-cols:" +
    aObj.cols +
    ";" +
    "--cw-rows:" +
    aObj.rows +
    ';">';

  // =====================================================
  // CELLS
  // =====================================================

  for (var r = 1; r <= aObj.rows; r++) {
    for (var c = 1; c <= aObj.cols; c++) {
      var cellKey = r + "_" + c;

      var cell = cellMap[cellKey];

      if (cell == undefined) {
        continue;
      }

      htmlStmt +=
        '<div class="wp_crossword_cell" ' +
        'data-row="' +
        r +
        '" ' +
        'data-col="' +
        c +
        '" ' +
        'style="' +
        "grid-row:" +
        r +
        ";" +
        "grid-column:" +
        c +
        ';">';

      // =================================================
      // NUMBER
      // =================================================

      if (cell.number !== "") {
        htmlStmt +=
          '<span class="wp_crossword_cell_number">' + cell.number + "</span>";
      }

      // =================================================
      // INPUT
      // =================================================

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="wp_crossword_input" ' +
        'maxlength="1" ' +
        'data-answer="' +
        cell.letter +
        '" ' +
        'data-row="' +
        r +
        '" ' +
        'data-col="' +
        c +
        '" ' +
        'data-directions="' +
        cell.directions.join(",") +
        '" ' +
        'data-words="' +
        cell.words.join(",") +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false">';

      htmlStmt += "</div>";
    }
  }

  // =====================================================
  // WORD FEEDBACK
  //
  // DOWN  => فوق العمود
  // ACROSS => جنب الصف
  // =====================================================

  for (var f = 0; f < aObj.words.length; f++) {
    var feedbackWord = aObj.words[f];

    var feedbackAnswer = feedbackWord.answer.replace(/\s+/g, "");

    htmlStmt +=
      '<div class="' +
      "wp_crossword_word_feedback " +
      "wp_crossword_word_feedback_" +
      feedbackWord.direction +
      '" ' +
      'data-word-index="' +
      f +
      '" ' +
      'data-direction="' +
      feedbackWord.direction +
      '" ' +
      'style="' +
      "--word-row:" +
      feedbackWord.row +
      ";" +
      "--word-col:" +
      feedbackWord.col +
      ";" +
      "--word-length:" +
      feedbackAnswer.length +
      ';">';

    htmlStmt +=
      '<span class="wp_crossword_word_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</span>";

    htmlStmt +=
      '<span class="wp_crossword_word_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</span>";

    htmlStmt += "</div>";
  }

  // =====================================================
  // CLOSE BOARD
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

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
