
// table title 
var tbTitle = jQuery('#ez-table').data('title');

// table show
var tbEvent= jQuery('#ez-table').data('event');

if(tbEvent == undefined)
{ tbEvent = 'h2';}


//page scroll
var wScroll = jQuery(window).scrollTop();

// screen height
var screenHeight = jQuery(window).height();

// scroll div
var mainScroolD = jQuery('#ez-side-menu')


// find heading and add span with id
jQuery('h2, h3, h4').each(function(i) {
    var myHd =  jQuery(this).text();
    myHd = myHd.replace(/ /g, "-").toLowerCase().replace(/,/g, "").replace(/\?/g, "").replace(/\./g, "");
    jQuery(this).prepend("<span class='ez-data' id='"+myHd+"'></span>");
});





jQuery('#ez-table').prepend("<div class='ez-table'><span id='ex-title'>"+tbTitle+"</span><div class='ez-side-menu' id='ez-side-menu'><ul></ul></div></div>");

// find heading and add to side menu
jQuery.fn.reverse = [].reverse;
jQuery(tbEvent).reverse().each(function(i) {
    var mydata = jQuery(this).text();
    var mydatalink = jQuery(this).find('span').attr('id')
    jQuery('.ez-side-menu ul').prepend("<li class='ez-list ez-"+i+"'><a href='#"+mydatalink+"'>"+mydata+"</a></li>");

});



// side menu li add height
jQuery('#ez-side-menu ul li').each(function(index) {
    jQuery(this).attr("data-height", "" + jQuery(this).height() + "");
});







// mainScroolD.prepend('<div class="side-menutop" id="side-menutop"><img src="https://socialpilot.co/wp-content/themes/wp-bootstrap-starter/inc/assets/images/svg/tp.svg" class="top-icon" alt="top-icon"></div>');
// mainScroolD.append('<div class="side-menubottom" id="side-menubottom"><img src="https://socialpilot.co/wp-content/themes/wp-bootstrap-starter/inc/assets/images/svg/btm.svg" class="bottom-icon" alt="bottom-icon"></div>');


jQuery(window).scroll(function() {  


});

jQuery(window).on('resize', function() {

});


jQuery('h3').each(function(i) {
	var datachp = jQuery(this).find('span').attr('id');
	jQuery('#ez-side-menu ul').find('li a').filter("[href='#" + datachp + "']").parent().addClass("sub-tt");
});



var ezUlheight = jQuery('#ez-side-menu ul').prop('scrollHeight');

console.log(ezUlheight);


var srHiehgt = screenHeight - ezUlheight;
console.log(srHiehgt)

mainScroolD.css({"max-height": '' + srHiehgt + 'px'});







// Cache selectors
var lastId,
topMenu = jQuery("#ez-side-menu"),
// topMenuHeight = topMenu.outerHeight() - 400,

// topMenuHeight = 150,
// All list items
topMenuHeight = 250,
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function() {
	var item = jQuery(jQuery(this).attr("href"));
	if (item.length) {
		return item;
	}

});



// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
var href = jQuery(this).attr("href"),
	offsetTop = href === "#" ? 0 : jQuery(href).offset().top - topMenuHeight + 1;
jQuery('html, body').stop().animate({
	scrollTop: offsetTop
}, 100);
e.preventDefault();
});

// Bind to scroll
jQuery(window).scroll(function() {
// Get container scroll position
var fromTop = jQuery(this).scrollTop() + topMenuHeight;


// Get id of current scroll item
var cur = scrollItems.map(function() {
	if (jQuery(this).offset().top < fromTop)
		return this;
});

// Get the id of the current element
cur = cur[cur.length - 1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
	lastId = id;
	// Set/remove active class
	menuItems
		.parent().removeClass("active")
		.end().filter("[href='#" + id + "']").parent().addClass("active");
}


});
