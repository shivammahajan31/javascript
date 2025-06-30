//call(), apply(), bind()
//this: it is a keyword to point that employee object & access their properties.
 
let employee = {  
    empId: 401,
    empName: "Shubh"
}
 
let printemployeedetails = function(city, state){
    console.log(this.empId + " " + city + " " + state)
}
 
//call()
console.log("call")
printemployeedetails.call(employee, "Pune", "Maharashtra")
 
console.log("apply")
//apply()
printemployeedetails.apply(employee, ["Pune", "Maharashtra"])
 
//bind()
console.log("bind")
let empdata = printemployeedetails.bind(employee, "Pune", "Maharashtra")
//console.log(empdata)
empdata()
