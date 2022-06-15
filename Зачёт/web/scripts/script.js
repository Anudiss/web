
$(document).ready(function () {
    const scrollValue = $('.inner__reviews').width();
    const maxScroll = $('.inner__reviews').width();
    const scrollTime = 300;
    let scroll = 0;

    $('.arrow.left').bind('click', function(e){
        ScrollUp();
    });

    $('.arrow.right').bind('click', function(e){
        ScrollDown();
    });

    function ScrollUp() {
        scroll -= scrollValue;
        scroll = Clamp(0, maxScroll, scroll);
        $('.inner__reviews').animate({scrollLeft:scroll}, scrollTime, 'linear');
    }
    
    function ScrollDown() {
        scroll += scrollValue;
        scroll = Clamp(0, maxScroll, scroll);
        $('.inner__reviews').animate({scrollLeft:scroll}, scrollTime, 'linear');
    }
    
});

function Clamp(min, max, value)
{
    return Max(min, Min(max, value));
}

function Min(v1, v2)
{
    return v1 > v2 ? v2 : v1;
}

function Max(v1, v2)
{
    return v1 < v2 ? v2 : v1;
}