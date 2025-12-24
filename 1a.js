async function main() {
  // const promise = (async () => {
  //   throw new Error('haha!');
  // })();

  const promise = new Promise((resolve, reject) => {
    reject('haha!');
  });


  await new Promise((resolve) => setTimeout(resolve, 100));

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main();