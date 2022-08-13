const MyPromise = require('./MyPromise');

// Simple Promise Testing
// {
//     const promise = new MyPromise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Simple promise');

//             reject('Oops... error in simple promise');
//         }, 500);
//     });

//     promise.then((val) => console.log(val));
//     promise.then((val) => console.log(val));
//     promise.then((val) => console.log(val));
//     promise.catch((val) => console.log(val));
// }

// Promise Chain Testing
// {
//     const promise = new MyPromise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Chain promise');
//             reject('Chain: Oops... error in simple promise');
//         }, 1000);
//     });

//     promise
//         .then((val) => { // promise2
//             console.log('Chain T1: ' + val);
//             return 'Via T1 => ' + val;
//         })
//         .then((val) => { // promise3
//             console.log('T2: ', val);
//             return val;
//         })
//         .catch((val) => console.log(val));
// }

// Promise Chain Testing
// {
//     const promise = new MyPromise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Chain promise');
//             // reject('Chain: Oops... error in simple promise');
//         }, 1000);
//     });

//     promise
//         .then((val) => {
//             // promise2
//             console.log('Simple: ' + val);
//             return val;
//         })
//         .then((val) => {
//             console.log('T2: ' + val);
//             return new MyPromise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve('From P1');
//                 }, 2000);
//             });
//         })
//         .then((val) => {
//             console.log('T3: ', val);
//         })
//         .catch((val) => console.log(val));
// }

// Finally Chain Testing
{
    const promise = new MyPromise((resolve, reject) => {
        setTimeout(() => {
            // resolve('Promise');
            reject('Chain: Oops... error in simple promise');
        }, 1000);
    });

    promise
        .then((val) => {
            console.log('T1: ', val);
            return val;
        })
        .then((val) => {
            console.log('T2: ', val);
            return val;
        })
        .finally(() => {
            console.log('F1');
        })
        .then((val) => {
            console.log('T3: ', val);
        })
        .catch((val) => console.log(val))
        .finally(() => {
            console.log('Final Finally');
        });
}
