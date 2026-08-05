function buildListenTchBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    console.error("listen_tch_data is missing.");

    return;
  }

  /* ======================================================
     Navigation
  ====================================================== */

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    "sub_footer_icon_left " +
    'subFooterNav backNav mx-1">' +
    '<a href="">' +
    "<img " +
    'src="../images/icons/back_btn.png" ' +
    'alt="Back">' +
    "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon ' +
    "sub_footer_icon_right " +
    'subFooterNav nextNav mx-1">' +
    '<a href="">' +
    "<img " +
    'src="../images/icons/next_btn.png" ' +
    'alt="Next">' +
    "</a>" +
    "</div>";

  /* ======================================================
     Heading
  ====================================================== */

  htmlStmt += '<div class="act_head_group ' + 'justify-content-center">';

  if (aObj.mainTitle !== undefined && aObj.mainTitle !== "") {
    htmlStmt +=
      "<div " +
      'class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">' +
      '<div class="q-type-img-container">' +
      "<img " +
      'class="mainTitle" ' +
      'src="' +
      aObj.mainTitle +
      '" ' +
      'alt="">';

    if (aObj.mainTitleIcon !== undefined && aObj.mainTitleIcon !== "") {
      htmlStmt +=
        "<img " +
        'class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        (aObj.mainTitleIconPos && aObj.mainTitleIconPos.right
          ? aObj.mainTitleIconPos.right
          : "0px") +
        ';" ' +
        'alt="">';
    }

    htmlStmt += "</div>" + "</div>";
  }

  htmlStmt +=
    '<div class="activityHeading">' +
    "<div " +
    'class="audioIcon off contant ' +
    'audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">' +
    '<div class="page_sub_title ' +
    'tch-page-title">' +
    '<div class="title-line">' +
    '<p class="subTitleTextLeft">' +
    (aObj.subTitleTextLeft || "") +
    "</p>";

  if (Array.isArray(aObj.subTitleIcons)) {
    for (
      var iconIndex = 0;
      iconIndex < aObj.subTitleIcons.length;
      iconIndex++
    ) {
      if (aObj.subTitleIcons[iconIndex] !== "") {
        htmlStmt +=
          "<img " +
          'class="subTitleIcon ' +
          'tch-headphones" ' +
          'src="' +
          aObj.subTitleIcons[iconIndex] +
          '" ' +
          'alt="">';
      }
    }
  }

  htmlStmt +=
    "</div>" +
    '<p class="subTitleTextRight">' +
    (aObj.subTitleTextRight || "") +
    "</p>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  /* ======================================================
     Activity
  ====================================================== */

  htmlStmt +=
    '<div class="options ' +
    'cont_ht_sf mx-auto">' +
    '<div class="all_cont ' +
    'tch-all-cont">' +
    '<div class="tch-activity">';

  /* ======================================================
     Words
  ====================================================== */

  htmlStmt +=
    "<div " +
    'class="tch-word-bank" ' +
    'role="group" ' +
    'aria-label="Words">';

  if (Array.isArray(aObj.words)) {
    for (var wordIndex = 0; wordIndex < aObj.words.length; wordIndex++) {
      var currentWord = aObj.words[wordIndex];

      htmlStmt +=
        '<div class="tch-word-item">' +
        "<button " +
        'type="button" ' +
        'class="tch-word" ' +
        'data-word="' +
        currentWord +
        '" ' +
        'aria-pressed="false">' +
        '<span class="word-text">' +
        currentWord +
        "</span>" +
        "</button>" +
        /*
            أيقونات نتيجة الكلمة.
            تظهر فقط بعد الضغط على Check.
          */

        "<div " +
        'class="word-result" ' +
        'aria-hidden="true">' +
        '<span class="word-result-tick">' +
        "<img " +
        'src="../images/icons/check_btn.png" ' +
        'alt="Correct">' +
        "</span>" +
        '<span class="word-result-cross">' +
        "<img " +
        'src="../images/icons/cross_btn.png" ' +
        'alt="Wrong">' +
        "</span>" +
        "</div>" +
        "</div>";
    }
  }

  htmlStmt += "</div>";

  /* ======================================================
     Answer Columns
  ====================================================== */

  htmlStmt += '<div class="tch-columns">';

  if (Array.isArray(aObj.columns)) {
    for (
      var columnIndex = 0;
      columnIndex < aObj.columns.length;
      columnIndex++
    ) {
      var column = aObj.columns[columnIndex];

      htmlStmt +=
        "<div " +
        'class="tch-column que" ' +
        'data-qno="' +
        (columnIndex + 1) +
        '" ' +
        'data-column="' +
        column.key +
        '">' +
        '<div class="column-tab">' +
        column.title +
        "</div>" +
        '<div class="column-body">';

      for (var slotIndex = 0; slotIndex < column.slots; slotIndex++) {
        htmlStmt +=
          '<div class="answer-line">' +
          "<input " +
          'type="text" ' +
          'class="tch-answer-input" ' +
          'autocomplete="off" ' +
          'spellcheck="false" ' +
          'data-column="' +
          column.key +
          '" ' +
          'aria-label="' +
          column.title +
          " answer " +
          (slotIndex + 1) +
          '">' +
          "</div>";
      }

      /* نفس أيقونات المشروع القديمة */

      htmlStmt +=
        '<div class="icon_wrap_holder">' +
        '<div class="icon_wrap">' +
        '<div class="tick">' +
        "<img " +
        'src="../images/icons/check_btn.png" ' +
        'alt="Correct">' +
        "</div>" +
        '<div class="cross">' +
        "<img " +
        'src="../images/icons/cross_btn.png" ' +
        'alt="Wrong">' +
        "</div>" +
        "</div>" +
        "</div>";

      htmlStmt += "</div>" + "</div>";
    }
  }

  htmlStmt += "</div>" + "</div>" + "</div>" + "</div>";

  $(".activity_area").append(htmlStmt);

  if (typeof setLoadedStatus === "function") {
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}
