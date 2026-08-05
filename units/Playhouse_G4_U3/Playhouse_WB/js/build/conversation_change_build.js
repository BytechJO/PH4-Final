function buildConversationChangeBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj !== null) {
    var numOfQuestions = aObj.questions.length;
    var currQueNum = 0;

    /* =========================================================
           Navigation
        ========================================================= */

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

    /* =========================================================
           Heading
        ========================================================= */

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
        '">';
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

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    /* =========================================================
           Main Content
        ========================================================= */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt += '<div class="screen_elements d-flex flex-wrap">';

    htmlStmt += '<div class="group_elm d-flex flex-column mb-70">';

    /* =========================================================
           Questions
        ========================================================= */

    for (var x = 0; x < numOfQuestions; x++) {
      currQueNum++;

      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que conversation_change_que" ' +
        'id="que_' +
        currQueNum +
        '" ' +
        'data-qno="' +
        currQueNum +
        '">';

      htmlStmt += '<div class="ques_line d-flex">';

      htmlStmt += '<div class="q_grp d-flex flex-wrap">';

      htmlStmt += '<div class="q_part">';

      htmlStmt += '<div class="fillin_set">';

      htmlStmt +=
        '<div class="  contant dialogue_line" ' +
        'data-audio="' +
        (tmpObj.audio || "") +
        '">';

      htmlStmt += buildConversationChangeText(tmpObj.text, currQueNum);

      htmlStmt += "</div>";

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

    /* =========================================================
           Page Image
        ========================================================= */

    if (aObj.image !== undefined && aObj.image !== "") {
      htmlStmt += '<div class="image-container">';

      htmlStmt += '<img src="' + aObj.image + '">';

      htmlStmt += "</div>";
    }
  }

  console.log("htmlStmt >> Conversation Change Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =========================================================
   Convert change_phrase to clickable input
========================================================= */

function buildConversationChangeText(text, questionNumber) {
  var phraseNumber = 0;

  return text.replace(
    /<span class=['"]change_phrase['"]>(.*?)<\/span>/g,
    function (fullMatch, phraseText) {
      phraseNumber++;

      var inputId = "change_input_" + questionNumber + "_" + phraseNumber;

      var safeOriginal = phraseText.replace(/"/g, "&quot;");

      var html = "";

      html +=
        '<span class="change_wrapper" ' +
        'data-original="' +
        safeOriginal +
        '">';

      html +=
        '<span class="change_trigger" ' + 'data-inputid="' + inputId + '">';

      html += phraseText;

      html += "</span>";

      html +=
        "<input " +
        'id="' +
        inputId +
        '" ' +
        'class="change_input" ' +
        'type="text" ' +
        'maxlength="120" ' +
        'autocomplete="off">';

      html += "</span>";

      return html;
    },
  );
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
