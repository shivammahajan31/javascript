console.warn("Section A: Variables & Operators");

console.warn("Task 1");
let name = "Shivam";
let age = 24;
let city = "Pune";
console.log("My name is " + name + ", I am " + age + " years old and i live in " + city);

console.warn("Task 2");
let price = 450;
let quantity = 3;
let tax = 0.18;
let total = price * quantity;
let totalWithTax = total + (total * tax);
console.log("Total price : ₹" + totalWithTax);

console.warn("Task 3");
let x = 10;
let y = "10";
console.log("x == y:", x == y);
console.log("x === y:", x === y);
console.log("x != y:", x != y);
console.log("x !== y:", x !== y);

console.warn("Task 4");
let a = 5;
let b = 2;
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

console.warn("Task 5");
let marks = 35;
let isPassed = marks >= 33;
console.log("Student Passed:", isPassed);

console.warn("Task 6");
let counter = 0;
counter += 5;
console.log("After += :", counter);
counter -= 2;
console.log("After -= :", counter);
counter *= 3;
console.log("After *= :", counter);
counter /= 2;
console.log("After /= :", counter);

console.warn("Section B: String Methods");

console.warn("Task 7");
let str = "   Learn JavaScript Fast!   ";
console.log("Length:", str.length);
let trimmed = str.trim();
console.log("Trimmed:", trimmed);
console.log("Uppercase:", trimmed.toUpperCase());
console.log("Lowercase:", trimmed.toLowerCase());

console.warn("Task 8");
let quote = "Practice makes perfect in JavaScript.";
console.log("Includes 'perfect':", quote.includes("perfect"));
console.log("Replace:", quote.replace("JavaScript", "coding"));
console.log("Index of 'makes':", quote.indexOf("makes"));
console.log("Slice:", quote.slice(quote.indexOf("perfect")));

console.warn("Task 9");
let fName = "Mayur";
let lName = "Patil";
let fullName = fName + " " + lName;
console.log("Full Name:", fullName);

console.warn("Task 10");
let sentence = "Coding in JavaScript is fun and powerful.";
let words = sentence.split(" ");
console.log("Words Array:", words);
console.log("Total Words:", words.length);

console.warn("Task 11");
let lang = "javascript";
let capitalized = lang.charAt(0).toUpperCase() + lang.slice(1);
console.log("Capitalized:", capitalized);

console.warn("Task 12");
let email = "example@gmail.com";
console.log("Contains '@':", email.includes("@"));
console.log("Ends with '.com':", email.endsWith(".com"));

console.warn("Section C: Object Basics");

console.warn("Task 13");
let car = {
  brand: "Toyota",
  model: "Innova",
  year: 2022
};
console.log("Brand:", car.brand);
console.log("Year:", car.year);

console.warn("Task 14");
car.color = "white";
car.model = "Fortuner";
console.log("Updated Car Object:", car);

console.warn("Task 15");
let employee = {
  id: 201,
  name: "Rohit",
  salary: 40000
};
console.log("Keys:", Object.keys(employee));
console.log("Values:", Object.values(employee));
console.log("Entries:", Object.entries(employee));

console.warn("Task 16");
console.log("Has salary:", employee.hasOwnProperty("salary"));
console.log("Has bonus:", employee.hasOwnProperty("bonus"));

console.warn("Task 17");
let student = {
  name: "Ravi",
  grades: [88, 76, 90, 95]
};
console.log("Second Grade:", student.grades[1]);
console.log("Last Grade:", student.grades[student.grades.length - 1]);

console.warn("Section D: Object + String/Variables Integration");

console.warn("Task 18")
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }
let merged = { ...obj1, ...obj2 };
console.log("Merged Object:", merged);

console.warn("Task 19")
let user = {
  name: "Anjali",
  role: "Trainer"
};
let message = user.name + " is working as " + user.role;
console.log("Message:", message);

console.warn("Task 20");
let product = {
  name: "Laptop",
  price: 70000,
  inStock: true
};
let jsonString = JSON.stringify(product);
console.log("JSON String:", jsonString);
