/*$(function () {
    var myData = {};  */
function buildFillInBody(aObj) {
  var htmlStmt = '';
  if (aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = (aObj.questions).length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;
    console.log("NUm of Question: ", numOfQuestions, numInRowArray, numOfRows);

    htmlStmt += '<div class="act_head_group justify-content-center">';
			htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.main_activityheading_audio + '">';
				htmlStmt += '<div class="q-type-img-container">';
				htmlStmt += '<img class="" src=' + aObj.main_activityheading + '>';
				htmlStmt += '</div>';
			htmlStmt += '</div>';

			htmlStmt += '<div class="activityHeading">'
				htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.activityheading_audio + '">';
				htmlStmt += aObj.activityheading;
				htmlStmt += '</div>';
			htmlStmt += '</div>';
		htmlStmt += '</div>';
    
    if (layOut == 1) {
     
      htmlStmt += '<div class="options">';
      for (x = 0; x < numOfRows; x++) {
        htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';
        for (y = 0; y < numInRowArray[x].length; y++) {
          htmlStmt += '<div class="p-0">';
          htmlStmt += '<div class="que que_' + currentQue + ' d-flex justify-content-around pt-3 m-1" data-qno="' + (currentQue) + '">';

          htmlStmt += '<div class="image_wrap"><img src="' + ((aObj.questions)[currentQue - 1]).image + '"></div>';
          htmlStmt += '<div class="txt_wrap">';
          htmlStmt += '<div class="txtBox mx-2" data-type="text"><input type="text"  onkeypress="return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123)" maxlength="1"/>  <span>' + ((aObj.questions)[currentQue - 1]).question + '</span></div>';
          htmlStmt += '<div class="theIcons d-flex">';
          htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '"></div>';

          htmlStmt += '<div class="icon_wrap mx-1">';
          htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
          htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
          htmlStmt += '</div>';
          htmlStmt += '</div>';
          htmlStmt += '</div></div></div>';
          currentQue++;

        }
        htmlStmt += '</div>';
      }
      htmlStmt += '</div>';
    } else if (layOut == 2) {
     
      htmlStmt += '<div class="options cont_ht_sf mx-auto"><div class="cont_group">';
      var rowCount = 1;
      for (x = 0; x < numOfRows; x++) {
        htmlStmt += '<div class="row_' + rowCount + ' d-flex flex-wrap justify-content-center">';
        for (y = 0; y < numInRowArray[x].length; y++) {
          htmlStmt += '<div class="que f_i_t_2_q_group f_i_t_2_g_' + (y + 1) + '" data-qno="1">';
          htmlStmt += '<div class="img_box1"><img src="' + ((aObj.questions)[currentQue - 1]).image + '"></div>';
          htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
          htmlStmt += '<span>' + ((aObj.questions)[currentQue - 1]).question + '</span>';
          htmlStmt += '<input class="mx-2" type="text" maxlength="1">'
          htmlStmt += '<div class="icon_wrap">';
          htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
          htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
          htmlStmt += '</div>';
          htmlStmt += '<div class="audioIcon off disabled" data-audio="' + ((aObj.questions)[currentQue - 1]).audio + '"></div>';
          htmlStmt += '</div>';
          htmlStmt += '</div>';
          currentQue++;
        }
        htmlStmt += '</div>';
      }

      htmlStmt += '</div></div>';
      console.log('htmlStmt >> ', htmlStmt);
    }
    if (layOut == 3) {

      htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
      htmlStmt += '<a href="">'
      htmlStmt += '<img src="../images/icons/back_btn.png" />'
      htmlStmt += '</a>'
      htmlStmt += '</div>'
      htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
      htmlStmt += '<a href="">'
      htmlStmt += '<img src="../images/icons/next_btn.png" />'
      htmlStmt += '</a>'
      htmlStmt += '</div>'

     
      htmlStmt += '<div class="options cont_ht_sf mx-auto Box">';
      // htmlStmt += '<div class="all_cont w-80 d-flex flex-column" style="align-items:start !important;margin: 30px auto 0px auto ;gap: 10px;">';


      // htmlStmt += '</div>';
      for (x = 0; x < numOfRows; x++) {
        // htmlStmt += '<div class="d-flex content w-100">';
        for (y = 0; y < numInRowArray[x].length; y++) {
          htmlStmt += '<div class="p-0" style="width:100%">';
          htmlStmt += '<div class="que que_' + currentQue + ' d-flex m-1 align-items-center" data-qno="' + (currentQue) + '">';

          // htmlStmt += '<div class="image_wrap"><img src="'+((aObj.questions)[currentQue-1]).image+'"></div>';
          htmlStmt += '<div class="txt_wrap d-flex justify-content-between" style="width:100%">';
          // var inputboxstmt = '<input type="text" maxlength="100"/>';
          console.log("aObj.defaultAnswer", aObj.defaultAnswer, currentQue);
          if (aObj.defaultAnswer == currentQue) {
            inputboxstmt = '<input type="text" maxlength="'+((aObj.questions)[currentQue - 1]).maxlength+'"/>'
          }
          
            htmlStmt += '<div class="txtBox mx-2 " style="width:100%" data-type="text">';
              htmlStmt += '<div class="audioIcon off contant " data-audio="../audios/under.mp3" style="margin-top:35px">';
                htmlStmt +=  '<span>'+((aObj.questions)[currentQue - 1]).textbefore + '</span>';
              htmlStmt += '</div>';
              htmlStmt += inputboxstmt;
            htmlStmt += '</div>';
          
          htmlStmt += '<div class="theIcons">';
          // htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>';
          htmlStmt += '<div class="icon_wrap mx-1">';
          htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
          htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
          htmlStmt += '</div>';
          htmlStmt += '</div>';
          htmlStmt += '</div></div></div>';
          currentQue++;

        }
        // htmlStmt += '</div>';
      }
      // htmlStmt += '</div>'; // end - all_cont / options  
      htmlStmt += '</div>';// end - options  
    }
  }

  // htmlStmt += '<div class="image_container">';
  //   htmlStmt += '<img src="../images/pages/activities/WB_U1_Q2.jpg"/>';
  // htmlStmt += '</div>';
  console.log('htmlStmt >> fillin Built');
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory('file'));
}
  /*if (fillin_data != undefined && fillin_data != null) {
    myData = fillin_data;			
        buildFillInBody(myData);
     }
});*/