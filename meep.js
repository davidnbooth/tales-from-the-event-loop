// process.on('unhandledRejection', (e) => { console.log("unhandledrejection") } );
process.on('rejectionHandled', (e) => { console.log("rejectionhandled") } );
async function meep () {
    const promise = (async () => {
        throw new Error('haha!');
    })();

    setTimeout(() => { promise.catch(() => console.log('caught promise!')) }, 1000);
}

meep(); 