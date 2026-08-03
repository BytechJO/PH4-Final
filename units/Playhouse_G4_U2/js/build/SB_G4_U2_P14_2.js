function buildColoringBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj == "undefined" || aObj == null) {
    return;
  }

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

  /* =========================
     Heading
  ========================= */

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

  if (aObj.subTitleIcons != undefined && aObj.subTitleIcons != null) {
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      if (aObj.subTitleIcons[sicons] != "") {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'>";
      }
    }
  }

  htmlStmt +=
    "<br>" + "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + "</p>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  /* =========================
     Activity body
  ========================= */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont d-flex flex-column justify-content-center">';

  htmlStmt += '<div class="screen_elements">';

  htmlStmt += '<div class="colour_match_wrapper">';

  htmlStmt += '<div class="triangles_area">';

  /* المثلث الأول الثابت */

  htmlStmt += '<div class="triangle_holder first_triangle">';

  htmlStmt += buildVerbTriangle(aObj, "left");

  htmlStmt += "</div>";

  /* المثلث الثاني القابل للتلوين */

  htmlStmt += '<div class="triangle_holder second_triangle">';

  htmlStmt += buildVerbTriangle(aObj, "right");

  htmlStmt += "</div>";

  /* Remember box */

  htmlStmt += '<div class="remember_box">';

  htmlStmt += '<div class="remember_title">' + aObj.rememberTitle + "</div>";

  htmlStmt += '<div class="remember_content">' + aObj.rememberHtml + "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* Palette */

  htmlStmt += '<div class="palette_wrap">';

  htmlStmt += '<span class="palette_label">' + "Choose a colour:" + "</span>";

  htmlStmt += '<div class="palette_list">';

  for (var p = 0; p < aObj.palette.length; p++) {
    htmlStmt +=
      "<button " +
      'type="button" ' +
      'class="palette_colour' +
      (p == 0 ? " selected" : "") +
      '" ' +
      'data-colour-id="' +
      aObj.palette[p].id +
      '" ' +
      'data-colour-value="' +
      aObj.palette[p].value +
      '" ' +
      'style="--swatch:' +
      aObj.palette[p].value +
      ';"' +
      "></button>";
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  console.log("htmlStmt >> coloring Built");

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function buildVerbTriangle(aObj, side) {
  var q = {};

  for (var i = 0; i < aObj.questions.length; i++) {
    q[aObj.questions[i].id] = aObj.questions[i];
  }

  var html = '<svg class="verb_triangle_svg" ' + 'viewBox="0 0 360 360">';

  if (side == "left") {
    html += buildTrianglePart(
      aObj,
      q.go,
      "180,12 92,182 268,182",
      180,
      120,
      true,
    );

    html += buildTrianglePart(
      aObj,
      q.see,
      "92,182 12,342 180,342",
      88,
      285,
      true,
    );

    html += buildTrianglePart(
      aObj,
      q.eat,
      "268,182 180,342 348,342",
      272,
      285,
      true,
    );

    html += buildTrianglePart(
      aObj,
      q.sit,
      "92,182 268,182 180,342",
      180,
      235,
      true,
    );
  } else {
    html += buildTrianglePart(
      aObj,
      q.saw,
      "180,12 92,182 268,182",
      180,
      120,
      false,
    );

    html += buildTrianglePart(
      aObj,
      q.ate,
      "92,182 12,342 180,342",
      88,
      285,
      false,
    );

    html += buildTrianglePart(
      aObj,
      q.sat,
      "268,182 180,342 348,342",
      272,
      285,
      false,
    );

    html += buildTrianglePart(
      aObj,
      q.went,
      "92,182 268,182 180,342",
      180,
      235,
      false,
    );
  }

  html += "</svg>";

  return html;
}

function buildTrianglePart(aObj, item, points, x, y, isFixed) {
  var html = "";

  var fixedClass = isFixed === true ? " fixed_piece" : "";

  var pieceColour =
    isFixed === true
      ? getColorValue(aObj.palette, item.answerColor)
      : "#ffffff";

  html +=
    '<g class="colour_piece' +
    fixedClass +
    '" ' +
    'data-word-id="' +
    item.id +
    '" ' +
    'data-answer-group="' +
    item.group +
    '" ' +
    'data-answer-colour="' +
    item.answerColor +
    '" ' +
    'data-fixed="' +
    (isFixed === true ? "yes" : "no") +
    '" ' +
    'style="--piece-fill:' +
    pieceColour +
    ';">';

  html +=
    '<polygon class="piece_shape" ' + 'points="' + points + '">' + "</polygon>";

  html +=
    '<text class="piece_label" ' +
    'x="' +
    x +
    '" ' +
    'y="' +
    y +
    '" ' +
    'text-anchor="middle" ' +
    'dominant-baseline="middle">' +
    item.text +
    "</text>";

  if (!isFixed) {
    html +=
      '<image class="piece_tick" ' +
      'href="../images/icons/check_btn.png" ' +
      'x="' +
      (x + 40) +
      '" ' +
      'y="' +
      (y - 22) +
      '" ' +
      'width="34" ' +
      'height="34"></image>';

    html +=
      '<image class="piece_cross" ' +
      'href="../images/icons/cross_btn.png" ' +
      'x="' +
      (x + 40) +
      '" ' +
      'y="' +
      (y - 22) +
      '" ' +
      'width="34" ' +
      'height="34"></image>';
  }

  html += "</g>";

  return html;
}

function getColorValue(palette, colorId) {
  if (palette == undefined || palette == null) {
    return "#ffffff";
  }

  for (var i = 0; i < palette.length; i++) {
    if (palette[i].id == colorId) {
      return palette[i].value;
    }
  }

  return "#ffffff";
}
