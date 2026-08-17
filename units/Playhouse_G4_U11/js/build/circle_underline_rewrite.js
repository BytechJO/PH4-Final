//  ****************************************** //
//  Circle / Underline / Rewrite
//  Build File
//  ****************************************** //

function buildCircleUnderlineRewriteBody(aObj) {
  var htmlStmt = "";

  if (aObj === undefined || aObj === null) {
    return;
  }

  // =========================================================
  // BACK
  // =========================================================

  htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  // =========================================================
  // NEXT
  // =========================================================

  htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";
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
      ' style="right:' +
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
  htmlStmt += "<div class='page_sub_title'>";
  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  htmlStmt +=
    "<p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  // =========================================================
  // OPTIONS
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="cur_screen_elements">';

  // =========================================================
  // TOOLBAR
  // =========================================================

  htmlStmt += '<div class="cur_toolbar">';

  // Circle
  htmlStmt +=
    "<button " +
    'type="button" ' +
    'class="cur_tool_btn circle_tool active" ' +
    'data-tool="circle">';

  htmlStmt += '<span class="circle_tool_icon">Aa</span>';

  htmlStmt += "<span>Circle</span>";

  htmlStmt += "</button>";

  // Underline
  htmlStmt +=
    "<button " +
    'type="button" ' +
    'class="cur_tool_btn underline_tool" ' +
    'data-tool="underline">';

  htmlStmt += '<span class="underline_tool_icon">Aa</span>';

  htmlStmt += "<span>Underline</span>";

  htmlStmt += "</button>";

  htmlStmt += "</div>";

  // =========================================================
  // QUESTIONS
  // =========================================================

  htmlStmt += '<div class="cur_questions">';

  for (var q = 0; q < aObj.questions.length; q++) {
    var tmpObj = aObj.questions[q];

    var isExample = tmpObj.example === true;

    var questionClass = "cur_question que";

    if (isExample) {
      questionClass += " example_question";
    }

    // =====================================================
    // QUESTION
    // =====================================================

    htmlStmt +=
      "<div " +
      'class="' +
      questionClass +
      '" ' +
      'data-qno="' +
      (q + 1) +
      '">';

    // =====================================================
    // SENTENCE ROW
    // =====================================================

    htmlStmt += '<div class="cur_sentence_row">';

    htmlStmt += '<div class="cur_q_number">';

    htmlStmt += q + 1;

    htmlStmt += "</div>";

    htmlStmt += '<div class="cur_sentence">';

    // =====================================================
    // WORDS
    // =====================================================

    for (var w = 0; w < tmpObj.words.length; w++) {
      var word = tmpObj.words[w];

      var defaultMark = "";

      var markClass = "";

      // =================================================
      // PRE-ANSWER EXAMPLE
      // =================================================

      if (isExample) {
        if (tmpObj.circleAnswer.indexOf(word.id) !== -1) {
          defaultMark = "circle";

          markClass = " marked_circle";
        }

        if (tmpObj.underlineAnswer.indexOf(word.id) !== -1) {
          defaultMark = "underline";

          markClass = " marked_underline";
        }
      }

      htmlStmt +=
        "<span " +
        'class="cur_segment word_token' +
        markClass +
        '" ' +
        'data-id="' +
        word.id +
        '" ' +
        'data-example="' +
        (isExample ? "true" : "false") +
        '" ' +
        'data-mark="' +
        defaultMark +
        '">' +
        word.text +
        "</span>";

      if (w < tmpObj.words.length - 1) {
        htmlStmt += " ";
      }
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // REWRITE
    // =====================================================

    htmlStmt += '<div class="cur_rewrite_row">';

    // =====================================================
    // EXAMPLE INPUT
    // =====================================================

    if (isExample) {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="cur_rewrite_input example_input" ' +
        'value="' +
        tmpObj.rewriteAnswer +
        '" ' +
        "readonly />";
    }

    // =====================================================
    // NORMAL INPUT
    // =====================================================
    else {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="cur_rewrite_input" ' +
        'maxlength="' +
        tmpObj.maxlength +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        'placeholder="" />';
    }

    // =====================================================
    // ICON
    // =====================================================

    if (!isExample) {
      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt += '<div class="tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // END QUESTION
    // =====================================================

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // APPEND
  // =========================================================

  $(".activity_area").append(htmlStmt);

  console.log("CircleUnderlineRewrite Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
