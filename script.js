function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    var result = document.getElementById('result').value;
    try {
        var finalResult = eval(result);
        document.getElementById('result').value = finalResult;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
