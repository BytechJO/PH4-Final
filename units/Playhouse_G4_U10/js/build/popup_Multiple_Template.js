

function buildMcqBody(aObj) {
	var slideHtml = "";
	var newsPopup = "";
	var numOfQuestions = (aObj["slides"][0]["listen"]["questions"]).length;
	var numberofCols = parseInt(aObj.numberofcolumns);
	var numOfQinCol = Math.round(numOfQuestions/numberofCols);
	var currQueNum = 0;	
	for (var slide = 0; slide < 4; slide++) {
		current_slide = slide + 1;

		if (typeof aObj["slides"][slide] !== undefined && aObj["slides"][slide] != null) {
			listen_Popups_array = aObj["slides"][slide].listen["questions"];
			listen_Popups = "<div class='readHilightsPanel_container' >";
				// listen_Popups += "<div class='title d-flex'>";
				// 	listen_Popups += "<img src='"+aObj["slides"][slide].listen["top_image"]+"' />";
				// listen_Popups += "</div>";
				listen_Popups += "<br />";
				// listen_Popups += "<div class='all_words d-flex flex-wrap justify-content-around'>"
					for (var listenwords = 0; listenwords < listen_Popups_array.length; listenwords++) {
						listen_Popups += '<div class="tick_group d-flex flex-column">';
						// listen_Popups += '<div class="audioIcon off title contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
						// 	listen_Popups += '<span class="">'+aObj.title+'</span>'; 
						// listen_Popups += '</div>';
						for(y= 0;y<numOfQinCol;y++){
							listenwords++;
							var tpOb = (aObj["slides"][0]["listen"]["questions"])[currQueNum];
							console.log(aObj["slides"][0]["listen"]["questions"][0])
							if(typeof tpOb != undefined && tpOb != null ){
								listen_Popups += '<div class="que d-flex flex-wrap" id="que_'+currQueNum+'" data-qno="'+currQueNum+'">';
								listen_Popups += '<div class="d-flex q_part">';
													
								listen_Popups += '<div class="question">'+tpOb.question+'</div>';
								listen_Popups += '</div>'; // - /q_part
								listen_Popups += '<div class="d-flex flex-column picks_grp">';
								
								if((tpOb.options).length > 0){
									for(var opt=0;opt<(tpOb.options).length;opt++){
										listen_Popups += '<div id="pick_'+(listenwords)+'_'+(opt+1)+'" class="pick">';                            
										listen_Popups += '<div class="txt">'+((tpOb.options)[opt]).text+'</div> ';                                   
										listen_Popups += '</div>';
									}
									
								}
								listen_Popups += '</div>';// - /picks_grp

								listen_Popups += '<div class="icon_wrap p-2">';
								listen_Popups += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
								listen_Popups += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
								listen_Popups += '</div>';
								
								// debugger;
								
								listen_Popups += '</div>';
							}
						}
						listen_Popups += '</div>';	
					}								
				listen_Popups += '</div>';// --/ tick_group
			$(".readHilightsPanel4_" + current_slide).find(".modal-body").append(listen_Popups);
		}

	}
}

// -------------------- [ audio icon control ]----------------        

function checkSnapShotBuilt() {
	// clearInterval(_snapshotInterval);
	setLoadedStatus('slide_Newsletter.html');
}

function shakeImage() {
	$(".shakingImage").css("width", "390px");
	setTimeout(function() {
	  $(".shakingImage").css("width", "420px");
	  setTimeout(function() {
		$(".shakingImage").css("width", "390px");
		setTimeout(shakeImage, 600);
	  }, 600);
	}, 600);
}
