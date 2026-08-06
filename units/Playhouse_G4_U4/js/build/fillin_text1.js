function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  var question =
    aObj.questions && aObj.questions.length ? aObj.questions[0] : null;

  if (!question) {
    return;
  }

  /* =========================================================
     Footer navigation
  ========================================================= */

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

  /* =========================================================
     Heading
  ========================================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  if (aObj.mainTitleIcon) {
    htmlStmt +=
      '<img class="mainTitleIcon" src="' +
      aObj.mainTitleIcon +
      '" style="right:' +
      (aObj.mainTitleIconPos ? aObj.mainTitleIconPos.right : "0px") +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons) && aObj.subTitleIcons.length) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      if (aObj.subTitleIcons[iconIndex]) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[iconIndex] + '">';
      }
    }
  }

  htmlStmt +=
    '<p class="subTitleTextRight">' + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Activity body
  ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont d-flex flex-column justify-content-start justify-content-sm-center">';

  htmlStmt +=
    '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

  htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

  htmlStmt += '<div class="que img_fillin_gr d-flex flex-column" data-qno="1">';

  htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

  htmlStmt += '<div class="q_space d-flex">';

  htmlStmt += '<div class="fillin_set poem_fillin_set">';

  htmlStmt += '<div class="poem_activity">';

  /* =========================
     Left side: poem
  ========================= */

  htmlStmt += '<div class="poem_left">';
  htmlStmt += '<div class="poem_box">';

  var answerIndex = 0;
  var poemLines = question.poemLines || [];

  for (var lineIndex = 0; lineIndex < poemLines.length; lineIndex++) {
    var line = poemLines[lineIndex];

    if (line.input === true) {
      htmlStmt += '<p class="poem_line poem_input_line">';

      htmlStmt +=
        '<span class="poem_text_before">' + (line.textBefore || "") + "</span>";

      htmlStmt +=
        '<input class="text_input_area" ' +
        'type="text" ' +
        'maxlength="' +
        (question.maxlength || 20) +
        '" ' +
        'data-type="' +
        (question.type || "text") +
        '" ' +
        'data-answer-index="' +
        answerIndex +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false">';

      htmlStmt += "</p>";

      answerIndex++;
    } else {
      htmlStmt += '<p class="poem_line">' + (line.text || "") + "</p>";
    }
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================
     Right side: examples + image
  ========================= */

  htmlStmt += '<div class="poem_right">';
  htmlStmt += '<div class="verb_examples">';

  var verbPairs = aObj.verbPairs || [];

  for (var pairIndex = 0; pairIndex < verbPairs.length; pairIndex++) {
    htmlStmt += '<div class="verb_item">';

    htmlStmt +=
      '<span class="base_word">' + verbPairs[pairIndex][0] + "</span>";

    htmlStmt += '<span class="verb_arrow"></span>';

    htmlStmt += '<span class="ing_word">' + verbPairs[pairIndex][1] + "</span>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += '<div class="poem_image">';

  if (aObj.poemImage) {
    htmlStmt +=
      '<img src="' + aObj.poemImage + '" alt="Children playing in a park">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================================================
     Standard result icons
  ========================================================= */

  htmlStmt += '<div class="icon_wrap_holder">';
  htmlStmt += '<div class="icon_wrap">';
  htmlStmt +=
    '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
  htmlStmt +=
    '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  /*
   * Keeps the current validation state clean while the learner edits.
   */
  $(".poem_fillin_group .text_input_area").on("input", function () {
    var questionContainer = $(this).closest(".que");

    questionContainer.find(".tick, .cross").hide();

    $(this).removeClass("correct_answer wrong_answer");
  });

  if (typeof setLoadedStatus === "function") {
    setLoadedStatus(
      typeof getCurrFileOrDirectory === "function"
        ? getCurrFileOrDirectory("file")
        : "",
    );
  }
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
