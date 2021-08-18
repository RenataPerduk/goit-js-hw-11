// // const searchForm = document.querySelector('form');
// // searchForm.addEventListener('submit', createPromise);


// // const searchForm = document.querySelector('form');
// // const delay = document.querySelector('delay');
// // const step = document.querySelector('step');
// // const amount = document.querySelector('amount')

// // searchForm.addEventListener('submit', newCreatePromise);
// // delay.addEventListener('click', newDelay);
// // step.addEventListener('click', newStep);
// // amount.addEventListener('click', newAmount);



// // function newCreatePromise(position, delay) {
// //     const shouldResolve = Math.random() > 0.3;

// //     newCreatePromise((2, 1500)
// //         .then(resolve => {
// //             console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //         })
// //         .catch(error => {
// //             console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// //         }), delay)
// // }





// // const createPromise = new createPromise((position, delay) => {

// //     const shouldResolve = Math.random() > 0.3;

// //     setTimeout(() => {
// //         if (shouldResolve) {
// //             resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //         };
// //         reject(`❌ Rejected promise ${position} in ${delay}ms`);
// //     }, delay);
// // });
// // return promise;

// // btnCreatePromise.addEventListener('submit', createPromise)



// function newCreatePromise({ delay, step, amount }) {
//     newCreatePromiseDelay.value = `${delay}`;
//     newCreatePromiseStep.value = `${step}`;
//     newCreatePromiseAmount.value = `${amount}`;

//     createPromise(2, 1500)
//     shouldResolve = Math.random() > 0.3
//         .then(({ position, delay }) => {
//             console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(({ position, delay }) => {
//             console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         }), delay
// };


// function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//         // Fulfill
//     } else {
//         // Reject
//     }
// }

// return createPromise(2, 1500)
//     .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     })
//     .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });





//Задание 1
/*Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
Значением
исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.*/

const delay = ms => {
    // Change this function
    return new Promise(resolve =>
        setTimeout(logger, ms, ms));
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms



//Задание 2
/*Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.*/

const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
        allUsers.map(user => {
            if (user.name === userName) {
                resolve({ ...user, active: !user.active });
            }
        });
    });
};

const logger1 = updatedUsers => console.table(updatedUsers);

// Currently the function works like this
// toggleUserState(users, 'Mango', console.table);
// toggleUserState(users, 'Ajax', console.table);

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);


//Задание 3
/*Перепиши функцию makeTransaction() так, чтобы она не использовала
callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.*/

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) =>
    new Promise((resolve, reject) => {
        const delay = randomIntegerFromInterval(200, 500);

        setTimeout(() => {
            const canProcess = Math.random() > 0.3;
            if (canProcess) {
                resolve({ id: transaction.id, time: delay });
            } else {
                reject(transaction.id);
            }
        }, delay);
    });
const logSuccess = ({ id, time }) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = (id) => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};


// Currently the function works like this
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);

// The function should work like this
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);
makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);
makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
