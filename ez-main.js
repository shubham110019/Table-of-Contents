jQuery('h2').each(function(i) {
    var myH2 =  jQuery(this).text();
    myH2 = myH2.replace(/ /g, "-").toLowerCase().replace(/,/g, "").replace(/\?/g, "").replace(/\./g, "");
    jQuery(this).prepend("<span class='ez-data' id='"+myH2+"'></span>");
});

jQuery('h3').each(function(i) {
    var myH3 =  jQuery(this).text();
    myH3 = myH3.replace(/ /g, "-").toLowerCase().replace(/,/g, "").replace(/\?/g, "").replace(/\./g, "");
    jQuery(this).prepend("<span class='ez-data' id='"+myH3+"'></span>");
});

jQuery('h4').each(function(i) {
    var myH4 =  jQuery(this).text();
    myH4 = myH4.replace(/ /g, "-").toLowerCase().replace(/,/g, "").replace(/\?/g, "").replace(/\./g, "");
    jQuery(this).prepend("<span class='ez-data' id='"+myH4+"'></span>");
});

jQuery('#ez-table').prepend("<div class='ez-table'><p>Table of Contents</p><div class='ez-side-menu' id='ez-side-menu'><ul></ul></div></div>");

jQuery('h2, h3').each(function(i) {
    var mydata = jQuery(this).text();
    var mydatalink = jQuery(this).find('span').attr('id')
    jQuery('.ez-side-menu ul').prepend("<li><a href='#"+mydatalink+"'>"+mydata+"</a></li>");
    
});


