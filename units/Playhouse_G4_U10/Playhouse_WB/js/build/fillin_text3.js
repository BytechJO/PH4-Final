function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    // =====================================================
    // BACK / NEXT
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
    // HEADING
    // =====================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

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

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

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
    // هذا مهم عشان FillIn constructor يلاقي .options
    // =====================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont group_words_all_cont">';

    htmlStmt += '<div class="group_words_page">';

    // =====================================================
    // WORD BANK
    // =====================================================

    htmlStmt += '<div class="group_words_bank">';

    for (var w = 0; w < aObj.words.length; w++) {
      var isDefaultWord = false;

      if (
        aObj.defaultAnswer != undefined &&
        aObj.defaultAnswer.enabled == true &&
        aObj.defaultAnswer.word == aObj.words[w]
      ) {
        isDefaultWord = true;
      }

      htmlStmt +=
        '<div class="group_bank_word ' +
        (isDefaultWord ? "default_bank_word" : "") +
        '">';

      if (isDefaultWord) {
        htmlStmt += '<span class="default_word_check">✓</span>';
      }

      htmlStmt += aObj.words[w];

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // COLUMNS
    // =====================================================

    htmlStmt += '<div class="group_columns_grid">';

    for (var c = 0; c < aObj.columns.length; c++) {
      var column = aObj.columns[c];

      htmlStmt +=
        '<div class="group_column que" ' +
        'data-qno="' +
        (c + 1) +
        '" ' +
        'data-column="' +
        c +
        '">';

      // ===================================================
      // COLUMN TITLE
      // ===================================================

      htmlStmt += '<div class="group_column_title">' + column.title + "</div>";

      // ===================================================
      // COLUMN BODY
      // ===================================================

      htmlStmt += '<div class="group_column_body">';

      for (
        var inputIndex = 0;
        inputIndex < aObj.inputsPerColumn;
        inputIndex++
      ) {
        var isDefaultInput = false;

        if (
          aObj.defaultAnswer != undefined &&
          aObj.defaultAnswer.enabled == true &&
          aObj.defaultAnswer.column == c &&
          aObj.defaultAnswer.input == inputIndex
        ) {
          isDefaultInput = true;
        }

        htmlStmt += '<div class="group_input_row">';

        // =================================================
        // INPUT
        // =================================================

        if (isDefaultInput) {
          htmlStmt +=
            "<input " +
            'class="text_input_area group_word_input default_group_input" ' +
            'type="text" ' +
            'data-type="text" ' +
            'data-column="' +
            c +
            '" ' +
            "readonly " +
            'value="' +
            aObj.defaultAnswer.answer +
            '">';
        } else {
          htmlStmt +=
            "<input " +
            'class="text_input_area group_word_input" ' +
            'type="text" ' +
            'maxlength="30" ' +
            'data-type="text" ' +
            'data-column="' +
            c +
            '" ' +
            'autocomplete="off">';
        }

        // =================================================
        // ICONS
        // =================================================

        htmlStmt += '<div class="icon_wrap_holder group_icon_holder">';

        htmlStmt += '<div class="icon_wrap">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  // =====================================================
  // APPEND
  // =====================================================

  console.log("htmlStmt >> Group FillIn Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
