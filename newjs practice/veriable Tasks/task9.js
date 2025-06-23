let baseRenewal = 2000
let discount = 0.10
let totalDiscount = baseRenewal * discount;
let discountPrice =  baseRenewal - totalDiscount;
console.log(totalDiscount)
console.log(`dicounted renewal price is ${discountPrice}`);