/*$(function () {
    var myData = {};
*/

function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);

    if (layOut == 4) {
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

      htmlStmt += '<div class="d-flex flex-column w-100">';

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

      htmlStmt += "<p> " + (aObj.subTitleTextLeft || "") + " </p>";

      if (Array.isArray(aObj.subTitleIcons)) {
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
          if (aObj.subTitleIcons[sicons] != "") {
            htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
          }
        }
      }

      htmlStmt += "<p> " + (aObj.subTitleTextRight || "") + " </p>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";

      // =========================================================
      // CONTENT
      // =========================================================

      htmlStmt += '<div class="options">';

      htmlStmt += '<div class="textarea-container">';

      htmlStmt +=
        "<textarea " +
        'id="paper-textarea" ' +
        'rows="10" ' +
        'cols="50" ' +
        'maxlength="410">' +
        "</textarea>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/*
if (fillin_data != undefined && fillin_data != null) {
    myData = fillin_data;
    buildFillInBody(myData);
}
});
*/
