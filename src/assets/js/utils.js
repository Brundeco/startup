// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const calcWinsize = () => {
    return { width: window.innerWidth, height: window.innerHeight };
};

// Gets the mouse position
const getMousePos = (e) => {
    const body = document.getElementsByTagName("BODY")[0];
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        // ( -scrollY added here to fix wrong mouse position at page scroll )
        posy = e.pageY - window.scrollY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }

    return { x: posx, y: posy };
};

export { map, lerp, calcWinsize, getMousePos };
