function buildReadingHTML(aObj) {
  var htmlStmt = "";

  if (typeof aObj == "undefined" || aObj == null) {
    return htmlStmt;
  }

  htmlStmt += '<div class="all_cont">';

  htmlStmt += '<div class="screen_elements talk_screen">';

  /* =========================================================
     MAIN CONTENT
  ========================================================= */

  htmlStmt += '<div class="talk_page">';

  /* =========================================================
     TITLE
  ========================================================= */

  htmlStmt += '<div class="talk_title_row">';

  htmlStmt += '<div class="talk_title">';

  htmlStmt += '<span class="talk_title_number">';
  htmlStmt += "1";
  htmlStmt += "</span>";

  htmlStmt += '<span class="talk_title_text">';
  htmlStmt += "Talk about it!";
  htmlStmt += "</span>";

  htmlStmt += '<span class="talk_title_people">';

  htmlStmt += '<img src="../images/pages/page_79/talk_people.png" alt="">';

  htmlStmt += "</span>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =========================================================
     INSTRUCTION
  ========================================================= */

  if (typeof aObj.instruction != "undefined" && aObj.instruction != "") {
    htmlStmt += '<div class="talk_instruction">';

    htmlStmt += aObj.instruction;

    htmlStmt += "</div>";
  }

  /* =========================================================
     EXAMPLE
  ========================================================= */

  if (typeof aObj.example != "undefined" && aObj.example != "") {
    htmlStmt += '<div class="talk_example">';

    htmlStmt += '<span class="example_label">';
    htmlStmt += "Example:";
    htmlStmt += "</span>";

    htmlStmt += '<span class="example_text">';
    htmlStmt += aObj.example;
    htmlStmt += "</span>";

    htmlStmt += "</div>";
  }

  /* =========================================================
     IMAGE AREA
  ========================================================= */

  htmlStmt += '<div class="talk_images_area">';

  if (
    typeof aObj.images != "undefined" &&
    aObj.images != null &&
    aObj.images.length > 0
  ) {
    for (var i = 0; i < aObj.images.length; i++) {
      var currentImage = aObj.images[i];

      htmlStmt += '<div class="talk_item talk_item_' + (i + 1) + '">';

      htmlStmt += '<div class="talk_image_holder">';

      htmlStmt +=
        '<img class="talk_product_image" src="' +
        currentImage.src +
        '" alt="">';

      htmlStmt += "</div>";

      htmlStmt += '<div class="talk_item_number">';

      htmlStmt += currentImage.number;

      htmlStmt += "</div>";

      htmlStmt += "</div>";
    }
  }

  htmlStmt += "</div>";

  /* =========================================================
     PHRASES
  ========================================================= */

  if (
    typeof aObj.phrases != "undefined" &&
    aObj.phrases != null &&
    aObj.phrases.length > 0
  ) {
    htmlStmt += '<div class="talk_phrases_box">';

    for (var j = 0; j < aObj.phrases.length; j++) {
      htmlStmt += '<div class="talk_phrase">';

      htmlStmt += aObj.phrases[j];

      htmlStmt += "</div>";
    }

    htmlStmt += "</div>";
  }

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  htmlStmt += "</div>";

  return htmlStmt;
}
