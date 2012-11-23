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
	    title: 'Commander in Chief',
	    webSite: 'www.napoleon.com',
	    mail: 'napoleon.bonaparte@napoleon.fr',
	    phone: '+46 (0)72-553 25 85'
	});

	$('#Governor_Dinwiddie').popover({
	    name: 'Governor Dinwiddie',
	    title: 'Governor',
	    webSite: 'www.napoleon.com',
	    mail: 'napoleon.bonaparte@napoleon.fr',
	    phone: '+46 (0)72-553 25 85'
	});

});
