// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// } 

// calculator(1, 90, sum);

// const hello = () => {
//     console.log("hello");
// }

// Nesting

// let age = 19;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }

// function getData(dataId, getNextData) {
//     //2s
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

//Callback hell to solve is promise

// getData(1, () => {
//    console.log("getting data2 ....");
//    getData(2, () => {
//       console.log("getting data3 ....");
//       getData(3, () => {
//          console.log("getting data4 ....");w
//          getData(4);
//       });
//    });
// });

// Promise

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve("success");
//     reject("some error occured");
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             // resolve("succcess");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//        console.log("rejected", err);
// });

// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("some data1");
//         resolve("success");//or
//         reject("failed");
//       }, 4000);
//     });
// }

// console.log("fetching data1");
// let p1 = asyncFunc();
// p1.then((res) => {
//    console.log(res);
// });

// Await Async

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }

// IIFE

async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}

(async function () {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
})();