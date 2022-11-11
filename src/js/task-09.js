function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  spanEl: document.querySelector('.color'),
  buttonEl: document.querySelector('.change-color')
}

