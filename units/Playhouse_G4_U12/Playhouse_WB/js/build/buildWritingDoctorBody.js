function buildWritingDoctorBody(aObj) {
  var htmlStmt = "";

  if (aObj == undefined || aObj == null) {
    return;
  }

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

  if (aObj.mainTitle != undefined && aObj.mainTitle != "") {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      aObj.mainTitleAudio +
      '">';

    htmlStmt += '<div class="q-type-img-container">';

    htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  htmlStmt += '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  htmlStmt += "<div class='page_sub_title'>";

  htmlStmt += "<p>" + aObj.subTitleTextLeft + "</p>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // OPTIONS
  // =====================================================

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt += '<div class="all_cont writing_doctor_all_cont">';

  htmlStmt += '<div class="writing_doctor_activity">';

  // =====================================================
  // COLUMNS
  // =====================================================

  htmlStmt += '<div class="writing_doctor_columns">';

  // =====================================================
  // COLUMN 1
  // =====================================================

  htmlStmt += '<div class="writing_doctor_column">';

  htmlStmt +=
    '<div class="writing_doctor_column_title">' +
    aObj.columns[0].title +
    "</div>";

  htmlStmt += '<div class="writing_doctor_line writing_doctor_injury_line">';

  htmlStmt += "<span>" + aObj.columns[0].beforeText + "</span>";

  htmlStmt +=
    '<input type="text" ' +
    'class="writing_doctor_input writing_doctor_injury_input" ' +
    'autocomplete="off" ' +
    'spellcheck="false">';

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="writing_doctor_hint">' +
    aObj.columns[0].placeholderText +
    "</div>";

  htmlStmt +=
    '<div class="writing_doctor_fixed_line">' +
    aObj.columns[0].afterText +
    "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // COLUMN 2
  // =====================================================

  htmlStmt += '<div class="writing_doctor_column">';

  htmlStmt +=
    '<div class="writing_doctor_column_title">' +
    aObj.columns[1].title +
    "</div>";

  for (var i = 0; i < aObj.columns[1].lines.length; i++) {
    htmlStmt +=
      '<div class="writing_doctor_fixed_line">' +
      aObj.columns[1].lines[i] +
      "</div>";
  }

  htmlStmt += "</div>";

  // =====================================================
  // COLUMN 3
  // =====================================================

  htmlStmt +=
    '<div class="writing_doctor_column writing_doctor_recovery_column">';

  htmlStmt +=
    '<div class="writing_doctor_column_title">' +
    aObj.columns[2].title +
    "</div>";

  // -----------------------------
  // recovery line 1
  // -----------------------------

  htmlStmt += '<div class="writing_doctor_line">';

  htmlStmt += "<span>" + aObj.columns[2].lines[0].before + "</span>";

  htmlStmt += '<div class="writing_doctor_input_group">';

  htmlStmt +=
    '<input type="text" ' +
    'class="writing_doctor_input writing_doctor_when_input" ' +
    'autocomplete="off" ' +
    'spellcheck="false">';

  htmlStmt +=
    '<div class="writing_doctor_hint">' +
    aObj.columns[2].lines[0].label +
    "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // -----------------------------
  // recovery line 2
  // -----------------------------

  htmlStmt += '<div class="writing_doctor_recovery_second">';

  htmlStmt +=
    '<div class="writing_doctor_recovery_text">' +
    aObj.columns[2].lines[1].before +
    "</div>";

  htmlStmt += '<div class="writing_doctor_recovery_inputs">';

  // activity
  htmlStmt += '<div class="writing_doctor_input_group">';

  htmlStmt +=
    '<input type="text" ' +
    'class="writing_doctor_input writing_doctor_activity_input" ' +
    'autocomplete="off" ' +
    'spellcheck="false">';

  htmlStmt +=
    '<div class="writing_doctor_hint">' +
    aObj.columns[2].lines[1].firstLabel +
    "</div>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<span class="writing_doctor_by">' +
    aObj.columns[2].lines[1].middle +
    "</span>";

  // day
  htmlStmt += '<div class="writing_doctor_input_group">';

  htmlStmt +=
    '<input type="text" ' +
    'class="writing_doctor_input writing_doctor_day_input" ' +
    'autocomplete="off" ' +
    'spellcheck="false">';

  htmlStmt +=
    '<div class="writing_doctor_hint">' +
    aObj.columns[2].lines[1].secondLabel +
    "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  // =====================================================
  // CLOSE
  // =====================================================

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
