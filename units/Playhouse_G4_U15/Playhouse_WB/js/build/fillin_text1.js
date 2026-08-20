function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

    // =========================================================
    // BACK / NEXT
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

    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt +=
        '<div class="audioIcon off contant" data-slideNum="1" data-audio="' +
        aObj.mainTitleAudio +
        '">';

      htmlStmt += '<div class="q-type-img-container">';

      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

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
    }

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += '<div class="page_sub_title">';

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
    }

    htmlStmt +=
      '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

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

    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';

        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';

        jQuery.each(aObj.options, function (key, value) {
          htmlStmt +=
            '<div class="audioIcon textEnd off d-flex contant" ' +
            'data-audio="' +
            aObj.optionsAudios[key] +
            '">';

          htmlStmt += '<div class="clue_word">' + value + "</div>";

          htmlStmt += "</div>";
        });

        htmlStmt += "</div>";
        htmlStmt += "</div>";
      }
    }

    // =========================================================
    // QUESTIONS
    // =========================================================

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "front") {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          aObj.image +
          '">' +
          "</div>";
      }
    }

    // =========================================================
    // LOOP QUESTIONS
    // =========================================================

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que img_fillin_gr word_power_column" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // IMAGE
      // =====================================================

      if (tmpObj.image != "" && tmpObj.image != "no") {
        htmlStmt +=
          '<div class="image_space">' +
          '<img src="' +
          tmpObj.image +
          '">' +
          "</div>";
      }

      // =====================================================
      // CREATE QUESTION STRING
      // =====================================================

      var qStr = "";

      if (tmpObj.singleword) {
        var str = tmpObj.text;

        qStr +=
          '<div class="txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          tmpObj.textaudios[0] +
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
        var words = tmpObj.text.split("[_]");

        var wordIndex = -1;

        qStr = words
          .map(function (word, index) {
            if (word !== "") {
              wordIndex++;

              return (
                '<div class="txt-audioIcon off d-flex contant min_w_fit_contant word_power_title" ' +
                'data-audio="' +
                (tmpObj.textaudios[wordIndex] || "") +
                '">' +
                word +
                "</div>"
              );
            }

            return "";
          })
          .join(
            '<input class="text_input_area word_power_input" ' +
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
      // FILL IN GROUP
      // =====================================================

      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex">';

      // =====================================================
      // NUMBERING
      // =====================================================

      if (aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "alphabet") {
          xx = currQueNum == 1 ? aObj.numberstartfrom : nextChar(xx);
        } else if (aObj.numbering == "number") {
          xx = x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += xx + " ";

        htmlStmt += "</div>";
      }

      // =====================================================
      // INPUTS
      // =====================================================

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

      htmlStmt += qStr;

      htmlStmt += "</div>";

      // =====================================================
      // NO CHECK ANSWER
      // =====================================================
      // intentionally no tick / cross

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  if (aObj.image != undefined && aObj.image != "") {
    htmlStmt +=
      '<div class="image-container">' +
      '<img src="' +
      aObj.image +
      '"/>' +
      "</div>";
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
