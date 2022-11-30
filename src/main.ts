const addElement : any = (className: string, 
    element: string) => {
        document.querySelector(`.${className}`).innerHTML += element
}

const setProgress : any = (percent: number, className: string) => {
    const circle = document.querySelector(`.${className}`);
    // @ts-ignore
    const r = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * r;

    // @ts-ignore
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    // @ts-ignore
    circle.style.strokeDashoffset = circumference;
    const offset = circumference - percent / 100 * circumference;
    // @ts-ignore
    circle.style.strokeDashoffset = offset;
}