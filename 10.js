async function skipTick() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

async function main() {
  const promise = (async () => {
    throw new Error('haha!');
  })();

  console.log('this first?');

  // await skipTick();
  await Promise.resolve();

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main();