$(function(){
	
    colorPickerOptions = {
        onChange: function (hsb, hex, rgb) {
            ChangeAppColor(hex);
        }
    };

    $('.colorPicker').ColorPicker(colorPickerOptions);

    // show/hide business card on scroll event
	$(window).scroll(function(){
		if(scrollPos = $(document).scrollTop() >= 250 ){
			$('#businessCard').fadeIn('slow', function(){});
		}
		else{
			$('#businessCard').fadeOut('slow', function(){});
		}		
	});
	
    // Initialize timeline plugin
	$(".mainBody").timeline();

    // Initialize popover plugin
	$('#Napoleon').popover({
	    name: 'Napoleon Bonaparte',
	    title: 'COMMANDER IN CHIEF',
	    webSite: 'www.napoleon.com',
	    mail: 'napoleon.bonaparte@napoleon.fr',
	    phone: '+46 (0)70-123 45 67'
	});

	$('#Governor_Dinwiddie').popover({
	    name: 'Governor Dinwiddie',
	    title: 'GOVERNOR',
	    webSite: 'www.dinwiddie.gov',
	    mail: 'governor@dinwiddie.gov',
	    phone: '+46 (0)70-987 65 43'
	});

	$('#lord_fairfax').popover({
	    name: 'Thomas Lord Fairfax',
	    title: 'GENERAL',
	    mail: 'fairfax@parlament.com',
	    phone: '+46 (0)70-111 22 33'
	});

	$('#lord_fairfax2').popover({
	    name: 'Thomas Lord Fairfax',
	    title: 'GENERAL',
	    mail: 'fairfax@parlament.com',
	    phone: '+46 (0)70-111 22 33'
	});

});

function ChangeAppColor(hexColor) {

    var file;
    $.each(document.styleSheets, function (index, stylesheet) {
        $.each(stylesheet.cssRules, function (index, rule) {
            if (rule.selectorText == '.appBgColor') {
                rule.style.backgroundColor = '#' + hexColor;
            }
            else if (rule.selectorText == '.appBorderColor') {
                rule.style.borderColor = '#' + hexColor;
            }
            else if (rule.selectorText == '.appFontColor') {
                rule.style.color = '#' + hexColor;
            }
        });
    });

}
