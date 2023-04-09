function menuLoad() {
  const content = document.getElementById('content');
  const elementExists = document.getElementById('menuContent');

  content.replaceChildren();

  const menuContent = document.createElement('div');
  const section = document.createElement('section');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const a = document.createElement('a');

  section.classList.add('header');
  a.classList.add('btn-bgstroke');

  menuContent.setAttribute('id', 'menuContent');

  h1.innerHTML = 'Menu';
  p.innerHTML = 'Crispy, Crusty, Scalloped Potatoes';
  a.innerHTML = 'Get Eating';

  content.append(menuContent);
  content.append(section);
  section.append(h1, p, a);
}

export { menuLoad };
