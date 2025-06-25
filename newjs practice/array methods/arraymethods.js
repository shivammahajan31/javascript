console.warn("Array Method: length")
let emails = ["shivam.mahajan@skramby.com", "admin@skramby.com"];
console.log("Total Emails:", emails.length);


let passwords = ["shivam123", "admin123", "guest"];
console.log("Total Passwords:", passwords.length);

console.warn("Array Method: push()");
let emailList = [];
emailList.push("shivam.mahajan@skramby.com");
console.log(emailList);

let passList = ["shivam123"];
passList.push("guest123", "admin123");
console.log(passList);

console.warn("Array Method: pop()");
let moreEmails = ["shivam.mahajan@skramby.com", "user@domain.com"];
let removedEmail = moreEmails.pop();
console.log("Removed Email:", removedEmail);
console.log("Remaining Emails:", moreEmails);


let tempPasswords = ["shivam123", "guest123"];
let removedPass = tempPasswords.pop();
console.log("Removed Password:", removedPass);
console.log("Remaining:", tempPasswords);

console.warn("Array Method: unshift()");

let users = ["admin", "guest"];
users.unshift("shivam");
console.log("Users:", users);

let files = ["file2.pdf", "file3.pdf"];
files.unshift("shivam.pdf", "intro.pdf");
console.log("Files:", files);

console.warn("Array Method: shift()");
let team = ["shivam", "admin", "guest"];
let removedUser = team.shift();
console.log("Removed User:", removedUser);
console.log("Remaining Team:", team);

let docFiles = ["shivam.pdf", "notes.pdf"];
let firstFile = docFiles.shift();
console.log("Removed File:", firstFile);
console.log("Remaining Files:", docFiles);
