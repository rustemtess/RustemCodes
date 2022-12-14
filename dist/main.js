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
const skills = [
    {
        lauguage: "HTML",
        progress: 70
    },
    {
        lauguage: "CSS",
        progress: 64
    },
    {
        lauguage: "JS",
        progress: 60
    },
    {
        lauguage: "React",
        progress: 55
    },
    {
        lauguage: "TS",
        progress: 20
    },
    {
        lauguage: "PHP",
        progress: 48
    }
];
const mainClass = "skill-";
let i = 0;
const showSkills = () => {
    skills.map(skill => {
        const newClass = mainClass + i++;
        addElement('wrapper__main-about-skills', `<div class="skills">
        <h2>${skill.lauguage}</h2>
        <svg style="background-color: rgb(46, 46, 46); border-radius: 50%;" width="140" height="140">
          <circle class="${newClass}" cx="70" cy="70" r="69"></circle>
        </svg>
      </div>`);
        setProgress(skill.progress, newClass);
    });
};
const projects = [
    
];
const projectList = () => {
    projects.map(p => {
        addElement('projects', `<div class="wrapper__main-about-skills__block">
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <a href="${p.url}">More</a>
      </div>`);
    });
};
