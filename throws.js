async function meep () {
    const promise = (async () => {
        throw new Error('meep');
    })();

    console.log('1');
    queueMicrotask(() => { console.log('microtask'); });
    await Promise.resolve();
    console.log('2');

    const results = await Promise.allSettled([promise]);
    console.log(results);
}

meep();