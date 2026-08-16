function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

  /* =========================================================
       Navigation
    ========================================================= */

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

  /* =========================================================
       Header
    ========================================================= */

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

  htmlStmt += '<div class="page_sub_title">';

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons.length > 0) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += '<img src="' + aObj.subTitleIcons[sicons] + '"/>';
      }
    }
  }

  htmlStmt += '<p class="subTitleTextRight">' + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================================
       Activity
    ========================================================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="degree_mcq_activity">';

  /* =================================================
               Questions
            ================================================= */

  for (var qIndex = 0; qIndex < aObj.questions.length; qIndex++) {
    var tpOb = aObj.questions[qIndex];
    var currQueNum = qIndex + 1;

    var imagePosition =
      tpOb.imagePosition != undefined ? tpOb.imagePosition : "left";

    htmlStmt +=
      '<div class="degree_question degree_image_' +
      imagePosition +
      ' que border-none" ' +
      'id="que_' +
      currQueNum +
      '" ' +
      'data-qno="' +
      currQueNum +
      '">';

    /* =========================================
                       Image
                    ========================================= */

    htmlStmt += '<div class="degree_image_box">';

    if (tpOb.image != undefined && tpOb.image != "" && tpOb.image != "no") {
      htmlStmt += '<img src="' + tpOb.image + '" alt="">';
    }

    htmlStmt += "</div>";

    /* =========================================
                       Question Content
                    ========================================= */

    htmlStmt += '<div class="degree_question_content">';

    var questionText = tpOb.question;
    var opts = tpOb.options;

    var inputHTML = "";
    var optionsHTML = "";

    /* =====================================
                           INPUT داخل الجملة
                        ===================================== */

    inputHTML +=
      '<span class="degree_input_holder">' +
      "<input " +
      'class="text_input_area degree_input" ' +
      'type="text" ' +
      "readonly " +
      "disabled>" +
      "</span>";

    /* =====================================
                           OPTIONS تحت السؤال كامل
                        ===================================== */

    if (opts != undefined && opts.length > 0) {
      optionsHTML +=
        '<div class="pick_set degree_pick_set" ' +
        'id="pick_set_' +
        currQueNum +
        '_1">';

      optionsHTML += '<div class="degree_options_bar">';

      for (var optionIndex = 0; optionIndex < opts[0].length; optionIndex++) {
        optionsHTML +=
          "<span " +
          'class="pick degree_pick" ' +
          'id="pick_' +
          currQueNum +
          "_1_" +
          (optionIndex + 1) +
          '" ' +
          'data-opttext="' +
          opts[0][optionIndex] +
          '">' +
          opts[0][optionIndex] +
          "</span>";
      }

      optionsHTML += "</div>";

      optionsHTML += "</div>";
    }

    /* =====================================
                           Replace blank with input
                        ===================================== */

    questionText = questionText.replace("[_]", inputHTML);

    /* =====================================
                           Sentence
                        ===================================== */

    htmlStmt += '<div class="degree_sentence">' + questionText + "</div>";

    /* =====================================
                           Options
                        ===================================== */

    htmlStmt += optionsHTML;

    htmlStmt += "</div>";

    /* =========================================
                       Check / Cross
                    ========================================= */

    htmlStmt +=
      '<div class="icon_wrap degree_icon_wrap">' +
      '<div class="tick">' +
      '<img src="../images/icons/check_btn.png">' +
      "</div>" +
      '<div class="cross">' +
      '<img src="../images/icons/cross_btn.png">' +
      "</div>" +
      "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================================
       Append
    ========================================================= */

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> mcq Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
