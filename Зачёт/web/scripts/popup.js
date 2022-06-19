$(document).ready(function () {
    $('.service, #order_work').bind('click', (e) => {
        e.preventDefault();
        $('.popup').toggleClass('open');
        if ($('.popup').is('.open'))
        {
            lockScroll();
            $('.input__container .dropdown').val($(e.delegateTarget).children('.name').text());
        }
    });

    function lockScroll()
    {
        $html = $('html'); 
        $body = $('body'); 
        var initWidth = $body.outerWidth();
        var initHeight = $body.outerHeight();
    
        var scrollPosition = [
            self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
            self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
        ];
        $html.data('scroll-position', scrollPosition);
        $html.data('previous-overflow', $html.css('overflow'));
        $html.css('overflow', 'hidden');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);   
    
        var marginR = $body.outerWidth()-initWidth;
        var marginB = $body.outerHeight()-initHeight; 
        $body.css({'margin-right': marginR,'margin-bottom': marginB});
    } 
    
    function unlockScroll()
    {
        $html = $('html');
        $body = $('body');
        $html.css('overflow', $html.data('previous-overflow'));
        var scrollPosition = $html.data('scroll-position');
        window.scrollTo(scrollPosition[0], scrollPosition[1]);    
    
        $body.css({'margin-right': 0, 'margin-bottom': 0});
    }

    var cuts = $('.cut');
    for (let i = 0; i < cuts.length; i++)
    {
        const cut = cuts[i];
        $(cut).css({'width': `${$(cut).next('label.placeholder').width() * 0.75 + 20}px`});
    }
    
    $('.empty_area, .close__button').bind('click', () => { close(); });
    
    $('.option').bind('click', (e) => {
        $('.input__container .dropdown').val($(e.target).text());
    });

    $('.dropdown__container, .dropdown__container .icon').bind('click', () => {
        $('input.dropdown').toggleClass('open');
        if ($('input.dropdown').is('open'))
            $('input.dropdown').focus();
    });

    $('.popup__body').bind('click', () => {
        $('input.dropdown:not(:focus)').removeClass('open');
    });

    $('.scrollUp').bind('click', function(e) {
        $('html').animate({scrollTop:0}, 300);
        console.log(e);
    });

    function close()
    {
        $('.popup').toggleClass('open');
        $('.popup__body input:not(input[type="submit"])').val('');
        $('.dropdown').removeClass('open');
        unlockScroll();
    }
});