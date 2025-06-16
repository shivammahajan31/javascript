function Data1() { return new Promise((resolve,reject) => {setTimeout(() => resolve("Data from Promise 1"), 1000); });
}

function Data2() {return new Promise((resolve,reject) => {setTimeout(() => resolve("Data from Promise 2"), 2000); });
}

async function all() {
  const results = await Promise.all([Data1(), Data2()]);
  console.log("All Data:", results);
}

all();
