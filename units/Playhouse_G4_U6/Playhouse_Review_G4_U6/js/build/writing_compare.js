function buildWritingCompareBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

  /* =====================================================
     NAVIGATION
  ===================================================== */

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

  /* =====================================================
     HEADER
  ===================================================== */

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle) htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

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

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  if (aObj.title_position != undefined && aObj.title_position == "under") {
    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

    htmlStmt += "</div>";
  } else {
    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }

    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += '<div class="options cont_ht_sf mx-auto"><div class="writing_compare_all_cont"><div class="writing_compare_content">';
  htmlStmt += '<div class="writing_words_box">';
  aObj.words.forEach(function(word) {
    htmlStmt += '<span class="writing_word">' + word + '</span>';
  });
  htmlStmt += '</div><div class="writing_boxes">';
  aObj.sections.forEach(function(section, index) {
    htmlStmt += '<div class="writing_box"><label class="writing_box_title" for="writing-' + index + '">' + section.title + '</label>';
    htmlStmt += '<textarea id="writing-' + index + '" class="writing_textarea"></textarea></div>';
  });
  htmlStmt += '</div></div></div></div>';
  $('.activity_area').append(htmlStmt);
  setLoadedStatus(getCurrFileOrDirectory('file'));
}
