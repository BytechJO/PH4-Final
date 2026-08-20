function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    // =========================================================
    // Navigation
    // =========================================================

    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/back_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';
    htmlStmt += '<a href="">';
    htmlStmt += '<img src="../images/icons/next_btn.png" />';
    htmlStmt += "</a>";
    htmlStmt += "</div>";

    // =========================================================
    // Header
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<div class="mainTitleText">' + aObj.mainTitle + "</div>";
    }

    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src="' +
        aObj.mainTitleIcon +
        '" style="right:' +
        aObj.mainTitleIconPos.right +
        ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // instruction
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
          htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
        }
      }
    }

    htmlStmt +=
      '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // Content
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements d-flex flex-column">';

    htmlStmt += '<div class="group_elm riddles_activity">';

    // =================================================
    // Questions
    // =================================================

    htmlStmt += '<div class="ques riddles_ques">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="riddle_card img_fillin_gr" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =============================================
      // Question text
      // =============================================

      if (tmpObj.textFront != undefined && tmpObj.textFront != "") {
        htmlStmt +=
          '<div class="riddle_question audioIcon off contant" ' +
          'data-audio="' +
          (tmpObj.textFrontAudio || "") +
          '">';

        htmlStmt += tmpObj.textFront;

        htmlStmt += "</div>";
      }

      // =============================================
      // Image
      // =============================================

      if (
        tmpObj.image != undefined &&
        tmpObj.image != "" &&
        tmpObj.image != "no"
      ) {
        htmlStmt += '<div class="riddle_image">';

        htmlStmt += '<img src="' + tmpObj.image + '" alt="">';

        htmlStmt += "</div>";
      }

      // =============================================
      // Open Answer Input
      // =============================================

      htmlStmt += '<div class="riddle_answer">';

      htmlStmt +=
        "<input " +
        'class="text_input_area riddle_input" ' +
        'type="text" ' +
        'maxlength="' +
        (tmpObj.maxlength || 100) +
        '" ' +
        'data-type="' +
        (tmpObj.type || "text") +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        ">";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> riddles fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
