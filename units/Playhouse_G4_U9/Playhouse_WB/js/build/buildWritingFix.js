function buildWritingFixBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return htmlStmt;
  }

  htmlStmt += '<div class="writing_fix_activity">';

  // =========================================================
  // Main content
  // =========================================================
  htmlStmt += '<div class="writing_fix_content">';

  // =========================================================
  // Main title
  // =========================================================
  htmlStmt += '<div class="writing_fix_header">';

  if (aObj.mainTitle) {
    htmlStmt +=
      '<img class="writing_fix_main_title" src="' +
      aObj.mainTitle +
      '" alt="WRITING">';
  } else {
    htmlStmt +=
      '<div class="writing_fix_title_text">' +
      (aObj.mainTitleText || "WRITING") +
      "</div>";
  }

  htmlStmt += "</div>";

  // =========================================================
  // Instruction
  // =========================================================
  htmlStmt +=
    '<div class="writing_fix_instruction">' +
    (aObj.instruction || "") +
    "</div>";

  // =========================================================
  // Paragraph
  // =========================================================
  htmlStmt += '<div class="writing_fix_paragraph">';

  if (aObj.paragraphParts && aObj.paragraphParts.length) {
    for (var i = 0; i < aObj.paragraphParts.length; i++) {
      var part = aObj.paragraphParts[i];

      if (part.type === "text") {
        htmlStmt += '<span class="writing_text_part">' + part.text + "</span>";
      }

      if (part.type === "input") {
        var inputClass = "writing_fix_input";

        if (part.className) {
          inputClass += " " + part.className;
        }

        var maxLength = part.maxlength
          ? ' maxlength="' + part.maxlength + '"'
          : "";

        htmlStmt += '<span class="writing_inline_answer">';

        htmlStmt +=
          "<input " +
          'type="text" ' +
          'id="' +
          part.id +
          '" ' +
          'class="' +
          inputClass +
          '" ' +
          'data-answer="' +
          escapeWritingFixAttr(part.answer || "") +
          '" ' +
          'data-original="' +
          escapeWritingFixAttr(part.value || "") +
          '" ' +
          'data-category="' +
          (part.category || "") +
          '" ' +
          'value="' +
          escapeWritingFixAttr(part.value || "") +
          '" ' +
          'autocomplete="off" ' +
          'spellcheck="false"' +
          maxLength +
          " />";

        htmlStmt +=
          '<span class="writing_validation_icon">' +
          '<i class="fas fa-check"></i>' +
          "</span>";

        htmlStmt += "</span>";
      }
    }
  }

  htmlStmt += "</div>";

  // =========================================================
  // Spelling words
  // =========================================================
  htmlStmt += '<div class="writing_spelling_section">';

  htmlStmt +=
    '<div class="writing_spelling_title">' +
    (aObj.spellingTitle || "Spelling words:") +
    "</div>";

  htmlStmt += '<div class="writing_spelling_inputs">';

  if (aObj.spellingWords && aObj.spellingWords.length) {
    for (var s = 0; s < aObj.spellingWords.length; s++) {
      var word = aObj.spellingWords[s];

      htmlStmt += '<span class="writing_spelling_answer">';

      htmlStmt +=
        "<input " +
        'type="text" ' +
        'id="' +
        word.id +
        '" ' +
        'class="writing_spelling_input" ' +
        'data-answer="' +
        escapeWritingFixAttr(word.answer || "") +
        '" ' +
        'autocomplete="off" ' +
        'spellcheck="false" />';

      htmlStmt +=
        '<span class="writing_validation_icon">' +
        '<i class="fas fa-check"></i>' +
        "</span>";

      htmlStmt += "</span>";
    }
  }

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  // =========================================================
  // Free writing area
  // =========================================================
  htmlStmt += '<div class="writing_letter_area">';

  htmlStmt +=
    "<textarea " +
    'class="writing_letter_textarea" ' +
    'id="writing_letter_answer" ' +
    'spellcheck="false" ' +
    'placeholder="' +
    escapeWritingFixAttr(aObj.writingPlaceholder || "") +
    '"></textarea>';

  htmlStmt += '<div class="writing_lines">';

  var lines = parseInt(aObj.writingLines || 10);

  for (var l = 0; l < lines; l++) {
    htmlStmt += '<div class="writing_line"></div>';
  }

  htmlStmt += "</div>";

  // Bag image - optional decorative image
  htmlStmt += '<div class="writing_bag_image"></div>';

  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";

  return htmlStmt;
}

// =========================================================
// Escape attributes
// =========================================================
function escapeWritingFixAttr(value) {
  if (value === null || typeof value === "undefined") {
    return "";
  }

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
