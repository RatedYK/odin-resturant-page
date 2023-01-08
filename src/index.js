import './style.css';
import loadHome from './home.js';
import loadMenu from './menu';
import loadContact from './contact';

//initialise page
loadHome();

const btn = document.querySelectorAll('.btn');
const main = document.querySelector('#main');

btn.forEach((button) => {
    button.addEventListener('click', loadPage);
})

function loadPage(e) {
    main.innerHTML = "";
    console.log(e);
    if (e.target.innerHTML === 'Home') loadHome();
    if (e.target.innerHTML === 'Menu' || e.target.innerHTML === 'See Menu') loadMenu();
    if (e.target.innerHTML === 'Contact Us') loadContact();
}

