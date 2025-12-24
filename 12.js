// reject a promise
// wait for something
// catch the promise

async function foo () {
    // Reject 1a/1b
    const p = Promise.reject();
    const p = (async () => {
        throw new Error("Haha!");
    })();
    // Reject 2a/2b
    const p = await Promise.reject();
    const p = await (async () => {
        throw new Error("Haha!");
    })();

    // Wait 1
    await Promise.resolve();
    // Wait 2
    await new Promise(resolve => setTimeout(resolve, 0));
    // Wait 3
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Catch 1a/1b
    p.catch(() => console.log('Caught'));
    const r = Promise.allSettled([p]);
    // Catch 2
    // put it in the setTimeout in the wait step
}
foo();

// Catch 3 -- and use Promise.all inside foo
async function main() {
  const results = await Promise.allSettled([ foo() ]);
}
main();

/* Delightful things
    // Add handlers for these:
      window.onunhandledrejection = function(event) {
        console.log('Unhandled rejection:', event.reason);
      };
      window.onrejectionhandled = function(event) {
        console.log('handled rejection:', event.reason);
      };

    // Put console.log everywhere
    // Put queueMicrotask all over
    // Put long running for loops all over
    // 

    In node: console.log(process.getActiveResourcesInfo());
*/
