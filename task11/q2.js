function getData1() { return new Promise((resolve) => {setTimeout(() => resolve("Data from Promise 1"), 1000); });
}

function getData2() {return new Promise((resolve) => {setTimeout(() => resolve("Data from Promise 2"), 2000); });
}

async function all() {
  const results = await Promise.all([getData1(), getData2()]);
  console.log("All Data:", results);
}

all();
