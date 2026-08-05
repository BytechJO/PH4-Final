function buildFillInBody(aObj) {
  var htmlStmt = "";
  if (typeof aObj != undefined && aObj != null) {
    var layOut = parseInt(aObj.layout);
    var numOfQuestions = aObj.questions.length;
    var numInRowArray = aObj.numinrow;
    var numOfRows = numInRowArray.length;
    var currentQue = 1;

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
    // ===================================================================== heading =====================
    htmlStmt += '<div class="act_head_group justify-content-center">';
    htmlStmt +=
      '<div class="audioIcon off contant " data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.mainTitleAudio +
      '">';
    htmlStmt += '<div class="q-type-img-container">';
    htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + ">";
    if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != "") {
      htmlStmt +=
        '<img class="mainTitleIcon" src=' +
        aObj.mainTitleIcon +
        ' style="right: ' +
        aObj.mainTitleIconPos.right +
        ';">';
    }
    htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += '<div class="activityHeading">';
    htmlStmt +=
      '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' +
      1 +
      '" data-audio="' +
      aObj.subTitleAudio +
      '">';
    htmlStmt += "<div class='page_sub_title'>";
    htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
    for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
      htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
    }
    htmlStmt +=
      "<br><p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    htmlStmt += "</div>";
    // ===================================================================== all_cont =====================
    htmlStmt += '<div class="options cont_ht_sf mx-auto">';
    htmlStmt +=
      '<div class="all_cont justify-content-start justify-content-sm-center">';

    // =============
    htmlStmt += '<div class="screen_elements d-flex flex-column">';
    // htmlStmt += '<div class="image_space"><img src="' + aObj.image + '"></div>';

    htmlStmt +=
      '<div class="group_elm d-flex flex-column justify-content-center align-items-center mb-70">';

  

var curIndex = 0;
var wordStyle = 0;
var audioArry = aObj.audio;
var wordArray = aObj.word;
var imageArray = aObj.image;

htmlStmt +=
  "<div class='d-flex justify-content-center align-items-center grid_columns_container " +
  aObj.parent_class_name +
  "'>";

htmlStmt += "<div class='col_grid_container'>";

if (aObj.mainImage != undefined && aObj.mainImage != "") {
  htmlStmt +=
    "<img src='" +
    aObj.mainImage +
    "' style='width: 100%;'/>";
}

if (aObj.middleImage != undefined && aObj.middleImage != "") {
  htmlStmt +=
    "<img src='" +
    aObj.middleImage +
    "' class='middle_image' />";
}

htmlStmt +=
  "<div class='snap_group_all cont_group' style='" +
  aObj.group_styles +
  "'>";

if (aObj.topText) {
  htmlStmt += "<div class='top_image_text d-flex'>";

  htmlStmt +=
    "<img src='" +
    aObj.topImage +
    "' class='top_image' />";

  htmlStmt +=
    "<div class='snap_card audioIcon mx-0 mx-md-auto' " +
    "data-slideNum='1' " +
    "data-audio='" +
    aObj.topText_audio +
    "' data-onaudioplay=''>";

  htmlStmt +=
    "<div class='ss_text'>" +
    aObj.topText +
    "</div>";

  htmlStmt += "</div>";
  htmlStmt += "</div>";
}

if (aObj.top_right_image) {
  htmlStmt +=
    "<img src='" +
    aObj.top_right_image +
    "' class='top_right_image'/>";
}

var ImagePos = aObj.imagePlacePos;

if (ImagePos != undefined) {
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

      htmlStmt +=
        "<div class='snap_card audioIcon' " +
        "data-slideNum='1' " +
        "data-audio='" +
        audioArry[curIndex] +
        "' data-onaudioplay=''>";

      if (ImagePos[snapIndex].colData[imgIndex] != 0) {
        wordStyle = curIndex + 1;

        if (aObj.word != undefined) {
          htmlStmt +=
            "<div class='ss_word ss_t_" +
            wordStyle +
            "'>" +
            "<div class='ss_text'>" +
            wordArray[curIndex] +
            "</div>" +
            "</div>";
        } else {
          htmlStmt +=
            "<img src='" +
            imageArray[curIndex] +
            "' class='img_card' />";
        }

        curIndex++;
      }

      htmlStmt += "</div></div>";
    }

    htmlStmt += "</div>";
  }
}

htmlStmt += "</div>";
htmlStmt += "</div>";
htmlStmt += "</div>";
    htmlStmt += "</div>";

    htmlStmt += "</div>";
    htmlStmt += "</div></div></div>"; // end - all_cont / options
  }
  // htmlStmt += '<div class="image-container">';
  // htmlStmt += '<img src="../images/pages/activities/p10_2_1.png"/>';
  // htmlStmt += '<img src="../images/pages/activities/p10_2_2.png"/>';
  // htmlStmt += '</div>';
  console.log("htmlStmt >> fillin Built");
  $(".activity_area").append(htmlStmt);

  setLoadedStatus(getCurrFileOrDirectory("file"));
}
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}
