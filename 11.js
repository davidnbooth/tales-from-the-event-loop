async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function foo() {
  const promises = [];

  promises.push(
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      throw new Error('haha!'); 
    })()
  );


  await sleep(1000); 

  const results = await Promise.allSettled(promises);
  console.log(results);
  console.log('foo1 finished');
}

async function main() {
  console.log('start');
 
  const results = await Promise.allSettled([
    foo()
  ]);

  console.log('results:', results);
}

main();