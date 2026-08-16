function initActivity(activity) {
  //Options
  drag_drop_options = '<div class="drag_drop_options sticky-top center_item">';
  jQuery.each(activity.options, function (key, value) {
    drag_drop_options +=
      '<div class="draggable_div" ' +
      'data-value="' +
      value +
      '" ' +
      'data-qno="' +
      key +
      '" ' +
      'style="background-color: transparent;">' +
      value +
      "</div>";
  });
  drag_drop_options += "</div>";

  //Questions
  drag_drop_questions = '<div class="drag_drop_questions center_item">';

  drag_drop_questions += '<div class="image_container">';
  drag_drop_questions +=
    '<img src="../images/pages/activities/' + activity.image + '" />';
  drag_drop_questions += "</div>";

  drag_drop_questions += '<ul class="ques">';

  jQuery.each(activity.questions, function (key, values) {
    drag_drop_questions +=
      '<li class="que_drop que-' + key + '"><ul class="d-flex flex-wrap">';
    if (typeof values == "string") {
      var has_single_text = "";
      if ((values[0] == "_") == true) {
        has_single_text = "has_single_text";
      }

      drag_drop_questions +=
        '<li class="' +
        has_single_text +
        '"><div class="droppable_label">' +
        values.replace(
          /___/g,
          '<input readonly type="text" class="droppable_div" /></div><div class="droppable_label">',
        ) +
        "</div></li>";
    } else {
      jQuery.each(values, function (k, v) {
        var v = v + "";
        drag_drop_questions +=
          '<li class="drag_drop_multiple" style="margin:20px">' +
          v.replace(
            "___",
            ' <input readonly type="text" class="droppable_div" />',
          ) +
          "</li>";
      });
    }
    drag_drop_questions += "</ul></li>";
  });

  drag_drop_questions += "</ul></div>";

  var html = "";
  html += '<div class="main">';

  /*if(
		(typeof(_activity_json.layout)!="undefined")&&
		(_activity_json.layout=="top")
	){
		html += drag_drop_options + drag_drop_questions;
	} else {
		html += drag_drop_questions + drag_drop_options;
	}*/

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

  //for mobile view
  if (window.outerWidth <= 600) {
    //jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
  }

  jQuery(".drag_drop_options .draggable_div").draggable({
    container: jQuery(".activity-content"),
    revert: true,
    placeholder: true,

    // كل الفراغات تظل قابلة لاستقبال كلمة جديدة
    droptarget: ".drag_drop_questions input.droppable_div",

    drop: function (evt, droptarget) {
      var $newWord = jQuery(this);
      var $input = jQuery(droptarget);

      var newWordValue = $newWord.attr("data-value");
      var newWordQno = $newWord.attr("data-qno");

      // إذا كان الفراغ يحتوي كلمة، رجّع الكلمة القديمة لفوق
      var oldWordQno = $input.attr("data-word-qno");

      if (oldWordQno !== undefined && oldWordQno !== "") {
        jQuery(
          '.drag_drop_options .draggable_div[data-qno="' + oldWordQno + '"]',
        ).css({
          visibility: "visible",
          pointerEvents: "auto",
        });
      }

      // ضع الكلمة الجديدة في الفراغ
      $input
        .val(newWordValue)
        .addClass("filled")
        .attr("data-word-qno", newWordQno)
        .attr("data-dropped-value", newWordValue);

      // أخفِ الكلمة الجديدة من الخيارات
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
      var wordQno = $input.attr("data-word-qno");

      // إظهار الكلمة مرة ثانية في الخيارات
      if (wordQno !== undefined && wordQno !== "") {
        jQuery(
          '.drag_drop_options .draggable_div[data-qno="' + wordQno + '"]',
        ).css({
          visibility: "visible",
          pointerEvents: "auto",
        });
      }

      // تفريغ الفراغ
      $input
        .val("")
        .removeClass("filled")
        .removeAttr("data-word-qno")
        .removeAttr("data-dropped-value");

      jQuery(".activity_result").remove();

      detectDragend();
    },
  );
}
