var x = Number(prompt("Enter value 1"));
var y = Number(prompt("Enter value 2"));
var op = prompt("Enter operation to perform: add, subtract, multiply, divide");

let result;

switch (op) {
    case "add":
        result = x + y;
        break;

    case "subtract":
        result = x - y;
        break;

    case "multiply":
        result = 0;
        for (let i = 0; i < y; i++) {
            result += x;
        }
        break;

    case "divide":
        if (y === 0) {
            result = "Cannot divide by zero";
        } else {
            result = x / y;
        }
        break;

    default:
        result = "Invalid operation";
}

console.log("Result: " + result);
