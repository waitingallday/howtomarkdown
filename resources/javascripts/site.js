$(function() {
    // Header
    $('.marker').each(function(i) {
        var position = $(this).position();
        $(this).scrollspy({
            min: position.top,
            max: position.top + $(this).height(),
            onEnter: function(element, position) {
                $("header a").removeClass("on");
                $("#n-"+$(element).attr("id")).addClass("on");
            }
        });
    });
    $('header a').on('click tap', function() {
        $("header a").removeClass("on");
        $(this).addClass("on");
    });
});
