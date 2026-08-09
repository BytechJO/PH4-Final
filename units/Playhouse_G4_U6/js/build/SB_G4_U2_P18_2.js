function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj != null) {
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

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    htmlStmt +=
      "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    /* =========================================
       Body
    ========================================= */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="screen_elements">';

    htmlStmt += '<div class="group_elm">';

    /* =========================================
       Side kids image
    ========================================= */

    htmlStmt += '<div class="memory_side_image">';

    htmlStmt += '<img src="' + aObj.sideImage + '">';

    htmlStmt += "</div>";

    /* =========================================
       Notebook
    ========================================= */

    htmlStmt +=
      '<div class="memory_book" ' +
      "style=\"background-image:url('" +
      aObj.backgroundImage +
      "')\">";

    htmlStmt += '<div class="memory_title">' + aObj.albumTitle + "</div>";

    /* =========================================
       Prompts
    ========================================= */

    htmlStmt += '<div class="memory_prompts">';

    for (var i = 0; i < aObj.prompts.length; i++) {
      var prompt = aObj.prompts[i];

      htmlStmt += '<div class="memory_row" data-index="' + i + '">';

      /* أول سطر */
      htmlStmt += '<div class="memory_line memory_line_first">';

      htmlStmt += '<span class="memory_prompt">' + prompt.text + "</span>";

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="memory_input memory_input_1" ' +
        'data-group="' +
        i +
        '" ' +
        'data-input="1" ' +
        'maxlength="100" ' +
        'autocomplete="off">';

      htmlStmt += "</div>";

      /* ثاني سطر */
      htmlStmt += '<div class="memory_line memory_line_second">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="memory_input memory_input_2" ' +
        'data-group="' +
        i +
        '" ' +
        'data-input="2" ' +
        'maxlength="100" ' +
        'autocomplete="off">';

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> writing Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
