const display = document.querySelector('.display');
const allButtons = document.querySelectorAll('.button');

allButtons.forEach(button => {
    button.addEventListener('click', (c) => {
        const value = c.target.dataset.value;

        if (value === '=') {

            if (display.innerText.includes('+')) {
                const split = display.innerText.split('+');
                operate('+', split[0], split [1]);
            };

            if (display.innerText.includes('-')) {
                const split = display.innerText.split('-');
                operate('-', split[0], split [1]);
            };

            if (display.innerText.includes('*')) {
                const split = display.innerText.split('*');
                operate('*', split[0], split [1]);
            };

            if (display.innerText.includes('/')) {
                const split = display.innerText.split('/');
                operate('/', split[0], split [1]);
            };

        };

        display.innerText += value;

        if (value === 'C') {
            display.innerText = '';
        }
    })
})

const operate = (operator, num1, num2) => {
    value1 = Number(num1);
    value2 = Number(num2);

    if (operator === '+') {
        display.innerText = value1 + value2;
        const display2 = document.createElement('div');
        display2 = display;
    };
    
    if (operator === '-') {
        display.innerText = value1 - value2;
        const display2 = document.createElement('div');
        display2 = display;
    }
    
    if (operator === '*') {
        display.innerText = value1 * value2;
        const display2 = document.createElement('div');
        display2 = display;
    }
    
    if (operator === '/') {
        display.innerText = value1 / value2;
        const display2 = document.createElement('div');
        display2 = display;
    }

};