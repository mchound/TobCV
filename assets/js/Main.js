$(function(){
	
	var options = 
	{
		sections: ["profileSection", "workExperienceSection", "educationSection", "skillsSection", "additionalInfoSection"]	
	}
	
	//initSectionPosition(options);
	
	$(".cvBody").timeline();
	
	

});

function initSectionPosition(options){
	
	$.each(options.sections, function(index, section){
		var sectionPos = $('#' + section).scrollTop();
	});
}