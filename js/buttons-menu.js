const nav = document.getElementById("nav");
const xmark = document.getElementById("xmark");
const burger = document.getElementById("burger");
const body = document.getElementById("body");

burger.addEventListener("click", () => {
    nav.classList.add("open");
    body.classList.add("no-scroll");
});

xmark.addEventListener("click", () => {
    nav.classList.remove("open");
    body.classList.remove("no-scroll");
});