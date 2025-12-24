async function meep () {
    console.log('1', process.getActiveResourcesInfo());
    const promise = (async () => {
        console.log('2', process.getActiveResourcesInfo());
        throw new Error('meep');
    })();

    console.log('3', process.getActiveResourcesInfo());
    await new Promise(resolve => {
        console.log('4', process.getActiveResourcesInfo());
        setTimeout(() => {
            console.log(process.getActiveResourcesInfo());
            resolve();
        }, 0);
    });
    console.log('5');

    const results = await Promise.allSettled([promise]);
    console.log(results);
}

meep();