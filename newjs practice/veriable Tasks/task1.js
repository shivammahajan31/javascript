let productPrice = 200
let Quantity = 3
let TaxRate = 0.05
let ShippingCost = 100
let Discount = 100
let  totalPrice


    let totalProductPrice = productPrice * Quantity;
    let withtaxprice = totalProductPrice * TaxRate;
    let Total = withtaxprice + totalProductPrice + ShippingCost - Discount;
        console.log(Total);