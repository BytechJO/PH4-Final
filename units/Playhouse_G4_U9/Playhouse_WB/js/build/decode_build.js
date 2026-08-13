function buildDecodeBody(aObj) {
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

    htmlStmt += '<div class="options cont_ht_sf mx-auto decode-options">';

    htmlStmt += '<div class="all_cont decode-all-cont">';

    htmlStmt += '<div class="screen_elements decode-screen-elements">';

    htmlStmt += '<div class="decode-wrapper">';

    // =========================================================
    // CIPHER TABLE
    // =========================================================

    htmlStmt += '<div class="decode-table-wrapper">';

    htmlStmt += '<table class="decode-table">';

    htmlStmt += "<tbody>";

    // =========================================================
    // ALPHABET ROW
    // =========================================================

    htmlStmt += "<tr>";

    for (var i = 0; i < aObj.alphabet.length; i++) {
      htmlStmt += '<td class="decode-table-cell">' + aObj.alphabet[i] + "</td>";
    }

    htmlStmt += "</tr>";

    // =========================================================
    // CODE ROW
    // =========================================================

    htmlStmt += "<tr>";

    for (var j = 0; j < aObj.codeAlphabet.length; j++) {
      htmlStmt +=
        '<td class="decode-table-cell">' + aObj.codeAlphabet[j] + "</td>";
    }

    htmlStmt += "</tr>";

    htmlStmt += "</tbody>";

    htmlStmt += "</table>";

    htmlStmt += "</div>";

    // =========================================================
    // MESSAGE
    // =========================================================

    htmlStmt += '<div class="decode-message" data-qno="1">';

    var encodedText = aObj.encoded;
    var answerText = aObj.answer;

    // =========================================================
    // SPLIT MESSAGE BY WORD
    // =========================================================

    var encodedWords = encodedText.split(" ");
    var answerWords = answerText.split(" ");

    // This counts letters only, not punctuation
    var letterPosition = 0;

    // =========================================================
    // LOOP WORDS
    // =========================================================

    for (var wordIndex = 0; wordIndex < encodedWords.length; wordIndex++) {
      var encodedWord = encodedWords[wordIndex];

      var answerWord = answerWords[wordIndex] || "";

      // =======================================================
      // WORD GROUP
      // This wrapper keeps the complete word together.
      // =======================================================

      htmlStmt +=
        '<div class="decode-word-group" ' +
        'data-word-index="' +
        wordIndex +
        '">';

      // =======================================================
      // WORD CONTENT
      // =======================================================

      htmlStmt += '<div class="decode-word-content">';

      // =======================================================
      // LOOP CHARACTERS INSIDE WORD
      // =======================================================

      for (var charIndex = 0; charIndex < encodedWord.length; charIndex++) {
        var encodedChar = encodedWord.charAt(charIndex);

        var answerChar = answerWord.charAt(charIndex) || "";

        // =====================================================
        // LETTER
        // =====================================================

        if (/[A-Z]/i.test(encodedChar)) {
          var isGiven = aObj.givenPositions.indexOf(letterPosition) !== -1;

          htmlStmt +=
            '<div class="decode-letter-box ' +
            (isGiven ? "decode-given-box" : "decode-input-box") +
            '" ' +
            'data-letter-position="' +
            letterPosition +
            '">';

          // ===================================================
          // ANSWER AREA
          // ===================================================

          htmlStmt += '<div class="decode-answer-area">';

          // ===================================================
          // GIVEN LETTER
          // ===================================================

          if (isGiven) {
            htmlStmt +=
              '<span class="decode-given-letter">' + answerChar + "</span>";
          }

          // ===================================================
          // INPUT
          // ===================================================
          else {
            htmlStmt +=
              "<input " +
              'type="text" ' +
              'class="decode-input" ' +
              'maxlength="1" ' +
              'autocomplete="off" ' +
              'autocorrect="off" ' +
              'autocapitalize="characters" ' +
              'spellcheck="false" ' +
              'data-answer="' +
              answerChar +
              '" ' +
              'data-letter-position="' +
              letterPosition +
              '" ' +
              'data-word-index="' +
              wordIndex +
              '">';
          }

          htmlStmt += "</div>"; // decode-answer-area

          // ===================================================
          // LINE
          // ===================================================

          htmlStmt += '<div class="decode-line"></div>';

          // ===================================================
          // CODED LETTER
          // ===================================================

          htmlStmt +=
            '<div class="decode-coded-letter">' + encodedChar + "</div>";

          htmlStmt += "</div>"; // decode-letter-box

          letterPosition++;
        }

        // =====================================================
        // APOSTROPHE
        // =====================================================
        else if (encodedChar === "'") {
          htmlStmt +=
            '<div class="decode-punctuation decode-apostrophe">' +
            "'" +
            "</div>";
        }

        // =====================================================
        // COMMA
        // =====================================================
        else if (encodedChar === ",") {
          htmlStmt +=
            '<div class="decode-punctuation decode-comma">' + "," + "</div>";
        }

        // =====================================================
        // PERIOD
        // =====================================================
        else if (encodedChar === ".") {
          htmlStmt +=
            '<div class="decode-punctuation decode-period">' + "." + "</div>";
        }

        // =====================================================
        // QUESTION MARK
        // =====================================================
        else if (encodedChar === "?") {
          htmlStmt +=
            '<div class="decode-punctuation decode-question-mark">' +
            "?" +
            "</div>";
        }

        // =====================================================
        // EXCLAMATION
        // =====================================================
        else if (encodedChar === "!") {
          htmlStmt +=
            '<div class="decode-punctuation decode-exclamation">' +
            "!" +
            "</div>";
        }

        // =====================================================
        // OTHER CHARACTER
        // =====================================================
        else {
          htmlStmt +=
            '<div class="decode-punctuation">' + encodedChar + "</div>";
        }
      }

      htmlStmt += "</div>"; // decode-word-content

      // =======================================================
      // ONE RESULT ICON FOR THE WHOLE WORD
      // =======================================================

      htmlStmt += '<div class="decode-word-result">';

      // TICK
      htmlStmt += '<div class="decode-word-tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      // CROSS
      htmlStmt += '<div class="decode-word-cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>"; // decode-word-result

      htmlStmt += "</div>"; // decode-word-group
    }

    htmlStmt += "</div>"; // decode-message

    // =========================================================
    // WORD POWER
    // =========================================================

    htmlStmt += '<div class="decode-word-power">';

    // =========================================================
    // WORD POWER TITLE
    // =========================================================

    htmlStmt +=
      '<div class="decode-word-power-title">' + aObj.wordPowerTitle + "</div>";

    // =========================================================
    // WORD POWER WORDS
    // =========================================================

    htmlStmt += '<div class="decode-word-list">';

    for (var w = 0; w < aObj.wordPowerWords.length; w++) {
      htmlStmt +=
        '<div class="decode-word">' + aObj.wordPowerWords[w] + "</div>";
    }

    htmlStmt += "</div>"; // decode-word-list

    // =========================================================
    // OTHER WORD POWER TITLE
    // =========================================================

    htmlStmt +=
      '<div class="decode-word-power-title decode-other-title">' +
      aObj.otherWordPowerTitle +
      "</div>";

    // =========================================================
    // OTHER WORD POWER WORDS
    // =========================================================

    htmlStmt += '<div class="decode-word-list decode-other-list">';

    for (var z = 0; z < aObj.otherWordPowerWords.length; z++) {
      htmlStmt +=
        '<div class="decode-word">' + aObj.otherWordPowerWords[z] + "</div>";
    }

    htmlStmt += "</div>"; // decode-other-list

    htmlStmt += "</div>"; // decode-word-power

    // =========================================================
    // CLOSE WRAPPERS
    // =========================================================

    htmlStmt += "</div>"; // decode-wrapper

    htmlStmt += "</div>"; // decode-screen-elements

    htmlStmt += "</div>"; // decode-all-cont

    htmlStmt += "</div>"; // decode-options
  }

  // ===========================================================
  // APPEND HTML
  // ===========================================================

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> Decode Built");

  // ===========================================================
  // LOADED STATUS
  // ===========================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
