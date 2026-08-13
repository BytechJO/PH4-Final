function buildConversationBoardBody(aObj) {
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
     ACTIVITY
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="bagful_page">';

  /* =====================================================
     TITLE
  ===================================================== */

  htmlStmt += '<div class="bagful_title_row">';

  htmlStmt += '<div class="bagful_title">' + aObj.pageTitle + "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     INTRO
  ===================================================== */

  htmlStmt += '<div class="bagful_intro">' + aObj.intro + "</div>";

  /* =====================================================
     SUPPLIES GRID
  ===================================================== */

  htmlStmt += '<div class="bagful_supplies">';

  /* LEFT */

  htmlStmt += '<div class="supplies_column">';

  htmlStmt +=
    '<div class="supplies_title red_title">' +
    aObj.supplies.leftTitle +
    "</div>";

  htmlStmt += '<div class="supplies_list">';

  for (var i = 0; i < aObj.supplies.leftItems.length; i++) {
    htmlStmt +=
      '<div class="supply_item">' + aObj.supplies.leftItems[i] + "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* RIGHT */

  htmlStmt += '<div class="supplies_column">';

  htmlStmt +=
    '<div class="supplies_title red_title">' +
    aObj.supplies.rightTitle +
    "</div>";

  htmlStmt += '<div class="supplies_list">';

  for (var j = 0; j < aObj.supplies.rightItems.length; j++) {
    htmlStmt +=
      '<div class="supply_item">' + aObj.supplies.rightItems[j] + "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  /* =====================================================
   STEP ONE + STEP TWO
===================================================== */

  htmlStmt += '<div class="steps_one_two">';

  /* IMAGE */

  htmlStmt += '<div class="step_image girl_image">';

  htmlStmt += '<img src="' + aObj.images.girl + '" />';

  htmlStmt += "</div>";

  /* TEXTS */

  htmlStmt += '<div class="steps_one_two_content">';

  /* STEP ONE */

  htmlStmt += '<div class="step_content step_one_content">';

  htmlStmt +=
    '<span class="step_title step_title_' +
    aObj.steps[0].color +
    '">' +
    aObj.steps[0].title +
    "</span>";
  htmlStmt += '<span class="step_text">' + aObj.steps[0].text + "</span>";

  htmlStmt += "</div>";

  /* STEP TWO */

  htmlStmt += '<div class="step_content step_two_content">';

  htmlStmt +=
    '<span class="step_title step_title_' +
    aObj.steps[1].color +
    '">' +
    aObj.steps[1].title +
    "</span>";
  htmlStmt += '<span class="step_text">' + aObj.steps[1].text + "</span>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
   STEP THREE + STEP FOUR
===================================================== */

  htmlStmt += '<div class="steps_three_four">';

  /* =================================
   TEXTS
================================= */

  htmlStmt += '<div class="steps_three_four_content">';

  /* STEP THREE */

  htmlStmt += '<div class="step_content step_three_content">';

  htmlStmt +=
    '<span class="step_title step_title_' +
    aObj.steps[2].color +
    '">' +
    aObj.steps[2].title +
    "</span>";
  htmlStmt += '<span class="step_text">' + aObj.steps[2].text + "</span>";

  htmlStmt += "</div>";

  /* STEP FOUR */

  htmlStmt += '<div class="step_content step_four_content">';

  htmlStmt +=
    '<span class="step_title step_title_' +
    aObj.steps[3].color +
    '">' +
    aObj.steps[3].title +
    "</span>";
  htmlStmt += '<span class="step_text">' + aObj.steps[3].text + "</span>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =================================
   IMAGE
================================= */

  htmlStmt += '<div class="step_image step_three_four_image">';

  htmlStmt += '<img src="' + aObj.images.frogTop + '" />';

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     BOTTOM ANIMALS
  ===================================================== */

  htmlStmt += '<div class="animals_grid">';

  /* LEFT */

  htmlStmt += '<div class="animal_group animal_left">';

  htmlStmt += '<div class="animal_picture">';

  htmlStmt += '<img src="' + aObj.images.animalsLeft + '" />';

  htmlStmt += "</div>";

  htmlStmt += '<div class="animal_caption">' + aObj.captions.left + "</div>";

  htmlStmt += "</div>";

  /* CENTER */

  htmlStmt += '<div class="animal_group animal_center">';

  htmlStmt += '<div class="animal_picture">';

  htmlStmt += '<img src="' + aObj.images.animalsCenter + '" />';

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* RIGHT */

  htmlStmt += '<div class="animal_group animal_right">';

  htmlStmt += '<div class="animal_picture">';

  htmlStmt += '<img src="' + aObj.images.animalsRight + '" />';

  htmlStmt += "</div>";

  htmlStmt += '<div class="animal_caption">' + aObj.captions.right + "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     CLOSE
  ===================================================== */

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
