function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != "undefined" && aObj != null) {
    var layOut = parseInt(aObj.layout);

    var numOfQuestions = aObj.questions.length;

    var currQueNum = 0;

    /* =========================================
       Footer Navigation
    ========================================= */

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

    /* =========================================
       Heading
    ========================================= */

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
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    /* =========================================
       Main Options
    ========================================= */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="screen_elements">';

    htmlStmt += '<div class="group_elm">';

    /* =========================================
       Questions
    ========================================= */

    for (var i = 0; i < numOfQuestions; i++) {
      currQueNum++;

      var tpOb = aObj.questions[i];

      htmlStmt +=
        '<div class="que" ' +
        'id="que_' +
        currQueNum +
        '" ' +
        'data-qno="' +
        currQueNum +
        '">';

      htmlStmt += '<div class="ques">';

      /* =========================================
         Number
      ========================================= */

      htmlStmt += '<div class="q_num_space">';

      if (aObj.numbering == "number") {
        htmlStmt += parseInt(aObj.numberstartfrom) + i + ".";
      } else if (aObj.numbering == "alphabet") {
        htmlStmt +=
          String.fromCharCode(aObj.numberstartfrom.charCodeAt(0) + i) + ".";
      }

      htmlStmt += "</div>";

      /* =========================================
         Question Text
      ========================================= */

      htmlStmt += '<div class="question_content">';

      var questionText = tpOb.text;

      var answers = tpOb.answer || [];

      var inputIndex = 0;

      /* =========================================
         Replace [*]
      ========================================= */

      while (questionText.indexOf("[*]") != -1) {
        var inputHtml = "";

        /* =========================================
           Example / Default Answer
        ========================================= */

        if (
          tpOb.defaultAnswer != undefined &&
          tpOb.defaultAnswer != null &&
          tpOb.defaultAnswer != ""
        ) {
          inputHtml +=
            "<input " +
            'class="text_input_area default_answer" ' +
            'type="text" ' +
            'data-type="' +
            tpOb.type +
            '" ' +
            'maxlength="' +
            tpOb.maxlength +
            '" ' +
            'value="' +
            tpOb.defaultAnswer +
            '" ' +
            "readonly " +
            "disabled>";
        } else {

        /* =========================================
           Normal Editable Input
        ========================================= */
          inputHtml +=
            "<input " +
            'class="text_input_area" ' +
            'type="text" ' +
            'data-type="' +
            tpOb.type +
            '" ' +
            'maxlength="' +
            tpOb.maxlength +
            '" ' +
            'autocomplete="off">';
        }

        questionText = questionText.replace("[*]", inputHtml);

        inputIndex++;
      }

      htmlStmt += '<div class="question_text">' + questionText + "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      /* =========================================
         Icons
      ========================================= */

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt += '<div class="tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    /* =========================================
       Image
    ========================================= */

    if (aObj.image != undefined && aObj.image != "" && aObj.image != "no") {
      htmlStmt += '<div class="activity_image">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
