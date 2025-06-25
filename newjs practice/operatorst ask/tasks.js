let str = "abc";
str++;
console.log(str); // abs is string it will not increase the value only numbers increase

let num1 = 5;
console.log(++num1); // Pre-increment //this will not work it is not valid
console.log(num++); // Post-increment
console.log(num1);   // Final value
//it will print 7  

let num2 = 10;
num2--;
num2--;
console.log(num2); // it will print 8


let num3 = 7;
console.log(++num3); // it will print 7 becz its not proper way 


let num4 = 8;
num4++;
--num4;
num4++;
console.log(num4);// it will print 10 

let num5 = 5;
let result = 2 * num5++ + 3;
console.log(result); // it will print 13 becz increment will be after line exucution


let str1 = "abc";
str++;
console.log(str); // string value does not increase unless its a number


let numStr = "15";
numStr--;
console.log(numStr); // it willprint 14


let emptyStr = "";
emptyStr--;
console.log(emptyStr); // itwill print -1 becz no value mean 0 


let x;
x++;
console.log(x); //  x is undifined

let x1 = 5;
console.log(++x1); // it will print 6
console.log(--x1); // it will print 5

let y = 5;
console.log(y++); // it will print 5
console.log(y);   // it will print 6


let numStr1 = "5";
numStr++;
numStr++;
console.log(numStr1); // it willprint 7 two time values is increased

let numStr2 = "8";
console.log(++numStr2); // it will print 9
console.log(numStr2++);// it will print 9
console.log(numStr2); // it will print 10

let num = 5;
num--;
console.log(num); // it print 4 





