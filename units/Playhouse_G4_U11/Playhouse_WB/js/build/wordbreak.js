//  ****************************************** //
//  Word Break
//  Build File
//  ****************************************** //

function buildWordBreakBody(aObj) {
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
  // =========================================================
  // CONTENT
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="wordbreak_page">';

  // =========================================================
  // PART 1
  // =========================================================

  htmlStmt += '<div class="breakup_grid">';

  for (var i = 0; i < aObj.smallWords.length; i++) {
    var item = aObj.smallWords[i];

    var exampleClass = item.example === true ? " example_breakup_item" : "";

    htmlStmt +=
      '<div class="breakup_item' + exampleClass + '" data-index="' + i + '">';
    // Small word
    htmlStmt += '<div class="small_word">' + item.word + "</div>";

    // Input
    htmlStmt += '<div class="breakup_input_row">';

    if (item.example === true) {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="breakup_input example_breakup_input" ' +
        'value="' +
        item.defaultAnswer +
        '" ' +
        "readonly " +
        "/>";
    } else {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="breakup_input" ' +
        'maxlength="' +
        item.maxlength +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        "/>";
    }

    htmlStmt += '<div class="breakup_result icon_wrap_holder">';
    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="breakup_tick tick">';
    htmlStmt += '<img src="../images/icons/check_btn.png">';
    htmlStmt += "</div>";

    htmlStmt += '<div class="breakup_cross cross">';
    htmlStmt += '<img src="../images/icons/cross_btn.png">';
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =========================================================
  // WORD LIST
  // =========================================================

  htmlStmt += '<div class="word_list_row">';

  htmlStmt += '<div class="word_list_label">Word List:</div>';

  htmlStmt += '<div class="word_list_words">';

  for (var w = 0; w < aObj.wordList.length; w++) {
    htmlStmt += '<span class="word_list_item">' + aObj.wordList[w] + "</span>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // PART 2
  // =========================================================

  htmlStmt += '<div class="make_words_section">';

  // Left image
  htmlStmt += '<div class="make_words_image_wrap">';

  if (aObj.secondImage) {
    htmlStmt += '<img src="' + aObj.secondImage + '" class="make_words_image">';
  }

  htmlStmt += "</div>";

  // Right
  htmlStmt += '<div class="make_words_right">';

  htmlStmt +=
    '<div class="make_words_instruction">' + aObj.secondInstruction + "</div>";

  htmlStmt += '<div class="make_words_cards">';

  for (var m = 0; m < aObj.makeWords.length; m++) {
    var card = aObj.makeWords[m];

    var exampleClass = card.example ? " example_card" : "";

    htmlStmt +=
      '<div class="make_word_card' +
      exampleClass +
      '" ' +
      'data-card-index="' +
      m +
      '">';

    htmlStmt += '<div class="make_word_title">' + card.source + "</div>";

    htmlStmt += '<div class="make_word_inputs">';

    // =====================================================
    // EXAMPLE
    // =====================================================

    if (card.example === true) {
      for (var ex = 0; ex < card.exampleAnswers.length; ex++) {
        htmlStmt +=
          '<div class="example_word">' + card.exampleAnswers[ex] + "</div>";
      }
    } else {
      // ===================================================
      // NORMAL INPUTS
      // ===================================================

      for (var inp = 0; inp < card.numberOfInputs; inp++) {
        htmlStmt += '<div class="make_input_row">';

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="make_word_input" ' +
          'autocomplete="off" ' +
          'spellcheck="false" ' +
          "/>";

        htmlStmt += '<div class="make_input_result icon_wrap_holder">';
        htmlStmt += '<div class="icon_wrap">';

        htmlStmt += '<div class="make_input_tick tick">';
        htmlStmt += '<img src="../images/icons/check_btn.png">';
        htmlStmt += "</div>";

        htmlStmt += '<div class="make_input_cross cross">';
        htmlStmt += '<img src="../images/icons/cross_btn.png">';
        htmlStmt += "</div>";

        htmlStmt += "</div>";
        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  console.log("WordBreak Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
