var points = [10,50,60,80]
var t = [6]
var pointscopy = [...points,50,...t,75];

console.log(points,pointscopy)

var x = [20,30,60,40,70]
var y =[" a =" ]
var z = [...y,...x,...y,...x,1000,2000,3000]
console.log(z)

const numbers = [0, 10, 20];
const numbersaddition = [...numbers,30,40,50,60,...numbers].map(n => n + 10);
console.log(numbersaddition); 



const marks = [70, 45, 90, 30, 55, 20, 88];
const [A, B, c, ...restMarks] = marks;

function filterMarks(...rest) {
    const allMarks = [ ...rest];
    const passed = allMarks.filter(mark => mark > 50);
    const fail = allMarks.filter(mark => mark < 50);
    console.log("passed Marks:", passed);
    console.log("failed Marks:", fail);
}

filterMarks(...marks);
filterMarks(A,B);
