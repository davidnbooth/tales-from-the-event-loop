'use strict';

async function foo() {
  const promises = [];

  promises.push(
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      throw new Error('haha!'); 
    })()
  ); 

  const results = await Promise.all(promises);
  console.log(results);
  console.log('foo finished');
}


async function main() {
  console.log('start');
  const results = await Promise.allSettled([ foo() ]);
  console.log('results:', results);
}

main();