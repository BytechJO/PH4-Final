/*$(function () {
    var myData = {};  */
    function buildFillInBody(aObj) {
        var htmlStmt = '';
        if (aObj != undefined && aObj != null) {
            var layOut = parseInt(aObj.layout);
           
            if (layOut == 4) {
               	// ============== ****  **** ==============
               
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

				htmlStmt += '<div class="act_head_group justify-content-center">';
					htmlStmt += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
						htmlStmt += '<div class="q-type-img-container">';
						htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
						if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
							htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + '">';
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
							htmlStmt += "<p> " + aObj.subTitleTextRight + " </p>";
						htmlStmt += "</div>";
						htmlStmt += '</div>';
					htmlStmt += '</div>';
				htmlStmt += '</div>';
    			//////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

				htmlStmt += '<div class="options">';
					// options
					if (typeof aObj.options != undefined && aObj.options != null) {
						if (aObj.options.length > 0) {
							htmlStmt += '<div class="word_opt_sticky d-flex justify-content-center">';
							htmlStmt += '<div class="word_options d-flex flex-wrap justify-content-around">';
							jQuery.each(aObj.options, function (key, value) {
							htmlStmt += '<div class="audioIcon textEnd off d-flex contant" data-audio="'+aObj.optionsAudios[key]+'">' ;
								htmlStmt += '<div class="clue_word">' + value + '</div>';
							htmlStmt += '</div>';
							});
							htmlStmt += '</div>';
							htmlStmt += '</div>';
						}
					}
					// ===========================================================
					htmlStmt += '<div class="group_elm d-flex flex-column">';

						for(let i = 0; i < aObj.numberOfTextarea; i++){
							htmlStmt += '<div class="item d-flex flex-wrap">';
								htmlStmt += '<div class="textarea-container">';
									htmlStmt += ' <textarea id="paper-textarea" rows="10" cols="50" maxlength="400"></textarea>';
								htmlStmt += '</div>';
								htmlStmt += '<img src="'+aObj.images[0]+'">';
								htmlStmt += '<div class="textEnd">'+aObj.textEnd+'</div>';
							htmlStmt += '</div>';

						}
					htmlStmt += '</div>';
						
				htmlStmt += '</div>';
            }
            
        }
    
        console.log('htmlStmt >> fillin Built');
        $(".activity_area").append(htmlStmt);
    
        setLoadedStatus(getCurrFileOrDirectory('file'));
    }
    /*if (fillin_data != undefined && fillin_data != null) {	
            myData = fillin_data;			
            buildFillInBody(myData);
         }
    });*/