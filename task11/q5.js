function waitForMe(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

async function printto9() {
  for (let i = 0; i < 10; i++) {
    await waitForMe(1000); 
    console.log(i);
  }
  console.log("Loop is over");
}

printto9();
