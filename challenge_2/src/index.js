const screen = document.querySelector("body");


function handleWindowSize() {
    const width = window.innerWidth;
    const LARGE_SCRN = "large-screen";
    const MIDDLE_SCRN = "middle-screen";
    const SMALL_SCRN = "small-screen";

    if(width > 1000) {
        screen.classList.add(LARGE_SCRN);
        screen.classList.remove(MIDDLE_SCRN);
    } else if(1000 >= width && width > 700) {
        screen.classList.add(MIDDLE_SCRN);
        screen.classList.remove(LARGE_SCRN, SMALL_SCRN);
    } else {
        screen.classList.add(SMALL_SCRN);
        screen.classList.remove(MIDDLE_SCRN);
    }
}

window.addEventListener("resize", handleWindowSize);