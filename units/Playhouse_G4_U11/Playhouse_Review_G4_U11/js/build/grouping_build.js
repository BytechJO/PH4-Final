function buildGroupingBody(aObj) {
  var htmlStmt = "";

  if (aObj != undefined && aObj != null) {
    // =====================================================
    // NAVIGATION
    // =====================================================

    htmlStmt += '<div class="sub_footer_icon subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

    htmlStmt += '<div class="sub_footer_icon subFooterNav nextNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt += '<img src="../images/icons/next_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";

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
      htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ">";
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
    htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =====================================================
    // OPTIONS WRAPPER
    // =====================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont grouping_all_cont">';

    htmlStmt += '<div class="grouping_activity">';

    // =====================================================
    // GROUP BOXES
    // =====================================================

    htmlStmt += '<div class="grouping_boxes">';

    for (var i = 0; i < aObj.groups.length; i++) {
      var group = aObj.groups[i];

      htmlStmt +=
        '<div class="grouping_drop_zone" ' + 'data-group-index="' + i + '">';

      htmlStmt += '<div class="grouping_box_title">' + group.title + "</div>";

      htmlStmt += '<div class="grouping_words_inside"></div>';

      // feedback icon
      htmlStmt += '<div class="grouping_feedback_icon">';

      htmlStmt += '<div class="grouping_tick">';

      htmlStmt += '<img src="../images/icons/check_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="grouping_cross">';

      htmlStmt += '<img src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    // =====================================================
    // WORD BANK
    // =====================================================

    htmlStmt += '<div class="grouping_word_bank">';

    htmlStmt += '<div class="grouping_bank_words">';

    for (var w = 0; w < aObj.words.length; w++) {
      htmlStmt +=
        '<div class="grouping_word" ' +
        'draggable="true" ' +
        'data-word="' +
        aObj.words[w] +
        '" ' +
        'data-original-index="' +
        w +
        '">' +
        aObj.words[w] +
        "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> grouping Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
