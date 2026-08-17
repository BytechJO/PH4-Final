function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj !== undefined && aObj !== null) {
    var layOut = parseInt(aObj.layout);

    if (layOut === 4) {
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
      // MAIN TITLE
      // =========================================================

      htmlStmt += '<div class="act_head_group justify-content-center">';

      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-slideNum="1" ' +
        'data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt += '<div class="q-type-img-container">';

      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

      if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
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

      htmlStmt += "</div>";

      // =========================================================
      // OPTIONS
      // =========================================================

      htmlStmt += '<div class="options">';

      htmlStmt += '<div class="writing_page_content">';

      // =========================================================
      // INTRO
      // =========================================================

      if (aObj.intro !== undefined && aObj.intro !== null) {
        htmlStmt +=
          '<div class="writing_intro audioIcon off contant" ' +
          'data-audio="' +
          aObj.intro.audio +
          '">';

        htmlStmt += aObj.intro.text;

        htmlStmt += "</div>";
      }

      // =========================================================
      // SECTION 1
      // =========================================================

      if (aObj.firstSection !== undefined && aObj.firstSection !== null) {
        var first = aObj.firstSection;

        htmlStmt += '<div class="writing_section writing_section_1">';

        // =====================================================
        // HEADING
        // =====================================================

        htmlStmt += '<div class="writing_section_heading">';

        htmlStmt +=
          '<span class="writing_section_number">' + first.number + "</span>";

        // TITLE AUDIO
        htmlStmt +=
          '<span class="writing_section_title audioIcon off contant" ' +
          'data-audio="' +
          first.titleAudio +
          '">';

        htmlStmt += first.title;

        htmlStmt += "</span>";

        // INSTRUCTION AUDIO
        htmlStmt +=
          '<span class="writing_section_instruction audioIcon off contant" ' +
          'data-audio="' +
          first.instructionAudio +
          '">';

        htmlStmt += first.instruction;

        htmlStmt += "</span>";

        htmlStmt += "</div>";

        // =====================================================
        // SENTENCES
        // =====================================================
        htmlStmt += '<div class="writing_sentences">';

        for (var i = 0; i < first.sentences.length; i++) {
          htmlStmt +=
            '<div class="writing_sentence  off contant" ' +
            'data-index="' +
            i +
            '" ' +
            'data-audio="' +
            first.sentences[i].audio +
            '">';

          htmlStmt += '<span class="writing_bullet">••</span>';

          htmlStmt +=
            '<span class="writing_sentence_text">' +
            first.sentences[i].text +
            "</span>";

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      // =========================================================
      // SECTION 2
      // =========================================================

      if (aObj.secondSection !== undefined && aObj.secondSection !== null) {
        var second = aObj.secondSection;

        htmlStmt += '<div class="writing_section writing_section_2">';

        htmlStmt += '<div class="writing_section_heading">';

        htmlStmt +=
          '<span class="writing_section_number">' + second.number + "</span>";

        // TITLE AUDIO
        htmlStmt +=
          '<span class="writing_section_title audioIcon off contant" ' +
          'data-audio="' +
          second.titleAudio +
          '">';

        htmlStmt += second.title;

        htmlStmt += "</span>";

        // INSTRUCTION AUDIO
        htmlStmt +=
          '<span class="writing_section_instruction audioIcon off contant" ' +
          'data-audio="' +
          second.instructionAudio +
          '">';

        htmlStmt += second.instruction;

        htmlStmt += "</span>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      // =========================================================
      // WRITING AREA
      // =========================================================

      htmlStmt +=
        '<div class="textarea-container" ' +
        'style="background-image:url(' +
        aObj.background_image +
        ')">';

      htmlStmt +=
        "<textarea " +
        'id="paper-textarea" ' +
        'rows="10" ' +
        'cols="50" ' +
        'maxlength="400"></textarea>';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);
  // =========================================================
  // CIRCLE ONE SENTENCE
  // =========================================================

  $(".activity_area").on("click", ".writing_sentence", function () {
    // نشيل الدائرة من كل الجمل
    $(".writing_sentence").removeClass("writing_sentence_selected");

    // نحطها على الجملة المكبوسة
    $(this).addClass("writing_sentence_selected");
  });
  setLoadedStatus(getCurrFileOrDirectory("file"));
}
