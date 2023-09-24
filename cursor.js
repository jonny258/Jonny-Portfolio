console.clear();

const { gsap } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
let isStuck = false;
let mouse = {
    x: -100,
    y: -100,
};

let scrollHeight = 0;
window.addEventListener('scroll', function(e) {
    scrollHeight = window.scrollY
})

let cursorOuterOriginalState = {
    width: cursorOuter.getBoundingClientRect().width,
    height: cursorOuter.getBoundingClientRect().height,
};
// Modified the selector here
const buttons = document.querySelectorAll(".btn, .home-hero__social, .header__link");

buttons.forEach((button) => {
    button.addEventListener("pointerenter", handleMouseEnter);
    button.addEventListener("pointerleave", handleMouseLeave);
});

document.body.addEventListener("pointermove", updateCursorPosition);
document.body.addEventListener("pointerdown", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 2,
    });
});
document.body.addEventListener("pointerup", () => {
    gsap.to(cursorInner, 0.15, {
        scale: 1,
    });
});

function updateCursorPosition(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}

function updateCursor() {
    gsap.set(cursorInner, {
        x: mouse.x,
        y: mouse.y,
    });

    if (!isStuck) {
        gsap.to(cursorOuter, {
            duration: 0.15,
            x: mouse.x - cursorOuterOriginalState.width / 2,
            y: mouse.y - cursorOuterOriginalState.height / 2,
        });
    }

    requestAnimationFrame(updateCursor);
}

updateCursor();

function handleMouseEnter(e) {
    isStuck = true;
    const targetBox = e.currentTarget.getBoundingClientRect();
    gsap.to(cursorOuter, 0.2, {
        x: targetBox.left,
        y: targetBox.top + scrollHeight,
        width: targetBox.width,
        height: targetBox.height,
        borderRadius: '5px', // Adjust this value to your liking
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: '3px',
    });
}



function handleMouseLeave(e) {
    isStuck = false;
    gsap.to(cursorOuter, 0.2, {
        width: cursorOuterOriginalState.width,
        height: cursorOuterOriginalState.width,
        borderRadius: "50%",
        backgroundColor: "transparent",
        borderWidth: '1px',
    });
}
