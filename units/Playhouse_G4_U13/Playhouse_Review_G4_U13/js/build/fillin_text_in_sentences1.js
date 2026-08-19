function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj == "undefined" || aObj == null) {
    return;
  }

  // =========================================================
  // FOOTER NAVIGATION
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href=""><img src="../images/icons/back_btn.png"></a>';

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href=""><img src="../images/icons/next_btn.png"></a>';

  htmlStmt += "</div>";

  // =========================================================
  // HEADER
  // =========================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  // Main title
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

  // Subtitle
  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '">';
      }
    }
  }

  if (aObj.subTitleTextRight != undefined && aObj.subTitleTextRight != "") {
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

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="screen_elements">';

  htmlStmt += '<div class="group_elm">';

  // =========================================================
  // WORD OPTIONS
  // =========================================================

  if (
    aObj.options != undefined &&
    aObj.options != null &&
    aObj.options.length > 0
  ) {
    htmlStmt += '<div class="word_options">';

    for (
      var optionIndex = 0;
      optionIndex < aObj.options.length;
      optionIndex++
    ) {
      htmlStmt +=
        '<div class="option_item audioIcon off contant" ' +
        'data-audio="' +
        (aObj.optionsAudios && aObj.optionsAudios[optionIndex]
          ? aObj.optionsAudios[optionIndex]
          : "") +
        '">';

      htmlStmt += "<span>" + aObj.options[optionIndex] + "</span>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
  }

  // =========================================================
  // QUESTIONS
  // =========================================================

  htmlStmt += '<div class="ques">';

  for (var qIndex = 0; qIndex < aObj.questions.length; qIndex++) {
    var tmpObj = aObj.questions[qIndex];

    htmlStmt +=
      '<div class="img_fillin_gr" ' + 'data-qno="' + (qIndex + 1) + '">';

    // ================= IMAGE =================

    htmlStmt += '<div class="image_space">';

    htmlStmt += '<img src="' + tmpObj.image + '">';

    htmlStmt += "</div>";

    // ================= ANSWER AREA =================

    htmlStmt += '<div class="answer_area">';

    htmlStmt +=
      "<textarea " +
      'class="text_input_area" ' +
      'maxlength="' +
      tmpObj.maxlength +
      '" ' +
      'data-type="' +
      tmpObj.type +
      '" ' +
      'data-qno="' +
      (qIndex + 1) +
      '">' +
      "</textarea>";

    // validation icon
    htmlStmt += '<div class="icon_wrap_holder">';

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

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
