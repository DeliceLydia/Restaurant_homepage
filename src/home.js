const home = (content) => {
  const body = document.querySelector('#body');
  const head = document.createElement('h1');
  const image = document.createElement('img');
  head.textContent = "Come and taste!";
  image.src = "/images/meal.png";
  body.appendChild(image);
  content.appendChild(head);
};

export default home;