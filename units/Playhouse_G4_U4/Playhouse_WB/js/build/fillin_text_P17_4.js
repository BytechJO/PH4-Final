function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  var questions = Array.isArray(aObj.questions) ? aObj.questions : [];

  /* =========================================
     Previous button
  ========================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =========================================
     Next button
  ========================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =========================================
     Heading
  ========================================= */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    escapeFillInAttribute(aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt +=
      '<img class="mainTitle" src="' +
      escapeFillInAttribute(aObj.mainTitle) +
      '">';
  }

  if (
    aObj.mainTitleIcon !== undefined &&
    aObj.mainTitleIcon !== null &&
    aObj.mainTitleIcon !== ""
  ) {
    var iconRight = "0px";

    if (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right !== undefined) {
      iconRight = aObj.mainTitleIconPos.right;
    }

    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      escapeFillInAttribute(aObj.mainTitleIcon) +
      '" ' +
      'style="right:' +
      escapeFillInAttribute(iconRight) +
      ';">';
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================
     Subtitle
  ========================================= */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    escapeFillInAttribute(aObj.subTitleAudio || "") +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons)) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      if (aObj.subTitleIcons[iconIndex]) {
        htmlStmt +=
          '<img src="' +
          escapeFillInAttribute(aObj.subTitleIcons[iconIndex]) +
          '">';
      }
    }
  }

  htmlStmt += "<p>" + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================
     Content
  ========================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt += '<div class="screen_elements">';

  htmlStmt += '<div class="group_elm silent_e_activity">';

  /* =========================================
     Main question image
  ========================================= */

  if (
    aObj.image !== undefined &&
    aObj.image !== null &&
    aObj.image !== "" &&
    aObj.image !== "no"
  ) {
    htmlStmt += '<div class="silent_e_image_space">';

    htmlStmt +=
      '<img src="' +
      escapeFillInAttribute(aObj.image) +
      '" alt="Silent e letter train">';

    htmlStmt += "</div>";
  }

  /* =========================================
     Inputs grid
  ========================================= */

  htmlStmt += '<div class="silent_e_inputs_grid">';

  for (
    var questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var questionObj = questions[questionIndex] || {};

    var maxLength =
      questionObj.maxlength !== undefined ? questionObj.maxlength : 20;

    var inputType = questionObj.type || "text";

    var displayNumber = questionIndex + parseInt(aObj.numberstartfrom || 1, 10);

    htmlStmt +=
      '<div class="que silent_e_question" ' +
      'data-qno="' +
      (questionIndex + 1) +
      '">';

    htmlStmt += '<div class="silent_e_input_row">';

    if (aObj.numbering !== undefined && aObj.numbering !== "none") {
      htmlStmt += '<div class="q_num_space">' + displayNumber + ".</div>";
    }

    htmlStmt +=
      "<input " +
      'class="text_input_area silent_e_input" ' +
      'type="text" ' +
      'autocomplete="off" ' +
      'spellcheck="false" ' +
      'maxlength="' +
      maxLength +
      '" ' +
      'data-type="' +
      escapeFillInAttribute(inputType) +
      '">';

    htmlStmt += '<div class="icon_wrap_holder">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt += '<div class="tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png" alt="correct">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png" alt="wrong">';

    htmlStmt += "</div>";

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

  console.log("htmlStmt >> silent e fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================
   Escape HTML attribute
========================================= */

function escapeFillInAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
