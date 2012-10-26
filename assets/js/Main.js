$(function(){

	$(window).scroll(function() {
		var scrollPos = $(document).scrollTop();
		if(scrollPos < 600){
			$('title').text('Today (' + scrollPos + ')');
		}
		else if(scrollPos >= 600 && scrollPos < 1140){
			$('title').text('Work experience (' + scrollPos + ')');
		}
		else if(scrollPos >= 1140 && scrollPos < 1680){
			$('title').text('Education (' + scrollPos + ')');
		}	
		else{
			$('title').text('Skills (' + scrollPos + ')');
		}
	});

});