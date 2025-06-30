const products = [
  {name: "shirt", price: 1000, inStock: true },
  { name: "jogger", price: 500, inStock: false },
  {name: "t-shirt", price: 300, inStock: true },
  {name: "shorts", price: 200, inStock: true },
  { name: "socks", price: 50, inStock: true },
  { name: "chain", price: 30, inStock: true },
  { name: "cap", price: 80, inStock: false },
  {  name: "gloves", price: 100, inStock: true },
  {  name: "ring", price: 40, inStock: true },
  {  name: "slipper", price: 150, inStock: false },
  {  name: "shoes", price: 600, inStock: true },
  { name: "clogs", price: 400, inStock: false },
  { name: "flipflop", price: 120, inStock: true },
  { name: "shampoo", price: 90, inStock: true },
  { name: "face wash", price: 250, inStock: false },
  { name: "jel", price: 70, inStock: true }
];

const totalInStockValue = products
  .filter(product => product.inStock)       
  .map(product => product.price)            
  .reduce((sum, price) => sum + price, 0);  

console.log("Total Value of In-Stock Products:", totalInStockValue);