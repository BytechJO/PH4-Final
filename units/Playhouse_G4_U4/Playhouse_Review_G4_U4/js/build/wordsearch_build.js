function buildWordSearchBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null
  ) {
    return;
  }

  /* =========================================
     Back navigation
  ========================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/back_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";


  /* =========================================
     Next navigation
  ========================================= */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/next_btn.png" />';

  htmlStmt += "</a>";

  htmlStmt += "</div>";


  /* =========================================
     Heading
  ========================================= */

  htmlStmt +=
    '<div class="act_head_group justify-content-center">';


  /* Main title image */

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      escapeWordSearchAttribute(
        aObj.mainTitleAudio || ""
      ) +
      '">';

    htmlStmt +=
      '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" src="' +
      escapeWordSearchAttribute(
        aObj.mainTitle
      ) +
      '">';

    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== null &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "0px";

      if (
        aObj.mainTitleIconPos &&
        aObj.mainTitleIconPos.right !== undefined
      ) {
        iconRight =
          aObj.mainTitleIconPos.right;
      }

      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        escapeWordSearchAttribute(
          aObj.mainTitleIcon
        ) +
        '" ' +
        'style="right:' +
        escapeWordSearchAttribute(
          iconRight
        ) +
        ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }


  /* Subtitle */

  htmlStmt +=
    '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    escapeWordSearchAttribute(
      aObj.subTitleAudio || ""
    ) +
    '">';

  htmlStmt +=
    '<div class="page_sub_title wordsearch_title">';

  htmlStmt +=
    "<p>" +
    (aObj.subTitleTextLeft || "") +
    "</p>";

  htmlStmt +=
    "<p>" +
    (aObj.subTitleTextRight || "") +
    "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";


  /* =========================================
     Activity body
  ========================================= */

  /*
    data-css_words لازم يكون على .options
    لأن ملف WordSearch يقرأه منها.
  */

  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto" ' +
    'data-css_words="none">';

  htmlStmt +=
    '<div class="all_cont wordsearch_all_cont">';

  htmlStmt +=
    '<div class="wordsearch_content">';


  /* =========================================
     Left section
  ========================================= */

  htmlStmt +=
    '<div class="wordsearch_left">';


  /*
    ملف الـActivity الأصلي يبني الكلمات
    داخل هذا العنصر.
  */

  htmlStmt +=
    '<div class="wordlist"></div>';


  /* Side image */

  if (
    aObj.image !== undefined &&
    aObj.image !== null &&
    aObj.image !== "" &&
    aObj.image !== "no"
  ) {
    htmlStmt +=
      '<div class="wordsearch_image">';

    htmlStmt +=
      '<img src="' +
      escapeWordSearchAttribute(
        aObj.image
      ) +
      '" alt="">';

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";


  /* =========================================
     Word matrix
  ========================================= */

  htmlStmt +=
    '<div class="wordmatrix_holder">';

  /*
    ملف WordSearch الأصلي يبني الصفوف
    والحروف داخل هذا العنصر.
  */

  htmlStmt +=
    '<div class="wordmatrix"></div>';

  htmlStmt += "</div>";


  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";


  /* =========================================
     Mobile word-list button
  ========================================= */

  htmlStmt +=
    '<div class="wordlist_but d-none">';

  htmlStmt +=
    '<img src="../images/icons/key_icon.png" alt="words">';

  htmlStmt += "</div>";


  console.log(
    "htmlStmt >> WordSearch Built"
  );

  $(".activity_area").append(
    htmlStmt
  );

  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}


/* =========================================
   Escape HTML attributes
========================================= */

function escapeWordSearchAttribute(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}