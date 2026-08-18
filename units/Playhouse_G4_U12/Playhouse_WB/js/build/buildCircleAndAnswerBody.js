function buildCircleAndAnswerBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
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

    htmlStmt += '<div class="all_cont caa_all_cont">';

    htmlStmt += '<div class="caa_activity">';

    // =====================================================
    // CONVERSATION
    // =====================================================

    htmlStmt += '<div class="caa_conversation_wrap">';

    htmlStmt += '<div class="caa_conversation">';

    for (var c = 0; c < aObj.conversation.length; c++) {
      var line = aObj.conversation[c];

      htmlStmt += '<div class="caa_conversation_line">';

      // speaker
      htmlStmt += '<div class="caa_speaker">' + line.speaker + "</div>";

      // sentence
      htmlStmt += '<div class="caa_line_text">';

      for (var p = 0; p < line.parts.length; p++) {
        var part = line.parts[p];

        // =================================================
        // CIRCLE OPTION
        // only Word Power words
        // =================================================

        if (part.circle === true) {
          htmlStmt +=
            '<span class="caa_circle_option" ' +
            'data-correct="' +
            (part.correct === true ? "true" : "false") +
            '">' +
            part.text +
            "</span>";
        }

        // normal text
        else {
          htmlStmt += "<span>" + part.text + "</span>";
        }
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // CIRCLE FEEDBACK
    // =====================================================

    htmlStmt += '<div class="caa_circle_feedback">';

    htmlStmt +=
      '<div class="caa_circle_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="caa_circle_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // QUESTIONS SECTION
    // =====================================================

    htmlStmt += '<div class="caa_questions_section">';

    // =====================================================
    // QUESTIONS CONTENT
    // =====================================================

    htmlStmt += '<div class="caa_questions_content">';

    for (var q = 0; q < aObj.questions.length; q++) {
      var question = aObj.questions[q];

      var inlineInput = question.inputPosition === "inline";

      htmlStmt +=
        '<div class="caa_question ' +
        (inlineInput ? "caa_question_inline" : "caa_question_block") +
        '" ' +
        'data-question-index="' +
        q +
        '">';

      // =================================================
      // QUESTION HEADER
      // =================================================

      htmlStmt += '<div class="caa_question_header">';

      // number
      htmlStmt +=
        '<div class="caa_question_number">' + question.number + "</div>";

      // text
      htmlStmt += '<div class="caa_question_text">' + question.text + "</div>";

      // =================================================
      // QUESTION 1 + 2
      // INPUT INLINE
      // =================================================

      if (inlineInput) {
        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="caa_answer_input caa_inline_input" ' +
          'maxlength="' +
          (question.maxlength || 250) +
          '" ' +
          'autocomplete="off">';
      }

      htmlStmt += "</div>";

      // =================================================
      // QUESTION 3 -> 7
      // INPUT UNDER QUESTION
      // =================================================

      if (!inlineInput) {
        htmlStmt += '<div class="caa_under_input_wrap">';

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="caa_answer_input caa_under_input" ' +
          'maxlength="' +
          (question.maxlength || 250) +
          '" ' +
          'autocomplete="off">';

        htmlStmt += "</div>";
      }

      // =================================================
      // FEEDBACK
      // =================================================

      htmlStmt += '<div class="caa_question_feedback">';

      htmlStmt +=
        '<div class="caa_tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="caa_cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // HOSPITAL IMAGE
    // =====================================================

    if (aObj.questionsImage != undefined && aObj.questionsImage != "") {
      htmlStmt += '<div class="caa_questions_image">';

      htmlStmt += '<img src="' + aObj.questionsImage + '">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // CLOSE
    // =====================================================

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> Circle And Answer Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
