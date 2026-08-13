function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

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
    // HEADING
    // =========================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

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

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += '<div class="page_sub_title">';

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
      }

      htmlStmt +=
        '<br><p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    } else {
      htmlStmt += '<div class="page_sub_title">';

      htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
      }

      htmlStmt +=
        '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // OPTIONS / CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =========================================================
    // WORD OPTIONS
    // =========================================================

    if (typeof aObj.options != undefined && aObj.options != null) {
      if (aObj.options.length > 0) {
        htmlStmt +=
          '<div class="word_opt_sticky d-flex justify-content-center">';

        htmlStmt +=
          '<div class="word_options d-flex flex-wrap justify-content-around">';

        jQuery.each(aObj.options, function (key, value) {
          var optionAudio = "";

          if (
            aObj.optionsAudios != undefined &&
            aObj.optionsAudios[key] != undefined
          ) {
            optionAudio = aObj.optionsAudios[key];
          }

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
    }

    // =========================================================
    // SCREEN
    // =========================================================

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-start">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    // =========================================================
    // TOP STORY SECTION
    // TEXT + IMAGE
    // =========================================================

    htmlStmt += '<div class="top-content-row">';

    // =========================================================
    // STORY TEXT
    // =========================================================

    htmlStmt += '<div class="story-text-wrap">';

    if (aObj.text != undefined && aObj.text != "") {
      htmlStmt +=
        '<div class=" off contant story-text-audio" ' +
        'data-audio="' +
        (aObj.textAudio || "") +
        '">';

      htmlStmt += '<div class="text story-text">' + aObj.text + "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // story-text-wrap

    // =========================================================
    // STORY IMAGE
    // =========================================================

    if (aObj.image != undefined && aObj.image != "" && aObj.image != "no") {
      htmlStmt += '<div class="story-image-wrap">';

      htmlStmt +=
        "<img " + 'src="' + aObj.image + '" ' + 'class="story-image">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>"; // top-content-row

    // =========================================================
    // QUESTIONS GRID
    // =========================================================

    htmlStmt += '<div class="questions-grid">';

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que img_fillin_gr d-flex flex-column" ' +
        'data-qno="' +
        (x + 1) +
        '">';

      // =====================================================
      // QUESTION IMAGE IF EXISTS
      // =====================================================

      if (tmpObj.image != "" && tmpObj.image != "no") {
        htmlStmt += '<div class="image_space">';

        htmlStmt += '<img src="' + tmpObj.image + '">';

        htmlStmt += "</div>";
      }

      // =====================================================
      // BUILD QUESTION STRING
      // =====================================================

      var qStr = "";

      if (tmpObj.singleword) {
        var str = tmpObj.text;

        var textAudio =
          tmpObj.textaudios && tmpObj.textaudios.length > 0
            ? tmpObj.textaudios[0]
            : "";

        qStr +=
          '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
          'data-audio="' +
          textAudio +
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
          .map(function (word, index) {
            if (word !== "") {
              wordIndex++;

              var thisAudio = "";

              if (
                tmpObj.textaudios != undefined &&
                tmpObj.textaudios[wordIndex] != undefined
              ) {
                thisAudio = tmpObj.textaudios[wordIndex];
              }

              return (
                '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" ' +
                'data-audio="' +
                thisAudio +
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
      // QUESTION
      // =====================================================

      htmlStmt += '<div class="fillin_gr d-flex align-items-center">';

      htmlStmt += '<div class="q_space d-flex">';

      // =====================================================
      // NUMBERING
      // =====================================================

      if (aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        var xx = "";

        if (aObj.numbering == "alphabet") {
          xx = String.fromCharCode(
            String(aObj.numberstartfrom).charCodeAt(0) + x,
          );
        } else if (aObj.numbering == "number") {
          xx = x + parseInt(aObj.numberstartfrom);
        }

        htmlStmt += xx + " </div>";
      }

      // =====================================================
      // INPUT SET
      // =====================================================

      htmlStmt += '<div class="fillin_set d-flex flex-wrap">';

      htmlStmt += qStr;

      // =====================================================
      // QUESTION OPTIONS
      // =====================================================

      if (tmpObj.options_words != undefined && tmpObj.options_words != "") {
        htmlStmt += '<div class="options_words d-flex flex-wrap">';

        for (var y = 0; y < tmpObj.options_words.length; y++) {
          var optionWordAudio = "";

          if (
            tmpObj.options_words_audios != undefined &&
            tmpObj.options_words_audios[y] != undefined
          ) {
            optionWordAudio = tmpObj.options_words_audios[y];
          }

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
      // VALIDATION ICON
      // =====================================================

      var ans = tmpObj.text.includes("[_]") ? "true" : "false";

      htmlStmt += '<div class="icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      if (ans == "true") {
        htmlStmt += '<div class="tick">';

        htmlStmt += '<img src="../images/icons/check_btn.png">';

        htmlStmt += "</div>";

        htmlStmt += '<div class="cross">';

        htmlStmt += '<img src="../images/icons/cross_btn.png">';

        htmlStmt += "</div>";
      } else {
        htmlStmt += '<div class="tick"></div>';

        htmlStmt += '<div class="cross"></div>';
      }

      htmlStmt += "</div>"; // icon_wrap

      htmlStmt += "</div>"; // icon_wrap_holder

      htmlStmt += "</div>"; // q_space

      htmlStmt += "</div>"; // fillin_gr

      htmlStmt += "</div>"; // que
    }

    htmlStmt += "</div>"; // questions-grid

    // =========================================================
    // TEXTAREA IF NEEDED
    // =========================================================

    if (aObj.have_textarea == "true") {
      htmlStmt +=
        '<div class="textarea-container" ' +
        'style="background-image:url(' +
        aObj.background_image +
        ')">';

      htmlStmt +=
        '<textarea id="paper-textarea" ' +
        'rows="10" ' +
        'cols="50" ' +
        'maxlength="400">' +
        "</textarea>";

      htmlStmt += "</div>";
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
