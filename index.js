let menuIcon = document.getElementById("burger")
let menu = document.getElementById("menu")
let menuIsActive = false
menuIcon.addEventListener("click", activeMenu)

function activeMenu() {
    menuIsActive = !menuIsActive
    if (menuIsActive)
        menu.classList.add("menu-active")
    else
        menu.classList.remove("menu-active")
}