let number1 = prompt("enter number 1");
let number2 = prompt("enter number 2");
let number3 = prompt("enter number 3");

if (number1 > number2 && number1 > number3 ) {

    console.log("number1 is greater number",number1);
}
else if (number2 > number1 && number2 > number3 ) {
    console.log("number2 is greater num", number2);
}

else if (number1 === number2 && number2 === number3 && number1 === number3) {
    console.log("all are equal number ", number1 , number2, number3);
}

else {
    console.log("number3 is greater num",number3);
}


