const menu_button = document.querySelector(".menu_button");

menu_button.addEventListener('click', function(e)
{
    menu_button.classList.toggle('open');
});