// MENU BUTTON
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
// const navItem = document.getElementsByClassName("navItem");

menuIcon.onclick = function () {
    if (menu.className === "hidden") {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
};

// navItem.addEventListener("click", () => {
//     menu.classList.add("hidden")
// })