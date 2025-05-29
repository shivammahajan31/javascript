var x = 10 ; y = 20 ; z = 50 ; w = 40 ; r = 60 ; q = 30 ; t = 80 ;u = 20 

function add(a, b) {
    
    let result = a;
    for (let i = 0; i < b; i++) {
        result++;
    }
    return result;
}

function subtract(a, b) {
    let result = a;
    for (let i = 0; i < b; i++) {
        result--;
    }
    return result;
}

function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

function divide(a, b) {

    if (b === 0) {
        return " null";
    }
    return a / b;
}


function Calculator(a, b, operation) {
    return operation(a, b);
}


console.log("Add:", Calculator(x, y, add));      
console.log("Subtract:", Calculator(z, w, subtract)); 
console.log("Multiply:", Calculator(r, q, multiply)); 
console.log("Divide:", Calculator(t, u,divide));      
