const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', createPromise);

function createPromise() {
    return new Promise((2, 1500),
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;

            if (shouldResolve.searchForm.addEventListener) {
                resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
            } else {
                reject(`❌ Rejected promise ${position} in ${delay}ms`);
            }
        }, delay))
}


        // logSuccess = (position, delay) => {
        //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        // },

        // logError = (position, delay) => {
        //     console.warn(`❌ Rejected promise ${position} in ${delay}ms`);
        // })

// const refs = {
//     fetchCreatePromise: document.querySelector('delay')
// };

// refs.newCreatePromise.addEventListener('submit', createPromise);

// function newCreatePromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
//     refs.CreatePromise.innerHTML = markup;

//     fetchCreatePromise(2, 1500)
//         .then(resolve => {
//             console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(error => {
//             console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         })
// }












// const delay = document.querySelector('delay')
// const step = document.querySelector('step')
// const amount = document.querySelector('amount')


// delay.addEventListener('change', newDelay);
// step.addEventListener('change', newStep);
// amount.addEventListener('change', newAmount);
// btnCreatePromise.addEventListener('submit', createPromise);



// const createPromise = new createPromise((position, delay) => {

//     const shouldResolve = Math.random() > 0.3;

//     setTimeout(() => {
//         if (shouldResolve) {
//             resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         };
//         reject(`❌ Rejected promise ${position} in ${delay}ms`);
//     }, delay);
// });
// return promise;

// btnCreatePromise.addEventListener('submit', createPromise)



// function newCreatePromise({ delay, step, amount }) {
//     refs.newCreatePromiseDelay.textContent = `${delay}`;
//     refs.newCreatePromiseStep.textContent = `${step}`;
//     refs.newCreatePromiseAmount.textContent = `${amount}`;

//     createPromise(2, 1500)
//     shouldResolve = Math.random() > 0.3
//         .then(({ position, delay }) => {
//             console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         .catch(({ position, delay }) => {
//             console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         });
