import '../css/common.css';

const refs = {
    input: document.querySelector('#date-selector'),
    timerDays: document.querySelector("span[data-days]"),
    timerHours: document.querySelector("span[data-hours]"),
    timerMinutes: document.querySelector("span[data-minutes]"),
    timerSeconds: document.querySelector("span[data-seconds]"),
    btnStart: document.querySelector("button[data-start]"),
};

let timerId = null;

refs.btnStart.addEventListener('click', onClickInterval);

function onClickBtnStart() {
    const dateEntered = new Date(refs.input.value);
    const targetDate = dateEntered.getTime()
    const currentDate = new Date();

    const time = targetDate - currentDate;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const daysBeautified = days.toString().padStart(2, "0");

    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const hoursBeautified = hours.toString().padStart(2, "0");

    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const minsBeautified = mins.toString().padStart(2, "0");

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const secsBeautified = secs.toString().padStart(2, "0");

    refs.timerDays.textContent = `${daysBeautified}`;
    refs.timerHours.textContent = `${hoursBeautified}`;
    refs.timerMinutes.textContent = `${minsBeautified}`;
    refs.timerSeconds.textContent = `${secsBeautified}`;
};


function onClickInterval() {
    timerId = setInterval(() => { onClickBtnStart() }, 1000);
};

