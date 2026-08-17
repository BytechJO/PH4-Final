function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;

    // =========================================================
    // NAVIGATION
    // =========================================================

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

    // =========================================================
    // MAIN TITLE
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
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

    // =========================================================
    // QUESTION 1 - READ IT AND SAY IT
    // =========================================================

    if (aObj.readItSection !== undefined && aObj.readItSection !== null) {
      var readData = aObj.readItSection;

      htmlStmt += '<div class="read_it_section">';

      // =====================================================
      // TITLE
      // =====================================================

      htmlStmt +=
        '<div class="read_it_heading audioIcon off contant" ' +
        'data-audio="' +
        readData.audio +
        '">';

      htmlStmt +=
        '<span class="read_it_title_left">' + readData.titleLeft + "</span>";

      htmlStmt +=
        '<span class="read_it_title_right">' + readData.titleRight + "</span>";

      htmlStmt += "</div>";

      // =====================================================
      // TABLE
      // =====================================================

      htmlStmt += '<div class="ie_ei_table">';

      htmlStmt += '<div class="ie_ei_columns">';

      for (var col = 0; col < readData.columns.length; col++) {
        var column = readData.columns[col];

        htmlStmt += '<div class="ie_ei_column">';

        // ===================================================
        // HEADER
        // ===================================================

        htmlStmt += '<div class="ie_ei_column_header">';

        htmlStmt += '<span class="ie_ei_number">' + column.number + "</span>";

        htmlStmt +=
          '<span class="ie_ei_column_title">' + column.title + "</span>";

        htmlStmt += "</div>";

        // ===================================================
        // WORDS
        // ===================================================

        htmlStmt += '<div class="ie_ei_words">';

        for (var wordIndex = 0; wordIndex < column.words.length; wordIndex++) {
          htmlStmt +=
            '<span class="ie_ei_word">' + column.words[wordIndex] + "</span>";
        }

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // =====================================================
      // EXCEPTIONS
      // =====================================================

      htmlStmt += '<div class="ie_ei_exceptions">';

      htmlStmt += '<div class="exceptions_title">';

      htmlStmt += '<span class="ie_ei_number">4</span>';

      htmlStmt += "<span>Exceptions:</span>";

      htmlStmt += "</div>";

      htmlStmt += '<div class="exceptions_words">';

      for (var ex = 0; ex < readData.exceptions.length; ex++) {
        htmlStmt +=
          '<span class="exception_word">' + readData.exceptions[ex] + "</span>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // QUESTION 2 HEADING
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =========================================================
    // OPTIONS
    // =========================================================

    if (
      aObj.options !== undefined &&
      aObj.options !== null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

      htmlStmt +=
        '<div class="word_options d-flex flex-wrap justify-content-around">';

      jQuery.each(aObj.options, function (key, value) {
        var optionAudio =
          aObj.optionsAudios && aObj.optionsAudios[key]
            ? aObj.optionsAudios[key]
            : "";

        htmlStmt +=
          '<div class="audioIcon textEnd off d-flex contant" ' +
          'data-audio="' +
          optionAudio +
          '">';

        htmlStmt += '<div class="clue_word">' + value + "</div>";

        htmlStmt += "</div>";
      });

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // QUESTIONS HOLDER
    // =========================================================

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    // =========================================================
    // FRONT IMAGE
    // =========================================================

    if (aObj.image !== "no" && aObj.image !== "") {
      if (aObj.imageposition === "front") {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          aObj.image +
          '">' +
          "</div>";
      }
    }

    // =========================================================
    // OPTIONAL TEXT
    // =========================================================

    if (aObj.text !== undefined && aObj.text !== "") {
      htmlStmt +=
        '<div class="audioIcon off contant" ' +
        'data-audio="' +
        (aObj.textAudio || "") +
        '">';

      htmlStmt += '<div class="text">' + aObj.text + "</div>";

      htmlStmt += "</div>";
    }

    // =========================================================
    // QUESTIONS
    // =========================================================

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-column" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // QUESTION IMAGE
      // =====================================================

      if (tmpObj.image !== "" && tmpObj.image !== "no") {
        htmlStmt +=
          '<div class="image_space">' +
          '<img src="' +
          tmpObj.image +
          '">' +
          "</div>";
      }

      // =====================================================
      // BUILD QUESTION STRING
      // =====================================================

      var qStr = "";

      if (tmpObj.singleword) {
        var str = tmpObj.text;

        var singleAudio =
          tmpObj.textaudios && tmpObj.textaudios[0] ? tmpObj.textaudios[0] : "";

        qStr +=
          '<div class="txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          singleAudio +
          '">';

        qStr += '<img src="../images/icons/sound-wave.png" class="audio_icon">';

        qStr += "</div>";

        qStr += str.replace(
          /\[_]/g,
          '<input class="text_input_area" ' +
            'type="text" ' +
            'maxlength="' +
            tmpObj.maxlength +
            '" ' +
            'data-type="' +
            tmpObj.type +
            '">',
        );
      } else {
        var wordIndex = -1;

        var words = tmpObj.text.split("[_]");

        qStr = words
          .map(function (word) {
            if (word !== "") {
              wordIndex++;

              var wordAudio =
                tmpObj.textaudios && tmpObj.textaudios[wordIndex]
                  ? tmpObj.textaudios[wordIndex]
                  : "";

              return (
                '<div class="txt-audioIcon off d-flex contant min_w_fit_contant" ' +
                'data-audio="' +
                wordAudio +
                '">' +
                word +
                "</div>"
              );
            }

            return "";
          })
          .join(
            '<input class="text_input_area" ' +
              'type="text" ' +
              'maxlength="' +
              tmpObj.maxlength +
              '" ' +
              'data-type="' +
              tmpObj.type +
              '">',
          );
      }

      // =====================================================
      // QUESTION ROW
      // =====================================================

      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex">';

      // =====================================================
      // NUMBERING
      // =====================================================

      if (aObj.numbering !== "none") {
        htmlStmt += '<div class="q_num_space">';

        var questionNumber = "";

        if (aObj.numbering === "alphabet") {
          var startChar = aObj.numberstartfrom || "a";

          questionNumber = String.fromCharCode(startChar.charCodeAt(0) + x);
        } else if (aObj.numbering === "number") {
          questionNumber = x + parseInt(aObj.numberstartfrom || 1);
        }

        htmlStmt += questionNumber + " ";

        htmlStmt += "</div>";
      }

      // =====================================================
      // FILLIN
      // =====================================================

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

      htmlStmt += qStr;

      // =====================================================
      // OPTIONS WORDS
      // =====================================================

      if (tmpObj.options_words !== undefined && tmpObj.options_words !== "") {
        htmlStmt += '<div class="options_words d-flex flex-wrap">';

        for (var y = 0; y < tmpObj.options_words.length; y++) {
          var optionsWordAudio =
            tmpObj.options_words_audios && tmpObj.options_words_audios[y]
              ? tmpObj.options_words_audios[y]
              : "";

          htmlStmt +=
            '<div class="audioIcon txt-audioIcon off d-flex contant" ' +
            'data-audio="' +
            optionsWordAudio +
            '">';

          htmlStmt += tmpObj.options_words[y];

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      // =====================================================
      // CHECK / CROSS ICON
      // =====================================================

      var hasAnswer = tmpObj.text.includes("[_]");

      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      if (hasAnswer) {
        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";
      } else {
        htmlStmt += '<div class="tick"></div>';

        htmlStmt += '<div class="cross"></div>';
      }

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
  }

  // =========================================================
  // BACK IMAGE
  // =========================================================

  if (aObj.image !== undefined && aObj.image !== "") {
    htmlStmt +=
      '<div class="image-container">' +
      '<img src="' +
      aObj.image +
      '">' +
      "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
