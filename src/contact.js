const contact = (content) => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  const details = document.createElement('div');
  details.setAttribute('id', 'details');
  details.innerHTML = '<ul class="list"><li>Tel: +250785022516</li><li>Email: restaurant@gmail.com</li></ul>';
  const img = document.createElement('img');
  img.src = '/images/contact.jpeg';
  contact.appendChild(img);
  contact.appendChild(details);
  content.appendChild(contact);
};

export default contact;