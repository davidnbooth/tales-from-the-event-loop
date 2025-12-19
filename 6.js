async function main() {
  const promise = (async () => {
    throw new Error('haha!');
  })();

  console.log('this first?');

  queueMicrotask(() => { console.log('microtask'); });
  await Promise.resolve();
  console.log('then this?');

  const results = await Promise.allSettled([promise]);
  console.log(results);
}

main()