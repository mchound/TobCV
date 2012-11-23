(function($) 
{
    $.extend($.fn, {

        popover: function (cardContent) {

            if (cardContent == undefined || cardContent.name == undefined || cardContent.name == "")
                return;

            // Fetch objects
            var hide = true;
            var anchorLink = $(this);
            var anchorParentContainer = $(anchorLink).parent().parent();
            var content = CreateCardContent(cardContent);
            // Inject HTML markup
            $(anchorParentContainer).append(content);
            var popoverContainer = $(anchorLink).parent().siblings('div');

            // Set parent to positon: relative to be able to see a absolute positioned child
            $(anchorParentContainer).css('position', 'relative');

            // Calculate and set the left offset so that the popover arrow points to the end of the anchor link
            var leftOffset = $(anchorLink).siblings('b').width() + $(anchorLink).width() + 10;            
            $(popoverContainer).css('left', leftOffset);

            // Offset popover from bottom. Move it half its height - parents top, bottom padding            
            var bottomOffset = -1 * ($(popoverContainer).outerHeight() / 2 - 20);
            $(popoverContainer).css('bottom', bottomOffset);

            // The hover event
            $(anchorLink).hover(
                // mouseIn
                function () {                    
                    $(popoverContainer).fadeIn(300);
                },
                // mouseOut
                function () {
                    if (hide) {
                        $(popoverContainer).hide();
                    }
                });

            $(anchorLink).click(function (e) {
                e.preventDefault();
                hide = !hide;
                if (hide) {
                    $(popoverContainer).css('display', 'none');
                }
            });
        }

    });
		
})(jQuery);

function CreateCardContent(cardContent){
    var content = '<div class="tobPopover appBorderColor"><h2>' + cardContent.name + '</h2>';

    if(cardContent.title != undefined || cardContent.title != "")
        content += '<h3>' + cardContent.title + '</h3>';

    if(cardContent.webSite != undefined || cardContent.webSite != "")
        content += '<div class="delimiter"></div><span>w:<a href="#">' + cardContent.webSite + '</a></span>';

    if(cardContent.mail != undefined || cardContent.mail != "")
        content += '<span>m:<a href="#">' + cardContent.mail + '</a></span>';

    if(cardContent.phone != undefined || cardContent.phone != "")
        content += '<span>m:<p>' + cardContent.phone + '</p></span>';

    content += '<div class="appBorderColor arrow"></div></div>';

    return content;
}

