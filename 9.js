async function skipTick() {
  return new Promise(resolve => setTimeout(resolve, 0));
}

async function main() {
  const promise = (async () => {
    throw new Error('haha!');
  })();

  await skipTick();

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});