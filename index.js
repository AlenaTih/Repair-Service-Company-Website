import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyChR30UHiZ4u-_t1mbqPfBTY0g57Smr_HA",
    authDomain: "realtime-database-67683.firebaseapp.com",
    databaseURL: "https://realtime-database-67683-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "realtime-database-67683",
    storageBucket: "realtime-database-67683.appspot.com",
    messagingSenderId: "372372469204",
    appId: "1:372372469204:web:f348e41f2bb53d7aaa9241"
  }

  // Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const contactDatainDB = ref(database, "RepairServicesContactData")

const mobileNav = document.getElementById("mobile-nav")
const aboutYouMenu = document.getElementById("about-you-menu")

const inputNameEl = document.getElementById("input-name")
const inputPhoneEl = document.getElementById("input-phone")
const inputEmailEl = document.getElementById("input-email")

let inputValue = {
    name: "",
    phoneNumber: "",
    email: ""
}

document.addEventListener("click", function(e) {
    if (e.target.id === "hamburger") {
        showMenu()
    } else if (e.target.id === "about-you-item") {
        showYouMenu()
    } else if (e.target.id === "submit-button") {
        e.preventDefault()
        submitContactData()
    } else if(e.target.dataset.call) {
        makeACall()
    }
})

window.addEventListener("click", rootClick)

function showMenu() {
    mobileNav.innerHTML = `
    <div class="mobile-menu-container" id="mobile-menu-container">
        <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#feedback">Feedback from our clients</a></li>
            <li><a href="#questions">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
        <ul>
    </div>`
    document.getElementById("mobile-menu-container").style.display = "flex"
    document.getElementById("mobile-menu-container").style.flexDirection = "column"
}

function showYouMenu() {
    aboutYouMenu.innerHTML = `
        <ul>
            <li><a href="#feedback">Feedback from our clients</a></li>
            <li><a href="#questions">FAQ</a></li>
        </ul>`

    aboutYouMenu.style.display = "flex"
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
        } else if (aboutYouMenu &&
            aboutYouMenu.style.display === "flex" &&
            e.target.id !== "about-you-menu" &&
            e.target.id !== "about-you-item" &&
            !aboutYouMenu.contains(e.target)) {
            // Element clicked was not the dropdown aboutYouMenu — close the aboutYouMenu
            aboutYouMenu.style.display = "none"
            }
}

function submitContactData() {
    const form = document.querySelector("form")

    if (!form.checkValidity()) {
        // If the form is not valid, prevent submition
        // The form is valid when the name and email input fields are not empty
        alert("Please type in your name and email ❤️")
    } else {
        alert(`Thank you, ${inputNameEl.value} ❤️ We will contact you soon!`)

    
        // Update inputValue with input values
        inputValue.name = inputNameEl.value
        inputValue.phoneNumber = inputPhoneEl.value
        inputValue.email = inputEmailEl.value

        // Push the contact data item to the database
        push(contactDatainDB, inputValue)

    }
}

function makeACall() {
    alert("Calling us ❤️")
}
