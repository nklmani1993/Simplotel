/* 
 * Custom Jquery for this theme

 */

jQuery(function($){

	AOS.init({
    duration: 500,
    once: true,
  });

	function animateMenu() {
	  var menu = jQuery('.menuBg');
	  var nav = jQuery('.mobile-nav');

	  if (menu.hasClass('showMenu')) { // Hide menu if it's open
	      menu.removeClass('showMenu').addClass('hideMenu');
	      nav.removeClass('fadeIn');
	  } else if (menu.hasClass('hideMenu')) { // Show menu and remove hideMenu
	      menu.removeClass('hideMenu').addClass('showMenu');
	      nav.addClass('fadeIn')
	  } else {
	      menu.addClass('showMenu'); // Initial show menu
	      nav.addClass('fadeIn');
	  }
	};

	jQuery('.hamburger').on('click', function() {
    jQuery(this).toggleClass('open');
    jQuery('body').toggleClass('menu-open');
    animateMenu();
  });
  jQuery('.mobile-nav a').on('click', function(){
    jQuery('.hamburger').toggleClass('open');
    jQuery('body').toggleClass('menu-open');
    animateMenu();
  });

	/* For iOS touch hover effect */
	document.addEventListener("touchstart", function() {},false);
	
});













