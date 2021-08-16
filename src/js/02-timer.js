// import '../css/common.css';

// const refs = {
//     input: document.querySelector('#date-selector'),
//     timerDays: document.querySelector("span[data-days]"),
//     timerHours: document.querySelector("span[data-hours]"),
//     timerMinutes: document.querySelector("span[data-minutes]"),
//     timerSeconds: document.querySelector("span[data-seconds]"),
//     btnStart: document.querySelector("button[data-start]"),
// };

// let timerId = null;

// refs.btnStart.addEventListener('click', onClickInterval);

// function onClickBtnStart() {
//     const dateEntered = new Date(refs.input.value);
//     const targetDate = dateEntered.getTime()
//     const currentDate = new Date();

//     const time = targetDate - (-currentDate);

//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const daysBeautified = days.toString().padStart(2, "0");

//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const hoursBeautified = hours.toString().padStart(2, "0");

//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const minsBeautified = mins.toString().padStart(2, "0");

//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     const secsBeautified = secs.toString().padStart(2, "0");

//     refs.timerDays.textContent = `${daysBeautified}`;
//     refs.timerHours.textContent = `${hoursBeautified}`;
//     refs.timerMinutes.textContent = `${minsBeautified}`;
//     refs.timerSeconds.textContent = `${secsBeautified}`;
// };


// function onClickInterval() {
//     timerId = setInterval(() => { onClickBtnStart() }, 1000);
// };

import '../css/common.css';

const refs = {
    input: document.querySelector('#date-selector'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
    btnStart: document.querySelector('[data-start]'),
};

class Timer {
    constructor({ onTick }) {
        this.intervalId = null,
            this.isActive = false,
            this.onTick = onTick;

        this.init();
    }

    init() {
        const time = this.convertMs(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return;
        }

        this.isActive = true;

        this.intervalId = setInterval(() => {
            const dateEntered = new Date(refs.input.value);
            const targetDate = dateEntered.getTime();
            const currentDate = new Date();

            const ms = targetDate - currentDate;

            const time = this.convertMs(ms);

            if (ms <= 0) {
                timer.stop();
                return;
            }

            else if (ms < 1000) {
                timer.stop();
            }

            this.onTick(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.convertMs(0);
        this.onTick(time);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Remaining days
        const days = this.pad(Math.floor(ms / day));
        // Remaining hours
        const hours = this.pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

        return { days, hours, minutes, seconds };
    }
}

const timer = new Timer({
    onTick: updateTextContent,
});


function updateTextContent({ days, hours, minutes, seconds }) {
    refs.timerDays.textContent = `${days}`;
    refs.timerHours.textContent = `${hours}`;
    refs.timerMinutes.textContent = `${minutes}`;
    refs.timerSeconds.textContent = `${seconds}`;
}

refs.btnStart.addEventListener('click', timer.start.bind(timer));