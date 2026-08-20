function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    // =========================================================
    // FOOTER NAV
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
    // HEADING
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

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

    // =========================================================
    // ACTIVITY TITLE
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }

      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title'>";

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }

      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // OPTIONS / MAIN CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    // =========================================================
    // WORD OPTIONS
    // =========================================================

    if (
      typeof aObj.options != undefined &&
      aObj.options != null &&
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
    // FRONT IMAGE
    // =========================================================

    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "front"
    ) {
      htmlStmt +=
        '<div class="img_space">' + '<img src="' + aObj.image + '">' + "</div>";
    }

    // =========================================================
    // EXTRA TEXT
    // =========================================================

    if (aObj.text != undefined && aObj.text != "") {
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

    htmlStmt += '<div class="ques">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      var queClass = tmpObj.answer && tmpObj.answer.length > 0 ? "que" : "";

      htmlStmt +=
        '<div class="' +
        queClass +
        ' img_fillin_gr" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // OPTIONAL TEXT FRONT
      // =====================================================

      if (tmpObj.textFront != undefined && tmpObj.textFront != "") {
        htmlStmt +=
          '<div class="audioIcon off contant" ' +
          'data-audio="' +
          (tmpObj.textFrontAudio || "") +
          '">';

        htmlStmt += '<div class="text_Front">' + tmpObj.textFront + "</div>";

        htmlStmt += "</div>";
      }

      // =====================================================
      // QUESTION IMAGE
      // =====================================================

      if (
        tmpObj.image != undefined &&
        tmpObj.image != "" &&
        tmpObj.image != "no"
      ) {
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
        var str = tmpObj.text || "";

        var firstAudio =
          tmpObj.textaudios && tmpObj.textaudios[0] ? tmpObj.textaudios[0] : "";

        qStr +=
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          firstAudio +
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

        var words = (tmpObj.text || "").split("[_]");

        qStr = words
          .map(function (word) {
            if (word !== "") {
              wordIndex++;

              var wordAudio =
                tmpObj.textaudios && tmpObj.textaudios[wordIndex]
                  ? tmpObj.textaudios[wordIndex]
                  : "";

              return (
                '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
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
      // SAME LINE:
      // topsent + = + input + icon
      // =====================================================

      htmlStmt += '<div class="fillin_gr">';

      htmlStmt += '<div class="question_line d-flex align-items-center">';

      // TOP SENTENCE
      if (tmpObj.topsent != undefined && tmpObj.topsent != "") {
        htmlStmt += '<div class="top_sentence">' + tmpObj.topsent + "</div>";
      }

      // QUESTION SPACE
      htmlStmt += '<div class="q_space d-flex align-items-center">';

      // NUMBERING
      if (aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "alphabet") {
          xx = currQueNum == 1 ? aObj.numberstartfrom : nextChar(xx);
        } else if (aObj.numbering == "number") {
          xx = x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += xx + "</div>";
      }

      // QUESTION
      htmlStmt += '<div class="fillin_set d-flex align-items-center">';

      htmlStmt += qStr;

      // TEXT END
      if (tmpObj.textEnd != undefined && tmpObj.textEnd != "") {
        htmlStmt +=
          '<div class="text_End" style="' +
          (tmpObj.postion || "") +
          '">' +
          tmpObj.textEnd +
          "</div>";
      }

      // OPTIONS WORDS
      if (tmpObj.options_words != undefined && tmpObj.options_words != "") {
        htmlStmt += '<div class="options_words d-flex flex-wrap">';

        for (var y = 0; y < tmpObj.options_words.length; y++) {
          var optionWordAudio =
            tmpObj.options_words_audios && tmpObj.options_words_audios[y]
              ? tmpObj.options_words_audios[y]
              : "";

          htmlStmt +=
            '<div class="audioIcon txt-audioIcon off d-flex contant" ' +
            'data-audio="' +
            optionWordAudio +
            '">';

          htmlStmt += tmpObj.options_words[y];

          htmlStmt += "</div>";
        }

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>"; // fillin_set

      // =====================================================
      // ICON
      // =====================================================

      var hasAnswer = (tmpObj.text || "").includes("[_]");

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

      htmlStmt += "</div>"; // q_space

      htmlStmt += "</div>"; // question_line

      htmlStmt += "</div>"; // fillin_gr

      htmlStmt += "</div>"; // img_fillin_gr
    }

    htmlStmt += "</div>"; // ques

    // =========================================================
    // BACK IMAGE
    // =========================================================

    if (
      aObj.image != undefined &&
      aObj.image != "" &&
      aObj.image != "no" &&
      aObj.imageposition == "back"
    ) {
      htmlStmt +=
        '<div class="q_image">' + '<img src="' + aObj.image + '"/>' + "</div>";
    }

    htmlStmt += "</div>"; // group_elm

    htmlStmt += "</div>"; // screen_elements
    htmlStmt += "</div>"; // all_cont
    htmlStmt += "</div>"; // options
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
