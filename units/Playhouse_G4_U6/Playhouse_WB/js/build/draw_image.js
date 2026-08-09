function buildDrawImageBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj == null) {
    return;
  }

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
     Header
  ========================================= */

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

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================
     Activity
  ========================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont draw_image_all_cont">';

  htmlStmt += '<div class="draw_image_grid">';

  for (var i = 0; i < aObj.words.length; i++) {
    htmlStmt += '<div class="draw_image_card" data-index="' + i + '">';

    /* drawing/upload area */

    htmlStmt += '<div class="draw_image_area">';

    htmlStmt += '<canvas class="draw_image_canvas"></canvas>';

    htmlStmt += '<img class="draw_uploaded_image" src="" alt="">';

    htmlStmt +=
      "<input " +
      'type="file" ' +
      'class="draw_image_file" ' +
      'accept="image/*" ' +
      "hidden>";

    /* controls */

    htmlStmt += '<div class="draw_card_tools">';

    htmlStmt +=
      '<button type="button" class="draw_mode_btn">' +
      '<i class="fas fa-pencil-alt"></i>' +
      "</button>";

    htmlStmt +=
      '<button type="button" class="upload_image_btn">' +
      '<i class="fas fa-image"></i>' +
      "</button>";

    htmlStmt +=
      '<button type="button" class="clear_card_btn">' +
      '<i class="fas fa-trash"></i>' +
      "</button>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* word */

    htmlStmt += '<div class="draw_word_label">' + aObj.words[i] + "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> Draw Image Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
