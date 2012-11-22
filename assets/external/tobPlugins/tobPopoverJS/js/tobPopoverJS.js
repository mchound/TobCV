(function($) 
{
    $.extend($.fn, {

        popover: function () {
            var hide = true;
            $(this).parent().css('position', 'relative');
            var width = $(this).siblings('b').width() + $(this).width() + 10;
            var obj = $(this).siblings('div');
            $(obj).css('left', width + 'px');
            $(this).hover(
                // mouseIn
                function () {                    
                    $(obj).fadeIn(300);
                },
                // mouseOut
                function () {
                    if (hide) {
                        $(obj).hide();
                    }
                });

            $(this).click(function (e) {
                e.preventDefault();
                hide = !hide;
                if (hide) {
                    $(obj).css('display', 'none');
                }
            });
        }

    });
		
})(jQuery);

