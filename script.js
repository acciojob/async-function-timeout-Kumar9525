// script.js

document.getElementById('btn').addEventListener('click', async function() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid positive number for delay.');
        return;
    }

    await delayExecution(delay);
    displayOutput(text);
});

function delayExecution(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayOutput(text) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = text;
}
