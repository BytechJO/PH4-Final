function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;

    var numberofCols = parseInt(aObj.numberofcolumns);

    var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

    var currQueNum = 0;

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
    // ACTIVITY HEADING
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

    htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";

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

    htmlStmt +=
      '<div class="d-flex flex-wrap justify-content-center align-items-center mb-70">';

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
    // COLUMNS
    // =========================================================

    for (var col = 0; col < numberofCols; col++) {
      htmlStmt += '<div class="question_group">';

      for (var row = 0; row < numOfQinCol; row++) {
        if (currQueNum >= numOfQuestions) {
          break;
        }

        currQueNum++;

        var tpOb = aObj.questions[currQueNum - 1];

        if (typeof tpOb === "undefined" || tpOb === null) {
          continue;
        }

        // =====================================================
        // QUESTION HOLDER
        // =====================================================

        htmlStmt +=
          '<div class="que border-none" ' +
          'id="que_' +
          currQueNum +
          '" ' +
          'data-qno="' +
          currQueNum +
          '">';

        htmlStmt += '<div class="ques_line d-flex">';

        htmlStmt += '<div class="q_grp d-flex flex-wrap">';

        htmlStmt += '<div class="q_part d-flex align-items-baseline">';

        // =====================================================
        // NUMBERING
        // =====================================================

        if (aObj.numbering !== "none") {
          htmlStmt += '<div class="q_num_space">';

          var displayNumber = "";

          if (aObj.numbering === "alphabet") {
            var startChar = aObj.numberstartfrom || "a";

            displayNumber = String.fromCharCode(
              startChar.charCodeAt(0) + currQueNum - 1,
            );
          } else if (aObj.numbering === "number") {
            displayNumber =
              currQueNum + parseInt(aObj.numberstartfrom || 1) - 1;
          }

          htmlStmt += displayNumber + " ";

          htmlStmt += "</div>";
        }

        // =====================================================
        // QUESTION IMAGE
        // =====================================================

        if (tpOb.image !== "" && tpOb.image !== "no") {
          htmlStmt +=
            '<div class="img_space">' +
            '<img src="' +
            tpOb.image +
            '">' +
            "</div>";
        }

        // =====================================================
        // BUILD OPTION SETS
        // =====================================================

        var questionText = tpOb.question || "";

        var opts = tpOb.options || [];

        var fillBoxesArr = [];

        for (var rr = 0; rr < opts.length; rr++) {
          var tmphtml = "";

          if (tpOb.inputbox === "no") {
            tmphtml +=
              "<span class='pick_set' " +
              "id='pick_set_" +
              currQueNum +
              "_" +
              (rr + 1) +
              "'>";
          } else {
            tmphtml +=
              "<span class='pick_set' " +
              "id='pick_set_" +
              currQueNum +
              "_" +
              (rr + 1) +
              "'>";

            tmphtml +=
              "<input " +
              "class='text_input_area' " +
              "type='text' " +
              "readonly " +
              "disabled>";
          }

          var tmpOpt = opts[rr];

          for (var aa = 0; aa < tmpOpt.length; aa++) {
            tmphtml +=
              '<span class="pick" ' +
              'id="pick_' +
              currQueNum +
              "_" +
              (rr + 1) +
              "_" +
              (aa + 1) +
              '" ' +
              'data-opttext="' +
              tmpOpt[aa] +
              '">' +
              tmpOpt[aa] +
              "</span>";

            if (aa < tmpOpt.length - 1) {
              tmphtml += "&nbsp;/&nbsp;";
            }
          }

          tmphtml += "</span>";

          fillBoxesArr.push(tmphtml);
        }

        // =====================================================
        // REPLACE EACH [_] WITH ITS OWN OPTIONS SET
        // =====================================================

        var parts = questionText.split("[_]");

        var finalQuestionHtml = "";

        for (var p = 0; p < parts.length; p++) {
          if (parts[p] !== "") {
            finalQuestionHtml +=
              '<div class="audioIcon off contant not-disapled" ' +
              'data-audio="' +
              tpOb.audio +
              '">' +
              parts[p] +
              "</div>";
          }

          if (p < fillBoxesArr.length) {
            finalQuestionHtml += fillBoxesArr[p];
          }
        }

        // =====================================================
        // QUESTION TEXT
        // =====================================================

        htmlStmt += '<div class="d-flex justify-content-center">';

        htmlStmt += '<div class="text_part">' + finalQuestionHtml + "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";

        // =====================================================
        // CHECK / CROSS
        // =====================================================

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

      htmlStmt += "</div>";
    }

    // =========================================================
    // BACK IMAGE
    // =========================================================

    if (aObj.image !== "no" && aObj.image !== "") {
      if (aObj.imageposition === "back") {
        htmlStmt +=
          '<div class="img_space">' +
          '<img src="' +
          aObj.image +
          '">' +
          "</div>";
      }
    }

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
 