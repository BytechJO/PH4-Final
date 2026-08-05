function buildFillInBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var layOut = parseInt(aObj.layout);
        var numOfQuestions = (aObj.questions).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
    	var currentQue = 1;
        			
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/back_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
		htmlStmt +=  '<a href="">'
		htmlStmt +=  '<img src="../images/icons/next_btn.png" />'
		htmlStmt +=  '</a>'
		htmlStmt +=  '</div>'

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
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
		htmlStmt += '<div class="screen_elements d-flex flex-column">';
		htmlStmt += '<div class="group_elm d-flex flex-wrap justify-content-center align-items-center mb-70">';
		if (
    aObj.slides != undefined &&
    Array.isArray(aObj.slides) &&
    aObj.slides.length > 0
) {

    for (
        var slideIndex = 0;
        slideIndex < aObj.slides.length;
        slideIndex++
    ) {

        var slide = aObj.slides[slideIndex];

        if (slide.layout == "grid_columns") {

            var curIndex = 0;
            var wordStyle = 0;

            var audioArry = slide.audio || [];
            var wordArray = slide.word || [];
            var imageArray = slide.image || [];

            htmlStmt +=
                "<div class='d-flex justify-content-center align-items-center grid_columns_container " +
                (slide.parent_class_name || "") +
                "'>";

            htmlStmt += "<div class='col_grid_container'>";

            var mainImage = "";

            if (Array.isArray(slide.mainImage)) {
                mainImage = slide.mainImage[0] || "";
            } else {
                mainImage = slide.mainImage || "";
            }

            if (mainImage != "") {
                htmlStmt +=
                    "<img src='" +
                    mainImage +
                    "' style='width:100%;'/>";
            }

            if (
                slide.middleImage != undefined &&
                slide.middleImage != ""
            ) {
                htmlStmt +=
                    "<img src='" +
                    slide.middleImage +
                    "' class='middle_image'/>";
            }

            htmlStmt +=
                "<div class='snap_group_all cont_group' style='" +
                (slide.group_styles || "") +
                "'>";

            var ImagePos = slide.imagePlacePos || [];

            for (
                var snapIndex = 0;
                snapIndex < ImagePos.length;
                snapIndex++
            ) {

                htmlStmt +=
                    "<div class='snap_group_" +
                    Number(snapIndex + 1) +
                    " row mx-0'>";

                for (
                    var imgIndex = 0;
                    imgIndex < ImagePos[snapIndex].colData.length;
                    imgIndex++
                ) {

                    htmlStmt +=
                        "<div class='col-12 col-md-" +
                        ImagePos[snapIndex].colWidth[imgIndex] +
                        "'>";

                    if (
                        ImagePos[snapIndex].colData[imgIndex] != 0
                    ) {

                        wordStyle = curIndex + 1;

                        htmlStmt +=
                            "<div class='snap_card audioIcon' " +
                            "data-slideNum='" +
                            Number(slideIndex + 1) +
                            "' " +
                            "data-audio='" +
                            (audioArry[curIndex] || "") +
                            "' " +
                            "data-onaudioplay=''>";

                        if (
                            wordArray[curIndex] != undefined
                        ) {

                            htmlStmt +=
                                "<div class='ss_word ss_t_" +
                                wordStyle +
                                "'>";

                            htmlStmt +=
                                "<div class='ss_text'>" +
                                wordArray[curIndex] +
                                "</div>";

                            htmlStmt += "</div>";

                        } else if (
                            imageArray[curIndex] != undefined
                        ) {

                            htmlStmt +=
                                "<img src='" +
                                imageArray[curIndex] +
                                "' class='img_card'/>";
                        }

                        htmlStmt += "</div>";

                        curIndex++;
                    }

                    htmlStmt += "</div>";
                }

                htmlStmt += "</div>";
            }

            htmlStmt += "</div>";
            htmlStmt += "</div>";
            htmlStmt += "</div>";
        }
    }
}

			htmlStmt += '<div class="area d-flex flex-wrap">';

				htmlStmt += '<div class="textarea-container">';
					htmlStmt += '<div class="audioIcon off contant" data-audio="'+aObj.textAudio+'">' ;
						htmlStmt += '<div class="text">' + aObj.text + '</div>';
					htmlStmt += '</div>';
					htmlStmt += '<textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
		htmlStmt += '</div></div></div>'; // end - all_cont / options 
		
	}

	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  