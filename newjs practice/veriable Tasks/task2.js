let BaseSalary = 30000;
let IncentiveRate = 0.12; 
let DeductionRate = 0.05;

let IncentiveSalary = BaseSalary * IncentiveRate;
let deductedSlary = IncentiveSalary *  DeductionRate;

let takeHome =  BaseSalary + IncentiveSalary - deductedSlary;
console.log(takeHome);
 