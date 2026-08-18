function buildConversationBoardBody(aObj) {
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
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont pronoun_board_all_cont">';

  htmlStmt += '<div class="pronoun_board_page">';

  // =====================================================
  // TITLE
  // =====================================================

  htmlStmt += '<div class="pronoun_board_title_row">';

  htmlStmt += '<div class="pronoun_board_title">' + aObj.pageTitle + "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // ACTIVITY LABEL
  // =====================================================

  htmlStmt += '<div class="pronoun_play_title">';

  htmlStmt +=
    '<span class="pronoun_play_number">' + aObj.activityNumber + "</span>";

  htmlStmt +=
    '<span class="pronoun_play_text">' + aObj.activityText + "</span>";

  htmlStmt += "</div>";

  // =====================================================
  // MAIN BOARD AREA
  // =====================================================

  htmlStmt += '<div class="pronoun_board_area">';

  // =====================================================
  // INSTRUCTION BOX
  // =====================================================

  htmlStmt += '<div class="pronoun_instruction_box">';

  htmlStmt += '<div class="pronoun_instruction_title">You need:</div>';

  htmlStmt += '<div class="pronoun_instruction_need">• &nbsp; a coin</div>';

  htmlStmt += '<div class="pronoun_instruction_steps_title">Steps:</div>';

  htmlStmt += '<div class="pronoun_instruction_steps_row">';

  htmlStmt += '<div class="pronoun_instruction_left_text">flip the coin</div>';

  htmlStmt += '<div class="pronoun_coin_arrows">';

  htmlStmt += '<div class="pronoun_coin-line pronoun_coin-line-top"></div>';


  htmlStmt += '<div class="pronoun_coin-line pronoun_coin-line-bottom"></div>';

  htmlStmt += "</div>";

  htmlStmt += '<div class="pronoun_coin_result">';

  htmlStmt += "<div><b>heads</b><br>1 space</div>";

  htmlStmt += "<div><b>tails</b><br>2 spaces</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="pronoun_instruction_footer">' +
    "Give a sentence for<br>each pronoun." +
    "</div>";

  htmlStmt += "</div>";
  // =====================================================
  // BOARD
  // =====================================================

  htmlStmt += '<div class="pronoun_game_board">';

  // =====================================================
  // TOP ROW
  // =====================================================

  htmlStmt += '<div class="pronoun_top_row">';

  for (var i = 0; i < aObj.topRow.length; i++) {
    var topItem = aObj.topRow[i];

    if (topItem.type === "start") {
      htmlStmt += '<div class="pronoun_board_cell pronoun_start_cell">';

      htmlStmt += '<div class="pronoun_start_text">' + topItem.text + "</div>";

      // handmade arrow/car
      htmlStmt += '<div class="pronoun_start_marker">';

      htmlStmt += '<span class="pronoun_marker-body"></span>';

      htmlStmt += '<span class="pronoun-marker-arrow"></span>';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    } else {
      htmlStmt +=
        '<div class="pronoun_board_cell pronoun_theme_' + topItem.theme + '">';

      htmlStmt += '<span class="pronoun_star"></span>';

      htmlStmt += '<span class="pronoun_cell_text">' + topItem.text + "</span>";

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>";

  // =====================================================
  // TURN DOWN ARROW
  // =====================================================

  htmlStmt += '<div class="pronoun_turn_arrow">↓</div>';

  // =====================================================
  // DIAGONAL PATH
  // =====================================================

  htmlStmt += '<div class="pronoun_diagonal_path">';

  for (var p = 0; p < aObj.path.length; p++) {
    var pathItem = aObj.path[p];

    htmlStmt +=
      '<div class="pronoun_path_cell pronoun_theme_' + pathItem.theme + '">';

    htmlStmt += '<span class="pronoun_star"></span>';

    htmlStmt += '<span class="pronoun_cell_text">' + pathItem.text + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // BOTTOM ROW
  // =====================================================

  htmlStmt += '<div class="pronoun_bottom_row">';

  for (var b = 0; b < aObj.bottomRow.length; b++) {
    var bottomItem = aObj.bottomRow[b];

    if (bottomItem.type === "finish") {
      htmlStmt += '<div class="pronoun_board_cell pronoun_finish_cell">';

      // handmade confetti
      htmlStmt += '<div class="pronoun_confetti">';

      for (var s = 0; s < 12; s++) {
        htmlStmt +=
          '<span class="confetti_piece confetti_' + (s + 1) + '">★</span>';
      }

      htmlStmt += "</div>";

      htmlStmt +=
        '<div class="pronoun_finish_text">' + bottomItem.text + "</div>";

      htmlStmt += "</div>";
    } else {
      htmlStmt +=
        '<div class="pronoun_board_cell pronoun_theme_' +
        bottomItem.theme +
        '">';

      htmlStmt += '<span class="pronoun_star"></span>';

      htmlStmt +=
        '<span class="pronoun_cell_text">' + bottomItem.text + "</span>";

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE BOARD
  // =====================================================

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE BOARD AREA
  // =====================================================

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

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
