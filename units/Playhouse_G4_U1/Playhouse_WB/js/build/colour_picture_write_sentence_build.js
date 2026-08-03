function buildColourPictureWriteSentenceBody(aObj) {
  var htmlStmt = "";

  if (
    typeof aObj === "undefined" ||
    aObj === null
  ) {
    console.error(
      "Invalid colour_picture_write_sentence_data"
    );

    return;
  }

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/back_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';

  htmlStmt += '<a href="">';

  htmlStmt +=
    '<img src="../images/icons/next_btn.png">';

  htmlStmt += "</a>";

  htmlStmt += "</div>";

  /* =====================================================
     Main heading wrapper
  ===================================================== */

  htmlStmt +=
    '<div class="act_head_group justify-content-center">';

  /* =====================================================
     Main title
  ===================================================== */

  if (
    aObj.mainTitle !== undefined &&
    aObj.mainTitle !== null &&
    aObj.mainTitle !== ""
  ) {
    htmlStmt +=
      '<div class="audioIcon off contant" ' +
      'data-slideNum="1" ' +
      'data-audio="' +
      (aObj.mainTitleAudio || "") +
      '">';

    htmlStmt +=
      '<div class="q-type-img-container">';

    htmlStmt +=
      '<img class="mainTitle" ' +
      'src="' +
      aObj.mainTitle +
      '">';

    if (
      aObj.mainTitleIcon !== undefined &&
      aObj.mainTitleIcon !== null &&
      aObj.mainTitleIcon !== ""
    ) {
      var iconRight = "-18px";

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
        aObj.mainTitleIcon +
        '" ' +
        'style="right:' +
        iconRight +
        ';">';
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  /* =====================================================
     Subtitle
  ===================================================== */

  htmlStmt +=
    '<div class="activityHeading">';

  htmlStmt +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    (aObj.subTitleAudio || "") +
    '">';

  if (aObj.title_position === "under") {
    htmlStmt +=
      '<div class="page_sub_title">';

    htmlStmt +=
      "<p>" +
      (aObj.subTitleTextLeft || "") +
      "</p>";

    if (
      aObj.subTitleIcons &&
      aObj.subTitleIcons.length
    ) {
      for (
        var subIconIndex = 0;
        subIconIndex <
        aObj.subTitleIcons.length;
        subIconIndex++
      ) {
        htmlStmt +=
          '<img src="' +
          aObj.subTitleIcons[
            subIconIndex
          ] +
          '">';
      }
    }

    if (
      aObj.subTitleTextRight !== undefined &&
      aObj.subTitleTextRight !== null &&
      aObj.subTitleTextRight !== ""
    ) {
      htmlStmt +=
        '<p class="subTitleTextRight">' +
        aObj.subTitleTextRight +
        "</p>";
    }

    htmlStmt += "</div>";
  } else {
    htmlStmt +=
      '<div class="page_sub_title d-flex">';

    htmlStmt +=
      "<p>" +
      (aObj.subTitleTextLeft || "") +
      "</p>";

    if (
      aObj.subTitleIcons &&
      aObj.subTitleIcons.length
    ) {
      for (
        var iconIndex = 0;
        iconIndex <
        aObj.subTitleIcons.length;
        iconIndex++
      ) {
        htmlStmt +=
          '<img src="' +
          aObj.subTitleIcons[
            iconIndex
          ] +
          '">';
      }
    }

    if (
      aObj.subTitleTextRight !== undefined &&
      aObj.subTitleTextRight !== null &&
      aObj.subTitleTextRight !== ""
    ) {
      htmlStmt +=
        '<p class="subTitleTextRight">' +
        aObj.subTitleTextRight +
        "</p>";
    }

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Main activity wrappers
  ===================================================== */

  htmlStmt +=
    '<div class="options cont_ht_sf mx-auto">';

  htmlStmt +=
    '<div class="all_cont justify-content-start justify-content-sm-center">';

  htmlStmt +=
    '<div class="screen_elements colour_picture_screen ' +
    "d-flex flex-column " +
    "justify-content-start " +
    'align-items-center h-100">';

  /* =====================================================
     Drawing toolbar
  ===================================================== */

  if (aObj.showToolbar !== false) {
    htmlStmt +=
      '<div class="drawing_toolbar">';

    /* =====================================================
       Colour palette
    ===================================================== */

    htmlStmt +=
      '<div class="colour_palette">';

    var colours =
      aObj.colours &&
      aObj.colours.length
        ? aObj.colours
        : [
            "#ef5350",
            "#42a5f5",
            "#66bb6a",
            "#ffca28",
            "#ab47bc",
            "#ff8a65",
            "#8d6e63",
            "#000000",
          ];

    for (
      var colourIndex = 0;
      colourIndex < colours.length;
      colourIndex++
    ) {
      var colour =
        colours[colourIndex];

      var selectedColourClass =
        colour === aObj.defaultColour
          ? " selected"
          : "";

      htmlStmt +=
        '<button type="button" ' +
        'class="drawing_colour' +
        selectedColourClass +
        '" ' +
        'data-colour="' +
        colour +
        '" ' +
        'style="background-color:' +
        colour +
        ';" ' +
        'aria-label="Select colour">' +
        "</button>";
    }

    htmlStmt += "</div>";

    /* =====================================================
       Brush
    ===================================================== */

    htmlStmt +=
      '<button type="button" ' +
      'class="drawing_tool brush_tool selected" ' +
      'data-tool="brush">' +
      '<span class="tool_icon">✎</span>' +
      '<span class="tool_text">Brush</span>' +
      "</button>";

    /* =====================================================
       Eraser
    ===================================================== */

    htmlStmt +=
      '<button type="button" ' +
      'class="drawing_tool eraser_tool" ' +
      'data-tool="eraser">' +
      '<span class="tool_icon">⌫</span>' +
      '<span class="tool_text">Eraser</span>' +
      "</button>";

    /* =====================================================
       Line
    ===================================================== */

    htmlStmt +=
      '<button type="button" ' +
      'class="drawing_tool line_tool" ' +
      'data-tool="line">' +
      '<span class="tool_icon">╱</span>' +
      '<span class="tool_text">Line</span>' +
      "</button>";

    /* =====================================================
       Rectangle
    ===================================================== */

    htmlStmt +=
      '<button type="button" ' +
      'class="drawing_tool rectangle_tool" ' +
      'data-tool="rectangle">' +
      '<span class="tool_icon">▭</span>' +
      '<span class="tool_text">Rectangle</span>' +
      "</button>";

    /* =====================================================
       Square
    ===================================================== */

    htmlStmt +=
      '<button type="button" ' +
      'class="drawing_tool square_tool" ' +
      'data-tool="square">' +
      '<span class="tool_icon">□</span>' +
      '<span class="tool_text">Square</span>' +
      "</button>";

    /* =====================================================
       Circle
    ===================================================== */

    htmlStmt +=
      '<button type="button" ' +
      'class="drawing_tool circle_tool" ' +
      'data-tool="circle">' +
      '<span class="tool_icon">○</span>' +
      '<span class="tool_text">Circle</span>' +
      "</button>";

    /* =====================================================
       Brush size
    ===================================================== */

    htmlStmt +=
      '<label class="brush_size_wrap">';

    htmlStmt +=
      "<span>Size</span>";

    htmlStmt +=
      '<input type="range" ' +
      'class="brush_size_input" ' +
      'min="2" ' +
      'max="30" ' +
      'value="' +
      (parseInt(
        aObj.defaultBrushSize
      ) || 8) +
      '">';

    htmlStmt += "</label>";

    htmlStmt += "</div>";
  }

  /* =====================================================
     Drawing boxes group
  ===================================================== */

  htmlStmt +=
    '<div class="drawing_boxes_group">';

  var numberOfBoxes =
    parseInt(aObj.numberOfBoxes) || 1;

  for (
    var boxIndex = 0;
    boxIndex < numberOfBoxes;
    boxIndex++
  ) {
    htmlStmt +=
      '<div class="drawing_box_item" ' +
      'data-box-index="' +
      boxIndex +
      '">';

    /* =====================================================
       Canvas
    ===================================================== */

    htmlStmt +=
      '<div class="colour_canvas_wrap">';

    htmlStmt +=
      '<canvas class="colour_drawing_canvas" ' +
      'data-canvas-index="' +
      boxIndex +
      '" ' +
      'aria-label="Drawing area">' +
      "</canvas>";

    htmlStmt += "</div>";

    /* =====================================================
       Optional sentence input
    ===================================================== */

    if (
      aObj.showSentenceInput !== false
    ) {
      htmlStmt +=
        '<div class="sentence_input_wrap">';

      htmlStmt +=
        '<input type="text" ' +
        'class="sentence_input" ' +
        'data-input-index="' +
        boxIndex +
        '" ' +
        'maxlength="200" ' +
        'autocomplete="off" ' +
        'spellcheck="false" ' +
        'placeholder="' +
        (aObj.placeholder || "") +
        '" ' +
        'aria-label="Write a sentence about your drawing">';

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  /* =====================================================
     Close wrappers
  ===================================================== */

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Append activity
  ===================================================== */

  $(".activity_area")
    .empty()
    .append(htmlStmt);

  console.log(
    "Colour picture drawing activity built"
  );

  /* =====================================================
     Notify loader
  ===================================================== */

  setLoadedStatus(
    getCurrFileOrDirectory("file")
  );
}