function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
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
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    // Main Title
    if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
      htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
    }

    // Main Title Icon
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
    // ACTIVITY HEADING
    // =========================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

    // subtitle icons
    if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        if (aObj.subTitleIcons[sicons] != "") {
          htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
      }
    }

    if (aObj.subTitleTextRight != undefined && aObj.subTitleTextRight != "") {
      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =========================================================
    // OPTIONS
    // مهم جداً لنظام FillIn
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =========================================================
    // WORD OPTIONS
    // إذا احتجناها لاحقاً
    // =========================================================

    if (
      aObj.options != undefined &&
      aObj.options != null &&
      aObj.options.length > 0
    ) {
      htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';

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

    // =========================================================
    // SCREEN ELEMENTS
    // =========================================================

    htmlStmt +=
      '<div class="screen_elements d-flex justify-content-center align-items-center h-100">';

    htmlStmt += '<div class="group_elm ' + (aObj.parentClassName || "") + '">';

    // =========================================================
    // WRITING ACTIVITY
    // =========================================================

    htmlStmt += '<div class="writing_activity">';

    // =========================================================
    // BACKGROUND IMAGE
    // =========================================================

    if (aObj.image != undefined && aObj.image != "" && aObj.image != "no") {
      htmlStmt +=
        '<img class="writing_bg" ' + 'src="' + aObj.image + '" ' + 'alt="">';
    }

    // =========================================================
    // STATIC LABELS
    // =========================================================

    if (aObj.labels != undefined && aObj.labels != null) {
      for (var l = 0; l < aObj.labels.length; l++) {
        var label = aObj.labels[l];

        htmlStmt +=
          '<div class="writing_label ' +
          (label.className || "") +
          '" ' +
          'style="' +
          "top:" +
          label.top +
          ";" +
          "left:" +
          label.left +
          ";" +
          "width:" +
          label.width +
          ';">';

        htmlStmt += label.text || "";

        htmlStmt += "</div>";
      }
    }

    // =========================================================
    // INPUT FIELDS
    // =========================================================

    if (aObj.fields != undefined && aObj.fields != null) {
      for (var i = 0; i < aObj.fields.length; i++) {
        var field = aObj.fields[i];

        var readonlyAttr = "";

        var readonlyClass = "";

        var valueAttr = "";

        var maxlengthAttr = "";

        var placeholderAttr = "";

        // readonly
        if (field.readonly === true) {
          readonlyAttr = " readonly";
          readonlyClass = " writing_readonly";
        }

        // value
        if (field.value != undefined && field.value != "") {
          valueAttr = ' value="' + field.value + '"';
        }

        // maxlength
        if (field.maxlength != undefined && field.maxlength != null) {
          maxlengthAttr = ' maxlength="' + field.maxlength + '"';
        }

        // placeholder
        if (field.placeholder != undefined && field.placeholder != "") {
          placeholderAttr = ' placeholder="' + field.placeholder + '"';
        }

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'class="text_input_area writing_input' +
          readonlyClass +
          '" ' +
          'id="' +
          (field.id || "") +
          '" ' +
          'data-type="' +
          (field.type || "text") +
          '" ' +
          valueAttr +
          maxlengthAttr +
          placeholderAttr +
          readonlyAttr +
          ' autocomplete="off" ' +
          'spellcheck="false" ' +
          'style="' +
          "top:" +
          field.top +
          ";" +
          "left:" +
          field.left +
          ";" +
          "width:" +
          field.width +
          ";" +
          '">';
      }
    }

    // =========================================================
    // END WRITING ACTIVITY
    // =========================================================

    htmlStmt += "</div>";

    // =========================================================
    // END GROUP ELM
    // =========================================================

    htmlStmt += "</div>";

    // =========================================================
    // END SCREEN ELEMENTS
    // =========================================================

    htmlStmt += "</div>";

    // =========================================================
    // END ALL CONT
    // =========================================================

    htmlStmt += "</div>";

    // =========================================================
    // END OPTIONS
    // =========================================================

    htmlStmt += "</div>";
  }

  // =========================================================
  // APPEND
  // =========================================================

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  // =========================================================
  // نخفي الكنترولز فقط
  // النظام يضل موجود
  // =========================================================

  $(".func_ctrls").hide();

  // =========================================================
  // LOADED
  // =========================================================

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
