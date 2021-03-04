const menu = (content) => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  const menuImg = document.createElement('img');
  menuImg.setAttribute('id', 'image')
  menuImg.src = '/images/menu.jpg'
  menu.appendChild(menuImg);
  content.appendChild(menu);
};

export default menu;