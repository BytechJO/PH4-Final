function buildWordPuzzleBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var layOut = parseInt(aObj.layout);
        var numOfQuestions = (aObj.questions).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
    	var currentQue = 1;			
		
    	var numOfRow = aObj.numOfRow;
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
        // ===================================================================== all_cont =====================
		htmlStmt += '<div class="options flex-wrap"> ';
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
		htmlStmt += '<div class="h-100 d-flex">';
		
        htmlStmt += '<div class="puzzleclues d-flex flex-wrap justify-content-center align-items-center"> ';
        var cluesObj = ((aObj.questions)[0]).clues;
		 if((cluesObj.down).length > 0){
            htmlStmt += '<div class="clue_grp">';
            htmlStmt += '<div class="clueDirection">DOWN</div>';
            for(var dd=0;dd<(cluesObj.down).length; dd++ ){
                htmlStmt += '<div class="clue d-flex clue_col_'+((cluesObj.down)[dd]).wordnum+'">';
                htmlStmt += '<div class="icon_wrap_holder mr-2">';
                htmlStmt += '<div class="icon_wrap"><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
                htmlStmt += '</div>'; // end - icon_wrap_holder
                htmlStmt += '<div class="clueText">'+((cluesObj.down)[dd]).text+'</div>';
                htmlStmt += '</div>'; // end - clue
            }
            htmlStmt += '</div>';
        }
        if((cluesObj.across).length > 0){
            htmlStmt += '<div class="clue_grp">';
            htmlStmt += '<div class="clueDirection">ACROSS</div>';
            for(var cc=0;cc<(cluesObj.across).length; cc++ ){
                htmlStmt += '<div class="clue d-flex clue_row_'+((cluesObj.across)[cc]).wordnum+'">';
                htmlStmt += '<div class="icon_wrap_holder mr-2">';
                htmlStmt += '<div class="icon_wrap"><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
                htmlStmt += '</div>'; // end - icon_wrap_holder
                htmlStmt += '<div class="clueText">'+((cluesObj.across)[cc]).text+'</div>';
                htmlStmt += '</div>'; // end - clue
                
            }
            htmlStmt += '</div>';
        }        
        htmlStmt += '</div>'; // end - puzzleclues
		htmlStmt += '<div class="puzzle_container d-flex flex-wrap justify-content-center align-items-center">';
        htmlStmt += '<div class="puzzlematrix mx-auto"></div>';
		// htmlStmt +='<div class="bg_image mx-auto">';
        // htmlStmt += '<img class="bg_img" src="'+aObj.bg_image+'"">';
		// htmlStmt +='</div>';
		htmlStmt +='</div>';

        htmlStmt += '</div>'; // end - options 
		
	}

	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  