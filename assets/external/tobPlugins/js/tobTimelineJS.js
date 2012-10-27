(function($) 
{
	$.extend($.fn, {
			timeline: function( options ) {
				var milestones = [];
				var span;
				
				$.each($(this).find('[timeline]'), function(index, element){
					milestones.push(new milestone(element));
				});
				
				milestones = milestones.sort(function(a,b){
					return a.scrollTop - b.scrollTop
				});
				
				span = milestones[milestones.length - 1].scrollTop;
				
				$(window).scroll(function(){
					var scrollPos = $(document).scrollTop();
					$.each(milestones, function(index, milestone){
						if(scrollPos >= milestone.scrollTop){
							$('title').text(milestone.label + ' (' + scrollPos + ')');
							var markerPos = parseInt((scrollPos / span)*885);
							markerPos = Math.min(885, markerPos);
							$('.timeMarker').css('margin-right', markerPos);
						}
					});					
				});
			}		
		});
		
})(jQuery);

function milestone(element){

	var self = this;
	self.element = element;
	self.scrollTop = $(self.element).offset().top;
	self.label = $(self.element).attr('timeline');
}