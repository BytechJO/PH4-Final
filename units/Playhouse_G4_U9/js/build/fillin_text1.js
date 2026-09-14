function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != undefined && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    // =====================================================
    // NAVIGATION
    // =====================================================

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

    // =====================================================
    // HEADER
    // =====================================================

    htmlStmt += '<div class="act_head_group justify-content-center">';

    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
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

    // =====================================================
    // TITLE
    // =====================================================

    htmlStmt += '<div class="activityHeading">';

    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.subTitleAudio || "") +
      '">';

    htmlStmt += "<div class='page_sub_title'>";

    htmlStmt +=
      "<p class='sub_title_left'>" + (aObj.subTitleTextLeft || "") + "</p>";

    htmlStmt +=
      "<p class='subTitleTextRight'>" + (aObj.subTitleTextRight || "") + "</p>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    // =====================================================
    // OPTIONS
    // =====================================================

    htmlStmt += '<div class="options  mx-auto">';

    htmlStmt += '<div class="all_cont">';

    htmlStmt += '<div class="screen_elements">';

    htmlStmt += '<div class="group_elm shopping_bags_activity">';

    // =====================================================
    // QUESTIONS
    // =====================================================

    for (var x = 0; x < numOfQuestions; x++) {
      var tmpObj = aObj.questions[x];

      htmlStmt +=
        '<div class="que shopping_person" ' + 'data-qno="' + (x + 1) + '">';

      // =====================================================
      // NAME
      // =====================================================

      htmlStmt +=
        '<div class="shopping_name shopping_name_' +
        (x + 1) +
        '">' +
        (tmpObj.name || "") +
        "</div>";

      // =====================================================
      // BAG
      // =====================================================

      htmlStmt += '<div class="shopping_bag_wrap">';

      htmlStmt +=
        '<img class="shopping_bag_img" ' + 'src="' + tmpObj.image + '">';

      // =====================================================
      // INPUTS
      // ALWAYS 4 INPUTS
      // =====================================================

      htmlStmt += '<div class="bag_inputs">';

      for (var inp = 1; inp <= 4; inp++) {
        htmlStmt += '<div class="bag_input_row">';

        htmlStmt +=
          "<input " +
          'class="text_input_area bag_input bag_input_' +
          inp +
          '" ' +
          'type="text" ' +
          'maxlength="' +
          tmpObj.maxlength +
          '" ' +
          'data-type="' +
          tmpObj.type +
          '">';

        // =====================================================
        // VALIDATION FOR EACH INPUT
        // =====================================================

        htmlStmt += '<div class="input_validation_icon">';

        htmlStmt +=
          '<div class="input_tick">' +
          '<img src="../images/icons/check_btn.png">' +
          "</div>";

        htmlStmt +=
          '<div class="input_cross">' +
          '<img src="../images/icons/cross_btn.png">' +
          "</div>";

        htmlStmt += "</div>";

        htmlStmt += "</div>";
      }

      htmlStmt += "</div>";

      htmlStmt += "</div>"; // shopping_bag_wrap

      htmlStmt += "</div>"; // que
    }

    htmlStmt += "</div>"; // group

    htmlStmt += "</div>"; // screen

    htmlStmt += "</div>"; // all

    htmlStmt += "</div>"; // options
  }

  console.log("htmlStmt >> fillin Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
