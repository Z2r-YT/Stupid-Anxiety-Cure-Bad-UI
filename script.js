//disable tab

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 9) {
      event.preventDefault();
    }
  });

  // fade in fuck this button after 10 seconds

  $(document).ready(function() {
    setTimeout(function() {
      $('#fthis').fadeIn();
    }, 10000); // 10 seconds in milliseconds
  });
  

var caller = $("#scared");
var distanceMultiplier = 25;

function scare(event) {
  // get the center of the caller element
  var centerX = caller.offset().left + caller.width() / 2;
  var centerY = caller.offset().top + caller.height() / 2;
  
  // calculate the distance between the cursor and the center of the caller element
  var distanceX = event.clientX - centerX;
  var distanceY = event.clientY - centerY;
  var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
  // calculate the new position for the caller element
  var newX = centerX - (distanceX / distance) * distanceMultiplier;
  var newY = centerY - (distanceY / distance) * distanceMultiplier;
  
  // get the width and height of the caller element
  var width = caller.width();
  var height = caller.height();
  
  // get the width and height of the window
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  
  // wrap to other side of the screen if reaching the edges
  if (newX + width > windowWidth) {
    newX = -width + 50;
  } else if (newX < 0) {
    newX = windowWidth - 50;
  }
  
  if (newY + height > windowHeight) {
    newY = -height + 50;
  } else if (newY < 0) {
    newY = windowHeight - 50;
  }
  
  // move the caller element to the new position
  caller.stop().animate({"left": newX + "px", "top": newY + "px"}, 0);
}

$(document).ready(function() {
  caller.on('mousemove', scare);
  caller.on('click', function() {
    alert('HUH?!');
  });
});
