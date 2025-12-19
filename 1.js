async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // const promise = (async () => {
  //   throw new Error('haha!');
  // })();

  const promise = new Promise((resolve, reject) => {
    reject('haha!');
  });


  await sleep(100);

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});