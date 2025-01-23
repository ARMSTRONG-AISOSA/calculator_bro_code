// Input Display
const display = document.getElementById("display");

// This function is used to dynamically build the expression on the display as the user clicks the buttons
function appendToDisplay(input) {
    // adds the new value to the current/present stored 
    display.value += input;
    // display.value = display.value + input;
}

function clearDisplay(input) {
    display.value = "";
}

function calculate() {
    // Evaluate/Calculate what's within the display and update the display.value 
    try {
        // Use a library with react
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
