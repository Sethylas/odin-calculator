let numInput1 = "0";
let numInput2 = "0";

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


function calculation() 
{
    if (currentOperation == "/") 
    {
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
            if (numInput1 == "0") 
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
            hasOperator = true;

            if (inputChoice == "/") 
            {
                currentOperation = "/";
            }
            else if (inputChoice == "x") 
            {
                currentOperation = "x";
            }
            else if (inputChoice == "-") 
            {
                currentOperation = "-";
            }
            else if (inputChoice == "+") 
            {
                currentOperation = "+";
            }

            display.textContent = "";
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
                let result = calculation();
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
        
    })
})
