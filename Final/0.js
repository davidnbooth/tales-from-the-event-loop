/*
  This example illustrates a few of the basics:
    - The promise is created synchronously and rejects synchronously
    - Even though the promise rejects, 'nothing happens' - the rejection goes on the microtask queue
    - You can see this by logging the promise
    - The code keeps running because we didn't await
    - You can attach a catch handler before the rejection is handled and its okay.
    - The order of logging - catch is only logged after synch. execution
*/
async function main() {
  const promise = new Promise((resolve, reject) => {
    console.log("Angelfish");
    reject("haha!");
  });
  console.log(promise);

  promise.catch(() => console.log("Coral"));
  console.log("Barracuda");
}

main();