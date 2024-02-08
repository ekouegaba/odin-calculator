let numberBtns = document.querySelectorAll(".num-btn");
Array.from(numberBtns);
let calcDisplay = document.querySelector(".calculation-display");

let num1;
let operation;
let num2;

numberBtns.forEach(element => {
    element.addEventListener("click",()=>{
        let number = element.textContent;
        if (calcDisplay.textContent.charAt(0) === "0") {
            calcDisplay.textContent = "";
        }
        if(calcDisplay.textContent.length < 9){
            
            calcDisplay.textContent += number;
        }
        if (addButton.style.backgroundColor === "white") {
            addButton.style.backgroundColor = "black";
            addButton.style.color = "white";
        }
        if (minusButton.style.backgroundColor === "white") {
            minusButton.style.backgroundColor = "black";
            minusButton.style.color = "white";
        }
        if (multiplyButton.style.backgroundColor === "white") {
            multiplyButton.style.backgroundColor = "black";
            multiplyButton.style.color = "white";
        }
        if (divideButton.style.backgroundColor === "white") {
            divideButton.style.backgroundColor = "black";
            divideButton.style.color = "white";
        }
        
    });
});

let addButton = document.querySelector(".add-btn");
let minusButton = document.querySelector(".minus-btn");
let multiplyButton = document.querySelector(".multiply-btn");
let divideButton = document.querySelector(".divide-btn");
let clearButton = document.querySelector(".clear-btn");
let equalButton = document.querySelector(".equal-button");
let deleteButton = document.querySelector(".delete-btn");
let plusMinButton = document.querySelector(".plusMinus");
let decimalButton = document.querySelector(".decimal");

function clearScreen(){
    calcDisplay.textContent = "0";
};

//AC/Clear button
clearButton.addEventListener("click", clearScreen);


//Equal button
equalButton.addEventListener("click", () => {
    if (equalButton.style.backgroundColor === "white") {
        equalButton.style.backgroundColor = "black";
        equalButton.style.color = "white";
    }
    num2 = calcDisplay.innerHTML;
    console.log(operation);
    console.log("Number 1: " + num1);
    console.log("Number 2: " + num2);

    operate(operation,num1,num2);
    

});

equalButton.addEventListener("mouseover",()=>{
    equalButton.style.backgroundColor = "white";
    equalButton.style.color = "black";
});

equalButton.addEventListener("mouseout", () => {
    equalButton.style.backgroundColor = "black";
    equalButton.style.color = "white";
});

//Add button
addButton.addEventListener("click", (e) => {
    activateOperator(e);
    num1 = calcDisplay.innerHTML;
    calcDisplay.textContent = "";
    operation = "addition";
    
});

//Multiply button
multiplyButton.addEventListener("click", (e) => {
    activateOperator(e);
    num1 = calcDisplay.innerHTML;
    calcDisplay.textContent = "";
    operation = "multiplication";

});

//Subtract button
minusButton.addEventListener("click", (e) => {
    activateOperator(e);
    num1 = calcDisplay.innerHTML;
    calcDisplay.textContent = "";
    operation = "subtraction";

});

//Divide button
divideButton.addEventListener("click", (e) => {
    activateOperator(e);
    num1 = calcDisplay.innerHTML;
    calcDisplay.textContent = "";
    operation = "division";

});

//Positive Negative toggle button
plusMinButton.addEventListener("click", () => {
    let num = Number(calcDisplay.innerHTML);
    if (num != 0) {
        if (num < 0) {
            num = Math.abs(num);
            calcDisplay.innerHTML = num;
            console.log(calcDisplay.innerHTML);
        } else if (num > 0){
            calcDisplay.innerHTML = "-" + num;
            console.log(calcDisplay.innerHTML);
        }
    }

});

//Decimal button
decimalButton.addEventListener("click",()=>{
    let withDecimal = calcDisplay.innerHTML + ".";
    if(calcDisplay.innerHTML.includes(".") === false){
        calcDisplay.innerHTML = withDecimal;
    }
})

//Delete button
deleteButton.addEventListener("click", () => {
    console.log(isNaN(Number(calcDisplay.innerHTML)));

        if (calcDisplay.innerHTML.length > 1) {
            if (isNaN(Number(calcDisplay.innerHTML)) === false) {
                let newDisplay = calcDisplay.innerHTML.slice(0, calcDisplay.innerHTML.length - 1)
                calcDisplay.innerHTML = newDisplay;
            }
        
    }
})


function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    if (num2 === "0") {
        return "Undefined";
    }else{
       return Number(num1) / Number(num2); 
    }
    
}


const operate = function (operation,num1,num2) {
    switch (operation) {
        case "addition":
            console.log(operation);
            console.log("Number 1: " + num1);
            console.log("Number 2: " + num2);
            calcDisplay.textContent = add(num1, num2);
            break;
        case "subtraction":
            calcDisplay.textContent = subtract(num1, num2);
            break;
        case "multiplication":
            calcDisplay.textContent = multiply(num1, num2);
            break;
        case "division":
            calcDisplay.textContent = divide(num1, num2);
            break;
    }
};

function activateOperator(e){

    e.target.style.backgroundColor = "white";
     e.target.style.color = "black";
}
