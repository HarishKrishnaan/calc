let history = 0
let input = ""
let historyEl = document.getElementById("historyEl")
let inputEl = document.getElementById("inputEl")
//concatenation implementation of digits to the input string.
function one() {
    input += "1"
    inputEl.textContent = input
}
function two() {
    input += "2"
    inputEl.textContent = input
}
function three() {
    input += "3"
    inputEl.textContent = input
}
function four() {
    input += "4"
    inputEl.textContent = input
}
function five() {
    input += "5"
    inputEl.textContent = input
}
function six() {
    input += "6"
    inputEl.textContent = input
}
function seven() {
    input += "7"
    inputEl.textContent = input
}
function eight() {
    input += "8"
    inputEl.textContent = input
}
function nine() {
    input += "9"
    inputEl.textContent = input
}
function zero() {
    input += "0"
    inputEl.textContent = input
}
function dot() {
    if (!input.includes(".")) {
        input += "."
        inputEl.textContent = input
    }
}

//sign change function
function signChange() {
    if(input!=="" && inputEl.textContent!==0) {
        input *= -1
        inputEl.textContent = input
    }
}

//deletion functions
function backspace() {
    if (input.length>1) {
        input = input.substring(0,input.length-1)
        inputEl.textContent = input
    }
    else {
        input = ""
        inputEl.textContent = 0
    }
}

function clearEntry() {
    input = ""
    inputEl.textContent = 0
}

function clearAll() {
    clearEntry()
    history = 0
    historyEl.textContent = ""
}

//equals command operator
function equals() {
    //addition - working
    if(historyEl.textContent.includes("+")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("+")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a + b
        historyEl.textContent += (inputEl.textContent + " = ")
        inputEl.textContent = answer
    }
    else if ((historyEl.textContent.includes("+"))&&(historyEl.textContent.includes("="))) {
        let a = parseFloat(inputEl.textContent)
        let b = parseFloat(historyEl.textContent.substring(historyEl.textContent.indexOf("+")+1,historyEl.textContent.indexOf("=")-1))
        answer = a + b
        historyEl.textContent = a + " + " + b + " = "
        inputEl.textContent = answer
    }
    //subtraction
    if(historyEl.textContent.includes("-")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("-",1)-1))
        let b = parseFloat(inputEl.textContent)
        answer = a-b
        historyEl.textContent += (inputEl.textContent + " = " + answer)
    }
    //multiplication
    if(historyEl.textContent.includes("×")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("×")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a * b
        historyEl.textContent += (inputEl.textContent + " = " + answer)
    }
    //division
    if(historyEl.textContent.includes("÷")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("÷")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a / b
        historyEl.textContent += (inputEl.textContent + " = " + answer)
    }
    input = ""
}
//Issues with multiplying and dividing operations when left side of operation (a) becomes negative.

//two value mathematical functions
function add() {
    if(historyEl.textContent.includes("+")&&((historyEl.textContent.includes("="))||(!historyEl.textContent.includes("=")))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("+")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a+b
        historyEl.textContent = answer + " + "
        inputEl.textContent = answer
        input = ""
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " + "
        input = ""
    }

    // if(historyEl == "") {
    //     historyEl.textContent = input + " + "
    //     input = ""
    //     console.log(historyEl.textContent)
    // }
    // else if(historyEl.textContent.includes("=")) {
    //     let a = parseFloat(inputEl.textContent)
    //     let b = parseFloat(historyEl.textContent.substring((historyEl.textContent.indexOf("+")||historyEl.textContent.indexOf("-")||historyEl.textContent.indexOf("×")||historyEl.textContent.indexOf("÷"))+1,historyEl.textContent.indexOf("=")-1))
    //     answer = a + b
    //     historyEl.textContent = answer + " + "
    //     input = ""
    // }
    // else {
        
    // }
}

function subtract() {
    if(historyEl.textContent.includes("-")&&((historyEl.textContent.includes("="))||(!historyEl.textContent.includes("=")))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("-",1)-1))
        let b = parseFloat(inputEl.textContent)
        answer = a-b
        historyEl.textContent = answer + " - "
        inputEl.textContent = answer
        input = ""
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " - "
        input = ""
    }
}

function multiply() {
    if(historyEl.textContent.includes("×")&&((historyEl.textContent.includes("="))||(!historyEl.textContent.includes("=")))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("×")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a * b
        historyEl.textContent = answer + " × "
        inputEl.textContent = answer
        input = ""
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " × "
        input = ""
    }
}

function divide() {
    if(historyEl.textContent.includes("÷")&&((historyEl.textContent.includes("="))||(!historyEl.textContent.includes("=")))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("÷")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a / b
        historyEl.textContent = answer + " ÷ "
        inputEl.textContent = answer
        input = ""
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " ÷ "
        input = ""
    }
}

//one value mathematical functions
function oneOverx() {
    historyEl.textContent = "1/( " + input + " )"
    input = 1 / input
    inputEl.textContent = input
}

function square() {
    answer = input * input
    inputEl.textContent = answer
    historyEl.textContent = "sqr( " + input + " )"
    input = answer
}

function sqrt() {

}

function percent() {
    
}