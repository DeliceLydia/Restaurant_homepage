const content = document.querySelector('#content');
const head = document.createElement('h1');
const navbar = document.createElement('nav');
const navList = document.createElement('ul');
const list1 = document.createElement('li');
const list2 = document.createElement('li')
const link1 = document.createElement('a');
const link2 = document.createElement('a');


navbar.appendChild(navList);
navList.appendChild(list1);
navList.appendChild(list2);
list1.appendChild(link1);
list2.appendChild(link2);
link1.href = "";
link1.textContent = "Menu";
link2.href = "";
link2.textContent = "Contact";
head.textContent = "Come and taste!"
content.appendChild(navbar);
content.appendChild(head);