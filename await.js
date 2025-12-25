/* shows that await waits for the promise to fulfill, not just resolve */

async function main () {
    const p = await new Promise((resolve) => {
        console.log("outer");
        resolve(new Promise(resolve => {
            setTimeout(() => {
                console.log("inner");
                resolve("a");
            }, 1000)
        }))
    })
    console.log(p);
}

main()