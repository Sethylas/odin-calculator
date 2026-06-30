let numInput1 = "0";
let numInput2 = "0";
let result = 0;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
display.textContent = numInput1;
let hasOperator = false;
let currentOperation = "";
let hasDecimal = false;

function add(num1,num2) 
{
    return +num1 + +num2;
}

function subtract(num1,num2) 
{
    return num1 - num2;
}

function multiply(num1,num2) 
{
    return num1 * num2;
}

function divide(num1,num2) 
{
    return Math.round((num1 / num2) * 10000) / 10000;
}


function operate() 
{
    if (currentOperation == "/") 
    {
        if (numInput2 == "0") 
        {
            return "Cannot divide by zero";
        }

        return divide(numInput1, numInput2);
    }

    else if (currentOperation == "x") 
    {
        return multiply(numInput1, numInput2);
    }

    else if (currentOperation == "-") 
    {
        return subtract(numInput1, numInput2);
    }

    else 
    {
        return add(numInput1, numInput2);
    }
}


buttons.forEach(button => 
{
    button.addEventListener("click", (event) => 
    {
        const inputChoice = event.target.id;
        const inputType = event.target.className;

        if (inputType == "number" && hasOperator == false) 
        {
            if (numInput1 == "0" || numInput1 == result) 
            {
                numInput1 = inputChoice;
                display.textContent = numInput1;
            }
            else 
            {
                numInput1 += inputChoice;
                display.textContent = numInput1;
            }
        }

        else if(inputType == "decimal" && hasDecimal == false) 
        {
            if (!numInput1.includes('.')) 
            {
                numInput1 += inputChoice;
                hasDecimal = true;
            }
        }

        else if (inputType == "operator") 
        {
            if (hasOperator == true && numInput2 !== "0") 
            {
                result = operate()
                display.textContent = result;
                numInput1 = res;
                numInput2 = "0";
            }


            if (inputChoice == "/") 
            {
                currentOperation = "/";
                hasOperator = true;
            }
            else if (inputChoice == "x") 
            {
                currentOperation = "x";
                hasOperator = true;
            }
            else if (inputChoice == "-") 
            {
                currentOperation = "-";
                hasOperator = true;
            }
            else if (inputChoice == "+") 
            {
                currentOperation = "+";
                hasOperator = true;
            }

        }

        else if (inputType == "number" && hasOperator == true) 
        {
            if (numInput2 == "0") 
            {
                numInput2 = inputChoice;
                display.textContent = numInput2;
            }
            else
            {
                numInput2 += inputChoice;
                display.textContent = numInput2;
            }
        }

        else if(inputType == "equals") 
        {
            if (hasOperator == true) 
            {
                result = operate();
                display.textContent = result;
                numInput1 = result;
                numInput2 = "0";

                hasOperator = false;
            }

            else 
            {
                // Resets calculator
                display.textContent = "0";
                numInput1 = "0";
                numInput2 = "0";

                hasOperator = false;
            }
        }

        // Also calculator
        else if(inputType == "clear") 
        {
            display.textContent = "0";
            numInput1 = "0";
            numInput2 = "0";

            hasOperator = false;
        }
        
    })
})
