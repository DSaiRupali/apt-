
//dark mode
function toggleMode() {
    document.body.classList.toggle("d_m");

    let slider = document.querySelector(".slider");
    let icon = document.getElementById("icon");

    if (document.body.classList.contains("d_m")) {
        slider.style.transform = "translateX(35px)";
        icon.innerHTML = "&#8226; &#9728;";
    } else {
        slider.style.transform = "translateX(0)";
        icon.innerHTML = "&#127769; &#8226;";
    }
}
//side menu open and close
