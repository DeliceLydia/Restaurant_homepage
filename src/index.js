import home from './home';
import menu from './menu';


const content = document.querySelector('#content');
const homeTab = document.querySelector('.tab1');
const menuTab = document.querySelector('.tab2');
const contactTab = document.querySelector('.tab3');
const tabs = [homeTab, menuTab, contactTab];

home(content);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    content.innerHTML = '';
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.toggle('active');
  });
});

homeTab.addEventListener('click', () => {
  home(content)
});

menuTab.addEventListener('click', () => {
  menu(content)
});

contactTab.addEventListener('click', () => {
  contact(content)
});