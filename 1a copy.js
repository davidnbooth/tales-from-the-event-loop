// process.on('rejectionHandled', () => {
//   console.log('rejectionHandled');
// });
async function main() {
  const promise = new Promise((resolve, reject) => {
    console.log("1");
    reject("haha!");
  });

  console.log("2");
  await (async () => {
    console.log("3");
    return;
  })();
  console.log("4");

  promise.catch(() => {console.log("5")});
}

main();