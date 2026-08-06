function buildFillInBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj === "undefined" || aObj === null) {
    return;
  }

  /* =====================================================
     Navigation
  ===================================================== */

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
  htmlStmt += "<a href=''>";
  htmlStmt += '<img src="../images/icons/back_btn.png" />';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  htmlStmt +=
    '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
  htmlStmt += "<a href=''>";
  htmlStmt += '<img src="../images/icons/next_btn.png" />';
  htmlStmt += "</a>";
  htmlStmt += "</div>";

  /* =====================================================
     Heading
  ===================================================== */

     // ===================================================================== heading =====================
            htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
                if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                    htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
                }
                htmlStmt += '</div>';
            htmlStmt += '</div>';

            htmlStmt += '<div class="activityHeading">'
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += "<div class='page_sub_title'>";
                    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
                    for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                        htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                    }
                    htmlStmt += "<br><p class='subTitleTextRight'> " + aObj.subTitleTextRight + " </p>";
                htmlStmt += "</div>";
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '</div>';

  /* =====================================================
     Activity
  ===================================================== */

  htmlStmt += '<div class="options cont_ht_sf mx-auto">';
  htmlStmt += '<div class="all_cont">';
  htmlStmt += '<div class="screen_elements">';

  htmlStmt += '<div class="famous-place-board">';

  /*
   * SVG للأسهم فقط.
   * لا توجد صور مستخدمة في التصميم.
   */
  htmlStmt +=
    '<svg class="fact-arrows" viewBox="0 0 1000 500" ' +
    'preserveAspectRatio="none" aria-hidden="true">';

  htmlStmt += "<defs>";
  htmlStmt +=
    '<marker id="arrowHead" markerWidth="10" markerHeight="10" ' +
    'refX="8" refY="3" orient="auto" markerUnits="strokeWidth">';
  htmlStmt += '<path d="M0,0 L0,6 L9,3 z"></path>';
  htmlStmt += "</marker>";
  htmlStmt += "</defs>";

  htmlStmt +=
    '<line x1="420" y1="205" x2="270" y2="140" marker-end="url(#arrowHead)"></line>';

  htmlStmt +=
    '<line x1="420" y1="295" x2="270" y2="360" marker-end="url(#arrowHead)"></line>';

  htmlStmt +=
    '<line x1="580" y1="205" x2="730" y2="140" marker-end="url(#arrowHead)"></line>';

  htmlStmt +=
    '<line x1="580" y1="295" x2="730" y2="360" marker-end="url(#arrowHead)"></line>';

  htmlStmt += "</svg>";

  /* =====================================================
     Fact 1
  ===================================================== */

  htmlStmt += '<div class="que fact-card fact-card-left-top" data-qno="2">';

  htmlStmt += '<div class="fact-label">FACT</div>';

  htmlStmt +=
    '<textarea class="fact-input" data-type="text" ' +
    'maxlength="' +
    aObj.questions[1].maxlength +
    '" placeholder="' +
    aObj.questions[1].placeholder +
    '"></textarea>';

  htmlStmt += buildQuestionIcons();
  htmlStmt += "</div>";

  /* =====================================================
     Fact 2
  ===================================================== */

  htmlStmt += '<div class="que fact-card fact-card-left-bottom" data-qno="3">';

  htmlStmt += '<div class="fact-label">FACT</div>';

  htmlStmt +=
    '<textarea class="fact-input" data-type="text" ' +
    'maxlength="' +
    aObj.questions[2].maxlength +
    '" placeholder="' +
    aObj.questions[2].placeholder +
    '"></textarea>';

  htmlStmt += buildQuestionIcons();
  htmlStmt += "</div>";

  /* =====================================================
     Centre
  ===================================================== */

  htmlStmt += '<div class="que famous-place-center" data-qno="1">';

  htmlStmt +=
    '<div class="famous-place-label">' + aObj.questions[0].label + "</div>";

  htmlStmt += '<div class="famous-place-circle">';

  htmlStmt +=
    '<textarea class="place-input" data-type="text" ' +
    'maxlength="' +
    aObj.questions[0].maxlength +
    '" placeholder="' +
    aObj.questions[0].placeholder +
    '"></textarea>';

  htmlStmt += buildQuestionIcons();
  htmlStmt += "</div>";

  htmlStmt += "</div>";

  /* =====================================================
     Fact 3
  ===================================================== */

  htmlStmt += '<div class="que fact-card fact-card-right-top" data-qno="4">';

  htmlStmt += '<div class="fact-label">FACT</div>';

  htmlStmt +=
    '<textarea class="fact-input" data-type="text" ' +
    'maxlength="' +
    aObj.questions[3].maxlength +
    '" placeholder="' +
    aObj.questions[3].placeholder +
    '"></textarea>';

  htmlStmt += buildQuestionIcons();
  htmlStmt += "</div>";

  /* =====================================================
     Fact 4
  ===================================================== */

  htmlStmt += '<div class="que fact-card fact-card-right-bottom" data-qno="5">';

  htmlStmt += '<div class="fact-label">FACT</div>';

  htmlStmt +=
    '<textarea class="fact-input" data-type="text" ' +
    'maxlength="' +
    aObj.questions[4].maxlength +
    '" placeholder="' +
    aObj.questions[4].placeholder +
    '"></textarea>';

  htmlStmt += buildQuestionIcons();
  htmlStmt += "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";
  htmlStmt += "</div>";

  $(".activity_area").append(htmlStmt);

  enableFamousPlaceInputs();

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

/* =====================================================
   Icons
===================================================== */

function buildQuestionIcons() {
  var iconHtml = "";

  iconHtml += '<div class="icon_wrap">';
  iconHtml +=
    '<div class="tick"><img src="../images/icons/check_btn.png" alt="correct"></div>';
  iconHtml +=
    '<div class="cross"><img src="../images/icons/cross_btn.png" alt="wrong"></div>';
  iconHtml += "</div>";

  return iconHtml;
}

/* =====================================================
   Enable check/reset when typing
===================================================== */

function enableFamousPlaceInputs() {
  var inputs = document.querySelectorAll(".famous-place-board textarea");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      this.style.color = "black";

      var checkBtn = document.getElementsByClassName("checkBtn")[0];

      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (checkBtn) {
        checkBtn.classList.remove("disabled");
      }

      if (resetBtn) {
        resetBtn.classList.remove("disabled");
      }
    });
  }
}
