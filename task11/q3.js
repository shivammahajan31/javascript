const promise1 = new Promise((resolve) => {setTimeout(() => resolve("Race 1 wins"), 3000);});

const promise2 = new Promise((resolve) => {setTimeout(() => resolve("Race 2 wins"), 1000);});

const promise3 = new Promise((resolve) => {setTimeout(() => resolve("Race 3 wins"), 2000);});

Promise.race([promise1, promise2, promise3]).then((winner) => {console.log("Winner is:", winner);});
