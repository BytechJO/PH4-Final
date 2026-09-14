function initActivity(activity) {
  var drag_drop_options = "";
  var drag_drop_questions = "";
  var img_array = activity.images || [];

  drag_drop_options = '<div class="drag_drop_options sticky-top">';

  jQuery.each(activity.options, function (key, value) {
    drag_drop_options +=
      '<div class="draggable_div" ' +
      'data-word-id="word_' +
      key +
      '" ' +
      'data-value="' +
      value +
      '" ' +
      'style="background-color: transparent;">' +
      value +
      "</div>";
  });

  drag_drop_options += "</div>";

  drag_drop_questions =
    '<div class="drag_drop_questions"><ul class="que d-flex flex-wrap">';

  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions +=
      '<li class="item d-flex flex-column"><ul style="padding: 20px;">';

    if (typeof values == "string") {
      var has_single_text = "";

      if (values[0] == "_") {
        has_single_text = "has_single_text";
      }

      drag_drop_questions +=
        '<li style="width: 100%;" class="' + has_single_text + '">';

      drag_drop_questions += '<div class="droppable_label">';

      drag_drop_questions +=
        '<div class="i_container">' +
        '<div class="i_row d-flex flex-wrap align-items-center">' +
        '<div class="l_col">' +
        '<img src="' +
        img_array[key] +
        '" class="qus_img">' +
        "</div>" +
        '<div class="r_col">' +
        '<div class="droppable_text_div">';

      drag_drop_questions += values.replace(
        /___/g,
        '<input readonly type="text" class="droppable_div" /></div><div class="droppable_label">',
      );

      drag_drop_questions += "</div></div></div></div>";
      drag_drop_questions += "</div></li>";
    } else {
      jQuery.each(values, function (k, v) {
        v = v + "";

        drag_drop_questions +=
          '<li class="drag_drop_multiple">' +
          v.replace(
            "___",
            '<input readonly type="text" class="droppable_div" />',
          ) +
          "</li>";
      });
    }

    drag_drop_questions += "</ul></li>";
  });

  drag_drop_questions += "</ul></div>";

  var html = "";

  html += '<div class="main">';

  html += drag_drop_options + drag_drop_questions;

  if (
    typeof activity.background_image != "undefined" &&
    activity.background_image != ""
  ) {
    html += '<div class="image_container">';

    html +=
      '<img src="../images/pages/activities/' +
      activity.background_image +
      '" />';

    html += "</div>";
  }

  html += "</div>";

  writeHtml(activity, html);

  setDefaultAnswerDragDrop(activity);

  jQuery(".drag_drop_options div.draggable_div").draggable({
    container: jQuery(".activity-content"),
    revert: true,
    placeholder: true,
    droptarget: ".drag_drop_questions input.droppable_div",

    drop: function (evt, droptarget) {
      var $newWord = jQuery(this);
      var $input = jQuery(droptarget);

      var newWordValue = $newWord.attr("data-value");
      var newWordId = $newWord.attr("data-word-id");

      var oldWordId = $input.attr("data-word-id");

      if (oldWordId) {
        jQuery(
          '.drag_drop_options .draggable_div[data-word-id="' + oldWordId + '"]',
        ).css({
          visibility: "visible",
          pointerEvents: "auto",
        });
      }

      $input
        .val(newWordValue)
        .addClass("filled")
        .attr("data-word-id", newWordId)
        .attr("data-dropped-value", newWordValue);

      setTimeout(function () {
        $newWord.css({
          visibility: "hidden",
          pointerEvents: "none",
        });

        detectDragend();
      }, 0);
    },
  });

  jQuery(".drag_drop_questions").on(
    "click",
    "input.droppable_div.filled",
    function () {
      var $input = jQuery(this);

      var wordId = $input.attr("data-word-id");

      if (wordId) {
        jQuery(
          '.drag_drop_options .draggable_div[data-word-id="' + wordId + '"]',
        ).css({
          visibility: "visible",
          pointerEvents: "auto",
        });
      }

      $input
        .val("")
        .removeClass("filled")
        .removeAttr("data-word-id")
        .removeAttr("data-dropped-value");

      jQuery(".activity_result").remove();

      detectDragend();
    },
  );
}
