// jQuery plugin to show popover when hovering a link and glue popover when link is clicked.
// This plugin is specificly created for this template. Feel free to use it elsewhere, but several modifications might be needed to get it to work in other applications
// MIT Licensed
(function ($)
{
    $.extend($.fn, {

        popover: function (cardContent) {

            // Show popover only if cardContent is passed as parameter and name of the refrence is provided
            if (cardContent == undefined || cardContent.name == undefined || cardContent.name == "")
                return;

            // Fetch objects
            var hide = true;
            var anchorLink = $(this);
            var div = $(anchorLink).parent().parent().parent();
            var content = CreateCardContent(cardContent);
            // Inject HTML markup for the popover. Could use $(div).append(content), but it won't work in IE7
            $(content).appendTo(div);
            // Fetch the popover container
            var popoverContainer = $(div).children('.tobPopover');

            // Set parent to positon: relative to be able to see a absolute positioned child
            $(div).css('position', 'relative');

            // Calculate and set the left offset so that the popover arrow points to the end of the anchor link
            var anchorLeft = $(anchorLink).position().left;
            var containerLeft = $(popoverContainer).position().left;
            var leftOffset = anchorLeft - containerLeft + $(anchorLink).width()-10;
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

            // Glue or release the popover when anchor is clicked
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

// Function to create popover markup
function CreateCardContent(cardContent){
    var content = '<div class="tobPopover appBorderColor"><h2>' + cardContent.name + '</h2>';

    if(cardContent.title != undefined && cardContent.title != "")
        content += '<h3>' + cardContent.title + '</h3><div class="delimiter"></div>';

    if(cardContent.webSite != undefined && cardContent.webSite != "")
        content += '<span>w:<a href="#">' + cardContent.webSite + '</a></span>';

    if(cardContent.mail != undefined && cardContent.mail != "")
        content += '<span>m:<a href="mailto:' + cardContent.mail + '">' + cardContent.mail + '</a></span>';

    if(cardContent.phone != undefined && cardContent.phone != "")
        content += '<span>p:<p>' + cardContent.phone + '</p></span>';

    content += '<div class="appBorderColor arrow"></div></div>';

    return content;
}

