// find heading and add span with id
jQuery('h2, h3, h4').each(function(i) {
    var myHd =  jQuery(this).text();
    myHd = myHd.replace(/ /g, "-").toLowerCase().replace(/,/g, "").replace(/\?/g, "").replace(/\./g, "");
    jQuery(this).prepend("<span class='ez-data' id='"+myHd+"'></span>");
});

jQuery('#ez-table').prepend("<div class='ez-table'><p>Table of Contents</p><div class='ez-side-menu' id='ez-side-menu'><ul></ul></div></div>");

// find heading and add to side menu
jQuery('h2, h3').each(function(i) {
    var mydata = jQuery(this).text();
    var mydatalink = jQuery(this).find('span').attr('id')
    jQuery('.ez-side-menu ul').prepend("<li class='ez-"+i+"'><a href='#"+mydatalink+"'>"+mydata+"</a></li>");

});

// side menu li add height
jQuery('#ez-side-menu ul li').each(function(index) {
    jQuery(this).attr("data-id", "" + index + "");
    jQuery(this).attr("data-height", "" + jQuery(this).height() + "");
});
