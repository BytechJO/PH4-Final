

function buildModelContent(aObj) {
	console.log("Hi from new function");
	
	var slideHtml = "";
	var newsPopup = "";

	for (var slide = 0; slide < 4; slide++) {
		current_slide = slide + 1;

		if (typeof aObj["slides"][slide] !== undefined && aObj["slides"][slide] != null) {
			listen_Popups_array = aObj["slides"][slide].listen["text"];
			listen_Popups = "<div class='readHilightsPanel_container' >"
				listen_Popups += "<div class='title'>"
					for (var listenTitles = 0; listenTitles < aObj["slides"][slide].listen["titleTexts"].length; listenTitles++) {
						listen_Popups += "<div class='snap_word snap_card audioTile' data-audio='" + aObj["slides"][slide].listen["titlesAudio"] + "'data-onaudioplay=''>"
							listen_Popups += "<p class= 'title_text'>" + aObj["slides"][slide].listen["titleTexts"] + "</p>"
							listen_Popups += "<img class='title_in_snap top_image' src='" + aObj["slides"][slide].listen["top_image"] + "' />"
							if(aObj["slides"][slide].listen["second_image"] != undefined && aObj["slides"][slide].listen["second_image"] != ""){
								listen_Popups += "<img class='title_in_snap second_image' src='" + aObj["slides"][slide].listen["second_image"] + "' />"
							}
						listen_Popups += "</div>";
					}

				listen_Popups += "</div>";
				listen_Popups += "<br />";
				listen_Popups += "<div class='all_words d-flex flex-wrap justify-content-around'>"
					for (var listenwords = 0; listenwords < listen_Popups_array.length; listenwords++) {
						listen_Popups += "<div class='flex_item_container'>"
							listen_Popups += "<div class='snap_word snap_card audioTile' data-audio='" + aObj["slides"][slide].listen["audio"][listenwords] + "'data-onaudioplay=''>"
								listen_Popups += "<p class= 'word_in_snap'>" + aObj["slides"][slide].listen["text"][listenwords] + "</p>"
							listen_Popups += "</div>";
						listen_Popups += "</div>";
					}
				listen_Popups += "</div>";
			listen_Popups += "</div>";
			$(".readHilightsPanel_" + current_slide).find(".modal-body").append(listen_Popups);
			/////////////////////////////////////////////////////////////////////////////////////
			listen2_Popups_array = aObj["slides"][slide].listen2["text"];
			listen2_Popups = "<div class='readHilightsPanel_container' >";
			// listen2_Popups += "<div class='title'>"
			// 		for (var listenTitles = 0; listenTitles < aObj["slides"][slide].listen2["titleTexts"].length; listenTitles++) {
			// 			listen2_Popups += "<div class='snap_word snap_card audioTile' data-audio='" + aObj["slides"][slide].listen2["titlesAudio"] + "'data-onaudioplay=''>"
			// 				listen2_Popups += "<p class= 'title_text'>" + aObj["slides"][slide].listen2["titleTexts"] + "</p>"
							listen2_Popups += "<img class='title_in_snap top_image' src='" + aObj["slides"][slide].listen2["top_image"] + "' />"
							if(aObj["slides"][slide].listen2["second_image"] != undefined && aObj["slides"][slide].listen2["second_image"] != ""){
								listen2_Popups += "<img class='title_in_snap second_image' src='" + aObj["slides"][slide].listen2["second_image"] + "' />"
							}
			// 			listen2_Popups += "</div>";
			// 		}

			// 	listen2_Popups += "</div>";
				listen2_Popups += "<br />";
				listen2_Popups += "<div class='all_words d-flex flex-wrap justify-content-around'>"
					for (var listen2words = 0; listen2words < listen2_Popups_array.length; listen2words++) {
						listen2_Popups += "<div class='flex_item_container'>"
							listen2_Popups += "<div class='snap_word snap_card audioTile' data-audio='" + aObj["slides"][slide].listen2["audio"][listen2words] + "'data-onaudioplay=''>"
								listen2_Popups += "<p class= 'word_in_snap'>" + aObj["slides"][slide].listen2["text"][listen2words] + "</p>"
							listen2_Popups += "</div>";
						listen2_Popups += "</div>";
					}
				listen2_Popups += "</div>";
			listen2_Popups += "</div>";
			$(".readHilightsPanel2_" + current_slide).find(".modal-body").append(listen2_Popups);
			//////////////////////////////////////////////////////////////////////////////////////
			listen3_Popups_array = aObj["slides"][slide].listen3["text"];
			listen3_Popups = "<div class='readHilightsPanel_container' >";
			listen3_Popups += "<div class='title'>"
					for (var listenTitles = 0; listenTitles < aObj["slides"][slide].listen3["titleTexts"].length; listenTitles++) {
						listen3_Popups += "<div class='snap_word snap_card audioTile' data-audio='" + aObj["slides"][slide].listen3["titlesAudio"] + "'data-onaudioplay=''>"
							listen3_Popups += "<p class= 'title_text'>" + aObj["slides"][slide].listen3["titleTexts"] + "</p>"
							listen3_Popups += "<img class='title_in_snap top_image' src='" + aObj["slides"][slide].listen3["top_image"] + "' />"
							if(aObj["slides"][slide].listen3["second_image"] != undefined && aObj["slides"][slide].listen3["second_image"] != ""){
								listen3_Popups += "<img class='title_in_snap second_image' src='" + aObj["slides"][slide].listen3["second_image"] + "' />"
							}
						listen3_Popups += "</div>";
					}

				listen3_Popups += "</div>";
				listen3_Popups += "<br />";
				listen3_Popups += "<div class='all_words d-flex flex-wrap justify-content-around'>"
					for (var listen3words = 0; listen3words < listen3_Popups_array.length; listen3words++) {
						listen3_Popups += "<div class='flex_item_container'>"
							listen3_Popups += "<div class='snap_word snap_card audioTile' data-audio='" + aObj["slides"][slide].listen3["audio"][listen3words] + "'data-onaudioplay=''>"
								listen3_Popups += "<p class= 'word_in_snap'>" + aObj["slides"][slide].listen3["text"][listen3words] + "</p>"
							listen3_Popups += "</div>";
						listen3_Popups += "</div>";
					}
				listen3_Popups += "</div>";
			listen3_Popups += "</div>";
			$(".readHilightsPanel3_" + current_slide).find(".modal-body").append(listen3_Popups);
			//////////////////////////////////////////////////////////////////////////////////////
			listen4_Popups_array = aObj["slides"][slide].listen4["questions"];
			listen4_Popups = "<div class='readHilightsPanel_container' >";
				listen4_Popups += "<div class='title d-flex'>";
					listen4_Popups += "<img src='"+aObj["slides"][slide].listen4["top_image"]+"' />";
				listen4_Popups += "</div>";
				listen4_Popups += "<br />";
				// listen4_Popups += "<div class='all_words d-flex flex-wrap justify-content-around'>"
				listen4_Popups += "<div class='body_Panel'>";
					for (var listen4words = 0; listen4words < listen4_Popups_array.length; listen4words++) {
						var tmpObj = aObj["slides"][slide].listen4["questions"][listen4words];
						listen4_Popups += '<div class="que img_fillin_gr d-flex flex-column" data-qno="' + (listen4words + 1) + '">';
						if (tmpObj.singleword) {
							var str = tmpObj.text;
							var qStr = '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' + tmpObj.textaudios[0] + '">' + '<img src="../images/icons/sound-wave.png" class="audio_icon">' + '</div>'
							qStr += str.replace(/\[_]/g, '<input class="text_input_area" type="text" maxlength="' + tmpObj.maxlength + '" data-type="' + tmpObj.type + '">');
						  } else {
							var wordIndex = -1;
							words = tmpObj.text.split('[_]')
							qStr = words.map((word, index) => {
							  if (word !== '') {
								wordIndex++;
								return '<div class="audioIcon txt-audioIcon off d-flex contant min_w_fit_contant" data-audio="' + tmpObj.textaudios[wordIndex] + '">' + word + '</div>'
							  }
							}).join('<input class="text_input_area" type="text" maxlength="' + tmpObj.maxlength + '" data-type="' + tmpObj.type + '">');
						  }
						  
						  listen4_Popups += '<div class="fillin_gr d-flex align-items-center">';
						  listen4_Popups += '<div class="q_space d-flex flex-wrap">';
							  listen4_Popups += '<div class="fillin_set d-flex flex-wrap">';
							  listen4_Popups += qStr;
							  listen4_Popups += '</div>';// - end fillin_set
							  listen4_Popups += '<div class="audioIcon textEnd off d-flex contant" data-audio="">' ;
							  listen4_Popups +=  tmpObj.textEnd ;
							  listen4_Popups += '</div>';
							  var ans = tmpObj.text.includes('[_]') ? "true" : "false";
							  if(ans=="true"){
							  listen4_Popups += '<div class="icon_wrap_holder">';
							  listen4_Popups += '<div class="icon_wrap">';
							  listen4_Popups += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
							  listen4_Popups += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
							  listen4_Popups += '</div></div>';// - end icon_wrap_holder / icon_wrap
							  }else{
							  listen4_Popups += '<div class="icon_wrap_holder">';
							  listen4_Popups += '<div class="icon_wrap">';
							  listen4_Popups += '<div class="tick"></div>';
							  listen4_Popups += '<div class="cross"></div>';
							  listen4_Popups += '</div></div>';// - end icon_wrap_holder / icon_wrap
							  }
						  listen4_Popups += '</div>';
						  listen4_Popups += '</div></div>';
					}
				listen4_Popups += "</div>";
			listen4_Popups += "</div>";
			$(".readHilightsPanel4_" + current_slide).find(".modal-body").append(listen4_Popups);
		}

	}
}

// -------------------- [ audio icon control ]----------------        

function checkSnapShotBuilt() {
	// clearInterval(_snapshotInterval);
	setLoadedStatus('slide_Newsletter.html');
}

function shakeImage() {
	$(".shakingImage").css("transform", "rotate(4deg)");
	setTimeout(function() {
	  $(".shakingImage").css("transform", "rotate(-4deg)");
	  setTimeout(function() {
		// $(".shakingImage").css("transform", "rotate(0deg)");
		setTimeout(shakeImage, 800);
	  }, 800);
	}, 800);
}

function audioPlayer(){
	document.addEventListener('DOMContentLoaded', function () {
		const audioPlayer = document.getElementById('audioPlayer');
	
		// Additional controls
		const playButton = document.getElementById('playButton');
		const pauseButton = document.getElementById('pauseButton');
		const stopButton = document.getElementById('stopButton');
	
		playButton.addEventListener('click', playAudio);
		pauseButton.addEventListener('click', pauseAudio);
		stopButton.addEventListener('click', stopAudio);
	
		function playAudio() {
			audioPlayer.play();
		}
	
		function pauseAudio() {
			audioPlayer.pause();
		}
	
		function stopAudio() {
			audioPlayer.pause();
			audioPlayer.currentTime = 0;
		}
	});
}
