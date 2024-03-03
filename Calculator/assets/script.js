// Function to add value to the display
function addToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to calculate the expression
function calculate() {
    // Get the expression from the display
    let expression = document.getElementById('display').value;
    try {
        // Evaluate the expression
        let result = eval(expression);
        // Display the result
        document.getElementById('display').value = result;
    } catch (error) {
        // Alert user if expression is invalid
        alert('Invalid expression!');
        // Clear the display
        clearDisplay();
    }
}

// Function to clear the display
function clearDisplay() {
    // Clear the value of the display
    document.getElementById('display').value = '';
}
