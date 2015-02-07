/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var flexslider, initFlexSlider=false;
//Slider
(function() {
 
  // store the slider in a local variable
  var $window = $(window);
      
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    /*return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4;*/
	return 1;
  }
 
 
  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: true,
	  //itemWidth: 210,
      //itemMargin: 5,
	  useCSS: true,
	  touch: true,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });

}());


//page loader remove on load
$(function() {
    
	var removeLoader = function(){
		var pgLoader = $(".page-loader");
		pgLoader.find("h3").fadeOut("slow",function(){
			pgLoader.slideUp("slow", function(){
				$(this).remove();
			});
		});
		
	};

	setTimeout(removeLoader, 3000);
});