function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  var questions = Array.isArray(aObj.questions) ? aObj.questions : [];

  /*
   * حماية النصوص التي توضع داخل value.
   */
  function escapeHtmlAttribute(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /*
   * إنشاء حقل السؤال العادي مع الرقم المساعد.
   */
  function createInputHtml(
    questionObj,
    questionIndex,
    blankIndex,
    isDefaultAnswer,
  ) {
    var hints = Array.isArray(questionObj.hint) ? questionObj.hint : [];

    var hintValue =
      hints[blankIndex] !== undefined && hints[blankIndex] !== null
        ? hints[blankIndex]
        : "";

    var blankCount = (questionObj.text.match(/\[_]/g) || []).length;

    var inputMaxLength =
      blankCount > 1 ? 1 : parseInt(questionObj.maxlength, 10) || 200;

    var answerValue = "";

    if (isDefaultAnswer && Array.isArray(questionObj.answer)) {
      if (blankCount === 1) {
        answerValue = questionObj.answer.join("");
      } else {
        answerValue = questionObj.answer[blankIndex] || "";
      }
    }

    var inputClass = "text_input_area";

    if (blankCount === 1) {
      inputClass += " full_word_input";
    } else {
      inputClass += " letter_input";
    }

    var inputHtml =
      '<span class="input_hint_wrap">' +
      "<input " +
      'class="' +
      inputClass +
      '" ' +
      'type="text" ' +
      'maxlength="' +
      inputMaxLength +
      '" ' +
      'data-type="' +
      (questionObj.type || "text") +
      '" ' +
      'data-question-index="' +
      questionIndex +
      '" ' +
      'data-blank-index="' +
      blankIndex +
      '" ';

    if (isDefaultAnswer) {
      inputHtml +=
        'readonly="readonly" ' +
        'value="' +
        escapeHtmlAttribute(answerValue) +
        '" ';
    }

    inputHtml +=
      ">" + '<span class="hint_number">' + hintValue + "</span>" + "</span>";

    return inputHtml;
  }

  /*
   * استبدال [_] بحقول الإدخال.
   */
  function createQuestionText(questionObj, questionIndex, isDefaultAnswer) {
    var blankIndex = 0;

    return questionObj.text.replace(/\[_]/g, function () {
      var inputHtml = createInputHtml(
        questionObj,
        questionIndex,
        blankIndex,
        isDefaultAnswer,
      );

      blankIndex++;

      return inputHtml;
    });
  }

  /*
   * أزرار التنقل.
   */
  htmlStmt +=
    '<div class="sub_footer_icon ' +
    "sub_footer_icon_left " +
    'subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png">' +
    "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    "sub_footer_icon_right " +
    'subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png">' +
    "</a>" +
    "</div>";

  /*
   * رأس النشاط.
   */
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

  /*
   * بداية المحتوى.
   */
  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto">' +
    '<div class="all_cont">' +
    '<div class="screen_elements">' +
    '<div class="game_content">';

  /*
   * الخيارات إذا كانت موجودة.
   */
  if (Array.isArray(aObj.options) && aObj.options.length > 0) {
    htmlStmt += '<div class="word_opt_sticky">' + '<div class="word_options">';

    for (
      var optionIndex = 0;
      optionIndex < aObj.options.length;
      optionIndex++
    ) {
      htmlStmt +=
        '<div class="audioIcon textEnd off contant" ' +
        'data-audio="' +
        (aObj.optionsAudios && aObj.optionsAudios[optionIndex]
          ? aObj.optionsAudios[optionIndex]
          : "") +
        '">' +
        '<div class="clue_word">' +
        aObj.options[optionIndex] +
        "</div>" +
        "</div>";
    }

    htmlStmt += "</div>" + "</div>";
  }

  /*
   * الأسئلة الرئيسية.
   */
  htmlStmt += '<div class="questions_grid">';

  for (
    var questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var questionObj = questions[questionIndex];

    /*
     * السؤال النهائي يتم بناؤه لاحقًا.
     */
    if (questionObj.isFinalPuzzle === true) {
      continue;
    }

    var questionNumber = questionIndex + 1;

    var isDefaultAnswer = parseInt(aObj.defaultAnswer, 10) === questionNumber;

    var questionTextHtml = createQuestionText(
      questionObj,
      questionIndex,
      isDefaultAnswer,
    );

    var questionClass = "que img_fillin_gr question_item";

    if (isDefaultAnswer) {
      questionClass += " default_answer_question";
    }

    htmlStmt +=
      '<div class="' +
      questionClass +
      '" ' +
      'data-qno="' +
      questionNumber +
      '">' +
      '<div class="question_image_wrapper">';

    if (questionObj.image && questionObj.image !== "no") {
      htmlStmt +=
        '<img class="question_image" ' + 'src="' + questionObj.image + '">';
    }

    htmlStmt +=
      "</div>" +
      '<div class="fillin_gr">' +
      '<div class="q_space">' +
      '<span class="question_number">' +
      questionNumber +
      "</span>" +
      '<div class="fillin_set">' +
      questionTextHtml +
      "</div>" +
      '<div class="icon_wrap_holder">' +
      '<div class="icon_wrap">' +
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>" +
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  htmlStmt += "</div>";

  /*
   * صورة البنت الكبيرة.
   */
  if (aObj.characterImage) {
    htmlStmt +=
      '<div class="character_image_container">' +
      '<img src="' +
      aObj.characterImage +
      '" class="character_image">' +
      "</div>";
  }

  /*
   * البحث عن السؤال الأخير.
   */
  var finalQuestion = null;
  var finalQuestionIndex = -1;

  for (
    var finalSearchIndex = 0;
    finalSearchIndex < questions.length;
    finalSearchIndex++
  ) {
    if (questions[finalSearchIndex].isFinalPuzzle === true) {
      finalQuestion = questions[finalSearchIndex];

      finalQuestionIndex = finalSearchIndex;

      break;
    }
  }

  /*
   * بناء السؤال الأخير.
   */
  if (finalQuestion) {
    var finalGroups = Array.isArray(finalQuestion.groups)
      ? finalQuestion.groups
      : [13];

    var fixedLetters = finalQuestion.fixedLetters || {};

    var globalCellIndex = 0;

    htmlStmt +=
      '<div class="que final_puzzle_card" ' +
      'data-qno="' +
      (finalQuestionIndex + 1) +
      '">' +
      '<div class="final_puzzle_title">' +
      (finalQuestion.title || "") +
      "</div>";

    if (finalQuestion.image) {
      htmlStmt +=
        '<div class="final_puzzle_image_wrap">' +
        '<img src="' +
        finalQuestion.image +
        '" class="final_puzzle_image">' +
        "</div>";
    }

    htmlStmt +=
      '<div class="final_puzzle_content">' + '<div class="final_puzzle_cells">';

    /*
     * مجموعات الكلمات:
     * 2 / 3 / 4 / 4
     */
    for (var groupIndex = 0; groupIndex < finalGroups.length; groupIndex++) {
      var groupLength = parseInt(finalGroups[groupIndex], 10);

      htmlStmt +=
        '<div class="final_word_group" ' +
        'data-group-index="' +
        groupIndex +
        '">';

      for (
        var groupCellIndex = 0;
        groupCellIndex < groupLength;
        groupCellIndex++
      ) {
        var fixedLetter =
          fixedLetters[globalCellIndex] !== undefined
            ? fixedLetters[globalCellIndex]
            : "";

        htmlStmt +=
          '<div class="final_cell">' +
          "<input " +
          'type="text" ' +
          'class="text_input_area final_letter_input" ' +
          'maxlength="1" ' +
          'data-type="text" ' +
          'data-final-index="' +
          globalCellIndex +
          '" ';

        /*
         * لا نضع readonly حتى يستطيع الـValidator
         * حساب جميع الحقول بشكل صحيح.
         *
         * نحمي الحرف لاحقًا عن طريق data-fixed.
         */
        if (fixedLetter !== "") {
          htmlStmt +=
            'value="' +
            escapeHtmlAttribute(fixedLetter) +
            '" ' +
            'data-fixed="' +
            escapeHtmlAttribute(fixedLetter) +
            '" ';
        }

        htmlStmt +=
          ">" +
          '<span class="final_cell_number">' +
          (globalCellIndex + 1) +
          "</span>" +
          "</div>";

        globalCellIndex++;
      }

      htmlStmt += "</div>";
    }

    htmlStmt +=
      "</div>" +
      '<div class="final_puzzle_icon_holder">' +
      '<div class="icon_wrap">' +
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>" +
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
  }

  htmlStmt += "</div>" + "</div>" + "</div>" + "</div>";

  console.log("htmlStmt >> FillIn Built");

  $(".activity_area").append(htmlStmt);

  /*
   * حماية حرف M الظاهر مسبقًا.
   */
  var fixedFinalInputs = document.querySelectorAll(
    ".final_letter_input[data-fixed]",
  );

  for (var fixedIndex = 0; fixedIndex < fixedFinalInputs.length; fixedIndex++) {
    fixedFinalInputs[fixedIndex].addEventListener("keydown", function (event) {
      /*
       * السماح بالتنقل فقط.
       */
      var allowedKeys = [
        "Tab",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ];

      if (allowedKeys.indexOf(event.key) === -1) {
        event.preventDefault();
      }
    });

    fixedFinalInputs[fixedIndex].addEventListener("input", function () {
      this.value = this.dataset.fixed || "";
    });

    fixedFinalInputs[fixedIndex].addEventListener("paste", function (event) {
      event.preventDefault();

      this.value = this.dataset.fixed || "";
    });
  }

  /*
   * إعادة الحرف الثابت بعد الضغط على Reset.
   * نستخدم setTimeout حتى تعمل دالة reset الأصلية أولًا.
   */
  var resetButton = document.querySelector(".resetBtn");

  if (resetButton) {
    resetButton.addEventListener("click", function () {
      setTimeout(function () {
        var fixedInputs = document.querySelectorAll(
          ".final_letter_input[data-fixed]",
        );

        for (
          var inputIndex = 0;
          inputIndex < fixedInputs.length;
          inputIndex++
        ) {
          fixedInputs[inputIndex].value =
            fixedInputs[inputIndex].dataset.fixed || "";
        }
      }, 0);
    });
  }

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
