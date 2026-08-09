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

  htmlStmt +=
    '<img class="mainTitle" src="' +
    aObj.mainTitle +
    '">';


  if (
    aObj.mainTitleIcon != undefined &&
    aObj.mainTitleIcon != ""
  ) {
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
     ACTIVITY HEADING
  ===================================================== */

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';


  if (
    aObj.title_position != undefined &&
    aObj.title_position == "under"
  ) {
    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt +=
      "<p> " +
      aObj.subTitleTextLeft +
      " </p>";


    for (
      var sicons = 0;
      sicons < aObj.subTitleIcons.length;
      sicons++
    ) {
      htmlStmt +=
        "<img src='" +
        aObj.subTitleIcons[sicons] +
        "'/>";
    }


    htmlStmt +=
      "<br><p class='subTitleTextRight'>" +
      aObj.subTitleTextRight +
      " </p>";

    htmlStmt += "</div>";
  } else {
    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt +=
      "<p> " +
      aObj.subTitleTextLeft +
      " </p>";


    for (
      var sicons = 0;
      sicons < aObj.subTitleIcons.length;
      sicons++
    ) {
      htmlStmt +=
        "<img src='" +
        aObj.subTitleIcons[sicons] +
        "'/>";
    }


    htmlStmt +=
      "<p class='subTitleTextRight'>" +
      aObj.subTitleTextRight +
      " </p>";

    htmlStmt += "</div>";
  }


  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";


  /* =====================================================
     ACTIVITY
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-center align-items-center">';

  htmlStmt +=
    '<div class="conversation_board_all">';

  htmlStmt +=
    '<div class="conversation_board_grid">';


  /* =====================================================
     BOARD
  ===================================================== */

  for (
    var i = 0;
    i < aObj.cells.length;
    i++
  ) {
    var cell =
      aObj.cells[i];


    /* =================================================
       EMPTY
    ================================================= */

    if (
      cell.type === "empty"
    ) {
      htmlStmt +=
        '<div class="board_cell board_empty"></div>';

      continue;
    }


    /* =================================================
       RULES
    ================================================= */

    if (
      cell.type === "rules"
    ) {
      htmlStmt +=
        '<div class="board_rules">';


      for (
        var r = 0;
        r < aObj.rules.length;
        r++
      ) {
        htmlStmt +=
          '<div class="rule_line">' +
          aObj.rules[r] +
          "</div>";
      }


      htmlStmt += "</div>";

      continue;
    }


    /* =================================================
       NORMAL CELL
    ================================================= */

    htmlStmt +=
      '<div class="board_cell board_' +
      cell.type +
      '">';


    /* =================================================
       IMAGE
    ================================================= */

    if (
      cell.image &&
      aObj.images &&
      aObj.images[cell.image]
    ) {
      htmlStmt +=
        '<div class="board_cell_image">';

      htmlStmt +=
        '<img src="' +
        aObj.images[cell.image] +
        '">';

      htmlStmt += "</div>";
    }


    /* =================================================
       TEXT
    ================================================= */

    if (
      cell.text != undefined &&
      cell.text != ""
    ) {
      htmlStmt +=
        '<div class="board_cell_text">' +
        cell.text +
        "</div>";
    }


    htmlStmt += "</div>";
  }


  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";


  $(".activity_area").append(
    htmlStmt
  );


  setLoadedStatus(
    getCurrFileOrDirectory(
      "file"
    )
  );
}