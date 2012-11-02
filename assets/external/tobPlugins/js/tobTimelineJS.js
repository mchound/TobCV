(function($) 
{
	$.extend($.fn, {
			timeline: function( options ) {
				var milestones = [];
				var span;
				var totalMonthCount = 0;
				var pxPerMonth;
				
				$.each($(this).find('[timeline]'), function(index, element){
					var ms = new milestone(element);
					totalMonthCount += ms.monthSpan;
					milestones.push(ms);					
				});
				
				milestones = milestones.sort(function(a,b){
					return a.scrollTop - b.scrollTop
				});
				
				pxPerMonth = parseFloat(792/totalMonthCount);
				
				this.$mileStoneMarker = $('<div></div>');
				$('.timeline .startStop .line').append(this.$mileStoneMarker);
				this.$mileStoneMarker.addClass('milestoneMarker odd');
				this.$mileStoneMarker.append('<a href="#present" class="milestoneLink">Present</a>');
				this.$mileStoneMarker.css('margin-right', parseInt(55));
				
				var even = true;
				$.each(milestones, function(index, milestone){
					
					this.$mileStoneMarker = $('<div></div>');
					$('.timeline .startStop .line').append(this.$mileStoneMarker);
					if(even){
						this.$mileStoneMarker.addClass('milestoneMarker even');
					}
					else{
						this.$mileStoneMarker.addClass('milestoneMarker odd');
					}
					this.$mileStoneMarker.append('<a href="#' + milestone.label + '" class="milestoneLink">' + milestone.startYear + '-' + milestone.startMonth + '</a>');
					milestone.marginRight = parseInt(milestone.monthSpan * pxPerMonth-53);
					this.$mileStoneMarker.css('margin-right', milestone.marginRight);
					
					even = !even;
				});
				
				if(milestones.length > 0){
					span = milestones[milestones.length - 1].scrollTop;
				}
				
				$(window).scroll(function(){
					var scrollPos = $(document).scrollTop();					
					var markerPos = 0;
					var totalScrollDist = 0;
					var relativeScrollDist = 0;
					var summedMarginRight = 55;
					$('title').text(scrollPos);
					
					if(scrollPos < milestones[0].scrollTop){
						markerPos = parseInt((scrollPos / milestones[0].scrollTop)*55);
						markerPos = Math.min(885, markerPos);
						$('.timeMarker').css('margin-right', markerPos);
					}
					
					$.each(milestones, function(index, milestone){
						if(milestones[index+1] !== undefined)
						{
							if(scrollPos >= milestone.scrollTop && scrollPos < milestones[index+1].scrollTop){							
								totalScrollDist = milestones[index+1].scrollTop - milestone.scrollTop;
								relativeScrollDist = scrollPos - milestone.scrollTop;
								markerPos = parseInt((relativeScrollDist/totalScrollDist)*(milestone.marginRight + 53) + summedMarginRight);
								$('.timeMarker').css('margin-right', markerPos);
							}
						}
						else{
							if(scrollPos >= milestone.scrollTop && scrollPos < milestone.scrollTop+500){							
								totalScrollDist = milestone.scrollTop+500 - milestone.scrollTop;
								relativeScrollDist = scrollPos - milestone.scrollTop;	
								markerPos = parseInt((relativeScrollDist/totalScrollDist)*(milestone.marginRight + 53) + summedMarginRight);
								$('.timeMarker').css('margin-right', markerPos);
							}
						}						
						summedMarginRight += milestone.marginRight + 53;
					});					
				});

				$('.milestoneLink').click(function (event) {
				    var hash = this.hash.replace('#', '');
				    if (hash == 'present') {
				        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: milestones[0].scrollTop }, 'slow');
				    }
				    else {
				        $.each(milestones, function (index, milestone) {
				            if (hash == milestone.label) {
				                $('html:not(:animated),body:not(:animated)').animate({ scrollTop: milestone.scrollTop }, 'slow');
				            }
				        });
				    }
				});

			}		
		});
		
})(jQuery);

function milestone(element){

	var self = this;
	self.element = element;
	self.scrollTop = $(self.element).offset().top;
	self.label = $(self.element).attr('timeline');
	self.startYear = parseInt($(self.element).attr('timeline-start-date').split(';')[0]);
	self.startMonth = parseInt($(self.element).attr('timeline-start-date').split(';')[1]);
	self.marginRight = 0;
	
	var now = new Date();
	self.endYear = now.getFullYear();
	self.endMonth = now.getMonth();
	var endDate = $(self.element).attr('timeline-end-date');
	if(endDate !== undefined){
		self.endYear = parseInt($(self.element).attr('timeline-end-date').split(';')[0]);
		self.endMonth = parseInt($(self.element).attr('timeline-end-date').split(';')[1]);
	}
	
	self.monthSpan = (self.endYear - self.startYear)*12-self.startMonth + self.endMonth; 
}