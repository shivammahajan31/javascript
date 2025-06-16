const promise1 = new Promise((resolve,reject) => { setTimeout(() => resolve("Promise 1 done"), 1000);});

const promise2 = new Promise((resolve,reject) => {setTimeout(() => resolve("Promise 2 done"), 2000);});

const promise3 = new Promise((resolve, reject) => {setTimeout(() => reject("Promise 3 error"), 1500);});

async function allsettled() {
  const results = await Promise.allSettled([promise1, promise2, promise3]);
  console.log("All Settled Results:", results);
}

allsettled();
