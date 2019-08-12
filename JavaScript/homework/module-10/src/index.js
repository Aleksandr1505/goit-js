import items from './menu.json';
import menuItems from './templates/menu-item.hbs';
import './styles.css';

const refs = {
  postFood: document.querySelector('.menu')
}

function buildPostFood(items) {
  const a = items.map(item => menuItems(item)).join('');
  refs.postFood.insertAdjacentHTML('beforeend', a);
}
buildPostFood(items);

const checkbox = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

checkbox.addEventListener('change', theme);

function theme() {
  body.className = body.className === 'dark-theme' ? 'light-theme' : 'dark-theme';
  localStorage.setItem('theme', body.className);


};

const c = localStorage.getItem('theme');
if(c) {
  if(c === 'dark-theme') {
    body.className = 'dark-theme';
    checkbox.checked = true;
  }
}
