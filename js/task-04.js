

const refs = {
    valueEl: document.querySelector('#value'),
    decrementBtn: document.querySelector('button[data-action="decrement]'),
    incrementBtn: document.querySelector('button[data-action="increment]'),
};


let counterValue = 0;

const render = () => {
    refs.valueEl.textContent = counterValue;
    console.log(counterValue)
};

const handleDecrementBtn = () => {
    counterValue -= 1;
    render();
    
};

const handleIncrementBtn = () => {
    counterValue += 1;
    render();
    
};

render();

refs.decrementBtn.addEventListener('click', handleDecrementBtn);
refs.incrementBtn.addEventListener('click', handleIncrementBtn);






