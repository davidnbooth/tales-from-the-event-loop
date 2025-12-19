const promises = [];

  promises.push(
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      throw new Error('haha!'); 
    })()
  );


  await sleep(1000); 

  const results = await Promise.allSettled(promises);