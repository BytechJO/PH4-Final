function buildReadingHTML(aObj) {

  var slide = "";
  var slideHtml = "";

  slideHtml = "<div class='container content_wrap reading_container'>";


  // =========================================================
  // Navigation
  // =========================================================

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">' +
      '<a href="">' +
        '<img src="../images/icons/back_btn.png">' +
      '</a>' +
    '</div>';

  slideHtml +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">' +
      '<a href="">' +
        '<img src="../images/icons/next_btn.png">' +
      '</a>' +
    '</div>';


  // =========================================================
  // Activity Header
  // =========================================================

  slideHtml += '<div class="act_head_group justify-content-center">';


  for (
    var slideIndex = 0;
    slideIndex < aObj.slides.length;
    slideIndex++
  ) {

    slide = aObj.slides[slideIndex];

    slideHtml +=
      "<div class='image_container " +
      slide.parent_class_name +
      "'>";

    slideHtml += "</div>";
  }


  // =========================================================
  // Main Title
  // =========================================================

  slideHtml +=
    '<div class="audioIcon off contant" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.mainTitleAudio +
    '">';

  slideHtml += '<div class="q-type-img-container">';

  slideHtml +=
    '<img class="mainTitle" src="' +
    aObj.mainTitle +
    '">';


  if (
    aObj.mainTitleIcon != undefined &&
    aObj.mainTitleIcon != ""
  ) {

    slideHtml +=
      '<img class="mainTitleIcon" ' +
      'src="' +
      aObj.mainTitleIcon +
      '" ' +
      'style="right:' +
      aObj.mainTitleIconPos.right +
      ';">';
  }


  slideHtml += "</div>";

  slideHtml += "</div>";


  // =========================================================
  // Subtitle
  // =========================================================

  slideHtml += '<div class="activityHeading">';

  slideHtml +=
    '<div class="audioIcon off contant audioQuestionTitle" ' +
    'data-slideNum="1" ' +
    'data-audio="' +
    aObj.subTitleAudio +
    '">';

  slideHtml += "<div class='page_sub_title'>";

  slideHtml +=
    "<p>" +
    aObj.subTitleTextLeft +
    "</p>";


  for (
    var sicons = 0;
    sicons < aObj.subTitleIcons.length;
    sicons++
  ) {

    slideHtml +=
      "<img src='" +
      aObj.subTitleIcons[sicons] +
      "'/>";
  }


  slideHtml +=
    "<br><p class='subTitleTextRight'>" +
    aObj.subTitleTextRight +
    "</p>";


  slideHtml += "</div>";

  slideHtml += "</div>";

  slideHtml += "</div>";

  slideHtml += "</div>";


  // =========================================================
  // Main Content
  // =========================================================

  slideHtml +=
    "<div class='options cont_ht_sf mx-auto'>";

  slideHtml +=
    "<div class='all_cont d-flex justify-content-center align-items-center'>";

  slideHtml +=
    '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';

  slideHtml +=
    '<div class="group_white_border">';


  // =========================================================
  // Device Camera
  // =========================================================

  slideHtml +=
    '<div class="header_cam"></div>';


  // =========================================================
  // Device Header
  // =========================================================

  slideHtml +=
    '<div class="header_bar">';

  slideHtml +=
    '<div class="icons">';

  slideHtml +=
    '<div class="icons_left">';

  slideHtml +=
    '<i class="icon fa fa-reply"></i>';

  slideHtml +=
    '<i class="icon fa fa-home"></i>';

  slideHtml +=
    '<i class="icon fa fa-clone"></i>';

  slideHtml +=
    "</div>";


  slideHtml +=
    '<div class="icons_right">';

  slideHtml +=
    '<i class="icon fa fa-paper-plane"></i>';

  slideHtml +=
    '<i class="icon fa fa-envelope"></i>';

  slideHtml +=
    '<i class="icon battery fa fa-battery-half"></i>';

  slideHtml +=
    '<i class="icon fa fa-signal"></i>';

  slideHtml +=
    "</div>";


  slideHtml +=
    "</div>";

  slideHtml +=
    "</div>";


  // =========================================================
  // CIRCLE / UNDERLINE TOOLBAR
  // =========================================================

  slideHtml +=
    '<div class="reading_mark_toolbar">';


  // Circle Button
  slideHtml +=
    '<button ' +
    'type="button" ' +
    'class="reading_mark_btn reading_circle_btn active" ' +
    'data-tool="circle">';

  slideHtml +=
    '<span class="reading_circle_icon">Aa</span>';

  slideHtml +=
    '<span>Circle</span>';

  slideHtml +=
    "</button>";


  // Underline Button
  slideHtml +=
    '<button ' +
    'type="button" ' +
    'class="reading_mark_btn reading_underline_btn" ' +
    'data-tool="underline">';

  slideHtml +=
    '<span class="reading_underline_icon">Aa</span>';

  slideHtml +=
    '<span>Underline</span>';

  slideHtml +=
    "</button>";


  slideHtml +=
    "</div>";


  // =========================================================
  // Slides
  // =========================================================

  if (
    typeof aObj !== undefined &&
    aObj.slides.length != 0 &&
    aObj != null
  ) {

    for (
      var outerSlideIndex = 0;
      outerSlideIndex < aObj.slides.length;
      outerSlideIndex++
    ) {

      slide =
        aObj.slides[outerSlideIndex];


      // =====================================================
      // Slide Title
      // =====================================================

      slideHtml +=
        '<div class="title">' +
        slide.title +
        "</div>";


      // =====================================================
      // Carousel
      // =====================================================

      slideHtml +=
        '<div ' +
        'id="carouselContainer" ' +
        'class="carousel slide" ' +
        'data-interval="false">';


      slideHtml +=
        '<div class="carousel-inner">';


      // =====================================================
      // Array Text Slides
      // =====================================================

      for (
        var textIndex = 0;
        textIndex < slide.array_text.length;
        textIndex++
      ) {

        var isActive =
          textIndex == 0
            ? "active"
            : "";


        slideHtml +=
          '<div class="carousel-item ' +
          isActive +
          '">';


        slideHtml +=
          "<div class='slide-container'>";


        // IMPORTANT:
        // النص الأصلي كما هو، وبعدين بنحول الكلمات
        // إلى clickable spans بعد البناء.
        slideHtml +=
          '<div class="reading_mark_content">' +
          slide.array_text[textIndex] +
          "</div>";


        slideHtml +=
          "</div>";


        slideHtml +=
          "</div>";
      }


      slideHtml +=
        "</div>";


      // =====================================================
      // Previous
      // =====================================================

      slideHtml +=
        '<a ' +
        'class="carousel-control-prev" ' +
        'href="#carouselContainer" ' +
        'role="button" ' +
        'data-slide="prev">';

      slideHtml +=
        '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';

      slideHtml +=
        '<span class="sr-only">Previous</span>';

      slideHtml +=
        "</a>";


      // =====================================================
      // Next
      // =====================================================

      slideHtml +=
        '<a ' +
        'class="carousel-control-next" ' +
        'href="#carouselContainer" ' +
        'role="button" ' +
        'data-slide="next">';

      slideHtml +=
        '<span class="carousel-control-next-icon" aria-hidden="true"></span>';

      slideHtml +=
        '<span class="sr-only">Next</span>';

      slideHtml +=
        "</a>";


      slideHtml +=
        "</div>";
    }
  }


  // =========================================================
  // Home Button
  // =========================================================

  slideHtml +=
    '<div class="home_Btn" onclick="returnFirstSlide()"></div>';


  // =========================================================
  // CLOSE
  // =========================================================

  slideHtml +=
    "</div>";

  slideHtml +=
    "</div>";

  slideHtml +=
    "</div>";

  slideHtml +=
    "</div>";

  slideHtml +=
    "</div>";


  // =========================================================
  // APPEND
  // =========================================================

  $(".mainContent").append(slideHtml);


  // =========================================================
  // MAKE READING WORDS CLICKABLE
  // =========================================================

  makeReadingWordsSelectable();


  // =========================================================
  // START CIRCLE / UNDERLINE
  // =========================================================

  initReadingMarkTools();


  // =========================================================
  // OTHER FUNCTIONS
  // =========================================================

  shakeImage();


  setLoadedStatus(
    getCurrFileOrDirectory(
      "file"
    )
  );
}



/* =========================================================
   CONVERT TEXT INTO CLICKABLE WORDS
========================================================= */

function makeReadingWordsSelectable() {

  $(".reading_mark_content").each(function () {

    var container =
      this;


    var walker =
      document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );


    var textNodes =
      [];


    var node;


    while (
      node = walker.nextNode()
    ) {

      if (
        $.trim(node.nodeValue) !== ""
      ) {

        textNodes.push(
          node
        );
      }
    }


    // =====================================================
    // WRAP TEXT NODES
    // =====================================================

    for (
      var i = 0;
      i < textNodes.length;
      i++
    ) {

      var textNode =
        textNodes[i];


      // Skip SCRIPT / STYLE / BUTTON etc.
      var parentTag =
        textNode.parentNode.tagName;


      if (
        parentTag === "SCRIPT" ||
        parentTag === "STYLE" ||
        parentTag === "BUTTON"
      ) {

        continue;
      }


      wrapReadingTextNode(
        textNode
      );
    }
  });
}



/* =========================================================
   WRAP ONE TEXT NODE WORD BY WORD
========================================================= */

function wrapReadingTextNode(textNode) {

  var text =
    textNode.nodeValue;


  var fragment =
    document.createDocumentFragment();


  // يحافظ على المسافات كما هي
  var parts =
    text.split(/(\s+)/);


  for (
    var i = 0;
    i < parts.length;
    i++
  ) {

    var part =
      parts[i];


    if (
      part === ""
    ) {

      continue;
    }


    // =====================================================
    // SPACE
    // =====================================================

    if (
      /^\s+$/.test(part)
    ) {

      fragment.appendChild(
        document.createTextNode(
          part
        )
      );

      continue;
    }


    // =====================================================
    // WORD
    // =====================================================

    var span =
      document.createElement(
        "span"
      );


    span.className =
      "reading_word";


    span.setAttribute(
      "data-mark",
      ""
    );


    span.textContent =
      part;


    fragment.appendChild(
      span
    );
  }


  textNode.parentNode.replaceChild(
    fragment,
    textNode
  );
}



/* =========================================================
   CIRCLE / UNDERLINE CONTROLS
========================================================= */

function initReadingMarkTools() {

  var selectedTool =
    "circle";


  // Remove old events in case build called again
  $(".reading_container")
    .off(
      ".readingMarks"
    );


  // =====================================================
  // SELECT TOOL
  // =====================================================

  $(".reading_container").on(
    "click.readingMarks",
    ".reading_mark_btn",
    function (e) {

      e.preventDefault();

      e.stopPropagation();


      $(".reading_mark_btn")
        .removeClass(
          "active"
        );


      $(this)
        .addClass(
          "active"
        );


      selectedTool =
        $(this).data(
          "tool"
        );
    }
  );


  // =====================================================
  // CLICK WORD
  // =====================================================

  $(".reading_container").on(
    "click.readingMarks",
    ".reading_word",
    function (e) {

      e.preventDefault();

      e.stopPropagation();


      var $word =
        $(this);


      var currentMark =
        $word.attr(
          "data-mark"
        );


      // =================================================
      // SAME TOOL -> REMOVE
      // =================================================

      if (
        currentMark ===
        selectedTool
      ) {

        $word
          .attr(
            "data-mark",
            ""
          )
          .removeClass(
            "reading_circle reading_underline"
          );


        return;
      }


      // =================================================
      // CHANGE MARK
      // =================================================

      $word
        .removeClass(
          "reading_circle reading_underline"
        )
        .attr(
          "data-mark",
          selectedTool
        );


      // =================================================
      // CIRCLE
      // =================================================

      if (
        selectedTool ===
        "circle"
      ) {

        $word.addClass(
          "reading_circle"
        );
      }


      // =================================================
      // UNDERLINE
      // =================================================

      else if (
        selectedTool ===
        "underline"
      ) {

        $word.addClass(
          "reading_underline"
        );
      }
    }
  );
}



/* =========================================================
   FIRST SLIDE
========================================================= */

function returnFirstSlide() {

  $(".carousel")
    .carousel(
      0
    );
}



/* =========================================================
   TIME RANGE
========================================================= */

function findTimeRange(
  timeToCheck,
  targetTime
) {

  for (
    let i = 0;
    i < targetTime.length;
    i++
  ) {

    let [
      startTime,
      endTime
    ] =
      targetTime[i];


    if (
      timeToCheck >= startTime &&
      timeToCheck <= endTime
    ) {

      return i;
    }
  }
}



/* =========================================================
   SHAKE IMAGE
========================================================= */

function shakeImage() {

  $(".shakingImage")
    .css(
      "width",
      "400px"
    );


  setTimeout(
    function () {

      $(".shakingImage")
        .css(
          "width",
          "420px"
        );


      setTimeout(
        function () {

          $(".shakingImage")
            .css(
              "width",
              "400px"
            );


          setTimeout(
            shakeImage,
            600
          );

        },
        600
      );

    },
    600
  );
}