const refs = {
    bodyColor: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}

const INTERVAL_DELAY = 1000;
let backgroundBodyColorChange = undefined; 

refs.startBtn.addEventListener('click', onClickColorChange);
refs.stopBtn.addEventListener('click', onClickStopChangingColor);

function onClickColorChange(e) {
    backgroundBodyColorChange = setInterval(changeBackgroundColor, INTERVAL_DELAY, changeBackgroundColor);
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function onClickStopChangingColor(e) {
  clearInterval(backgroundBodyColorChange, INTERVAL_DELAY);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function changeBackgroundColor() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }