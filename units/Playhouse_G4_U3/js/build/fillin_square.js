function buildWordSearchBody(aObj) {
  var htmlStmt = "";

  if (!aObj || !aObj.questions || !aObj.questions.length) {
    console.error("WordSearch: invalid data object.");
    return;
  }

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png" alt="Back">' +
    "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png" alt="Next">' +
    "</a>" +
    "</div>";

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

  htmlStmt += '<div class="options cont_ht_sf d-flex flex-wrap">';
  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';
  htmlStmt += '<div class="wordsearch_wrap align-items-center">';
  htmlStmt += '<div class="wordmatrix_holder">';
  htmlStmt += '<div class="wordmatrix" aria-label="Word search grid"></div>';
  htmlStmt += "</div>";
  htmlStmt += '<div class="wordlist"></div>';
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += '<div class="wordlist_but d-none">WORDS</div>';
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  if (typeof setLoadedStatus === "function") {
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
