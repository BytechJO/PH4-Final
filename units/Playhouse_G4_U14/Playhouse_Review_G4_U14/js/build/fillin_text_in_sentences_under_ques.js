function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj == "undefined" || aObj == null) {
    return;
  }

  // =====================================================
  // BACK
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =====================================================
  // NEXT
  // =====================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =====================================================
  // HEADER
  // =====================================================

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
      '">';
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
  htmlStmt += "<div class='page_sub_title'>";
  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =====================================================
  // OPTIONS HOLDER
  // IMPORTANT:
  // fillin.js searches for .options
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto tell_options">';

  htmlStmt += '<div class="all_cont tell_all_cont">';

  htmlStmt += '<div class="screen_elements tell_screen_elements">';

  htmlStmt += '<div class="tell_sections">';

  // =====================================================
  // SECTIONS LOOP
  // =====================================================

  for (
    var sectionIndex = 0;
    sectionIndex < aObj.sections.length;
    sectionIndex++
  ) {
    var section = aObj.sections[sectionIndex];

    var sectionClass =
      sectionIndex === 0 ? "positive_section" : "negative_section";

    htmlStmt += '<div class="tell_section ' + sectionClass + '">';

    // =================================================
    // SECTION TITLE
    // =================================================

    htmlStmt += '<div class="tell_section_title">';

    htmlStmt += section.title;

    htmlStmt += "</div>";

    // =================================================
    // EXAMPLE
    // =================================================

    htmlStmt += '<div class="tell_example">';

    if (section.exampleLabel != undefined && section.exampleLabel != "") {
      htmlStmt += '<span class="tell_example_label">';

      htmlStmt += section.exampleLabel;

      htmlStmt += "</span>";
    }

    htmlStmt += '<span class="tell_example_text">';

    htmlStmt += section.example;

    htmlStmt += "</span>";

    htmlStmt += "</div>";

    // =================================================
    // QUESTIONS HOLDER
    // =================================================

    htmlStmt += '<div class="tell_questions">';

    // =================================================
    // QUESTIONS LOOP
    // =================================================

    for (
      var questionIndex = 0;
      questionIndex < section.questions.length;
      questionIndex++
    ) {
      var question = section.questions[questionIndex];

      htmlStmt +=
        '<div class="que tell_question" ' +
        'data-section="' +
        sectionIndex +
        '" ' +
        'data-qno="' +
        questionIndex +
        '">';

      // =============================================
      // NUMBER
      // =============================================

      htmlStmt += '<div class="tell_question_number">';

      htmlStmt += question.number;

      htmlStmt += "</div>";

      // =============================================
      // INPUT HOLDER
      // =============================================

      htmlStmt += '<div class="tell_input_holder">';

      htmlStmt +=
        "<input " +
        'class="text_input_area tell_input" ' +
        'type="text" ' +
        'maxlength="' +
        question.maxlength +
        '" ' +
        'data-type="text" />';

      // =============================================
      // ICONS
      // =============================================

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt += '<div class="tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // APPEND
  // =====================================================

  $(".activity_area").append(htmlStmt);

  console.log("Tell About It FillIn Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
