const changeMode = (size, weight, transform, background, color) => {
    document.body.style.fontSize = size.toString() + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
};
const main = () => {
    const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = () =>
        changeMode(12, "normal", "lowercase", "white", "black");
    document
        .getElementById("spookyBtn")
        .addEventListener("click", () => spooky());
    document
        .getElementById("darkBtn")
        .addEventListener("click", () => darkMode());
    document
        .getElementById("screamBtn")
        .addEventListener("click", () => screamMode());
};
main();