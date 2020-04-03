import foodItem from '../template/food-item.hbs';
import menu from '../json/menu.json';
import refs from './refs';

const buildMarkup = items => {
    const markup = items.map(item => foodItem(item)).join('');

    refs.menu.insertAdjacentHTML('beforeend', markup);
};

buildMarkup(menu);