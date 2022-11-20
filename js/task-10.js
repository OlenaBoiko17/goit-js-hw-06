function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
   inputEl: document.querySelector("input")
 
}
console.log('fg',refs.inputEl.textContent)

refs.inputEl.textContent