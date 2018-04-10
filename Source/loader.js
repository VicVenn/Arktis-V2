window.addEventListener("load", function() {
  var loader = document.getElementById("loader");
  document.body.removeChild(loader);
});

$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function() {
      window.location.hash = target;
    });
  });
});

function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
				x.className += " responsive";
		} else {
				x.className = "topnav";
		}
}
