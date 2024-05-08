const svg = document.querySelector("svg.svg");
const path = svg.querySelector("path");
const scroll = () =>
    {
        const distance = window.scrollY;
        const totalDistance = svg.clientHeight - window.innerHeight;
        const percent = distance / totalDistance;
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength * (1 - percent)}`;
    }
    scroll();
    window.addEventListener('scroll', scroll);