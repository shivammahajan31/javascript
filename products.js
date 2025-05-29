var products = [
  {name: "shirt", price: 1000, instock: true },
  { name: "jogger", price: 500, instock: false },
  {name: "t-shirt", price: 300,  instock: true },
  {name: "shorts", price: 200, instock: true },
  { name: "socks", price: 50, instock: true },
  { name: "chain", price: 30, instock: true },
  { name: "cap", price: 80, instock:  false },
  {  name: "gloves", price: 100, instock: true },
  {  name: "ring", price: 40, instock: true },
  {  name: "slipper", price: 150, instock: false },
  {  name: "shoes", price: 600, instock: true },
  { name: "clogs", price: 400, instock: false },
  {  name: "flipflop",  price: 120, instock: true },
  { name: "shampoo", price: 90, instock: true },
  { name: "face wash", price: 250, instock: false },
  { name: "jel", price: 70, instock: true }
];

const instockproduct = products.filter(product => product.instock);
console.log("in stock products:", instockproduct);

const cart100 = products.filter(product => product.price <= 100);
console.log("cart 100:", cart100);


const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);

const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", totalPrice);

const totalinstockValue = products
  .filter(product => product.instock)       
  .map(product => product.price)            
  .reduce((sum, price) => sum + price, 0);  

console.log("Total Value of In-Stock Products:", totalinstockValue);

