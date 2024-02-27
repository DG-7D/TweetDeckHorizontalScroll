const headerHeight = 50;
async function main() {
    let container: HTMLElement | undefined = undefined;
    while (!container) {
        await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000))
        container = document.getElementById("container") ?? undefined;
    }
    container.addEventListener("wheel", (ev) => {
        if (ev.clientY < headerHeight) {
            container!.scrollBy(ev.deltaY, 0);
        }
    }, { passive: true })
}
main();