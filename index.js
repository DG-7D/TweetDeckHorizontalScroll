"use strict";
const headerHeight = 50;
async function main() {
    let container = undefined;
    while (!container) {
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));
        container = document.getElementById("container") ?? undefined;
    }
    container.addEventListener("wheel", (ev) => {
        if (ev.clientY < headerHeight) {
            container.scrollBy(ev.deltaY, 0);
        }
    }, { passive: true });
}
main();
