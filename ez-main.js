
// table title 
var tbTitle = jQuery('#ez-table').data('title');

// table show
var tbEvent= jQuery('#ez-table').data('event');

if(tbEvent == undefined)
{ tbEvent = 'h2';}


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
