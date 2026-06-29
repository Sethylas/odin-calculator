let numInput1 = "";
let numInput2 = "";

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let operatorPressed = false;
let currentOperation = "";

function add(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    return Math.round((num1 / num2) * 10000) / 10000;
}


function operatorInput() {
    return;
}

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        const inputChoice = event.target.id;
        const inputType = event.target.className;

        if (inputType == "number" && operatorPressed == false) {
            numInput1 = inputChoice;
            display.textContent = numInput1;
        }

        else if (inputType == "operator") {
            operatorPressed = true;

            if (inputChoice == "/") {
                currentOperation = "/";
            }
            else if (inputChoice == "x") {
                currentOperation = "x";
            }
            else if (inputChoice == "-") {
                currentOperation = "-";
            }
            else if (inputChoice == "+") {
                currentOperation = "+";
            }
        }
        
    })
})

// When num button pressed, display & save num.
// Operator pressed, clear screen and go down route to operator function.
// Num2 pressed, then equals.
// Display return val and set it to numInput1. 
// IF equals pressed with no precedeing operator value, clear everything