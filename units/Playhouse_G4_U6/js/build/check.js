function buildCheckBody(aObj) {
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

  /* Main title */

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

  /* =====================================================
     Instruction
  ===================================================== */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
    }
  }

  if (aObj.subTitleTextRight != undefined && aObj.subTitleTextRight != "") {
    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     CONTENT
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont check_all_cont">';

  htmlStmt += '<div class="check_groups">';

  /* =====================================================
     BUILD GROUPS
  ===================================================== */

  for (var groupIndex = 0; groupIndex < aObj.groups.length; groupIndex++) {
    var group = aObj.groups[groupIndex];

    htmlStmt +=
      '<div class="check_group" ' + 'data-group="' + groupIndex + '">';

    /* =========================================
       Picture Box
    ========================================= */

    htmlStmt += '<div class="check_picture_box">';

    for (var picIndex = 0; picIndex < group.pictures.length; picIndex++) {
      var picture = group.pictures[picIndex];

      htmlStmt +=
        '<div class="check_picture_item" ' +
        'data-group="' +
        groupIndex +
        '" ' +
        'data-index="' +
        picIndex +
        '" ' +
        'data-id="' +
        picture.id +
        '" ' +
        'data-word="' +
        picture.word +
        '" ' +
        'data-correct="' +
        picture.correct +
        '">';

      htmlStmt +=
        '<img class="check_picture" ' +
        'src="' +
        picture.image +
        '" ' +
        'alt="' +
        picture.word +
        '">';

      /* selected red ✓ */

      htmlStmt += '<div class="picture_select_tick">' + "✓" + "</div>";

      /* validation */

      htmlStmt += '<div class="picture_validation">';

      htmlStmt +=
        '<img class="picture_correct" ' +
        'src="../images/icons/check_btn.png">';

      htmlStmt +=
        '<img class="picture_wrong" ' + 'src="../images/icons/cross_btn.png">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    /* =========================================
       Writing Line
    ========================================= */

    htmlStmt += '<div class="check_answer_row">';

    htmlStmt +=
      "<input " +
      'class="check_answer_input" ' +
      'type="text" ' +
      'data-group="' +
      groupIndex +
      '" ' +
      'maxlength="50" ' +
      'autocomplete="off" ' +
      'spellcheck="false">';

    htmlStmt += '<div class="answer_validation">';

    htmlStmt +=
      '<img class="answer_correct" ' + 'src="../images/icons/check_btn.png">';

    htmlStmt +=
      '<img class="answer_wrong" ' + 'src="../images/icons/cross_btn.png">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     APPEND
  ===================================================== */

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> Check Activity Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
