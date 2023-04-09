function homeLoad() {
  const content = document.getElementById('content');
  content.replaceChildren();
  const section = document.createElement('section');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const a = document.createElement('a');

  section.classList.add('header');
  a.classList.add('btn-bgstroke');

  h1.innerHTML = 'Starchy Panda';
  p.innerHTML = 'Potatoes so good, you will fly!';
  a.innerHTML = 'Get Eating';

  content.append(section);
  section.append(h1, p, a);
}

export { homeLoad };
