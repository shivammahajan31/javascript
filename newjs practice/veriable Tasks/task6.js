let basePremium = 20000;
let policyTerm = 5 
let taxRate = 0.02 
let coverageAmount = 240000
let taxAmount = basePremium * taxRate
let totalPremium = basePremium - taxAmount
console.log(totalPremium)