let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function toggleSign() {
    if (displayValue) {
        displayValue = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
        document.getElementById('display').value = displayValue;
    }
}

function backspace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        displayValue = eval(displayValue).toString();
    } catch {
        displayValue = 'Error';
    }
    document.getElementById('display').value = displayValue;
}
