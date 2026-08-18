function buildCircleSentenceBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {

    // =====================================================
    // NAVIGATION
    // =====================================================

    htmlStmt +=
      '<div class="sub_footer_icon subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt +=
      '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";


    htmlStmt +=
      '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt +=
      '<img src="../images/icons/next_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";


    // =====================================================
    // HEADER
    // =====================================================

    htmlStmt +=
      '<div class="act_head_group justify-content-center">';


    // =====================================================
    // MAIN TITLE IMAGE
    // =====================================================

    if (
      aObj.mainTitle != undefined &&
      aObj.mainTitle != ""
    ) {

      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-slideNum="1" ' +
        'data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt +=
        '<div class="q-type-img-container">';

      htmlStmt +=
        '<img class="mainTitle" src="' +
        aObj.mainTitle +
        '">';


      if (
        aObj.mainTitleIcon != undefined &&
        aObj.mainTitleIcon != ""
      ) {

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

    htmlStmt +=
      '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt +=
      "<div class='page_sub_title'>";

    htmlStmt +=
      "<p>" +
      aObj.subTitleTextLeft +
      "</p>";


    // =====================================================
    // SUB TITLE ICONS
    // =====================================================

    if (
      aObj.subTitleIcons != undefined &&
      aObj.subTitleIcons != null
    ) {

      for (
        var sicons = 0;
        sicons < aObj.subTitleIcons.length;
        sicons++
      ) {

        htmlStmt +=
          "<img src='" +
          aObj.subTitleIcons[sicons] +
          "'/>";
      }
    }


    htmlStmt +=
      "<p class='subTitleTextRight'>" +
      aObj.subTitleTextRight +
      "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";


    // =====================================================
    // OPTIONS
    // =====================================================

    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont circle_sentence_all_cont">';

    htmlStmt +=
      '<div class="circle_sentence_activity">';


    // =====================================================
    // MAIN LAYOUT
    // QUESTIONS LEFT + IMAGES RIGHT
    // =====================================================

    htmlStmt +=
      '<div class="circle_sentence_main_content">';


    // =====================================================
    // QUESTIONS SIDE
    // =====================================================

    htmlStmt +=
      '<div class="circle_sentence_content_side">';


    // =====================================================
    // FIRST QUESTIONS SECTION
    // =====================================================

    if (
      aObj.questions &&
      aObj.questions.length > 0
    ) {

      htmlStmt +=
        '<div class="circle_sentence_questions">';


      for (
        var q = 0;
        q < aObj.questions.length;
        q++
      ) {

        var question =
          aObj.questions[q];


        var isLocked =
          question.solved === true
            ? "true"
            : "false";


        // =================================================
        // QUESTION GROUP
        // =================================================

        htmlStmt +=
          '<div class="circle_sentence_question_group' +
          (question.solved === true
            ? " solved_question"
            : "") +
          '">';


        // =================================================
        // QUESTION NUMBER
        // =================================================

        htmlStmt +=
          '<div class="circle_sentence_question_number">' +
          question.number +
          "</div>";


        htmlStmt +=
          '<div class="circle_sentence_question_content">';


        // =================================================
        // SENTENCES
        // =================================================

        for (
          var s = 0;
          s < question.sentences.length;
          s++
        ) {

          var sentence =
            question.sentences[s];


          htmlStmt +=
            '<div class="circle_sentence_line" ' +
            'data-question="' +
            q +
            '" ' +
            'data-sentence="' +
            s +
            '" ' +
            'data-locked="' +
            isLocked +
            '">';


          htmlStmt +=
            '<div class="circle_sentence_text">';


          // =================================================
          // WORDS
          // =================================================

          for (
            var w = 0;
            w < sentence.words.length;
            w++
          ) {

            var word =
              sentence.words[w];


            var defaultSelected =
              word.defaultSelected === true
                ? "true"
                : "false";


            var selectedClass =
              word.defaultSelected === true
                ? " selected"
                : "";


            htmlStmt +=
              '<span class="circle_sentence_word' +
              selectedClass +
              '" ' +
              'data-correct="' +
              (word.correct === true
                ? "true"
                : "false") +
              '" ' +
              'data-default-selected="' +
              defaultSelected +
              '">' +
              word.text +
              "</span> ";
          }


          htmlStmt += "</div>";


          // =================================================
          // FEEDBACK
          // =================================================

          htmlStmt +=
            '<div class="circle_sentence_feedback">';


          htmlStmt +=
            '<div class="circle_sentence_tick">';

          htmlStmt +=
            '<img src="../images/icons/check_btn.png">';

          htmlStmt += "</div>";


          htmlStmt +=
            '<div class="circle_sentence_cross">';

          htmlStmt +=
            '<img src="../images/icons/cross_btn.png">';

          htmlStmt += "</div>";


          htmlStmt += "</div>";


          // close circle_sentence_line
          htmlStmt += "</div>";
        }


        // close circle_sentence_question_content
        htmlStmt += "</div>";


        // close circle_sentence_question_group
        htmlStmt += "</div>";
      }


      // close circle_sentence_questions
      htmlStmt += "</div>";
    }


    // =====================================================
    // SECOND INSTRUCTION
    // =====================================================

    if (
      aObj.secondInstruction != undefined &&
      aObj.secondInstruction != ""
    ) {

      htmlStmt +=
        '<div class="circle_sentence_second_instruction">' +
        aObj.secondInstruction +
        "</div>";
    }


    // =====================================================
    // SECOND QUESTIONS SECTION
    // =====================================================

    if (
      aObj.negativeQuestions &&
      aObj.negativeQuestions.length > 0
    ) {

      htmlStmt +=
        '<div class="circle_sentence_negative_questions">';


      for (
        var nq = 0;
        nq < aObj.negativeQuestions.length;
        nq++
      ) {

        var negativeQuestion =
          aObj.negativeQuestions[nq];


        var negativeLocked =
          negativeQuestion.solved === true
            ? "true"
            : "false";


        htmlStmt +=
          '<div class="circle_sentence_question_group negative_group">';


        htmlStmt +=
          '<div class="circle_sentence_question_number">' +
          negativeQuestion.number +
          "</div>";


        htmlStmt +=
          '<div class="circle_sentence_question_content">';


        // =================================================
        // NEGATIVE SENTENCES
        // =================================================

        for (
          var ns = 0;
          ns < negativeQuestion.sentences.length;
          ns++
        ) {

          var negativeSentence =
            negativeQuestion.sentences[ns];


          htmlStmt +=
            '<div class="circle_sentence_line" ' +
            'data-negative-question="' +
            nq +
            '" ' +
            'data-negative-sentence="' +
            ns +
            '" ' +
            'data-locked="' +
            negativeLocked +
            '">';


          htmlStmt +=
            '<div class="circle_sentence_text">';


          // =================================================
          // NEGATIVE WORDS
          // =================================================

          for (
            var nw = 0;
            nw < negativeSentence.words.length;
            nw++
          ) {

            var negativeWord =
              negativeSentence.words[nw];


            var negativeDefaultSelected =
              negativeWord.defaultSelected === true
                ? "true"
                : "false";


            var negativeSelectedClass =
              negativeWord.defaultSelected === true
                ? " selected"
                : "";


            htmlStmt +=
              '<span class="circle_sentence_word' +
              negativeSelectedClass +
              '" ' +
              'data-correct="' +
              (negativeWord.correct === true
                ? "true"
                : "false") +
              '" ' +
              'data-default-selected="' +
              negativeDefaultSelected +
              '">' +
              negativeWord.text +
              "</span> ";
          }


          htmlStmt += "</div>";


          // =================================================
          // FEEDBACK
          // =================================================

          htmlStmt +=
            '<div class="circle_sentence_feedback">';


          htmlStmt +=
            '<div class="circle_sentence_tick">';

          htmlStmt +=
            '<img src="../images/icons/check_btn.png">';

          htmlStmt += "</div>";


          htmlStmt +=
            '<div class="circle_sentence_cross">';

          htmlStmt +=
            '<img src="../images/icons/cross_btn.png">';

          htmlStmt += "</div>";


          htmlStmt += "</div>";


          // close circle_sentence_line
          htmlStmt += "</div>";
        }


        // close circle_sentence_question_content
        htmlStmt += "</div>";


        // close circle_sentence_question_group
        htmlStmt += "</div>";
      }


      // close negative questions
      htmlStmt += "</div>";
    }


    // =====================================================
    // CLOSE QUESTIONS SIDE
    // =====================================================

    htmlStmt += "</div>";


    // =====================================================
    // SIDE IMAGES
    // =====================================================

    if (
      aObj.sideImages != undefined &&
      aObj.sideImages != null &&
      aObj.sideImages.length > 0
    ) {

      htmlStmt +=
        '<div class="circle_sentence_side_images">';


      for (
        var img = 0;
        img < aObj.sideImages.length;
        img++
      ) {

        htmlStmt +=
          '<img class="circle_sentence_side_image" ' +
          'src="' +
          aObj.sideImages[img] +
          '">';
      }


      htmlStmt += "</div>";
    }


    // =====================================================
    // CLOSE MAIN CONTENT
    // =====================================================

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
  }


  console.log(
    "htmlStmt >> Circle Sentence Built"
  );


  $(".activity_area").append(
    htmlStmt
  );


  setLoadedStatus(
    getCurrFileOrDirectory(
      "file"
    )
  );
}