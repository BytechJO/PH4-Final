function buildWritingFixBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != "undefined" && aObj != null) {
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
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '" />';

    if (
      aObj.mainTitleIcon != undefined &&
      aObj.mainTitleIcon != null &&
      aObj.mainTitleIcon != ""
    ) {
      htmlStmt +=
        '<img class="mainTitleIcon" src="' +
        aObj.mainTitleIcon +
        '" style="right:' +
        aObj.mainTitleIconPos.right +
        ';" />';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // ACTIVITY HEADING
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    htmlStmt += '<div class="page_sub_title">';

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    if (aObj.subTitleIcons && aObj.subTitleIcons.length > 0) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "' />";
        }
      }
    }

    if (
      aObj.subTitleTextRight != undefined &&
      aObj.subTitleTextRight != null &&
      aObj.subTitleTextRight != ""
    ) {
      htmlStmt +=
        '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto writing-fix-options">';

    htmlStmt += '<div class="all_cont writing-fix-all-cont">';

    htmlStmt += '<div class="screen_elements writing-fix-screen-elements">';

    htmlStmt += '<div class="writing-fix-wrapper">';

    // =========================================================
    // STORY WRAPPER
    // =========================================================

    htmlStmt += '<div class="writing-fix-story-wrap">';

    htmlStmt += '<div class="writing-fix-story">';

    var correctionIndex = 0;

    // =========================================================
    // PARAGRAPH LOOP
    // =========================================================

    for (var i = 0; i < aObj.paragraphParts.length; i++) {
      var part = aObj.paragraphParts[i];

      // =======================================================
      // NORMAL TEXT
      // =======================================================

      if (part.type == "text") {
        htmlStmt += '<span class="writing-fix-text">' + part.text + "</span>";
      }
      // =======================================================
      // CORRECTION
      // =======================================================
      else if (part.type == "correction") {
        correctionIndex++;

        var inputClass = "writing-correction-input writing-inline-editable";

        var widthStyle = "";

        // =====================================================
        // PUNCTUATION
        // =====================================================

        if (part.inputType == "punctuation") {
          inputClass += " writing-punctuation-input";

          var punctuationBaseWidth = 1;

          var punctuationExtra =
            part.extraWidth != undefined && part.extraWidth != null
              ? parseFloat(part.extraWidth)
              : 0;

          var punctuationWidth = punctuationBaseWidth + punctuationExtra;

          widthStyle = 'style="width:' + punctuationWidth + 'ch;"';
        }

        // =====================================================
        // WORD
        // =====================================================
        else {
          inputClass += " writing-word-input";

          var baseLen = Math.max(
            (part.initial || "").length,
            (part.answer || "").length,
            1,
          );

          var extraWidth =
            part.extraWidth != undefined && part.extraWidth != null
              ? parseFloat(part.extraWidth)
              : 0;

          var finalWidth = baseLen + extraWidth;

          widthStyle = 'style="width:' + finalWidth + 'ch;"';
        }

        htmlStmt +=
          '<span class="writing-correction-group" ' +
          'data-correction="' +
          correctionIndex +
          '">';

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="' +
          inputClass +
          '" ' +
          'value="' +
          escapeWritingFixAttribute(part.initial || "") +
          '" ' +
          'data-initial="' +
          escapeWritingFixAttribute(part.initial || "") +
          '" ' +
          'data-answer="' +
          escapeWritingFixAttribute(part.answer || "") +
          '" ' +
          'data-kind="paragraph" ' +
          'autocomplete="off" ' +
          'autocorrect="off" ' +
          'autocapitalize="off" ' +
          'spellcheck="false" ' +
          (part.maxlength ? 'maxlength="' + part.maxlength + '" ' : "") +
          widthStyle +
          " />";

        htmlStmt += "</span>";
      }
    }

    htmlStmt += "</div>"; // writing-fix-story

    // =========================================================
    // ONE RESULT FOR WHOLE STORY
    // =========================================================

    htmlStmt += '<div class="writing-story-result">';

    htmlStmt += '<span class="writing-story-tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png" />';

    htmlStmt += "</span>";

    htmlStmt += '<span class="writing-story-cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png" />';

    htmlStmt += "</span>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // writing-fix-story-wrap

    // =========================================================
    // SPELLING WORDS
    // =========================================================

    htmlStmt += '<div class="writing-spelling-section">';

    htmlStmt +=
      '<div class="writing-spelling-title">' + aObj.spellingTitle + "</div>";

    htmlStmt += '<div class="writing-spelling-list">';

    for (var sp = 0; sp < aObj.spellingWords.length; sp++) {
      htmlStmt +=
        '<div class="writing-spelling-group" ' +
        'data-spelling-index="' +
        sp +
        '">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="writing-spelling-input" ' +
        'data-answer="' +
        escapeWritingFixAttribute(aObj.spellingWords[sp].answer) +
        '" ' +
        'autocomplete="off" ' +
        'autocorrect="off" ' +
        'autocapitalize="off" ' +
        'spellcheck="false" ' +
        "/>";

      // TICK
      htmlStmt += '<span class="writing-result writing-result-tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png" />';

      htmlStmt += "</span>";

      // CROSS
      htmlStmt += '<span class="writing-result writing-result-cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png" />';

      htmlStmt += "</span>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // FREE WRITING PAPER
    // =========================================================

    htmlStmt += '<div class="writing-letter-paper">';

    // =======================================================
    // PAPER LINES
    // =======================================================

    htmlStmt += '<div class="writing-paper-lines">';

    var numberOfLines = parseInt(aObj.writingLines || 10);

    for (var line = 0; line < numberOfLines; line++) {
      htmlStmt += '<div class="writing-paper-line"></div>';
    }

    htmlStmt += "</div>";

    // =======================================================
    // TEXTAREA
    // =======================================================

    htmlStmt +=
      "<textarea " +
      'class="writing-letter-textarea" ' +
      'autocomplete="off" ' +
      'autocorrect="off" ' +
      'autocapitalize="sentences" ' +
      'spellcheck="false" ' +
      'placeholder="' +
      escapeWritingFixAttribute(aObj.writingPlaceholder || "") +
      '">' +
      "</textarea>";

    // =======================================================
    // BAG IMAGE
    // =======================================================

    if (
      aObj.bagImage != undefined &&
      aObj.bagImage != null &&
      aObj.bagImage != ""
    ) {
      htmlStmt +=
        '<img class="writing-bag-image" src="' + aObj.bagImage + '" />';
    }

    htmlStmt += "</div>";

    // =========================================================
    // CLOSE WRAPPERS
    // =========================================================

    htmlStmt += "</div>"; // writing-fix-wrapper

    htmlStmt += "</div>"; // screen_elements

    htmlStmt += "</div>"; // all_cont

    htmlStmt += "</div>"; // options
  }

  // =========================================================
  // APPEND
  // =========================================================

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> Writing Fix Built");

  // =========================================================
  // LOADED
  // =========================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

// ===========================================================
// ESCAPE ATTRIBUTE
// ===========================================================

function escapeWritingFixAttribute(value) {
  if (value == undefined || value == null) {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
