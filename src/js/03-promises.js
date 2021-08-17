const btnRef = document.querySelector('write');
btnRef.addEventListener('change', createPromise);

function createPromise() {
    return new Promise((2, 1500),
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;

            if (shouldResolve) {
                resolve(promise.write, delay);
            } else {
                reject(promise.write);
            }
        }, delay),

        logSuccess = (position, delay) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        },

        logError = (position, delay) => {
            console.warn(`❌ Rejected promise ${position} in ${delay}ms`);
        })
}