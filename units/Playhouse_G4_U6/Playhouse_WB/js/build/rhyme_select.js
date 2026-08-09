function buildRhymeSelectBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj == null
  ) {
    return;
  }

  /* =====================================================
     NAVIGATION
  ===================================================== */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";


  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/next_btn.png" />';

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

  /* =====================================================
     ACTIVITY
  ===================================================== */

  htmlStmt +=
    '<div class="options cont_ht_sf">';

  htmlStmt +=
    '<div class="rhyme_all_cont">';

  htmlStmt +=
    '<div class="rhyme_groups">';


  /* =====================================================
     GROUP LOOP
  ===================================================== */

  for (
    var g = 0;
    g < aObj.groups.length;
    g++
  ) {
    var group =
      aObj.groups[g];

    htmlStmt +=
      '<div class="rhyme_group" ' +
      'data-group="' +
      g +
      '">';


    /* =================================================
       GROUP LABEL
    ================================================= */

    htmlStmt +=
      '<div class="rhyme_group_label">' +
      group.label +
      "</div>";


    /* =================================================
       ITEMS
    ================================================= */

    htmlStmt +=
      '<div class="rhyme_items">';


    for (
      var i = 0;
      i < group.items.length;
      i++
    ) {
      var item =
        group.items[i];

      htmlStmt +=
        '<div class="rhyme_item" ' +
        'data-group="' +
        g +
        '" ' +
        'data-index="' +
        i +
        '">';


      /* =============================================
         IMAGE
      ============================================= */

      htmlStmt +=
        '<div class="rhyme_image_wrap">';

      htmlStmt +=
        '<img ' +
        'class="rhyme_image" ' +
        'src="' +
        item.image +
        '" ' +
        'alt="">';

      htmlStmt += "</div>";


      /* =============================================
         WORD AREA
      ============================================= */

      htmlStmt +=
        '<div class="rhyme_word_area">';

      htmlStmt +=
        '<div class="rhyme_circle_target">';


      /* =============================================
         READONLY
      ============================================= */

      if (
        item.readonly === true
      ) {
        htmlStmt +=
          '<span class="rhyme_default_word">' +
          item.defaultText +
          "</span>";
      } else {
        /* PREFIX */

        htmlStmt +=
          '<span class="rhyme_prefix">' +
          item.prefix +
          "</span>";


        /* INPUT */

        htmlStmt +=
          '<input ' +
          'type="text" ' +
          'class="rhyme_input" ' +
          'data-group="' +
          g +
          '" ' +
          'data-index="' +
          i +
          '" ' +
          'maxlength="20" ' +
          'autocomplete="off">';
      }

      htmlStmt += "</div>";


      /* =============================================
         SITE TICK / CROSS
      ============================================= */

      if (
        item.readonly !== true
      ) {
        htmlStmt +=
          '<div class="icon_wrap_holder rhyme_icon_holder">';

        htmlStmt +=
          '<div class="icon_wrap rhyme_result">';

        htmlStmt +=
          '<div class="tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '<div class="cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }


      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }


    htmlStmt += "</div>";


    /* =================================================
       GROUP RESULT
    ================================================= */

    htmlStmt +=
      '<div class="icon_wrap_holder rhyme_group_icon_holder">';

    htmlStmt +=
      '<div class="icon_wrap rhyme_group_result">';

    htmlStmt +=
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>";

    htmlStmt +=
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";


    htmlStmt += "</div>";
  }


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