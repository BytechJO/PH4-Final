function buildMcqBody(aObj) {
  var htmlStmt = "";

  if (typeof aObj != "undefined" && aObj != null) {
    var numOfQuestions = aObj.questions.length;

    var numberofCols = parseInt(aObj.numberofcolumns);

    var numOfQinCol = Math.ceil(numOfQuestions / numberofCols);

    var currQueNum = 0;

    /* =========================================
       Footer Navigation
    ========================================= */

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

    /* =========================================
       Heading
    ========================================= */
   
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
				htmlStmt += "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
			htmlStmt += "</div>";
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div>';
    /* =========================================
       Main
    ========================================= */

    htmlStmt += '<div class="options cont_ht_sf mx-auto">';

    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    htmlStmt +=
      '<div class="h-100 d-flex flex-wrap justify-content-center align-items-center mb-70">';

    /* =========================================
       Front Image
    ========================================= */

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "front") {
        htmlStmt += '<div class="img_space">';

        htmlStmt += '<img src="' + aObj.image + '">';

        htmlStmt += "</div>";
      }
    }

    /* =========================================
       Columns
    ========================================= */

    for (var col = 0; col < numberofCols; col++) {
      htmlStmt += '<div class="question_group">';

      /* =========================================
         Table Header
      ========================================= */

      htmlStmt += '<div class="mcq_table_header">';

      htmlStmt += '<div class="table_header_blank"></div>';

      htmlStmt += '<div class="table_header_cell">Adjective</div>';

      htmlStmt += '<div class="table_header_cell">Comparative</div>';

      htmlStmt += '<div class="table_header_cell">Superlative</div>';

      htmlStmt += "</div>";

      /* =========================================
         Questions
      ========================================= */

      for (var row = 0; row < numOfQinCol; row++) {
        currQueNum++;

        if (currQueNum > numOfQuestions) {
          break;
        }

        var tpOb = aObj.questions[currQueNum - 1];

        if (typeof tpOb != "undefined" && tpOb != null) {
          htmlStmt +=
            '<div class="que" ' +
            'id="que_' +
            currQueNum +
            '" ' +
            'data-qno="' +
            currQueNum +
            '">';

          htmlStmt += '<div class="ques_line">';

          htmlStmt += '<div class="q_grp">';

          htmlStmt += '<div class="q_part">';

          /* =========================================
             Question Image
          ========================================= */

          if (tpOb.image != "" && tpOb.image != "no") {
            htmlStmt += '<div class="img_space">';

            htmlStmt += '<img src="' + tpOb.image + '">';

            htmlStmt += "</div>";
          }

          /* =========================================
             Question Text
          ========================================= */

          var str = tpOb.question;

          /* =========================================
             Build Blank
          ========================================= */

          str = str.replace(
            "[blank]",
            '<span class="answer_blank">____________</span>',
          );

          var opts = tpOb.options;

          var count = (str.match(/\[_\]/g) || []).length;

          var fillBoxesArr = [];

          /* =========================================
             Build Pick Sets
          ========================================= */

          for (var rr = 0; rr < opts.length; rr++) {
            var tmphtml = "";

            tmphtml +=
              "<span class='pick_set' " +
              "id='pick_set_" +
              currQueNum +
              "_" +
              (rr + 1) +
              "'>";

            if (tpOb.inputbox != "no") {
              tmphtml +=
                "<input " +
                "class='text_input_area' " +
                "type='text' " +
                "readonly " +
                "disabled>";
            }

            var tmpOpt = opts[rr];

            for (var aa = 0; aa < tmpOpt.length; aa++) {
              tmphtml +=
                "<span " +
                'class="pick" ' +
                'id="pick_' +
                currQueNum +
                "_" +
                (rr + 1) +
                "_" +
                (aa + 1) +
                '" ' +
                'data-opttext="' +
                tmpOpt[aa] +
                '">' +
                tmpOpt[aa] +
                "</span>";
            }

            tmphtml += "</span>";

            fillBoxesArr[rr] = tmphtml;
          }

          /* =========================================
             Replace [_]
          ========================================= */

          var resArr = str.split("[_]");

          var finalHtml = "";

          for (var i = 0; i < resArr.length; i++) {
            if (resArr[i] != "") {
              finalHtml +=
                "<div " +
                'class="question_sentence contant not-disapled" ' +
                'data-audio="' +
                tpOb.audio +
                '">' +
                resArr[i] +
                "</div>";
            }

            if (i < fillBoxesArr.length) {
              finalHtml += fillBoxesArr[i];
            }
          }

          /* =========================================
             Output
          ========================================= */

          htmlStmt += '<div class="text_container">';

          htmlStmt += '<div class="text_part">';

          htmlStmt += finalHtml;

          htmlStmt += "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";

          /* =========================================
             Validation Icons
          ========================================= */

          htmlStmt += '<div class="icon_wrap p-2">';

          htmlStmt += '<div class="tick">';

          htmlStmt += '<img src="../images/icons/check_btn.png">';

          htmlStmt += "</div>";

          htmlStmt += '<div class="cross">';

          htmlStmt += '<img src="../images/icons/cross_btn.png">';

          htmlStmt += "</div>";

          htmlStmt += "</div>";

          htmlStmt += "</div>";
        }
      }

      htmlStmt += "</div>";
    }

    /* =========================================
       Back Image
    ========================================= */

    if (aObj.image != "no" && aObj.image != "") {
      if (aObj.imageposition == "back") {
        htmlStmt += '<div class="img_space">';

        htmlStmt += '<img src="' + aObj.image + '">';

        htmlStmt += "</div>";
      }
    }

    htmlStmt += "</div>";

    htmlStmt += "</div>";

    htmlStmt += "</div>";
  }

  console.log("htmlStmt >> MCQ Built");

  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}

function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
