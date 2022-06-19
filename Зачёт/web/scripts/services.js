const services =
[
    {
        'icon': '../images/дипломная.png',
        'name': 'Дипломная работа',
        'time': '1-2 недели',
        'price': '5 000'
    },
    {
        'icon': '../images/дипломная.png',
        'name': 'Дипломная работа',
        'time': '1-2 недели',
        'price': '5 000'
    },
    {
        'icon': '../images/дипломная.png',
        'name': 'Дипломная работа',
        'time': '1-2 недели',
        'price': '5 000'
    },
    {
        'icon': '../images/дипломная.png',
        'name': 'Дипломная работа',
        'time': '1-2 недели',
        'price': '5 000'
    }
]

$(document).ready(function()
{
    $('.inner__services').append(
        $.map(services, (service) => { return `<div class="service">
                                                   <div class="icon"><img src="${service.icon}" alt=""></div>
                                                   <span class="name">${service.name}</span>
                                                   <div class="time">от ${service.time}</div>
                                                   <div class="price">от ${service.price} ₽</div>
                                                   <button class="order">Заказать</button>
                                               </div>` }).join('')
    );
});