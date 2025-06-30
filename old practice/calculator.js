

function calculate() {


   
   let x = parseFloat(document.getElementById("x").value); 
    let y = parseFloat(document.getElementById("y").value);
   const op = document.getElementById("op").value;
           
 
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

            document.getElementById("result").innerText = "Result: " + result;
        }