let age = prompt("Enter your age:");
//let age = 20;
if (age < 3) {
  console.log("You're baby");
} else if (age >= 3 && age < 13) {
  console.log("You are in school, kid");
} else if (age >= 13 && age < 18) {
  console.log("You are teenager!");
} else if (age >= 18) {
  console.log("You are adult");
}
