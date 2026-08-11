function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    /* =========================================
           NAVIGATION
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
           HEADER
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
           SUB TITLE
        ========================================= */

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';

    htmlStmt += '<div class="page_sub_title">';

    htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
    }

    htmlStmt += "<br>";

    htmlStmt +=
      '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    /* =========================================
           OPTIONS
        ========================================= */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont d-flex justify-content-center align-items-center">';

    /* =========================================
           SLIDES
        ========================================= */

    if (aObj.slides != undefined && aObj.slides.length > 0) {
      for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
        var slide = aObj.slides[slideIndex];

        if (slide.layout == "grid_columns") {
          var curIndex = 0;

          var audioArry = slide.audio;

          var wordArray = slide.word;

          /* =========================================
                       GRID CONTAINER
                    ========================================= */

          htmlStmt +=
            '<div class="d-flex justify-content-center align-items-center grid_columns_container ' +
            slide.parent_class_name +
            '">';

          htmlStmt += '<div class="col_grid_container">';

          htmlStmt +=
            '<div class="snap_group_all cont_group" style="' +
            slide.group_styles +
            '">';

          var ImagePos = slide.imagePlacePos;

          if (ImagePos != undefined) {
            for (var snapIndex = 0; snapIndex < ImagePos.length; snapIndex++) {
              htmlStmt +=
                '<div class="snap_group_' +
                Number(snapIndex + 1) +
                ' row mx-0">';

              for (
                var imgIndex = 0;
                imgIndex < ImagePos[snapIndex].colData.length;
                imgIndex++
              ) {
                htmlStmt +=
                  '<div class="col-12 col-md-' +
                  ImagePos[snapIndex].colWidth[imgIndex] +
                  ' col_card">';

                if (ImagePos[snapIndex].colData[imgIndex] != 0) {
                  var currentWord = wordArray[curIndex];

                  var currentAudio =
                    audioArry && audioArry[curIndex] ? audioArry[curIndex] : "";

                  htmlStmt +=
                    '<div class="snap_card " ' +
                    'data-slideNum="' +
                    Number(slideIndex + 1) +
                    '" ' +
                    'data-audio="' +
                    currentAudio +
                    '" ' +
                    'data-onaudioplay="">';

                  /* ==================================
                                       IMAGE
                                    ================================== */

                  if (currentWord.trim().indexOf("<img") === 0) {
                    htmlStmt += currentWord;
                  } else {

                  /* ==================================
                                       TEXT + MCQ
                                    ================================== */
                    htmlStmt +=
                      '<div class="ss_word ss_t_' + Number(curIndex + 1) + '">';

                    htmlStmt +=
                      '<div class="ss_text background_audio reading_mcq_text">';

                    htmlStmt += buildInlineMcqText(currentWord);

                    htmlStmt += "</div>";

                    htmlStmt += "</div>";
                  }

                  htmlStmt += "</div>";

                  curIndex++;
                }

                htmlStmt += "</div>";
              }

              htmlStmt += "</div>";
            }
          }

          htmlStmt += "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }
      }
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* ======================================================
   BUILD INLINE MCQ
====================================================== */

function buildInlineMcqText(text) {
  if (!text) {
    return "";
  }

  /*
        Pattern:

        [[mcq:1|too many|not enough]]

        1          = question number
        too many   = option 1
        not enough = option 2
    */

  var regex = /\[\[mcq:(\d+)\|([^|]+)\|([^\]]+)\]\]/g;

  return text.replace(
    regex,

    function (match, questionNumber, option1, option2) {
      var html = "";

      /* ===========================
               QUESTION
            =========================== */

      html +=
        "<span " +
        'class="que inline_mcq_que" ' +
        'id="que_' +
        questionNumber +
        '" ' +
        'data-qno="' +
        questionNumber +
        '">';

      /* ===========================
               PICKS
            =========================== */

      html += '<span class="picks_grp inline_picks">';

      /* OPTION 1 */

      html +=
        "<span " +
        'id="pick_' +
        questionNumber +
        '_1" ' +
        'class="pick inline_pick">';

      html += '<span class="txt">' + option1 + "</span>";

      html += "</span>";

      /* SLASH */

      html += '<span class="mcq_slash"> / </span>';

      /* OPTION 2 */

      html +=
        "<span " +
        'id="pick_' +
        questionNumber +
        '_2" ' +
        'class="pick inline_pick">';

      html += '<span class="txt">' + option2 + "</span>";

      html += "</span>";

      html += "</span>";

      /* ===========================
               CHECK / CROSS
            =========================== */

      html += '<span class="icon_wrap inline_icon_wrap">';

      html +=
        '<span class="tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</span>";

      html +=
        '<span class="cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</span>";

      html += "</span>";

      html += "</span>";

      return html;
    },
  );
}
