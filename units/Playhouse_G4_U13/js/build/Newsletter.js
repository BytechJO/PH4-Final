function buildReadingHTML(aObj) {
  var slide = "";
  var slideHtml = "";
  slideHtml = "<div class='container content_wrap reading_container'>";
  //========================================================================================= header ==============
  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div>';
  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';

  slideHtml += '<div class="act_head_group justify-content-center">';
  slideHtml +=
    '<div class="audioIcon off contant " data-slideNum="' +
    1 +
    '" data-audio="' +
    aObj.mainTitleAudio +
    '">';
  slideHtml += '<div class="q-type-img-container">';
  // slideHtml += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
  if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
    slideHtml +=
      '<img class="mainTitleIcon" src=' +
      aObj.mainTitleIcon +
      ' style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }
  slideHtml += "</div>";
  slideHtml += "</div>";

  slideHtml += '<div class="activityHeading">';
  slideHtml +=
    '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
    1 +
    '" data-audio="' +
    aObj.subTitleAudio +
    '">';
  slideHtml += "<div class='page_sub_title'>";
  slideHtml += "<p>" + aObj.subTitleTextLeft + " </p>";
  for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
    // slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
  }
  // slideHtml += "<p> " + aObj.subTitleTextRight + " </p>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  slideHtml += "<hr>";
  slideHtml += "</div>";
  slideHtml += "</div>";
  //========================================================================================= all_cont ==============
  slideHtml += "<div class='options cont_ht_sf mx-auto'>";
  slideHtml +=
    "<div class='all_cont d-flex justify-content-center align-items-center'>";
  if (typeof aObj !== undefined && aObj.slides.length != 0 && aObj != null) {
    for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
      slide = aObj.slides[slideIndex];
      slideHtml +=
        "<div class='image_container " + slide.parent_class_name + "'>";
      slideHtml +=
        '<div class="img_click_container img-1"><img src="' +
        slide.mainImage +
        '" id="" class="img_click shakingImage" data-toggle="modal" data-target="#news"></div>';
      slideHtml +=
        '<div class="img_click_container img-2">' +
        "<div " +
        'class="img_click unscramble_card_text shakingImage" ' +
        'data-toggle="modal" ' +
        'data-target="#fillin">' +
        "Can You Unscramble?" +
        "</div>" +
        "</div>";
      slideHtml +=
        '<div class="img_click_container img-3"><img src="' +
        slide.starImage +
        '" id="" class="img_click shakingImage" data-toggle="modal" data-target="#star"></div>';
      slideHtml +=
        '<div class="img_click_container img-4"><img src="' +
        slide.convImage +
        '" id="" class="img_click shakingImage" data-toggle="modal" data-target="#conv"></div>';
      slideHtml += "</div>";
    }
    slideHtml += "</div></div></div>";
    $(".mainContent").append(slideHtml);
    buildModelContent(reading_data);
    shakeImage();
    setLoadedStatus(getCurrFileOrDirectory("file"));
  }
}

$(document).ready(function () {
  // فقط هدول البوب أب فيهم راديو
  var stereoPopups = "#news,#star";

  // الراديو مخفي بالبداية
  $(".rotator").hide();

  // =====================================================
  // لما يفتح Popup
  // =====================================================
  $(stereoPopups).on("shown.bs.modal", function () {
    var popupId = "#" + this.id;
    var slide = reading_data.slides[0];
    var audioPath = "";

    // صوت NEWS
    if (popupId === "#news") {
      audioPath = slide.titleAudio || "";
    }

    // صوت STAR
    else if (popupId === "#star") {
      audioPath = slide.starTitleAudio || "";
    }

    // =====================================================
    // غيّر الصوت الحقيقي داخل Playlist
    // =====================================================
    if (audioPath !== "") {
      // غيّر الـ data
      stereo_data.playListData[0].audiourl = audioPath;

      // غيّر الـ li اللي بناه الراديو فعليًا
      var $firstTrack = $(".playlist li:first-child");

      $firstTrack.attr("audiourl", audioPath);

      // مهم جداً:
      // نخلي audio() يعمل initAudio للصوت الجديد
      $firstTrack.trigger("click");
    }

    // =====================================================
    // الراديو
    // =====================================================
    var $rotator = $(".rotator");

    // نحفظ مكانه الأصلي مرة واحدة
    if (!$rotator.data("originalParent")) {
      $rotator.data("originalParent", $rotator.parent());
    }

    // نحطه داخل الـ Popup المفتوح
    $(this).find(".modal-content").append($rotator);

    // يظهر مسكر بالبداية
    $rotator.show().removeClass("active").css("transform", "rotate(-92deg)");
  });

  // =====================================================
  // لما يسكر Popup
  // =====================================================
  $(stereoPopups).on("hidden.bs.modal", function () {
    // وقف صوت الراديو
    $(".pause").trigger("click");

    // رجع شريط الصوت للبداية
    try {
      $(".tracker").slider("value", 0);
    } catch (e) {}

    var $rotator = $(".rotator");

    // رجع الراديو مسكر وخفيه
    $rotator.removeClass("active").css("transform", "rotate(-92deg)").hide();

    // رجعه لمكانه الأصلي
    var originalParent = $rotator.data("originalParent");

    if (originalParent) {
      originalParent.append($rotator);
    }
  });
});
