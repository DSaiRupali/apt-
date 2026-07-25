function toggleMode() {
    document.body.classList.toggle("dark");
    const icon = document.getElementById("icon");
    if (document.body.classList.contains("dark")) {
        icon.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        icon.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
    }
}
window.addEventListener("load", function () {
    const icon = document.getElementById("icon");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    if (icon) {
            icon.innerHTML = "☀️";
        }
    } else {
    document.body.classList.remove("dark");
        if (icon) {
            icon.innerHTML = "🌙";
        }
    }
});
const menuButton = document.querySelector(".mb");
const sideMenu = document.getElementById("sideMenu");
menuButton.addEventListener("click", function () {
 sideMenu.classList.toggle("open");
});