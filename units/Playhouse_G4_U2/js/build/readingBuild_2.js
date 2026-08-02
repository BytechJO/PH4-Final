// /*$(function () {  
//     // var $ =jQuery.noConflict();
//     var myData = {};*/
// function buildReadingHTML(aObj) {
//     var slide = '';
//     var slideHtml = "";
//     // console.log("reading Obje" + readingObj.slides.length);
//     slideHtml = "<div class='container content_wrap reading_container'>";
//     slideHtml += "<div class='options cont_ht_sf mx-auto'>";
//     slideHtml += "<div class='all_cont d-flex justify-content-center align-items-center'>";
//     slideHtml += "<div class='slides cont_group my-3'>";
//     if (typeof aObj !== undefined && aObj.slides.length != 0 && aObj != null) {
//         for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
//             slide = aObj.slides[slideIndex];
//             slideHtml += "<div class='slide slide_" + (slideIndex + 1) + "'>";
//             slideHtml += "<div class='red_cont d-flex flex-column justify-content-center'>";
//             slideHtml += "<div class='read_img_box d-flex justify-content-center'><img src='" + slide.image + "'></div>";
//             if (slide.text != '')
//                 slideHtml += "<div class='text_cont d-flex justify-content-center justify-content-md-left my-auto align-items-srart'>"
//             slideHtml += "<div class='audioIcon off mx-2' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.audio + "'></div>";
//             slideHtml += "<div class='content'>" + slide.text + "</div>";
//             slideHtml += "</div>";
//             slideHtml += "</div></div>";
//         }
//         slideHtml += "</div></div></div></div>";
//         // console.log(slideHtml);
//         $(".mainContent").append(slideHtml);
//         setLoadedStatus('reading.html');

//     }
// }
//    /* if (typeof reading_data !== undefined && reading_data != null) {
// myData = reading_data;
// buildReadingHTML(myData);
// }
// });*/






function buildReadingHTML(aObj) {
    var slide = '';
    var slideHtml = "";
    slideHtml = "<div class='container content_wrap reading_container'>";

    // slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
    // slideHtml +=  '<img src="../images/icons/back_btn.png" />'
    // slideHtml +=  '</div>'
    // slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
    // slideHtml +=  '<img src="../images/icons/next_btn.png" />'
    // slideHtml +=  '</div>'

    slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div>';
    slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';

    slideHtml += '<div class="act_head_group justify-content-center">';
        slideHtml += '<div class="audioIcon off contant " data-slideNum="' + 1 + '" data-audio="' + aObj.mainTitleAudio + '">';
            slideHtml += '<div class="q-type-img-container">';
            slideHtml += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
            if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
                slideHtml += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + '>';
            }
            slideHtml += '</div>';
        slideHtml += '</div>';

        slideHtml += '<div class="activityHeading">'
            slideHtml += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="' + 1 + '" data-audio="' + aObj.subTitleAudio + '">';
            slideHtml += "<div class='page_sub_title'>";
                slideHtml += "<p> " + aObj.subTitleTextLeft + " </p>";
                for (var sicons = 0 ; sicons < aObj.subTitleIcons.length ; sicons++) {
                    slideHtml += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
                }
                slideHtml += "<p> " + aObj.subTitleTextRight + " </p>";
            slideHtml += "</div>";
            slideHtml += '</div>';
        slideHtml += '</div>';
    slideHtml += '</div>';

    slideHtml += "<div class='options cont_ht_sf mx-auto'>";
    slideHtml += "<div class='all_cont d-flex justify-content-center align-items-center'>";
    // slideHtml += "<div class='slides cont_group my-3'>";
    if (typeof aObj !== undefined && aObj.slides.length != 0 && aObj != null) {
        for (var slideIndex = 0; slideIndex < aObj.slides.length; slideIndex++) {
            slide = aObj.slides[slideIndex];
            // if (slideIndex == 0){
            //     slideHtml += "<div class='slide slide_" + (slideIndex + 1) + "'>";
            //     slideHtml += "<div class='d-flex read_grammer' style='text-align: center;'>";
            //         allWords = slide.words
            //         slideHtml += "<div class='grammer_container'>";
            //         slideHtml += "<img src='" + slide.wordsBackground + "'/>";
            //         slideHtml += "<div class='words_container d-flex justify-content-around'>";
            //         for (var wordsIndex = 0; wordsIndex < allWords.length; wordsIndex++) {
            //             slideHtml += "<div class='snap_card mx-0 mx-md-auto audioTile' data-audio='" + slide.audios[wordsIndex] + "'data-onaudioplay=''>"
            //             slideHtml += "<p> " + allWords[wordsIndex] + " </p>"
            //             slideHtml += "</div>";
            //         }
            //         slideHtml += "</div>";
            //         slideHtml += "</div>";
            //     slideHtml += "</div>";
            //     slideHtml += "</div>";
            // } else {
                slideHtml += "<div class='slide slide_" + (slideIndex + 1) + "'>";
                    // now ss
                    // slideHtml += "<div class='page_title'>";
                    //     slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.mainTitleAudio + "'data-onaudioplay=''>"
                    //         slideHtml += "<img class='page_title_img' src='" + slide.mainTitle + "'/>";
                    //     slideHtml += "</div>";
                    //     slideHtml += "<div class='snap_card audioIcon' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + slide.subTitleAudio + "'data-onaudioplay=''>"
                    //         slideHtml += "<div class='page_sub_title'>";
                    //             slideHtml += "<p> " + slide.subTitleTextLeft + " </p>";
                    //             for (sicons = 0 ; sicons < slide.subTitleIcons.length ; sicons++) {
                    //                 slideHtml += "<img src='" + slide.subTitleIcons[sicons] + "'/>";
                    //             }
                    //             slideHtml += "<p> " + slide.subTitleTextRight + " </p>";
                    //         slideHtml += "</div>";
                    //     slideHtml += "</div>";
                    // slideHtml += "</div>";
                    
                    slideHtml += "<div class='image_with_text'>";
                    slideHtml += "<div class='main_image'>";
                    slideHtml += "<img src='" + slide.mainImage + "'/>";
                    slideHtml += "</div>";
                    for (var convIndex = 0; convIndex < slide.convImage.length; convIndex++) {
                        conv = slide.convImage[convIndex];
                        slideHtml += "<div class='image_audio' style='top:" + conv.imgPos["top"] + " ; left:" + conv.imgPos["left"] + " ;'>";
                        slideHtml += "<div class='snap_card audioIcon mx-0 mx-md-auto' data-slideNum='" + Number(slideIndex + 1) + "' data-audio='" + conv.audio + "'data-onaudioplay=''>"
                        slideHtml += "<img src='" + conv.img + "'/>";
                        slideHtml += "</div>";
                        slideHtml += "</div>";
                    }
                    slideHtml += "</div>";
                    
                    // slideHtml += "<a href='ARC_2_1_SB_U1_a1.html' style='position: absolute; right: 0; bottom: 20px;'><img style='height: 100px;' src='../images/icons/foo_activities.png'></a>"

                    path = getCurrFileOrDirectory('file')
                    s_num = path.charAt(path.length - 6)
                    brev = 'slide_' + (Number(s_num) - 1)
                    next = 'slide_' + (Number(s_num) + 1)
                    // debugger
                    // debugger
                    // if (aObj.slides.length == (slideIndex + 1)) {
                        
                    // } else {
                        // slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">'
                        // slideHtml +=  '<img src="../images/icons/back_btn.png" />'
                        // slideHtml +=  '</div>'
                        // slideHtml +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">'
                        // slideHtml +=  '<img src="../images/icons/next_btn.png" />'
                        // slideHtml +=  '</div>'
                    // }

                // slideHtml += "</div>";
            // }
            
        }
        slideHtml += "</div></div></div></div>";
        $(".mainContent").append(slideHtml);
        setLoadedStatus(getCurrFileOrDirectory('file'));

    }
}        
