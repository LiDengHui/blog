setTimeout(() => {
    console.log("timeout1");

    setImmediate(() => {
        console.log("setImmediate1");
    });
    process.nextTick(() => {
        console.log("process1");
    });

    Promise.resolve().then(() => {
        console.log("promise1");
    });
    process.nextTick(() => {
        console.log("process1+");
    });
    console.log("+timeout1");
}, 1);

setTimeout(() => {
    console.log("timeout2");

    setImmediate(() => {
        console.log("setImmediate2");
    });
    process.nextTick(() => {
        console.log("process2");
    });

    Promise.resolve().then(() => {
        console.log("promise2");
    });
    process.nextTick(() => {
        console.log("process2+");
    });
    console.log("+timeout2");
}, 1);

setImmediate(() => {
    console.log("setImmediate");
});

process.nextTick(() => {
    console.log("process");
});

Promise.resolve().then(() => {
    console.log("promise");
});

process.nextTick(() => {
    console.log("process+");
});
