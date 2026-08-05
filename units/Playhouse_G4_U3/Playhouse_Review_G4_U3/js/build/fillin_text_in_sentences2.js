function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null
  ) {
    return;
  }

  var questions = Array.isArray(aObj.questions)
    ? aObj.questions
    : [];

  /* =========================================================
     Footer navigation
  ========================================================= */

  htmlStmt +=
    '<div class="sub_footer_icon ' +
      'sub_footer_icon_left ' +
      'subFooterNav backNav mx-1">' +
      '<a href="">' +
        '<img src="../images/icons/back_btn.png">' +
      "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon ' +
      'sub_footer_icon_right ' +
      'subFooterNav nextNav mx-1">' +
      '<a href="">' +
        '<img src="../images/icons/next_btn.png">' +
      "</a>" +
    "</div>";

  /* =========================================================
     Heading
  ========================================================= */

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

  /* =========================================================
     Main content
  ========================================================= */

  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto">' +

      '<div class="all_cont ' +
        'justify-content-start ' +
        'justify-content-sm-center">' +

        '<div class="screen_elements ' +
          'd-flex ' +
          'justify-content-center ' +
          'align-items-center h-100">' +

          '<div class="group_elm writing_activity_group">';

  /* =========================================================
     Options — only when provided
  ========================================================= */

  if (
    Array.isArray(aObj.options) &&
    aObj.options.length > 0
  ) {
    htmlStmt +=
      '<div class="word_opt_sticky ' +
        'd-flex justify-content-center">' +

        '<div class="word_options ' +
          'd-flex flex-wrap justify-content-around">';

    for (
      var optionIndex = 0;
      optionIndex < aObj.options.length;
      optionIndex++
    ) {
      var optionAudio =
        Array.isArray(aObj.optionsAudios) &&
        aObj.optionsAudios[optionIndex]
          ? aObj.optionsAudios[optionIndex]
          : "";

      htmlStmt +=
        '<div class="audioIcon textEnd off ' +
          'd-flex contant" ' +
          'data-audio="' + optionAudio + '">' +

          '<div class="clue_word">' +
            aObj.options[optionIndex] +
          "</div>" +

        "</div>";
    }

    htmlStmt +=
        "</div>" +
      "</div>";
  }

  /* =========================================================
     Optional image
  ========================================================= */

  if (
    aObj.image !== undefined &&
    aObj.image !== null &&
    aObj.image !== "" &&
    aObj.image !== "no" &&
    aObj.imageposition === "front"
  ) {
    htmlStmt +=
      '<div class="writing_activity_image">' +
        '<img src="' + aObj.image + '">' +
      "</div>";
  }

  /* =========================================================
     Writing lines
  ========================================================= */

  htmlStmt +=
    '<div class="ques writing_questions">';

  for (
    var questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var questionObj =
      questions[questionIndex];

    var questionNumber =
      questionIndex + 1;

    var maxLength =
      parseInt(questionObj.maxlength, 10);

    if (
      isNaN(maxLength) ||
      maxLength <= 0
    ) {
      maxLength = 200;
    }

    var inputType =
      questionObj.type === "number"
        ? "number"
        : "text";

    /*
     * حقل الكتابة الطويل.
     */
    var inputHtml =
      '<input ' +
        'class="text_input_area writing_line_input" ' +
        'type="' + inputType + '" ' +
        'maxlength="' + maxLength + '" ' +
        'data-type="' +
          (questionObj.type || "text") +
        '" ' +
        'autocomplete="off">';

    /*
     * استبدال [_] بالحقل.
     */
    var questionText =
      questionObj.text || "[_]";

    var questionHtml =
      questionText.replace(
        /\[_]/g,
        inputHtml
      );

    htmlStmt +=
      '<div class="que img_fillin_gr writing_line_question" ' +
        'data-qno="' + questionNumber + '">' +

        '<div class="fillin_gr">' +

          '<div class="q_space writing_q_space">' +

            '<div class="fillin_set writing_fillin_set">' +
              questionHtml +
            "</div>" +

            /*
             * الأيقونات موجودة حتى يبقى الـHTML
             * متوافقًا مع ملف Activity.
             * لن تظهر لأن السؤال skipValidation.
             */
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

  htmlStmt +=
    "</div>";

  /* =========================================================
     Optional back image
  ========================================================= */

  if (
    aObj.image !== undefined &&
    aObj.image !== null &&
    aObj.image !== "" &&
    aObj.image !== "no" &&
    aObj.imageposition === "back"
  ) {
    htmlStmt +=
      '<div class="writing_activity_image writing_image_back">' +
        '<img src="' + aObj.image + '">' +
      "</div>";
  }

  /* =========================================================
     Close wrappers
  ========================================================= */

  htmlStmt +=
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>";

  console.log(
    "htmlStmt >> Writing FillIn Built"
  );

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}

function nextChar(c) {
  return String.fromCharCode(
    c.charCodeAt(0) + 1
  );
}