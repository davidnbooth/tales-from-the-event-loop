async function main() {
  const promise = (async () => {
    throw new Error('haha!');
  })();

  console.log('this first?');

  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('then this?');

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main()