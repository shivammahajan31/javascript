  let orderA = new Promise((resolve, reject)=> {
    console.log("You placed an orderA ...");

    setTimeout(() => {
      let isDelivered = false;

      if (isDelivered) {
        resolve("order A Pizza delivered ");
      } else {
        reject("order A Pizza delivery failed");
      }
    }, 1000);
  });



let orderB =  new Promise((resolve, reject) => {
    console.log("You placed an orderB...");

    setTimeout(() => {
      let isDelivered = true;

      if (isDelivered) {
        resolve("order B Pizza delivered ");
      } else {
        reject("order B Pizza delivery failed");
      }
    }, 2000);
  });


 let orderC =  new Promise((resolve, reject) => {
    console.log("You placed an orderC ...");

    setTimeout(() => {
      let isDelivered = true;

      if (isDelivered) {
        resolve("order C Pizza delivered ");
      } else {
        reject("order C Pizza delivery failed");
      }
    }, 3000);
  });



Promise.all([orderA,orderB,orderC])
  .then((message) => {
    console.log("SUCCESS:", message);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

console.log("You continue watching TV...");
