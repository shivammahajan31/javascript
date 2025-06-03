// Q2
let x = [1, 2, 3, 4, 5, 6];
let total = x
  .map(y => y * 2)
  .filter(y => y % 2 === 0)
  .reduce((sum, y) => sum + y, 0);
console.log(total);

 //if else if else Q3
 function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(0);

//switch case Q4
 function getDayName(day) {
  switch(day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    default:
      console.log("Other day");
  }
}
getDayName(2);

//for loop Q5
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log("Number", i);
  }
}
 

//do while Q7
let j = 10;
do {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
} while (j <= 40);




