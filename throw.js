async function meep () {
    const promise = (async () => {
        throw new Error('Haha!');
    })();

    console.log('Me first?');
    await new Promise(resolve => setTimeout(resolve, 0));
    console.log('Me next?');

    const results = await Promise.allSettled([promise]);
    console.log('Then the results?', results);
}

meep();