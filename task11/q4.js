const p1 = new Promise((resolve, reject) => {setTimeout(() => reject("Rejected Promise"), 500);});

const p2 = new Promise((resolve) => {setTimeout(() => resolve("Resolved Promise 1"), 1000);});

const p3 = new Promise((resolve) => {setTimeout(() => resolve("Resolved Promise 2"), 1500);});

const p4 = new Promise((resolve) => {setTimeout(() => resolve("Resolved Promise 3"), 2000);});

Promise.any([p1, p2, p3, p4])
  .then((value) => {console.log("First fulfilled:", value)})
  .catch((error) => {console.error("All promises rejected")});

  
// Promise.any([promise1, promise2, promise3])
// .then((data)=>{
//     console.log(data, "This is resolved")
// })
// .catch((error)=>{
//     console.log(error, "Error")
// })