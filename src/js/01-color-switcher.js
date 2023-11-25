const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function setColor() {
  startBtn.setAttribute('disable', 'true');
  stopBtn.removeAttribute('disable');

  const colorInterval = setInterval(() => {
    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  stopBtn.addEventListener('click', () => {
    clearInterval(colorInterval);
    startBtn.removeAttribute('disable');
    stopBtn.setAttribute('disable', 'true');
  });
}

startBtn.addEventListener('click', setColor);
