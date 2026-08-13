function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj !== "undefined" && aObj != null) {

    /* =========================================
       Back Button
    ========================================= */

    htmlStmt +=
      '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

    htmlStmt += '<a href="">';

    htmlStmt +=
      '<img src="../images/icons/back_btn.png" />';

    htmlStmt += "</a>";

    htmlStmt += "</div>";


    /* =========================================
       Next Button
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


    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';


    htmlStmt +=
      '<div class="q-type-img-container">';


    htmlStmt +=
      '<img class="mainTitle" src="' +
      aObj.mainTitle +
      '">';


    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== ""
    ) {

      var iconRight = "0px";

      if (
        aObj.mainTitleIconPos &&
        aObj.mainTitleIconPos.right
      ) {
        iconRight = aObj.mainTitleIconPos.right;
      }


      htmlStmt +=
        '<img class="mainTitleIcon" ' +
        'src="' +
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
        ';">';
    }


    htmlStmt += "</div>";

    htmlStmt += "</div>";


    /* =========================================
       Activity Heading
    ========================================= */

    htmlStmt +=
      '<div class="activityHeading">';


    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.subTitleAudio +
      '">';


    htmlStmt +=
      "<div class='page_sub_title'>";


    htmlStmt +=
      "<p class='shopping_title'>" +
      aObj.subTitleTextLeft +
      "</p>";


    htmlStmt +=
      "<p class='subTitleTextRight shopping_instruction'>" +
      aObj.subTitleTextRight +
      "</p>";


    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";


    /* =========================================
       Body
    ========================================= */

    htmlStmt +=
      '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont">';

    htmlStmt +=
      '<div class="screen_elements">';

    htmlStmt +=
      '<div class="group_elm">';


    /* =========================================
       Letter Paper
    ========================================= */

    htmlStmt +=
      '<div class="shopping_letter" ' +
      'style="background-image:url(\'' +
      aObj.backgroundImage +
      '\');">';


    /* =========================================
       Address Section
    ========================================= */

    htmlStmt +=
      '<div class="address_section">';

    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input address_line address_line_1" ' +
      'maxlength="100" autocomplete="off">';

    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input address_line address_line_2" ' +
      'maxlength="100" autocomplete="off">';

    htmlStmt +=
      "</div>";


    /* =========================================
       Address Brace
    ========================================= */

    htmlStmt +=
      '<div class="address_brace">{</div>';


    /* =========================================
       Date
    ========================================= */

    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input letter_date" ' +
      'maxlength="50" autocomplete="off">';


    /* =========================================
       Dear
    ========================================= */

    htmlStmt +=
      '<div class="dear_text">Dear</div>';

    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input letter_receiver" ' +
      'maxlength="100" autocomplete="off">';

    htmlStmt +=
      '<div class="receiver_comma">,</div>';


    /* =========================================
       Letter Body Lines
    ========================================= */

    htmlStmt +=
      '<div class="letter_body_lines">';

    for (var line = 0; line < 7; line++) {

      htmlStmt +=
        '<input type="text" ' +
        'class="letter_input body_line body_line_' +
        (line + 1) +
        '" ' +
        'data-line="' +
        (line + 1) +
        '" ' +
        'maxlength="130" ' +
        'autocomplete="off">';
    }

    htmlStmt += "</div>";


    /* =========================================
       Paragraph Brace
    ========================================= */

    htmlStmt +=
      '<div class="paragraph_brace">{</div>';


    /* =========================================
       Closing
    ========================================= */

    htmlStmt +=
      '<div class="sincerely_text">Sincerely,</div>';


    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input letter_closing" ' +
      'maxlength="70" autocomplete="off">';


    /* =========================================
       Signature
    ========================================= */

    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input letter_signature" ' +
      'maxlength="70" autocomplete="off">';


    /* =========================================
       Print Name
    ========================================= */

    htmlStmt +=
      '<input type="text" ' +
      'class="letter_input letter_print_name" ' +
      'maxlength="70" autocomplete="off">';


    /* =========================================
       Right Labels
    ========================================= */

    htmlStmt +=
      '<div class="letter_label label_address">' +
      aObj.labels.address +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_address">←</div>';


    htmlStmt +=
      '<div class="letter_label label_date">' +
      aObj.labels.date +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_date">←</div>';


    htmlStmt +=
      '<div class="letter_label label_receiver">' +
      aObj.labels.receiver +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_receiver">←</div>';


    htmlStmt +=
      '<div class="letter_label label_paragraph">' +
      aObj.labels.paragraph +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_paragraph">←</div>';


    htmlStmt +=
      '<div class="letter_label label_closing">' +
      aObj.labels.closing +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_closing">←</div>';


    htmlStmt +=
      '<div class="letter_label label_signature">' +
      aObj.labels.signature +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_signature">←</div>';


    htmlStmt +=
      '<div class="letter_label label_print_name">' +
      aObj.labels.printName +
      "</div>";


    htmlStmt +=
      '<div class="letter_arrow arrow_print_name">←</div>';


    /* =========================================
       Close Paper
    ========================================= */

    htmlStmt += "</div>";


    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }


  console.log("htmlStmt >> shopping writing built");


  $(".activity_area").append(htmlStmt);


  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}