const inputField = document.getElementById('input-field');
let currentInput = '';
let previousInput = '';
let operation = '';

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button-grid button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            handleButtonPress(e.target.value);
        });
    });
});

document.addEventListener('keydown', (e) => {
    const keyValue = e.key;
    if (keyValue >= 0 && keyValue <= 9) {
        handleButtonPress(keyValue);
    } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
        handleButtonPress(keyValue);
    } else if (keyValue === 'Enter') {
        handleEqual();
    } else if (keyValue === 'Backspace') {
        handleClear();
    }
});

function handleButtonPress(value) {
    // TO DO: implement button press handling
}

function handleEqual() {
    // TO DO: implement equal button handling
}

function handleClear() {
    // TO DO: implement clear button handling
}