const display = document.querySelector('.display');
const allButtons = document.querySelectorAll('.button');

// -------funções de matemática básica------------

//ADIÇÃO
function add(num1, num2) {return res = num1 + num2;};

//SUBTRAÇÃO
function subtract(num1, num2) {return res = num1 - num2;};

//MULTIPLICAÇÃO
function multiply(num1, num2) {return res = num1 * num2;};

//DIVISÃO
function divide(num1, num2) {if (num1 < num2) {return res = num2 / num1} {return res = num1 / num2;}};

//OPERAÇÃO
const operate = (num1, num2, operator) => {
    if (operator === '+') {
        return add(num1, num2);
    } if (operator === '-') {
        return subtract(num1, num2);
    } if (operator === '*') {
        return multiply(num1, num2);
    } {
        return divide(num1, num2);
    }
};

allButtons.forEach(button => {
    button.addEventListener('click', (c) => {
        const value = c.target.dataset.value;

        if (display.innerText.includes('+')) {
            const split = display.innerText.split('+')
            operate(split[0], split[1], '+')
        }

        display.innerText += value;
    })
})