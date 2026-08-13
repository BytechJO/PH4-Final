function buildDrawOutfitBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != "undefined" && aObj != null) {
    // =========================================================
    // NAVIGATION
    // =========================================================

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

    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    if (aObj.title_position != undefined && aObj.title_position == "under") {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    } else {
      htmlStmt += "<div class='page_sub_title'>";
      htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
      for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
      }
      htmlStmt +=
        "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
      htmlStmt += "</div>";
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    // =========================================================
    // MAIN CONTENT
    // =========================================================

    htmlStmt += '<div class="options cont_ht_sf mx-auto drawoutfit-options">';

    htmlStmt += '<div class="all_cont drawoutfit-all-cont">';

    htmlStmt += '<div class="screen_elements drawoutfit-screen-elements">';

    htmlStmt += '<div class="drawoutfit-wrapper">';

    // =========================================================
    // REFERENCE IMAGE
    // =========================================================

    htmlStmt += '<div class="drawoutfit-reference">';

    htmlStmt += '<img src="' + aObj.referenceImage + '" alt="reference">';

    htmlStmt += "</div>";

    // =========================================================
    // DRAWING SIDE
    // =========================================================

    htmlStmt += '<div class="drawoutfit-drawing-side">';

    // =========================================================
    // TOOLBAR
    // =========================================================

    htmlStmt += '<div class="drawoutfit-toolbar">';

    // Pencil
    htmlStmt +=
      '<button type="button" class="draw-tool active" data-tool="pencil" title="Pencil">✏</button>';

    // Line
    htmlStmt +=
      '<button type="button" class="draw-tool" data-tool="line" title="Line">╱</button>';

    // Rectangle
    htmlStmt +=
      '<button type="button" class="draw-tool" data-tool="rectangle" title="Rectangle">▭</button>';

    // Circle
    htmlStmt +=
      '<button type="button" class="draw-tool" data-tool="circle" title="Circle">◯</button>';

    // Eraser
    htmlStmt +=
      '<button type="button" class="draw-tool" data-tool="eraser" title="Eraser">⌫</button>';

    // Undo
    htmlStmt +=
      '<button type="button" class="draw-action draw-undo" title="Undo">↶</button>';

    // Redo
    htmlStmt +=
      '<button type="button" class="draw-action draw-redo" title="Redo">↷</button>';

    // Clear
    htmlStmt +=
      '<button type="button" class="draw-action draw-clear" title="Clear">🗑</button>';

    // =========================================================
    // COLORS
    // =========================================================

    htmlStmt += '<div class="draw-color-group">';

    for (var c = 0; c < aObj.colors.length; c++) {
      htmlStmt +=
        "<button " +
        'type="button" ' +
        'class="draw-color ' +
        (c === 0 ? "active" : "") +
        '" ' +
        'data-color="' +
        aObj.colors[c] +
        '" ' +
        'style="background-color:' +
        aObj.colors[c] +
        ';">' +
        "</button>";
    }

    htmlStmt += "</div>";

    // =========================================================
    // CUSTOM COLOR
    // =========================================================

    htmlStmt +=
      "<input " +
      'type="color" ' +
      'class="draw-custom-color" ' +
      'value="' +
      aObj.defaultColor +
      '" ' +
      'title="Custom color">';

    // =========================================================
    // SIZE
    // =========================================================
    htmlStmt += '<div class="draw-size-wrap">';

    htmlStmt +=
      "<input " +
      'type="range" ' +
      'class="draw-size-slider" ' +
      'min="1" ' +
      'max="30" ' +
      'step="1" ' +
      'value="' +
      aObj.defaultSize +
      '" ' +
      'title="Brush size">';

    htmlStmt +=
      '<span class="draw-size-value">' + aObj.defaultSize + " px</span>";

    htmlStmt += "</div>";

    // =========================================================
    // CANVAS
    // =========================================================

    htmlStmt += '<div class="drawoutfit-canvas-holder">';

    htmlStmt +=
      "<canvas " +
      'id="drawOutfitCanvas" ' +
      'width="' +
      aObj.canvasWidth +
      '" ' +
      'height="' +
      aObj.canvasHeight +
      '">' +
      "</canvas>";

    htmlStmt += "</div>";

    htmlStmt += "</div>"; // drawing side

    htmlStmt += "</div>"; // wrapper

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
