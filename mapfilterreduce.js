let nums = [1, 2, 3, 4, 5, 6];
let sumEvenDoubled = nums
  .map(num => num * 2)
  .filter(num => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);
console.log(sumEvenDoubled);

 //if else if else 
 function checkNumber(num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
checkNumber(-5);

//switch case 
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
getDayName(1);

//for loop 
for (let i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    console.log("Number", i);
  }
}
 //while loop 
 let i = 10;
while (i <= 40) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

//do while 
let j = 10;
do {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
} while (j <= 40);




