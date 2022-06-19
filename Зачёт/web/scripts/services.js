const services =
[
    {
        'icon': '../images/дипломная.png',
        'name': 'Дипломная работа',
        'time': '1-2 недели',
        'price': '5 000'
    },
    {
        'icon': '../images/курсовая.png',
        'name': 'Курсовая работа',
        'time': '1 недели',
        'price': '2 000'
    },
    {
        'icon': '../images/реферат.png',
        'name': 'Реферат',
        'time': '3 часов',
        'price': '1 000'
    },
    {
        'icon': '../images/презентация.png',
        'name': 'Презентация',
        'time': '5 часов',
        'price': '1 000'
    },
    {
        'icon': '../images/антиплагиат.png',
        'name': 'Антиплагиат',
        'time': '3 часов',
        'price': '100'
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