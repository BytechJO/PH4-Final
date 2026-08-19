function buildGroupDragDropBody(aObj) {
  var htmlStmt = "";

  // =====================================================
  // NAVIGATION
  // =====================================================

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

 htmlStmt += '<div class="act_head_group justify-content-center">';
		htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
			htmlStmt += '<div class="q-type-img-container">';
			htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
			if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
				htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';

		htmlStmt += '<div class="activityHeading">'
			htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
			if(aObj.title_position !=undefined && aObj.title_position =="under"){
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}else {
				htmlStmt += "<div class='page_sub_title'>";
					htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
					for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
						htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
					}
					htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
				htmlStmt += "</div>";
			}
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';

  // =====================================================
  // CONTENT
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont gdd_all_cont">';

  htmlStmt += '<div class="gdd_activity">';

  // =====================================================
  // WORD BANK
  // =====================================================

  htmlStmt += '<div class="gdd_word_bank">';

  for (var i = 0; i < aObj.words.length; i++) {
    var word = aObj.words[i];

    var defaultClass = word.defaultPlaced ? " gdd_used" : "";

    htmlStmt +=
      "<div " +
      'class="gdd_word' +
      defaultClass +
      '" ' +
      'data-word-id="' +
      word.id +
      '">' +
      word.text +
      "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // DROP ZONES
  // =====================================================

  htmlStmt += '<div class="gdd_groups">';

  for (var g = 0; g < aObj.groups.length; g++) {
    var group = aObj.groups[g];

    htmlStmt +=
      '<div class="gdd_drop_group" ' + 'data-group-id="' + group.id + '">';

    htmlStmt += '<div class="gdd_group_title">' + group.title + "</div>";

    htmlStmt += '<div class="gdd_drop_area">';

    // =================================================
    // DEFAULT PLACED WORDS
    // =================================================

    for (var w = 0; w < aObj.words.length; w++) {
      var defaultWord = aObj.words[w];

      if (
        defaultWord.defaultPlaced === true &&
        defaultWord.group === group.id
      ) {
        htmlStmt +=
          '<div class="gdd_dropped_word gdd_default_word" ' +
          'data-word-id="' +
          defaultWord.id +
          '">' +
          defaultWord.text +
          "</div>";
      }
    }

    htmlStmt += "</div>";

    htmlStmt += '<div class="gdd_group_feedback">';

    htmlStmt +=
      '<div class="gdd_group_tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="gdd_group_cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
