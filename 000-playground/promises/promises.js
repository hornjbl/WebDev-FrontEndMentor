let p = new Promise((resolve, reject) => {
    console.log(`Promises promises...`);
    let a = 1 + 2;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

p.then((message) => {
    console.log(message);
}).catch((reject) => {
    console.log(reject);
});
