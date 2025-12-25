// Await is like "add another handler (to continue this code) to the promise fulfillment" (it has to fulfill, not just resolve!!)
//   Footnote - it also adds context to the promise rejection for better stack traces (mdn link)
// That means that the continuation doesn't run if the promise rejects

// async function main() {
//   const promise = await (async () => {throw new Error("Error!")})();
//   promise.catch(() => {console.log("catch")});
//   console.log("after");
// }

// main();


// Here the promise rejection is caught, so the continuation runs
async function main() {
  await (async () => {throw new Error("error!")})()
    .then(() => console.log("then"))
    .catch(() => console.log("catch"));
  console.log("after");
}

main();
