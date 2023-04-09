function pageLoad() {
  const content = document.getElementById('content');
  const tabBar = document.getElementById('tabBar');
  const section = document.createElement('section');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const a = document.createElement('a');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');

  homeBtn.classList.add('tabllinks');
  menuBtn.classList.add('tabllinks');
  contactBtn.classList.add('tabllinks');
  section.classList.add('header');
  a.classList.add('btn-bgstroke');

  homeBtn.setAttribute('id', 'homeBtn');
  menuBtn.setAttribute('id', 'menuBtn');
  contactBtn.setAttribute('id', 'contactBtn');

  h1.innerHTML = 'Starchy Panda';
  p.innerHTML = 'Potatoes so good, you will fly!';
  a.innerHTML = 'Get Eating';
  homeBtn.innerHTML = 'Home';
  menuBtn.innerHTML = 'Menu';
  contactBtn.innerHTML = 'Contact';

  content.append(section);
  section.append(h1, p, a);
  tabBar.append(homeBtn, menuBtn, contactBtn);
}

export { pageLoad };
