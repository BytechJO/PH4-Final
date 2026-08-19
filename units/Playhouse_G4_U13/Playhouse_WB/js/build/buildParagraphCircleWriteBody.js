function buildParagraphCircleWriteBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

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

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont pcw_all_cont">';

  htmlStmt += '<div class="pcw_activity">';

  // =====================================================
  // PARAGRAPH
  // =====================================================

  htmlStmt += '<div class="pcw_paragraph_wrapper">';

  htmlStmt += '<div class="pcw_paragraph">';

  for (var i = 0; i < aObj.paragraph.length; i++) {
    var part = aObj.paragraph[i];

    if (part.hiddenId != undefined && part.hiddenId != "") {
      htmlStmt +=
        '<span class="pcw_hidden_part" ' +
        'data-hidden-id="' +
        part.hiddenId +
        '">' +
        part.text +
        "</span>";
    } else {
      htmlStmt += '<span class="pcw_normal_part">' + part.text + "</span>";
    }
  }

  htmlStmt += "</div>";

  // =====================================================
  // PARAGRAPH FEEDBACK
  // =====================================================

  htmlStmt += '<div class="pcw_paragraph_feedback">';

  htmlStmt +=
    '<div class="pcw_paragraph_tick">' +
    '<img src="../images/icons/check_btn.png">' +
    "</div>";

  htmlStmt +=
    '<div class="pcw_paragraph_cross">' +
    '<img src="../images/icons/cross_btn.png">' +
    "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // ANSWERS
  // =====================================================

  htmlStmt += '<div class="pcw_answers_area">';

  for (var a = 0; a < aObj.inputCount; a++) {
    var defaultValue = "";

    var isDefault = false;

    for (var d = 0; d < aObj.defaultAnswers.length; d++) {
      if (aObj.defaultAnswers[d].index === a + 1) {
        defaultValue = aObj.defaultAnswers[d].value;

        isDefault = true;

        break;
      }
    }

    htmlStmt += '<div class="pcw_answer_item">';

    if (isDefault) {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="pcw_answer_input pcw_default_answer" ' +
        "readonly " +
        'value="' +
        defaultValue +
        '">';
    } else {
      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="pcw_answer_input" ' +
        'maxlength="20" ' +
        'autocomplete="off" ' +
        'spellcheck="false">';
    }

    htmlStmt += '<div class="pcw_answer_feedback">';

    htmlStmt +=
      '<div class="pcw_answer_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="pcw_answer_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
