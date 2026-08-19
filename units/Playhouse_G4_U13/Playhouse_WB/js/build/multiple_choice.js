function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    var numberofCols = parseInt(aObj.numberofcolumns);

    var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

    var currQueNum = 0;

    // =====================================================
    // NAVIGATION
    // =====================================================

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

    // =====================================================
    // HEADER
    // =====================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    // =====================================================
    // MAIN TITLE
    // =====================================================

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

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

    // =====================================================
    // SUB TITLE
    // =====================================================

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

    if (aObj.subTitleTextRight != "") {
      htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // OPTIONS
    // =====================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="group_elm d-flex flex-wrap justify-content-center align-items-start mb-70">';

    // =====================================================
    // TOP IMAGE
    // =====================================================

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "front") {
        htmlStmt += '<div class="mcq_top_image">';

        htmlStmt += '<img src="' + aObj.image + '">';

        htmlStmt += "</div>";
      }
    }

    // =====================================================
    // QUESTIONS HOLDER
    // =====================================================

    htmlStmt += '<div class="mcq_questions_holder">';

    for (var col = 0; col < numberofCols; col++) {
      htmlStmt += '<div class="tick_group d-flex flex-column">';

      for (var y = 0; y < numOfQinCol; y++) {
        currQueNum++;

        var tpOb = aObj.questions[currQueNum - 1];

        if (tpOb != undefined && tpOb != null) {
          htmlStmt +=
            '<div class="que d-flex flex-wrap" ' +
            'id="que_' +
            currQueNum +
            '" ' +
            'data-qno="' +
            currQueNum +
            '">';

          // =================================================
          // QUESTION PART
          // =================================================

          htmlStmt += '<div class="d-flex q_part">';

          // numbering
          if (aObj.numbering != "none") {
            htmlStmt += '<div class="q_num_space">';

            if (aObj.numbering == "number") {
              htmlStmt += currQueNum;
            }

            htmlStmt += "</div>";
          }

          // question
          htmlStmt += '<div class="question">' + tpOb.question + "</div>";

          htmlStmt += "</div>";

          // =================================================
          // OPTIONS
          // =================================================

          htmlStmt += '<div class="d-flex flex-wrap picks_grp">';

          if (tpOb.options.length > 0) {
            for (var opt = 0; opt < tpOb.options.length; opt++) {
              htmlStmt +=
                "<div " +
                'id="pick_' +
                currQueNum +
                "_" +
                (opt + 1) +
                '" ' +
                'class="pick">';

              htmlStmt +=
                '<div class="txt">' + tpOb.options[opt].text + "</div>";

              htmlStmt += "</div>";
            }
          }

          htmlStmt += "</div>";

          // =================================================
          // FEEDBACK
          // =================================================

          htmlStmt += '<div class="icon_wrap p-2">';

          htmlStmt +=
            '<div class="tick">' +
            '<img src="../images/icons/check_btn.png">' +
            "</div>";

          htmlStmt +=
            '<div class="cross">' +
            '<img src="../images/icons/cross_btn.png">' +
            "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }
      }

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // SECOND ACTIVITY
    // =====================================================

    if (aObj.secondActivity != undefined && aObj.secondActivity != null) {
      htmlStmt += '<div class="second_activity">';

      // =================================================
      // IMAGE
      // =================================================

      htmlStmt += '<div class="second_activity_image">';

      htmlStmt += '<img src="' + aObj.secondActivity.image + '">';

      htmlStmt += "</div>";

      // =================================================
      // TEXT
      // =================================================

      htmlStmt += '<div class="second_activity_content">';

      htmlStmt += '<div class="second_activity_title">';

      htmlStmt +=
        '<span class="second_activity_number">' +
        aObj.secondActivity.number +
        "</span> ";

      htmlStmt += "<b>" + aObj.secondActivity.title + "</b>";

      htmlStmt += "</div>";

      htmlStmt +=
        '<div class="second_activity_text">' +
        aObj.secondActivity.text +
        "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    // =====================================================
    // CLOSE
    // =====================================================

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> mcq Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
