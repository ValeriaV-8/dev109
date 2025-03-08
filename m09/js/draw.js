// Variables for canvas
var can = document.getElementById("canvas");
var ctx = can.getContext("2d");

// Canvas size is window size
can.width = window.innerWidth;
can.height = window.innerHeight;

// Adjust canvas size if window size is changed
window.onresize = function() {
  can.width = window.innerWidth;
  can.height = window.innerHeight;
}

// Draw dots
function draw(e) {
  // Get position
  var pos = getCursorPosition(can, e);
  var clickX = pos.x;
  var clickY = pos.y;
  // Color variables
  var colors = document.getElementById("colorSelect").value
  // Size variables
  var dotSize = document.getElementById("dotSize").value

  // Color
  ctx.fillStyle = colors;
  ctx.beginPath();
  // Size
  ctx.arc(clickX, clickY, dotSize, 0, 2 * Math.PI);
  ctx.fill();
  
  // Console log for debugging
  console.log(clickX, clickY);
  console.log("Draw Dot");
}

function getCursorPosition(canvas, e) {
  // Gets click position
  rect = canvas.getBoundingClientRect();
  
  console.log('Get cursor position');
  
  // Position
  return {
    x: e.clientX - rect.left, 
    y: e.clientY - rect.top
  };
}

window.draw = draw;

// Button for clearing canvas
var mybutton = document.getElementById("clear");
mybutton.onclick = function clearcanvas(){
  ctx.clearRect(0, 0, can.width, can.height)
}
