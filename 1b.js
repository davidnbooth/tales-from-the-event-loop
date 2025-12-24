async function main() {
  const promise = (async () => {
    throw new Error('haha!');
  })();

  await new Promise((resolve) => setTimeout(resolve, 100));

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main();