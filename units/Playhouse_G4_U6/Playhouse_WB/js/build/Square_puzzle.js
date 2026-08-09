function buildWordSearchBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj != null && aObj != {}) {
    /* =========================================
       Navigation
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

    htmlStmt += '<div class="act_head_group justify-content-center">';

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

    /* =========================================
       Subtitle
    ========================================= */

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

    if (aObj.subTitleTextRight != undefined && aObj.subTitleTextRight != "") {
      htmlStmt += "<p>" + aObj.subTitleTextRight + "</p>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* =========================================
       Activity
    ========================================= */

    htmlStmt += '<div class="options cont_ht_sf">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="wordsearch_wrap">';

    /* =========================================
       WORDS TOP
    ========================================= */

    htmlStmt += '<div class="wordlist"></div>';

    /* =========================================
       MATRIX
    ========================================= */

    htmlStmt += '<div class="wordmatrix_holder">';

    htmlStmt += '<div class="wordmatrix"></div>';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* old mobile word button */
    htmlStmt += '<div class="wordlist_but d-none">WORDS</div>';

    htmlStmt += "</div>";

    $(".activity_area").append(htmlStmt);

    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
