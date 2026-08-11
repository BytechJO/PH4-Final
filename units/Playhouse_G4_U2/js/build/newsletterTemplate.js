
function bindNewsletterPopupAudio(popupSelector, audioPath) {
  /*
   * عند فتح البوب أب.
   */
  $(document)
    .off("shown.bs.modal.newsletterPopupAudio", popupSelector)
    .on("shown.bs.modal.newsletterPopupAudio", popupSelector, function () {
      startNewsletterPopupAudio(audioPath, popupSelector);
    });

  /*
   * عند إغلاق البوب أب.
   */
  $(document)
    .off("hidden.bs.modal.newsletterPopupAudio", popupSelector)
    .on("hidden.bs.modal.newsletterPopupAudio", popupSelector, function () {
      stopNewsletterPopupAudio(true);

      activeNewsletterPopup = "";
      activeNewsletterAudioPath = "";
    });

  /*
   * أي كبسة داخل البوب أب:
   * الكبسة الأولى Pause.
   * الكبسة التالية Resume.
   */
  $(document)
    .off("click.newsletterPopupAudio", popupSelector + " .modal-content")
    .on(
      "click.newsletterPopupAudio",
      popupSelector + " .modal-content",
      function (event) {
        /*
         * لا نشغل الصوت مرة أخرى عند الضغط
         * على زر إغلاق البوب أب.
         */
        var clickedCloseButton = $(event.target).closest(
          [
            '[data-dismiss="modal"]',
            '[data-bs-dismiss="modal"]',
            ".close",
            ".btn-close",
          ].join(","),
        );

        if (clickedCloseButton.length) {
          return;
        }

        toggleNewsletterPopupAudio();
      },
    );
}

/*
 * إنشاء الجزء الخاص بالقراءة:
 * listen / listen2 / listen3
 */
function buildListenPopup(listenData) {
  var popupHtml = "<div class='readHilightsPanel_container'>";

  popupHtml += "<div class='title'>";

  var titleTexts = listenData.titleTexts || [];
  var titlesAudio = listenData.titlesAudio || [];
  var topImages = listenData.top_image || [];
  var secondImages = listenData.second_image || [];

  for (var titleIndex = 0; titleIndex < titleTexts.length; titleIndex++) {
    var titleAudio = titlesAudio[titleIndex] || titlesAudio[0] || "";

    var titleText = titleTexts[titleIndex] || "";

    var topImage = topImages[titleIndex] || topImages[0] || "";

    var secondImage = secondImages[titleIndex] || secondImages[0] || "";

    popupHtml +=
      "<div class='snap_word snap_card audioTile'" +
      " data-audio='" +
      titleAudio +
      "'" +
      " data-onaudioplay=''>";

    if (titleText !== "") {
      popupHtml += "<p class='title_text'>" + titleText + "</p>";
    }

    if (topImage !== "") {
      popupHtml +=
        "<img" +
        " class='title_in_snap top_image'" +
        " src='" +
        topImage +
        "'" +
        " alt=''" +
        " />";
    }

    if (secondImage !== "") {
      popupHtml +=
        "<img" +
        " class='title_in_snap second_image'" +
        " src='" +
        secondImage +
        "'" +
        " alt=''" +
        " />";
    }

    popupHtml += "</div>";
  }

  popupHtml += "</div>";

  popupHtml += "<br />";

  popupHtml +=
    "<div class='all_words d-flex flex-wrap justify-content-around'>";

  var texts = listenData.text || [];
  var audios = listenData.audio || [];

  for (var textIndex = 0; textIndex < texts.length; textIndex++) {
    var textAudio = audios[textIndex] || audios[0] || "";

    popupHtml += "<div class='flex_item_container'>";

    popupHtml +=
      "<div class='snap_word snap_card audioTile'" +
      " data-audio='" +
      textAudio +
      "'" +
      " data-onaudioplay=''>";

    popupHtml += "<p class='word_in_snap'>" + texts[textIndex] + "</p>";

    popupHtml += "</div>";
    popupHtml += "</div>";
  }

  popupHtml += "</div>";
  popupHtml += "</div>";

  return popupHtml;
}

/*
 * إنشاء السؤال الواحد في البوب أب الرابع.
 */
function buildQuestionHtml(questionData, questionIndex) {
  var questionHtml = "";

  questionHtml +=
    '<div class="que img_fillin_gr d-flex flex-column"' +
    ' data-qno="' +
    (questionIndex + 1) +
    '">';

  var questionString = "";

  if (questionData.singleword) {
    var singleWordText = questionData.text || "";

    var firstTextAudio =
      questionData.textaudios && questionData.textaudios[0]
        ? questionData.textaudios[0]
        : "";

    questionString +=
      '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant"' +
      ' data-audio="' +
      firstTextAudio +
      '">';

    questionString +=
      "<img" +
      ' src="../images/icons/sound-wave.png"' +
      ' class="audio_icon"' +
      ' alt=""' +
      " />";

    questionString += "</div>";

    questionString += singleWordText.replace(
      /\[_]/g,
      "<input" +
        ' class="text_input_area"' +
        ' type="text"' +
        ' maxlength="' +
        questionData.maxlength +
        '"' +
        ' data-type="' +
        questionData.type +
        '"' +
        " />",
    );
  } else {
    var wordIndex = -1;

    var questionParts = (questionData.text || "").split("[_]");

    questionString = questionParts
      .map(function (word) {
        if (word !== "") {
          wordIndex++;

          var wordAudio =
            questionData.textaudios && questionData.textaudios[wordIndex]
              ? questionData.textaudios[wordIndex]
              : "";

          return (
            '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant"' +
            ' data-audio="' +
            wordAudio +
            '">' +
            word +
            "</div>"
          );
        }

        return "";
      })
      .join(
        "<input" +
          ' class="text_input_area"' +
          ' type="text"' +
          ' maxlength="' +
          questionData.maxlength +
          '"' +
          ' data-type="' +
          questionData.type +
          '"' +
          " />",
      );
  }

  questionHtml += '<div class="fillin_gr d-flex align-items-center">';

  questionHtml += '<div class="q_space d-flex flex-wrap">';

  questionHtml += '<div class="fillin_set d-flex flex-wrap">';

  questionHtml += questionString;

  questionHtml += "</div>";

  questionHtml +=
    '<div class="audioIcon textEnd off d-flex contant"' + ' data-audio="">';

  questionHtml += questionData.textEnd || "";

  questionHtml += "</div>";

  var hasInput = (questionData.text || "").includes("[_]");

  questionHtml += '<div class="icon_wrap_holder">';

  questionHtml += '<div class="icon_wrap">';

  if (hasInput) {
    questionHtml +=
      '<div class="tick">' +
      "<img" +
      ' src="../images/icons/check_btn.png"' +
      ' alt=""' +
      " />" +
      "</div>";

    questionHtml +=
      '<div class="cross">' +
      "<img" +
      ' src="../images/icons/cross_btn.png"' +
      ' alt=""' +
      " />" +
      "</div>";
  } else {
    questionHtml += '<div class="tick"></div>';

    questionHtml += '<div class="cross"></div>';
  }

  questionHtml += "</div>";
  questionHtml += "</div>";

  questionHtml += "</div>";
  questionHtml += "</div>";
  questionHtml += "</div>";

  return questionHtml;
}

/*
 * إنشاء البوب أب الرابع.
 */
function buildQuestionsPopup(listen4Data) {
  var popupHtml = "";

  popupHtml +=
    "<div class='readHilightsPanel_container unscramble_popup_container'>";

  // العنوان
  if (listen4Data.title) {
    popupHtml += "<div class='unscramble_title'>";
    popupHtml += listen4Data.title;
    popupHtml += "</div>";
  }

  // صندوق النشاط
  popupHtml += "<div class='unscramble_activity_box'>";

  // التعليمات
  if (listen4Data.instruction) {
    popupHtml += "<div class='unscramble_instruction'>";
    popupHtml += listen4Data.instruction;
    popupHtml += "</div>";
  }

  // الأسئلة
  popupHtml += "<div class='unscramble_questions'>";

  var questions = listen4Data.questions || [];

  for (
    var questionIndex = 0;
    questionIndex < questions.length;
    questionIndex++
  ) {
    var questionData = questions[questionIndex];

    var scrambledWord = (questionData.text || "")
      .replace(questionIndex + 1 + ".", "")
      .replace("[_]", "")
      .trim();

    popupHtml +=
      "<div class='unscramble_question'" +
      " data-qno='" +
      (questionIndex + 1) +
      "'>";

    // رقم السؤال
    popupHtml +=
      "<div class='unscramble_number'>" + (questionIndex + 1) + "</div>";

    // الكلمة المخربطة
    popupHtml += "<div class='unscramble_word'>" + scrambledWord + "</div>";

    // حقل الإجابة
    popupHtml += "<div class='unscramble_input_wrap'>";

    popupHtml +=
      "<input" +
      " class='text_input_area unscramble_input'" +
      " type='text'" +
      " maxlength='" +
      (questionData.maxlength || 20) +
      "'" +
      " data-type='" +
      (questionData.type || "text") +
      "'" +
      " autocomplete='off'" +
      " />";

    // إشارة الصح والخطأ
    popupHtml += "<div class='unscramble_result_icon'>";

    popupHtml += "<span class='unscramble_tick'>✓</span>";

    popupHtml += "<span class='unscramble_cross'>✕</span>";

    popupHtml += "</div>";

    popupHtml += "</div>";
    popupHtml += "</div>";
  }

  popupHtml += "</div>";

  // أزرار Check وReset
  popupHtml += "<div class='unscramble_controls'>";

  popupHtml +=
    "<button type='button' class='check_unscramble_btn'>" +
    "Check Answer" +
    "</button>";

  popupHtml +=
    "<button type='button' class='reset_unscramble_btn'>" +
    "Reset" +
    "</button>";

  popupHtml += "</div>";

  popupHtml += "</div>";
  popupHtml += "</div>";

  /*
   * نخزن الإجابات داخل العنصر حتى نستخدمها
   * عند الضغط على Check Answer.
   */
  setTimeout(function () {
    var popupElement = $(".readHilightsPanel4_1");

    popupElement
      .off("click.unscrambleCheck", ".check_unscramble_btn")
      .on("click.unscrambleCheck", ".check_unscramble_btn", function (event) {
        /*
         * منع كبسة Check من تشغيل أو إيقاف
         * صوت البوب أب الرئيسي.
         */
        event.stopPropagation();

        popupElement.find(".unscramble_question").each(function (index) {
          var currentQuestion = questions[index];

          if (!currentQuestion) {
            return;
          }

          var inputElement = $(this).find(".unscramble_input");

          var userAnswer = inputElement.val().trim();

          var correctAnswers = currentQuestion.answer || [];

          var alternateAnswers = currentQuestion.alternateanswer || [];

          var allAnswers = correctAnswers.slice();

          alternateAnswers.forEach(function (answersGroup) {
            if (Array.isArray(answersGroup)) {
              allAnswers = allAnswers.concat(answersGroup);
            } else if (answersGroup) {
              allAnswers.push(answersGroup);
            }
          });

          var strictCase = currentQuestion.strictcase === "yes";

          var normalizedUserAnswer = strictCase
            ? userAnswer
            : userAnswer.toLowerCase();

          var isCorrect = allAnswers.some(function (correctAnswer) {
            var normalizedCorrectAnswer = strictCase
              ? String(correctAnswer).trim()
              : String(correctAnswer).trim().toLowerCase();

            return normalizedUserAnswer === normalizedCorrectAnswer;
          });

          $(this).find(".unscramble_tick, .unscramble_cross").hide();

          inputElement.removeClass("correct_answer wrong_answer");

          if (userAnswer === "") {
            return;
          }

          if (isCorrect) {
            inputElement.addClass("correct_answer");

            $(this).find(".unscramble_tick").show();
          } else {
            inputElement.addClass("wrong_answer");

            $(this).find(".unscramble_cross").show();
          }
        });
      });

    popupElement
      .off("click.unscrambleReset", ".reset_unscramble_btn")
      .on("click.unscrambleReset", ".reset_unscramble_btn", function (event) {
        /*
         * منع كبسة Reset من التحكم بصوت البوب أب.
         */
        event.stopPropagation();

        popupElement
          .find(".unscramble_input")
          .val("")
          .removeClass("correct_answer wrong_answer");

        popupElement.find(".unscramble_tick, .unscramble_cross").hide();
      });

    /*
     * عند الكتابة بعد الفحص، نشيل نتيجة السؤال
     * حتى يفحصه الطالب من جديد.
     */
    popupElement
      .off("input.unscramble", ".unscramble_input")
      .on("input.unscramble", ".unscramble_input", function (event) {
        event.stopPropagation();

        $(this).removeClass("correct_answer wrong_answer");

        $(this)
          .closest(".unscramble_question")
          .find(".unscramble_tick, .unscramble_cross")
          .hide();
      });

    popupElement.find(".unscramble_tick, .unscramble_cross").hide();
  }, 0);

  return popupHtml;
}

/*
 * الدالة الرئيسية.
 */
function buildModelContent(aObj) {
  console.log("Hi from new function");

  if (!aObj || !aObj.slides || !aObj.slides.length) {
    return;
  }

  for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
    var currentSlide = slideIndex + 1;

    var slideData = aObj.slides[slideIndex];

    if (!slideData) {
      continue;
    }

    /*
     * Letter from the Editor.
     */
    if (slideData.listen) {
      var listenPopupHtml = buildListenPopup(slideData.listen);

      $(".readHilightsPanel_" + currentSlide)
        .find(".modal-body")
        .empty()
        .append(listenPopupHtml);
    }

    /*
     * Star Student.
     */
    if (slideData.listen2) {
      var listen2PopupHtml = buildListenPopup(slideData.listen2);

      $(".readHilightsPanel2_" + currentSlide)
        .find(".modal-body")
        .empty()
        .append(listen2PopupHtml);
    }

    /*
     * What are they saying?
     */
    if (slideData.listen3) {
      var listen3PopupHtml = buildListenPopup(slideData.listen3);

      $(".readHilightsPanel3_" + currentSlide)
        .find(".modal-body")
        .empty()
        .append(listen3PopupHtml);
    }

    /*
     * Questions popup.
     */
    if (slideData.listen4) {
      var listen4PopupHtml = buildQuestionsPopup(slideData.listen4);

      $(".readHilightsPanel4_" + currentSlide)
        .find(".modal-body")
        .empty()
        .append(listen4PopupHtml);
    }
  }
}

// -------------------- audio icon control --------------------

function checkSnapShotBuilt() {
  setLoadedStatus("slide_Newsletter.html");
}

function shakeImage() {
  $(".shakingImage").css("transform", "rotate(4deg)");

  setTimeout(function () {
    $(".shakingImage").css("transform", "rotate(-4deg)");

    setTimeout(function () {
      setTimeout(shakeImage, 800);
    }, 800);
  }, 800);
}

function audioPlayer() {
  document.addEventListener("DOMContentLoaded", function () {
    var audioPlayerElement = document.getElementById("audioPlayer");

    var playButton = document.getElementById("playButton");

    var pauseButton = document.getElementById("pauseButton");

    var stopButton = document.getElementById("stopButton");

    if (!audioPlayerElement || !playButton || !pauseButton || !stopButton) {
      return;
    }

    playButton.addEventListener("click", function () {
      audioPlayerElement.play();
    });

    pauseButton.addEventListener("click", function () {
      audioPlayerElement.pause();
    });

    stopButton.addEventListener("click", function () {
      audioPlayerElement.pause();
      audioPlayerElement.currentTime = 0;
    });
  });
}
