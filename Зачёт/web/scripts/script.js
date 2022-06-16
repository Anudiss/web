const reviews = [
    {
        "avatar": "../images/logo.png",
        "name": "Веник",
        "text": "ОФЫОвфывоцвфыв",
        "evaluation": 5
    },
    {
        "avatar": "../images/logo.png",
        "name": "Веник",
        "text": "ОФЫОвфывоцвфыв laksdl alskd asldkawlkd jask dajsl djalksjd alkwjd laksd j ajslkd jaslkj",
        "evaluation": 4
    },
    {
        "avatar": "../images/logo.png",
        "name": "Веник",
        "text": "ОФЫОвфывоцвфыв",
        "evaluation": 3
    },
    {
        "avatar": "../images/logo.png",
        "name": "Веник",
        "text": "ОФЫОвфывоцвфыв",
        "evaluation": 2
    },
    {
        "avatar": "../images/logo.png",
        "name": "Веник",
        "text": "ОФЫОвфывоцвфыв",
        "evaluation": 1
    },
    {
        "avatar": "../images/logo.png",
        "name": "Веник",
        "text": "ОФЫОвфывоцвфыв",
        "evaluation": 0
    }
]

$(document).ready(function () {
    LoadReviews();

    const reviews__container = $('.reviews__container');
    const review = $('.review');
    
    var scrollValue = reviews__container.width();
    var maxScroll = reviews__container.width() * ((review.length + review.length % 2) / 2) - reviews__container.width();
    const scrollTime = 300;
    var scroll = 0;

    $('.arrow.left').bind('click', (e) => ScrollLeft());

    $('.arrow.right').bind('click', (e) => ScrollRight());

    $(window).bind('resize', function(e) {
        scrollValue = reviews__container.width();
        maxScroll = reviews__container.width() * ((review.length + review.length % 2) / 2) - reviews__container.width();
        scroll -= scroll % scrollValue;
    });

    function ScrollLeft() {
        scroll = reviews__container[0].scrollLeft;
        if (scroll == 0) 
            return;
        scroll -= scrollValue;
        scroll = Clamp(0, maxScroll, scroll);
        reviews__container.animate({scrollLeft:scroll}, scrollTime, 'linear');
    }
    
    function ScrollRight() {
        scroll = reviews__container[0].scrollLeft;
        if (scroll == maxScroll)
            return;
        scroll += scrollValue;
        scroll = Clamp(0, maxScroll, scroll);
        reviews__container.animate({scrollLeft:scroll}, scrollTime, 'linear');
    }

    $('.scrollUp').bind('click', function(e) {
        $('html').animate({scrollTop:0}, 300);
        console.log(e);
    });

});

function LoadReviews()
{
    reviews.forEach(review => {
        $('.reviews__container').append(`<div class="review">
                                        <div class="inner__review">
                                            <div class="avatar"><img src="${review['avatar']}" alt=""></div>
                                            <div class="name">${review['name']}</div>
                                            <div class="evaluation">${LoadStars(review.evaluation)}</div>
                                            <div class="text">${review['text']}</div>
                                        </div>
                                    </div>`)
    });
}

function LoadStars(count)
{
    const enabled = 'yellow';
    const disabled = 'lightgray';
    return $.map(Array.from({length:5}), function(e, i) {
        return `<i class="fa fa-star fa-2x" style="color: var(--${i < count ? enabled : disabled});" aria-hidden="true"></i>`;
    }).join('');
}

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