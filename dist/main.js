const addElement = (className, element) => {
    document.querySelector(`.${className}`).innerHTML += element;
};
const setProgress = (percent, className) => {
    const circle = document.querySelector(`.${className}`);
    const r = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * r;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
};