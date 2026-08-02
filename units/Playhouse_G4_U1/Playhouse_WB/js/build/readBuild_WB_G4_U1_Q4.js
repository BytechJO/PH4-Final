/*$(function () {
    var myData = {};  */
    function buildFillInBody(aObj) {
        var htmlStmt = '';
        if (aObj != undefined && aObj != null) {
            var layOut = parseInt(aObj.layout);
           
            if (layOut == 4) {
                htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
                htmlStmt += '<div class="keyIcon"><img src="' + aObj.activityicon + '"/></div>';
                htmlStmt += '<div class="activityHeading">' + aObj.activityheading + '</div>';
                htmlStmt += '</div>';
                htmlStmt += '<div class="options">';
              
                htmlStmt += ' <div id="drawingArea">';
                    htmlStmt += '<canvas id="canvas" width="1130" height="690"></canvas>';
                htmlStmt += '</div>';
                
                htmlStmt += '</div>';
            }
            
        }
    
        console.log('htmlStmt >> fillin Built');
        $(".activity_area").append(htmlStmt);
    
        setLoadedStatus(getCurrFileOrDirectory('file'));

        const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial drawing properties
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
if (!isDrawing) return;

ctx.beginPath();
ctx.moveTo(lastX, lastY);
ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
ctx.stroke();

[lastX, lastY] = [e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top];
}

canvas.addEventListener('mousedown', (e) => {
isDrawing = true;
[lastX, lastY] = [e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

    }

    
    /*if (fillin_data != undefined && fillin_data != null) {	
            myData = fillin_data;			
            buildFillInBody(myData);
         }
    });*/