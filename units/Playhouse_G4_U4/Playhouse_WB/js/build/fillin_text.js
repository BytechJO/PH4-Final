function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  /* =====================================================
       Previous and next navigation
    ===================================================== */

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

  /* =====================================================
       Heading
    ===================================================== */

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

  /* =====================================================
       Subtitle
    ===================================================== */

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

  /* =====================================================
       Options container
    ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  /* =====================================================
       Word options
    ===================================================== */

  if (Array.isArray(aObj.options) && aObj.options.length > 0) {
    htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

    htmlStmt +=
      '<div class="word_options d-flex flex-wrap justify-content-around">';

    for (
      var optionIndex = 0;
      optionIndex < aObj.options.length;
      optionIndex++
    ) {
      var optionAudio = "";

      if (
        Array.isArray(aObj.optionsAudios) &&
        aObj.optionsAudios[optionIndex] !== undefined
      ) {
        optionAudio = aObj.optionsAudios[optionIndex];
      }

      htmlStmt +=
        '<div class="audioIcon textEnd off d-flex contant" ' +
        'data-audio="' +
        escapeFillInAttribute(optionAudio) +
        '">';

      htmlStmt +=
        '<div class="clue_word">' + aObj.options[optionIndex] + "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  /* =====================================================
       Main screen
    ===================================================== */

  htmlStmt +=
    '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

  htmlStmt += '<div class="group_elm">';

  /* =====================================================
       Front image
    ===================================================== */

  if (aObj.image && aObj.image !== "no" && aObj.imageposition === "front") {
    htmlStmt += '<div class="img_space">';

    htmlStmt += '<img src="' + escapeFillInAttribute(aObj.image) + '" alt="">';

    htmlStmt += "</div>";
  }

  /* =====================================================
       Linked activity builder
    ===================================================== */

  if (
    aObj.validationMode === "linked_polite_requests" &&
    Array.isArray(aObj.linkedQuestions)
  ) {
    htmlStmt += buildLinkedPoliteRequests(aObj);
  } else if (Array.isArray(aObj.questions)) {

  /* =====================================================
       Original questions builder
    ===================================================== */
    htmlStmt += buildNormalFillInQuestions(aObj);
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
       Back image
    ===================================================== */

  if (aObj.image && aObj.image !== "no" && aObj.imageposition === "back") {
    htmlStmt += '<div class="image-container">';

    htmlStmt += '<img src="' + escapeFillInAttribute(aObj.image) + '" alt="">';

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Build linked question and response pairs
========================================================= */

function buildLinkedPoliteRequests(aObj) {
  var htmlStmt = "";

  var pairs = aObj.linkedQuestions;

  for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
    var pair = pairs[pairIndex];

    var questionObj = pair.question || {};

    var responseObj = pair.response || {};

    var numberStart = parseInt(aObj.numberstartfrom, 10);

    if (isNaN(numberStart)) {
      numberStart = 1;
    }

    var questionNumber = numberStart + pairIndex * 2;

    var responseNumber = questionNumber + 1;

    htmlStmt +=
      '<div class="linked_pair" ' +
      'data-pair-index="' +
      pairIndex +
      '" ' +
      'data-pair-type="' +
      escapeFillInAttribute(pair.pairType || "") +
      '">';

    /* Question row */

    htmlStmt += buildLinkedPairRow(
      questionObj,
      "question",
      questionNumber,
      pairIndex,
    );

    /*
          علامة واحدة فقط بين السؤال والجواب.
        */

    htmlStmt += '<div class="linked_pair_result">';

    htmlStmt += '<div class="linked_pair_tick">';

    htmlStmt += '<img src="../images/icons/check_btn.png" alt="correct">';

    htmlStmt += "</div>";

    htmlStmt += '<div class="linked_pair_cross">';

    htmlStmt += '<img src="../images/icons/cross_btn.png" alt="wrong">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* Response row */

    htmlStmt += buildLinkedPairRow(
      responseObj,
      "response",
      responseNumber,
      pairIndex,
    );

    htmlStmt += "</div>";
  }

  return htmlStmt;
}

/* =========================================================
   Build one row inside a linked pair
========================================================= */

function buildLinkedPairRow(rowObj, rowRole, rowNumber, pairIndex) {
  var htmlStmt = "";

  var text =
    rowObj.text !== undefined && rowObj.text !== null
      ? String(rowObj.text)
      : "";

  var maxlength = rowObj.maxlength !== undefined ? rowObj.maxlength : 200;

  var inputType = rowObj.type || "text";

  var textAudios = Array.isArray(rowObj.textaudios) ? rowObj.textaudios : [];

  var inputHtml =
    "<input " +
    'class="text_input_area linked_pair_input" ' +
    'type="text" ' +
    'maxlength="' +
    maxlength +
    '" ' +
    'data-type="' +
    escapeFillInAttribute(inputType) +
    '" ' +
    'data-pair-index="' +
    pairIndex +
    '" ' +
    'data-pair-role="' +
    rowRole +
    '">';

  var questionHtml = buildFillInTextParts(text, textAudios, inputHtml);

  htmlStmt +=
    '<div class="que linked_pair_row linked_pair_' +
    rowRole +
    '" ' +
    'data-pair-index="' +
    pairIndex +
    '" ' +
    'data-pair-role="' +
    rowRole +
    '">';

  htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

  htmlStmt += '<div class="q_space d-flex">';

  htmlStmt += '<div class="q_num_space">' + rowNumber + ".</div>";

  htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

  htmlStmt += questionHtml;

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  return htmlStmt;
}

/* =========================================================
   Build normal legacy questions
========================================================= */

function buildNormalFillInQuestions(aObj) {
  var htmlStmt = "";

  var questions = aObj.questions;

  var alphabetValue = "";

  for (
    var questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var tmpObj = questions[questionIndex];

    if (!tmpObj) {
      continue;
    }

    var questionText =
      tmpObj.text !== undefined && tmpObj.text !== null
        ? String(tmpObj.text)
        : "";

    var maxLength = tmpObj.maxlength !== undefined ? tmpObj.maxlength : 200;

    var inputType = tmpObj.type || "text";

    var textAudios = Array.isArray(tmpObj.textaudios) ? tmpObj.textaudios : [];

    var inputHtml =
      "<input " +
      'class="text_input_area" ' +
      'type="text" ' +
      'maxlength="' +
      maxLength +
      '" ' +
      'data-type="' +
      escapeFillInAttribute(inputType) +
      '">';

    var questionHtml = buildFillInTextParts(
      questionText,
      textAudios,
      inputHtml,
    );

    htmlStmt +=
      '<div class="que img_fillin_gr d-flex flex-column" ' +
      'data-qno="' +
      (questionIndex + 1) +
      '">';

    if (tmpObj.image && tmpObj.image !== "no") {
      htmlStmt += '<div class="image_space">';

      htmlStmt +=
        '<img src="' + escapeFillInAttribute(tmpObj.image) + '" alt="">';

      htmlStmt += "</div>";
    }

    htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

    htmlStmt += '<div class="q_space d-flex">';

    if (aObj.numbering !== undefined && aObj.numbering !== "none") {
      var displayNumber = "";

      if (aObj.numbering === "alphabet") {
        if (questionIndex === 0) {
          alphabetValue = String(aObj.numberstartfrom || "a");
        } else {
          alphabetValue = nextChar(alphabetValue);
        }

        displayNumber = alphabetValue;
      } else {
        var numberStart = parseInt(aObj.numberstartfrom, 10);

        if (isNaN(numberStart)) {
          numberStart = 1;
        }

        displayNumber = questionIndex + numberStart;
      }

      htmlStmt += '<div class="q_num_space">' + displayNumber + ".</div>";
    }

    htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

    htmlStmt += questionHtml;

    htmlStmt += "</div>";

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

    htmlStmt += "</div>";
  }

  return htmlStmt;
}

/* =========================================================
   Convert text containing [_] into text and inputs
========================================================= */

function buildFillInTextParts(text, textAudios, inputHtml) {
  var parts = String(text).split("[_]");

  var htmlStmt = "";

  for (var partIndex = 0; partIndex < parts.length; partIndex++) {
    var part = parts[partIndex];

    if (part !== "") {
      var audioValue = textAudios[partIndex] || "";

      htmlStmt +=
        '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
        'data-audio="' +
        escapeFillInAttribute(audioValue) +
        '">';

      htmlStmt += part;

      htmlStmt += "</div>";
    }

    if (partIndex < parts.length - 1) {
      htmlStmt += inputHtml;
    }
  }

  return htmlStmt;
}

/* =========================================================
   Escape attribute values
========================================================= */

function escapeFillInAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function nextChar(c) {
  if (!c) {
    return "a";
  }

  return String.fromCharCode(String(c).charCodeAt(0) + 1);
}
