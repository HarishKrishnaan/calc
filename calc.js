//initialization of all relevant variables - questionable
let history = 0
let input = ""
let historyEl = document.getElementById("historyEl")
let inputEl = document.getElementById("inputEl")
//concatenation implementation of digits to the input string - working
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

//sign change function - working
function signChange() {
    if(input!=="" && inputEl.textContent!==0) {
        input *= -1
        inputEl.textContent = input
    }
}

//deletion functions - all working
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
    //subtraction - not working:(use " - " instead of "-" and if historyEl.textContent.includes("-") && historyEl.textContent.includes(" - "): find index of " - ")
    if(historyEl.textContent.includes("-")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("-")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a - b
        historyEl.textContent += (inputEl.textContent + " = ")
        inputEl.textContent = answer
    }
    else if ((historyEl.textContent.includes("-"))&&(historyEl.textContent.includes("="))) {
        let a = parseFloat(inputEl.textContent)
        let b = parseFloat(historyEl.textContent.substring(historyEl.textContent.indexOf("-")+1,historyEl.textContent.indexOf("=")-1))
        answer = a - b
        historyEl.textContent = a + " - " + b + " = "
        inputEl.textContent = answer
    }
    //multiplication - working
    if(historyEl.textContent.includes("×")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("×")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a * b
        historyEl.textContent += (inputEl.textContent + " = ")
        inputEl.textContent = answer
    }
    else if ((historyEl.textContent.includes("×"))&&(historyEl.textContent.includes("="))) {
        let a = parseFloat(inputEl.textContent)
        let b = parseFloat(historyEl.textContent.substring(historyEl.textContent.indexOf("×")+1,historyEl.textContent.indexOf("=")-1))
        answer = a * b
        historyEl.textContent = a + " × " + b + " = "
        inputEl.textContent = answer
    }
    //division - working
    if(historyEl.textContent.includes("÷")&&(!historyEl.textContent.includes("="))) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("÷")-1))
        let b = parseFloat(inputEl.textContent)
        answer = a / b
        historyEl.textContent += (inputEl.textContent + " = ")
        inputEl.textContent = answer
    }
    else if ((historyEl.textContent.includes("÷"))&&(historyEl.textContent.includes("="))) {
        let a = parseFloat(inputEl.textContent)
        let b = parseFloat(historyEl.textContent.substring(historyEl.textContent.indexOf("÷")+1,historyEl.textContent.indexOf("=")-1))
        answer = a / b
        historyEl.textContent = a + " ÷ " + b + " = "
        inputEl.textContent = answer
    }
}
//Issues with multiplying and dividing operations when left side of operation (a) becomes negative.

//two value mathematical functions - else is working, if statements not working correctly
function add() {
    if ((historyEl.textContent.includes(" = ")||historyEl.textContent.includes("(")||historyEl.textContent.includes(")")||historyEl.textContent.includes("/"))&&(!historyEl.textContent.includes(" + ")||!historyEl.textContent.includes(" - ")||!historyEl.textContent.includes(" × ")||!historyEl.textContent.includes(" ÷ "))) {

    }
    else if(historyEl.textContent.includes(" + ")||historyEl.textContent.includes(" - ")||historyEl.textContent.includes(" × ")||historyEl.textContent.includes(" ÷ ")) {
        if(historyEl.textContent.includes(" + ")) {
            let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("+")-1))
        }
        else if(historyEl.textContent.includes(" - ")) {
            let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("-")-1))
        }
        else if(historyEl.textContent.includes(" × ")) {
            let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("×")-1))
        }
        else {
            let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("÷")-1))
        }
        let b = parseFloat(historyEl.textContent.substring(inputEl.textContent))
        answer = a + b
        historyEl.textContent
    }
    else {
        historyEl.textContent = input + " + "
        input = ""
    }
}

function subtract() {
    if(historyEl.textContent.includes("+")||historyEl.textContent.includes("-")||historyEl.textContent.includes("×")||historyEl.textContent.includes("÷")) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("-")-1))
        let b = parseFloat(inputEl.textContent)
        historyEl.textContent = a + " - "
        input = ""
        console.log("top")
        console.log(historyEl.textContent)
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " - "
        input = ""
        console.log("bottom")
        console.log(historyEl.textContent)
    }
}

function multiply() {
    if(historyEl.textContent.includes("+")||historyEl.textContent.includes("-")||historyEl.textContent.includes("×")||historyEl.textContent.includes("÷")) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("×")-1))
        let b = parseFloat(inputEl.textContent)
        historyEl.textContent = a + " × "
        input = ""
        console.log("top")
        console.log(historyEl.textContent)
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " × "
        input = ""
        console.log("bottom")
        console.log(historyEl.textContent)
    }
}

function divide() {
    if(historyEl.textContent.includes("+")||historyEl.textContent.includes("-")||historyEl.textContent.includes("×")||historyEl.textContent.includes("÷")) {
        let a = parseFloat(historyEl.textContent.substring(0,historyEl.textContent.indexOf("÷")-1))
        let b = parseFloat(inputEl.textContent)
        historyEl.textContent = a + " ÷ "
        input = ""
        console.log("top")
        console.log(historyEl.textContent)
    }
    else {
        historyEl.textContent = ""
        left = input
        historyEl.textContent = left + " ÷ "
        input = ""
        console.log("bottom")
        console.log(historyEl.textContent)
    }
}

//one value mathematical functions
//one over input - working
function oneOverx() {
    historyEl.textContent = "1/( " + input + " )"
    input = 1 / input
    inputEl.textContent = input
}
//square - working, but history could show contatenated sqr() around the origional input instead of only 1 sqr() with the input constantly changing
function square() {
    answer = input * input
    inputEl.textContent = answer
    historyEl.textContent = "sqr( " + input + " )"
    input = answer
}
//square root - working, could use the same tweak as square
function sqrt() {
    answer = Math.sqrt(input)
    inputEl.textContent = answer
    historyEl.textContent = "√( " + input + " )"
    input = answer
}

function percent() {
    
}