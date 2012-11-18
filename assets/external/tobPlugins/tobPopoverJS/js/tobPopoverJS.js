(function($) 
{
    $.extend($.fn, {

        popover: function () {
            var id = $(this).attr('id');
            $(this).parent().css('position', 'relative');
            var popover = $('[tobPopoverId="' + id + '"]');
            $(this).hover(
                // mouseIn
                function () {
                    $(popover).fadeIn(300);
                },
                // mouseOut
                function () {
                    $(popover).hide();
                });
        }

    });
		
})(jQuery);

