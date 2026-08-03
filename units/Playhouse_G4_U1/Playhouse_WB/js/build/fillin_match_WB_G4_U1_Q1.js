function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

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

  // ===================================================================== heading =====================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant " ' +
    'data-slideNum="' +
    1 +
    '" ' +
    'data-audio="' +
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
      '">';
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="' +
    1 +
    '" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }

  htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =========================================================
  // CONTENT
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto Box">';

  htmlStmt += '<div class="all_cont justify-content-center">';

  for (var x = 0; x < numOfRows; x++) {
    htmlStmt += '<div class="w-85">';

    for (var y = 0; y < numInRowArray[x].length; y++) {
      var questionObj = aObj.questions[currentQue - 1];

      if (!questionObj) {
        continue;
      }

      htmlStmt += '<div class="p-0" style="height: 60px">';

      htmlStmt +=
        '<div class="que que_' +
        currentQue +
        ' w-75 h-100" ' +
        'data-qno="' +
        currentQue +
        '">';

      htmlStmt += '<div class="txt_wrap d-flex justify-content-between">';

      var inputboxstmt =
        '<input type="text" ' +
        'maxlength="1" ' +
        'autocomplete="off" ' +
        'onkeypress="return ' +
        "(event.charCode > 64 && event.charCode < 91) || " +
        '(event.charCode > 96 && event.charCode < 123)"/>';

      if (aObj.defaultAnswer == currentQue) {
        inputboxstmt =
          '<input type="text" ' +
          'maxlength="1" ' +
          "readonly " +
          'value="' +
          questionObj.answer[0] +
          '"/>';
      }

      htmlStmt +=
        '<div class="txtBox mx-2" data-type="' + questionObj.type + '">';

      htmlStmt += inputboxstmt;

      htmlStmt +=
        '<div class="audioIcon off d-flex contant" ' +
        'data-audio="' +
        questionObj.audio +
        '">';

      htmlStmt += "<span>" + questionObj.textback + "</span>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt +=
        '<div class="audioIcon off contant definition_text" ' +
        'data-audio="../audios/under.mp3">';

      htmlStmt += questionObj.textend;

      htmlStmt += "</div>";

      htmlStmt += '<div class="theIcons">';

      htmlStmt += '<div class="icon_wrap mx-1">';

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
      htmlStmt += "</div>";
      htmlStmt += "</div>";

      currentQue++;
    }

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
