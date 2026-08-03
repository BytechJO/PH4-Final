function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  var questions = Array.isArray(aObj.questions) ? aObj.questions : [];

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

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.mainTitleAudio || "") +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
  }

  if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    var iconRight =
      aObj.mainTitleIconPos && aObj.mainTitleIconPos.right
        ? aObj.mainTitleIconPos.right
        : "0px";

    htmlStmt +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right: ' +
      iconRight +
      ';">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p>" + (aObj.subTitleTextLeft || "") + "</p>";

  if (Array.isArray(aObj.subTitleIcons) && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }
  }

  htmlStmt +=
    "<p class='subTitleTextRight'>" + (aObj.subTitleTextRight || "") + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =========================================================
  // CONTENT
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont justify-content-center">';

  htmlStmt +=
    '<div class="cont_group d-flex flex-wrap justify-content-center">';

  for (var x = 0; x < questions.length; x++) {
    var tmpObj = questions[x];

    htmlStmt +=
      '<div class="que spelling_card" ' + 'data-qno="' + (x + 1) + '">';

    htmlStmt += '<div class="img_box1">';

    htmlStmt +=
      '<div class="question_number">' + (tmpObj.question || x + 1) + "</div>";

    htmlStmt += '<img src="' + (tmpObj.image || "") + '">';

    htmlStmt += "</div>";

    htmlStmt +=
      '<div class="txt_box d-flex justify-content-center align-items-center" ' +
      'data-type="' +
      (tmpObj.type || "text") +
      '">';

    htmlStmt +=
      '<div class="audioIcon off disabled" ' +
      'data-audio="' +
      (tmpObj.audio || "") +
      '"></div>';

    htmlStmt +=
      '<input class="text_input_area mx-2" ' +
      'type="text" ' +
      'maxlength="' +
      (tmpObj.maxlength || 10) +
      '" ' +
      'autocomplete="off">';

    htmlStmt += '<div class="icon_wrap">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png"/>' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png"/>' +
      "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
