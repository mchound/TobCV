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
	
	$('button').click(function () {
	    var styleSheets = document.styleSheets;
	    var appStyleSheet;
	    var cssRule;
	    $.each(styleSheets, function (index, styleSheet) {
	        if (styleSheet.title == 'app') {
	            appStyleSheet = styleSheet;
	            return false;
	        }
	    });

	    $.each(appStyleSheet.rules, function (index, rule) {
	        if (rule.selectorText == '.applicationColor') {
	            cssRule = rule;
	            return false;
	        }
	    });

	    cssRule.style.backgroundColor = $('input').val();
	});

});

function initSectionPosition(options){
	
	$.each(options.sections, function(index, section){
		var sectionPos = $('#' + section).scrollTop();
	});
}