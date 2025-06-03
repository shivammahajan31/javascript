var points = [10,15,20,30,5];
var pointscopy = [...points,50,75];

console.log(points,pointscopy)


const numbers = [0, 10, 20];
const newnumbers = [...numbers.map(n => n + 10)];
console.log(newnumbers); 



const marks = [70, 45, 90, 30, 55, 20, 88];

function filterMarks(first, ...rest) {
    const allMarks = [first, ...rest];
    const filtered = allMarks.filter(mark => mark > 50);
    console.log("Filtered Marks:", filtered);
}

filterMarks(...marks);
