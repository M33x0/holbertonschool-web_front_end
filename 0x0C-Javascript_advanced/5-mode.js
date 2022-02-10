function changeMode (size, weight, transform, background, color) {
  return function () {
    document.documentElement.style.fontSize = size;
    document.documentElement.style.fontWeight = weight;
    document.documentElement.style.textTransform = transform;
    document.documentElement.style.backgroundColor = background;
    document.documentElement.style.color = color;
  };
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  const spookyButton = document.createElement('button');
  spookyButton.innerText = 'Spooky';
  spookyButton.setAttribute('id', 'spooky');
  document.body.appendChild(spookyButton);
  document.getElementById('spooky').addEventListener('click', spooky);

  const darkButton = document.createElement('button');
  darkButton.innerText = 'Dark Mode';
  darkButton.setAttribute('id', 'dark');
  document.body.appendChild(darkButton);
  document.getElementById('dark').addEventListener('click', darkMode);

  const screamButton = document.createElement('button');
  screamButton.innerText = 'Scream Mode';
  screamButton.setAttribute('id', 'scream');
  document.body.appendChild(screamButton);
  document.getElementById('scream').addEventListener('click', screamMode);
}

main();
