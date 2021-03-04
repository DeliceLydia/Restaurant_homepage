const home = (content) => {
  const body = document.querySelector("#body");
  const head = document.createElement("h1");
  const div = document.createElement("div");
  div.setAttribute("id", "about");
  const aboutUs = document.createElement("h3");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  head.textContent = "Come and taste our delicious african food!";
  aboutUs.textContent = "About our restaurant!";
  paragraph.textContent =
    "Our restaurant have differents types of foods but our speciality is african so if you feel like traveling in africa without taking a trip visit us!";
  image.src = "/images/meal.png";
  body.appendChild(image);
  content.appendChild(head);
  div.appendChild(aboutUs);
  div.appendChild(paragraph);
  body.appendChild(div);
};

export default home;
