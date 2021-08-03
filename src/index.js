import cardTpl from './card.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  switcher: document.getElementById('theme-switch-toggle'),
  body: document.querySelector('body'),
};

themeDefault();

const cardsCollection = createCardsCollection(menu);
refs.menu.insertAdjacentHTML('beforeend', cardsCollection);

refs.switcher.addEventListener('click', changeTheme);

function createCardsCollection(menu) {
  return menu.map(cardTpl).join('');
}
function changeTheme(event) {
  console.log(event.target.checked);

  if (event.target.checked) {
    themeLight();
  } else {
    themeDark();
  }
}

function themeLight() {
  refs.body.classList.remove(Theme.LIGHT);
  refs.body.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
}

function themeDark() {
  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
}

function themeDefault() {
  if (localStorage.hasOwnProperty('theme')) {
    refs.body.classList.add(localStorage.getItem('theme'));
    switch (localStorage.getItem('theme')) {
      case 'light-theme':
        refs.switcher.checked = false;
        break;
      case 'dark-theme':
        refs.switcher.checked = true;
        break;
    }
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}
