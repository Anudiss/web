const popup_links = document.querySelectorAll('.popup_link');

if (popup_links.length > 0)
{
    popup_links.forEach(popup_link => {
	popup_link.addEventListener('click', function(e) {
	    const popupName = popup_link.getAttribute('href').replace('#', '');
	    const currentPopup = document.getElementById(popupName);
	    popupOpenToggle(currentPopup);
	    e.preventDefault();
	});
    });
}

const popupCloseIcons = document.querySelectorAll('.popup_close');
if (popupCloseIcons.length > 0)
{
    popupCloseIcons.forEach(popupCloseIcon => {
	popupCloseIcon.addEventListener('click', function(e) {
	    popupOpenToggle(popupCloseIcon.closest('.popup'));
	    e.preventDefault();
	});
    });
}

const popupAreas = document.querySelectorAll('.popup_area');
if (popupAreas.length > 0)
{
    popupAreas.forEach(popup_area => {
	popup_area.addEventListener('click', function(e){
	    popupOpenToggle(popup_area.closest('.popup'));
	    e.preventDefault();
	});
    });
}

function popupOpenToggle(currentPopup)
{
    if (!currentPopup)
	return;
    currentPopup.classList.toggle('open');
}


const nameRegex = /[A-Za-zА-Яа-я]{2,}/;
const nameInputs = document.querySelectorAll('.form form input[name="name"]');
if (nameInputs.length > 0)
{
    nameInputs.forEach(nameInput => {
	nameInput.addEventListener('input', function(e) {
	    const value = e.target.value;
	    nameInput.style['border-color'] = (nameRegex.test(value) ? 'green' : 'red');
	});
    });
}

const surnameInputs = document.querySelectorAll('.form form input[name="surname"]');
if (surnameInputs.length > 0)
{
    surnameInputs.forEach(surnameInput => {
	surnameInput.addEventListener('input', function(e) {
	    const value = e.target.value;
	    surnameInput.style['border-color'] = (nameRegex.test(value) ? 'green' : 'red');
	});
    });
}

const phoneRegex = /^(\+7|8)(\s*(\d)){10}/;
const phoneInputs = document.querySelectorAll('.form form input[name="phone"]');
if (phoneInputs.length > 0)
{
    phoneInputs.forEach(phoneInput => {
	phoneInput.addEventListener('input', function(e) {
	    const value = e.target.value;
	    phoneInput.style['border-color'] = (value.match(phoneRegex) ? 'green' : 'red');
	});
    });
}

const forms = document.querySelectorAll('.form form');
if (forms.length > 0)
{
    forms.forEach(form => {
	form.addEventListener('input', function() {
	    const inputs = form.querySelectorAll('input[type="text"]');
	    const submitButton = form.querySelector('input[type="submit"]');
	    submitButton.style['background-color'] = 'green';
	    submitButton.style['color'] = 'white';

	    inputs.forEach(input => {
		if (input.style['border-color'] != 'green')
		{
		    submitButton.style['background-color'] = 'lightgray';
		    submitButton.style['color'] = 'black';
		}
	    });
	});
    });
}
