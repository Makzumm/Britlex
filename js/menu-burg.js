(() => {
    const openBtn = document.querySelector("[data-burg-open]");
    const burgMenu = document.querySelector("[data-burg-menu]");
    const closeBtn = document.querySelector("[data-burg-close]")
    const mainBody = document.querySelector("body");

    openBtn.addEventListener("click", () => {
        const expanded =
            openBtn.getAttribute("aria-expanded") === true;
            openBtn.setAttribute("aria-expanded", !expanded);
        
        burgMenu.classList.toggle("is-hidden");
        mainBody.classList.toggle("menu-burg-is-open");
    })

    closeBtn.addEventListener("click", () => {
        const expanded =
            openBtn.getAttribute("aria-expanded");
            openBtn.setAttribute("aria-expanded", !expanded);

        burgMenu.classList.toggle("is-hidden");
        mainBody.classList.toggle("menu-burg-is-open")
    })

})();

