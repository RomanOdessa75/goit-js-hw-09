const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const div = document.createElement('div');

let intervalEl;

stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.body.insertBefore(div, document.body.children[2]);

div.append(startButton, stopButton);

div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.gap = '50px';
div.style.paddingTop = '200px';
stopButton.style.scale = '2';
startButton.style.scale = '2';

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;

  intervalEl = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  let color = getRandomHexColor();
  body.style.backgroundColor = color;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalEl);
  startButton.disabled = false;
  stopButton.disabled = true;
});
