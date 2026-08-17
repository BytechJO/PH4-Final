function buildPronounWriteBody(aObj) {
  var htmlStmt = "";

  if (!aObj) {
    return;
  }

  // =========================================================
  // NAVIGATION
  // =========================================================

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/back_btn.png" />' +
    "</a>" +
    "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
    '<a href="">' +
    '<img src="../images/icons/next_btn.png" />' +
    "</a>" +
    "</div>";

  // =========================================================
  // HEADER
  // =========================================================

  htmlStmt += '<div class="act_head_group justify-content-center">';

  htmlStmt +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  htmlStmt += '<div class="q-type-img-container">';

  if (aObj.mainTitle) {
    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
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

  // =========================================================
  // CONTENT
  // =========================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="pronoun_write_page">';

  // =========================================================
  // LEFT SIDE - SENTENCES
  // =========================================================

  htmlStmt += '<div class="pronoun_write_sentences">';

  for (var i = 0; i < aObj.sentences.length; i++) {
    htmlStmt +=
      '<div class="pronoun_write_sentence">' +
      '<span class="sentence_number">' +
      (i + 1) +
      "</span>" +
      '<span class="sentence_text">' +
      aObj.sentences[i] +
      "</span>" +
      "</div>";
  }

  htmlStmt += "</div>";

  // =========================================================
  // RIGHT SIDE - BOXES
  // =========================================================

  htmlStmt += '<div class="pronoun_write_boxes">';

  for (var b = 0; b < aObj.boxes.length; b++) {
    var box = aObj.boxes[b];

    htmlStmt +=
      '<div class="pronoun_write_box" ' + 'data-box-index="' + b + '">';

    htmlStmt += '<div class="pronoun_write_box_title">' + box.title + "</div>";

    htmlStmt += '<div class="pronoun_inputs_wrap">';

    for (var x = 0; x < box.inputs; x++) {
      htmlStmt += '<div class="pronoun_input_row">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'class="pronoun_write_input" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        "/>";

      htmlStmt += '<div class="pronoun_result icon_wrap_holder">';

      htmlStmt += '<div class="icon_wrap">';

      htmlStmt +=
        '<div class="pronoun_tick tick">' +
        '<img src="../images/icons/check_btn.png">' +
        "</div>";

      htmlStmt +=
        '<div class="pronoun_cross cross">' +
        '<img src="../images/icons/cross_btn.png">' +
        "</div>";

      htmlStmt += "</div>";
      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
