// Main.js

$('#nav-toggle').on('click', function() {
  $('body').toggleClass('nav-open');
  //$('.line').toggleClass('fillWidth');
});

$(document).keyup(function(e) {
  var body = $('body');
  if (body.is('.nav-open') && e.keyCode == '27') {
    $('body').toggleClass('nav-open');
  }
});

// get shape of svg for anim
/*
var shape = document.querySelector('#lines');
var shapeLength = shape.getTotalLength();
console.log(shapeLength); //1689.4237060546875
*/
