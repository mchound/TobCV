$(function(){
	
	$(window).scroll(function(){
		if(scrollPos = $(document).scrollTop() >= 250 ){
			$('#businessCard').fadeIn('slow', function(){});
		}
		else{
			$('#businessCard').fadeOut('slow', function(){});
		}		
	});
	
    //$(".cvBody").timeline();

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
