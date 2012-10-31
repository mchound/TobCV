$(function(){
	
	$(window).scroll(function(){
		if(scrollPos = $(document).scrollTop() >= 250 ){
			$('.businessCard').fadeIn('slow', function(){});
		}
		else{
			$('.businessCard').fadeOut('slow', function(){});
		}
		
	});
	
	$(".cvBody").timeline();
	
	

});

function initSectionPosition(options){
	
	$.each(options.sections, function(index, section){
		var sectionPos = $('#' + section).scrollTop();
	});
}