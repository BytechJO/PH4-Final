function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj == "undefined" || aObj == null) {
    return;
  }

  var numOfQuestions = aObj.questions.length;

  var numberofCols = parseInt(aObj.numberofcolumns);

  if (isNaN(numberofCols) || numberofCols < 1) {
    numberofCols = 1;
  }

  var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

  var currQueNum = 0;

  /*
    Back button
  */
  htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /*
    Next button
  */
  htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt += '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =====================================================
     Heading
  ===================================================== */

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
    var mainTitleIconRight =
      aObj.mainTitleIconPos != undefined &&
      aObj.mainTitleIconPos != null &&
      aObj.mainTitleIconPos.right != undefined
        ? aObj.mainTitleIconPos.right
        : "0px";

    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      mainTitleIconRight +
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

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }
  }

  htmlStmt +=
    "<br>" + "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Activity body
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt +=
    '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

  /*
    Questions container
  */
  htmlStmt += '<div class="questions-container">';

  for (var columnIndex = 0; columnIndex < numberofCols; columnIndex++) {
    htmlStmt += '<div class="tick_group d-flex flex-column">';

    for (var rowIndex = 0; rowIndex < numOfQinCol; rowIndex++) {
      if (currQueNum >= numOfQuestions) {
        break;
      }

      currQueNum++;

      var questionObj = aObj.questions[currQueNum - 1];

      if (questionObj == undefined || questionObj == null) {
        continue;
      }

      htmlStmt +=
        '<div class="que d-flex flex-wrap" ' +
        'id="que_' +
        currQueNum +
        '" ' +
        'data-qno="' +
        currQueNum +
        '">';

      /*
        Question text/image area
      */
      htmlStmt += '<div class="d-flex q_part">';

      if (aObj.numbering != undefined && aObj.numbering != "none") {
        htmlStmt += '<div class="q_num_space">';

        if (aObj.numbering == "alphabet") {
          var alphabetStart = aObj.numberstartfrom || "a";

          var alphabetCode = alphabetStart.toString().charCodeAt(0);

          htmlStmt += String.fromCharCode(alphabetCode + currQueNum - 1) + ".";
        } else if (aObj.numbering == "number") {
          var numberStart = parseInt(aObj.numberstartfrom);

          if (isNaN(numberStart)) {
            numberStart = 1;
          }

          htmlStmt += numberStart + currQueNum - 1 + ".";
        }

        htmlStmt += "</div>";
      }

      if (questionObj.question != undefined && questionObj.question != "") {
        htmlStmt += '<div class="question">' + questionObj.question + "</div>";
      }

      if (
        questionObj.image != undefined &&
        questionObj.image != "" &&
        questionObj.image != "no"
      ) {
        htmlStmt += '<div class="img_space">';

        htmlStmt += '<img src="' + questionObj.image + '">';

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      /*
        Options
      */
      htmlStmt += '<div class="d-flex flex-wrap picks_grp">';

      if (
        questionObj.options != undefined &&
        questionObj.options != null &&
        questionObj.options.length > 0
      ) {
        for (
          var optionIndex = 0;
          optionIndex < questionObj.options.length;
          optionIndex++
        ) {
          var optionObj = questionObj.options[optionIndex];

          htmlStmt +=
            "<div " +
            'id="pick_' +
            currQueNum +
            "_" +
            (optionIndex + 1) +
            '" ' +
            'class="pick" ' +
            'data-option="' +
            (optionIndex + 1) +
            '">';

          if (optionObj.text != undefined && optionObj.text != "") {
            htmlStmt += '<div class="txt">' + optionObj.text + "</div>";
          }

          if (optionObj.image != undefined && optionObj.image != "") {
            htmlStmt += '<div class="pick-image">';

            htmlStmt += '<img src="' + optionObj.image + '">';

            htmlStmt += "</div>";
          }

          htmlStmt += "</div>";
        }
      }

      htmlStmt += "</div>";

      /*
        Correct / incorrect icon
      */
      htmlStmt += '<div class="icon_wrap p-2">';

      htmlStmt += '<div class="tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  /*
    Right-side image
  */
  if (
    aObj.image != undefined &&
    aObj.image != null &&
    aObj.image != "" &&
    aObj.image != "no"
  ) {
    htmlStmt += '<div class="image-container">';

    htmlStmt += '<img src="' + aObj.image + '">';

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  console.log("htmlStmt >> mcq Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
