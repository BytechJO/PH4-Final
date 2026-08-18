function buildWordPowerSecretBody(aObj) {
  var htmlStmt = "";

  // =====================================================
  // BUILD NUMBER -> CORRECT LETTER MAP
  // =====================================================

  var numberMap = {};

  for (var q = 0; q < aObj.questions.length; q++) {
    var qObj = aObj.questions[q];

    for (var l = 0; l < qObj.answer.length; l++) {
      var number = qObj.numbers[l];

      if (number != null && number != undefined) {
        numberMap[number] = qObj.answer.charAt(l).toUpperCase();
      }
    }
  }

  if (aObj != undefined && aObj != null) {
    // =====================================================
    // NAVIGATION
    // =====================================================
	htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'


    // =====================================================
    // HEADER
    // =====================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    // =====================================================
    // MAIN TITLE
    // =====================================================

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-slideNum="1" ' +
        'data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt += '<div class="q-type-img-container">';

      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =====================================================
    // TITLE TEXT
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

    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // OPTIONS
    // =====================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont wps_all_cont">';

    htmlStmt += '<div class="wps_activity">';

    // =====================================================
    // WORD LIST
    // =====================================================

    htmlStmt += '<div class="wps_word_list">';

    htmlStmt += '<div class="wps_word_list_title">' + "Word List:" + "</div>";

    htmlStmt += '<div class="wps_word_list_words">';

    for (var wl = 0; wl < aObj.wordList.length; wl++) {
      htmlStmt +=
        '<span class="wps_word_list_item">' + aObj.wordList[wl] + "</span>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // TOP CONTENT
    // =====================================================

    htmlStmt += '<div class="wps_top_content">';

    htmlStmt += '<div class="wps_questions">';

    // =====================================================
    // UNSCRAMBLE QUESTIONS
    // =====================================================

    for (var i = 0; i < aObj.questions.length; i++) {
      var question = aObj.questions[i];

      htmlStmt +=
        '<div class="wps_word_row" ' + 'data-answer="' + question.answer + '">';

      // scrambled word
      htmlStmt += '<div class="wps_scrambled">' + question.scrambled + "</div>";

      // answer boxes
      htmlStmt += '<div class="wps_answer_wrap">';

      for (var c = 0; c < question.answer.length; c++) {
        htmlStmt += '<div class="wps_letter_holder">';

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'maxlength="1" ' +
          'class="wps_input wps_word_input" ' +
          'autocomplete="off">';

        if (question.numbers[c] != null && question.numbers[c] != undefined) {
          htmlStmt +=
            '<div class="wps_letter_number">' + question.numbers[c] + "</div>";
        } else {
          htmlStmt += '<div class="wps_letter_number">&nbsp;</div>';
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // =================================================
      // TOP WORD FEEDBACK
      // =================================================

      htmlStmt += '<div class="wps_feedback">';

      htmlStmt +=
        '<div class="wps_tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="wps_cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // SIDE IMAGE
    // =====================================================

    if (aObj.image != undefined && aObj.image != "") {
      htmlStmt +=
        '<div class="wps_side_image">' +
        '<img src="' +
        aObj.image +
        '">' +
        "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // SECRET MESSAGE
    // =====================================================

    htmlStmt += '<div class="wps_secret_message">';

    for (var row = 0; row < aObj.secretRows.length; row++) {
      var secretRow = aObj.secretRows[row];

      htmlStmt += '<div class="wps_secret_row">';

      for (var sw = 0; sw < secretRow.length; sw++) {
        var secretWord = secretRow[sw];

        // =================================================
        // SECRET WORD
        // =================================================

        htmlStmt += '<div class="wps_secret_word">';

        // =================================================
        // LETTERS WRAPPER
        // =================================================

        htmlStmt += '<div class="wps_secret_word_letters">';

        for (var sl = 0; sl < secretWord.letters.length; sl++) {
          var letter = secretWord.letters[sl];

          // ===============================================
          // FIXED HINT LETTER
          // ===============================================

          if (letter.fixed != undefined) {
            htmlStmt += '<div class="wps_secret_letter_holder">';

            htmlStmt +=
              "<input " +
              'class="wps_input wps_secret_input wps_fixed_letter" ' +
              'type="text" ' +
              'maxlength="1" ' +
              "readonly " +
              'value="' +
              letter.fixed +
              '">';

            htmlStmt += '<div class="wps_secret_number">&nbsp;</div>';

            htmlStmt += "</div>";
          }

          // ===============================================
          // NUMBERED LETTER
          // ===============================================
          else {
            var expected = numberMap[letter.ref] || "";

            htmlStmt += '<div class="wps_secret_letter_holder">';

            htmlStmt +=
              "<input " +
              'class="wps_input wps_secret_input" ' +
              'type="text" ' +
              'maxlength="1" ' +
              'autocomplete="off" ' +
              'data-answer="' +
              expected +
              '">';

            htmlStmt +=
              '<div class="wps_secret_number">' + letter.ref + "</div>";

            htmlStmt += "</div>";
          }
        }

        // close letters wrapper
        htmlStmt += "</div>";

        // =================================================
        // PUNCTUATION
        // =================================================

        if (secretWord.punctuation != undefined) {
          htmlStmt +=
            '<span class="wps_punctuation">' +
            secretWord.punctuation +
            "</span>";
        }

        // =================================================
        // SECRET WORD FEEDBACK
        // كل كلمة تحت إلها صح / غلط لحالها
        // =================================================

        htmlStmt += '<div class="wps_secret_word_feedback">';

        htmlStmt +=
          '<div class="wps_secret_word_tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '<div class="wps_secret_word_cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";

        htmlStmt += "</div>";

        // close secret word
        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // CLOSE ACTIVITY
    // =====================================================

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> Word Power Secret Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
