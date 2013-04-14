$(function() {
    // Header
    $('.marker').each(function(i) {
        var position = $(this).position();
        $(this).scrollspy({
            min: position.top,
            max: position.top + $(this).height(),
            onEnter: function(element, position) {
                $("#top a").removeClass("on");
                $("#n-"+$(element).attr("id")).addClass("on");
            }
        });
    });
    $('#top a').on('click tap', function() {
        $("#top a").removeClass("on");
        $(this).addClass("on");
    });

    // Tabby
    $('ul.nav').children('li').on('mouseover click tap', function(){
        $(this).closest('ul.nav').children('li').removeClass('on');
        $(this).addClass('on');
        $(this).closest('div').children('blockquote').removeClass('on');
        var curr = $(this).data('rel');
        $(this).closest('div').children('blockquote').each(function(){
            if ($(this).data('title')==curr) $(this).addClass('on');
        });
    });
});
