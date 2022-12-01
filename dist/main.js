const addElement = (classNameOrID, element, type = true) => {
    if (type)
        document.querySelector(`.${classNameOrID}`).innerHTML += element;
    else
        document.getElementById(`${classNameOrID}`).innerHTML += element;
};
const getID = (idName) => {
    return document.getElementById(`${idName}`);
};
const view = (classNameOrUrl, type) => {
    if (!type)
        document.location.href = classNameOrUrl;
    else {
        const block = document.querySelector(`.${classNameOrUrl}`);
        block.scrollIntoView({ block: "center", behavior: "smooth" });
    }
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
const arrayMedia = [
    {
        mediaSize: "(min-width: 650px)",
        func: function () {
            getID('items').style.display = "flex";
        }
    },
    {
        mediaSize: "(max-width: 650px)",
        func: function () {
            getID('items').style.display = "none";
        }
    }
];
const changeMedia = [
    window.matchMedia(arrayMedia[0].mediaSize),
    window.matchMedia(arrayMedia[1].mediaSize)
];
const handleChange = (e) => {
    if (e.matches) {
        arrayMedia.map(media => {
            if (e.currentTarget.media === media.mediaSize)
                media.func();
        });
    }
};
changeMedia.map(mediaListener => mediaListener.addListener(handleChange));
