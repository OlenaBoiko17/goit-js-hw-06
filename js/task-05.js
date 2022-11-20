// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),

}


refs.inputEl.addEventListener('input', event => {
    const eventValueTrim = event.currentTarget.value.trim();
    
    eventValueTrim.length === 0 ? refs.spanEl.textContent = 'Anonymous' : refs.spanEl.textContent = eventValueTrim
});



