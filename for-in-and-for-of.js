let students = ["shivam", "rahul", "gaurav"];

for (let index in students) {
  console.log("Index:", index);
}

for (let names of students) {
  console.log("names:", names);
}


let employee = ["shivam","sam"]
      
for (let index in employee){
    console.log("index:", index)
}

for (let namesofemployees of employee) {
    console.log("names of employees", namesofemployees)
}

//if else for sound
let animal = "cat";
if (animal === "cat") {
  console.log("Meow!");
} else if (animal === "dog") {
  console.log("Woof!");
}

animal = "dog";
if (animal === "cat") {
  console.log("Meow!");
} else if (animal === "dog") {
  console.log("Woof!");
}

