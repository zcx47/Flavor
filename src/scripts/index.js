/* eslint-disable import/extensions */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './component/restaurant-navbar.js';
import './component/hero.js';
import './component/restaurant-footer.js';
import home from './views/pages/home';

const app = new App({
  button: document.querySelector('.garis'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('main'),
});

document.addEventListener('DOMContentLoaded', async () => {
  // Render home page
  const mainContent = document.querySelector('#content');
  mainContent.innerHTML = await home.render();
  await home.afterRender();

  // Add click event to skip link
  const skipLink = document.querySelector('.skip-link');
  const mainList = document.querySelector('#list');
  skipLink.addEventListener('click', (event) => {
    event.preventDefault();
    mainList.scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
  });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
