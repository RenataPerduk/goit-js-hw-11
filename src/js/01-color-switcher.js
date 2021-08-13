const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const changeBtnStatus = (remove, add) => {
    refs.start.disabled = add;
    refs.stop.disabled = remove;
};

refs = {
    body: document.body,
    start: document.querySelector('button[data-start="start"]'),
    stop: document.querySelector('button[data-stop="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let random = null;
let colorSwitch = null;
refs.start.addEventListener("click", () => {
    changeBtnStatus(false, true);

    colorSwitch = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
});

refs.stop.addEventListener("click", () => {
    clearInterval(colorSwitch);
    changeBtnStatus(true, false);
});