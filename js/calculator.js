"use strict";
//shows the value of the button pressed
function displayValue(value) {
    document.getElementById('result').value += value;
}

// deletes the value from the screen
function deleteValue() {
    // get current value display on screen
    var text = document.getElementById('result').value ;
    // remove the last value add to the screen
    var change = text.slice(0, -1);
    // add to modification to screen
    document.getElementById('result').value = change;
}
//clears the screen
function clearScreen() {
    document.getElementById('result').value= "";
}

//calculates the total value
function calculateTotalValue() {
    var question = document.getElementById('result').value;
    var answer = eval(question);
    document.getElementById('result').value = answer;
}

// Dark mode
function darkMode() {
    var element = document.getElementById('calculator');
    element.classList.toggle("dark-mode");
}