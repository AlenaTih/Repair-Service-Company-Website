const mobileNav = document.getElementById("mobile-nav")

document.addEventListener("click", function(e) {
    if (e.target.id === "hamburger") {
        showMenu()
    }
})

window.addEventListener("click", rootClick)

function showMenu() {
    mobileNav.innerHTML = `
    <div class="mobile-menu-container" id="mobile-menu-container">
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#feedback">About you</a></li>
            <li><a href="#contact">Contact</a></li>
        <ul>
    </div>`
    document.getElementById("mobile-menu-container").style.display = "flex"
    document.getElementById("mobile-menu-container").style.flexDirection = "column"
}

function rootClick(e) {
    if (mobileNav &&
        document.getElementById("mobile-menu-container") &&
        document.getElementById("mobile-menu-container").style.display === "flex" &&
        e.target.id !== "mobile-nav" &&
        e.target.id !== "hamburger" &&
        e.target.id !== "mobile-menu-container" &&
        !mobileNav.contains(e.target)) {
            // Element clicked was not the mobile nav or its children — close the mobile nav
            document.getElementById("mobile-menu-container").style.display = "none"
            mobileNav.innerHTML = `
                <i class="fa-solid fa-bars" id="hamburger"></i>`
        }
}
