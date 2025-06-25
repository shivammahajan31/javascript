
console.warn("1. LENGTH:");
let password = "shivam123";
console.log("Password length:", password.length); 

let username = "Shivam";
console.log("Username length:", username.length); 


console.warn("2. toUpperCase():");
let name = "shivam";
console.log("Uppercase:", name.toUpperCase()); 

let product = "mobile";
console.log("Product Name:", product.toUpperCase()); 


console.warn("3. toLowerCase():");
let email = "SHivam.MAhajan@skramby.COM";
console.log("Lowercase email:", email.toLowerCase());

let city = "PUne";
console.log("Lowercase city:", city.toLowerCase());


console.warn("4. trim():");
let y = "   hello world   ";
console.log("Trimmed:", y.trim()); 

let x = "   JavaScript   ";
console.log("Trimmed:", x.trim()); 


console.warn("5. includes():");
let title = "Learn JavaScript ";
console.log("Includes 'JavaScript'? ", title.includes("JavaScript")); 

let sentence = "human is creative.";
console.log("Includes 'human'? ", sentence.includes("human")); 


console.warn("6. indexOf():");
let text1 = "banana";
console.log("Index of 'a':", text1.indexOf("a")); 

let message = "Hello, welcome to JavaScript!";
console.log("Index of 'welcome':", message.indexOf("welcome"));


console.warn("7. lastIndexOf():");
let text2 = "ababcab";
console.log("Last index of 'ab':", text2.lastIndexOf("ab")); 

let log = "Error: Something went wrong.";
console.log("Last index of 'Error':", log.lastIndexOf("Error"));


console.warn("8. slice():");
let description = "skramby is a product base comapany mainly works on node js and located at kalyani nagar.";
console.log("Preview:", description.slice(0, 20)); 

let str = "JavaScriptIsFun";
console.log("Slice 4 to 10:", str.slice(4, 10)); 


console.warn("9. substring():");
let quote = "BelieveInYourself";
console.log("Substring 0 to 7:", quote.substring(0, 7));

let info = "LearningIsPower";
console.log("Substring 5 to 12:", info.substring(5, 12));


console.warn("10. replace():");
let message2 = "I like JavaScript. JavaScript is cool.";
console.log("Replace first 'JavaScript':", message2.replace("JavaScript", "JS")); 

let greeting = "Hi there!";
console.log("Replace 'Hi' with 'Hello':", greeting.replace("Hi", "Hello"));
  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const fname = "Rishabh"
const lname = "Pant"
const city1 = "Delhi"
console.log(`${fname} ${lname}, ${city}`)
console.log(fname,lname,",",city)
console.log(fname + " " + lname + ", " + city)
console.log(fname.concat(" ",lname,", ", city))


console.warn(`-------- startWith() and endWith ()------`)


const url = "https://google.com"
const filname = 'result.pdf'
const str17 = "Hello World"
console.log("url always start with https :",url.startsWith("https"))


console.log(`url start with www : ${url.startsWith("www")}`)


console.log(`domain is .com : ${url.endsWith(".com")}`)


console.log(`check file is pdf or not : ${filname.endsWith(".pdf", ".docx")}`)


console.log(str17.startsWith("World",6))


console.warn(`------ padStart() and padEnd() --------`)


const id = '101'
console.log(`padStart () : ${id.padStart(6,"*")}`)
console.log('padStart () :',id.padStart(10,"0"))
console.log(`padStart () : ${id.padStart(4,"*")}`)


console.log(`padEnd () : ${id.padEnd(5,"*")}`)


console.warn(`------- match () --------`)


const str18 = "Hello JavaScript, JavaScript is Fun"
console.log(`match () : ${str18.match(/JavaScript/)}`)
console.log(str18.match(/JavaScript/g))
console.log(str18.match(/Python/g))
