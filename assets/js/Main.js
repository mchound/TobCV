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

	$('#Napoleon').popover(); 
	$('#Governor_Dinwiddie').popover();

});
