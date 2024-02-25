const mobileNav = document.getElementById("mobile-nav")

document.addEventListener("click", function(e) {
    if (e.target.id === "hamburger") {
        showMenu()
    }
})

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
