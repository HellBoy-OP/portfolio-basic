// required dom elements
const styleSwitcherToggle = document.querySelector('.style-switcher-toggle');
const styleSwitcher = document.querySelector('.style-switcher');
const alternateStyles = document.querySelectorAll('.alternate-style');
const dayNight = document.querySelector('.day-night');
const navLinks = document.querySelectorAll(".nav li a");
const sections = document.querySelectorAll("section");
const navToggleBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const contactBtn = document.querySelector(".read-more");


// Style Switcher
styleSwitcherToggle.addEventListener("click", () => {
    styleSwitcher.classList.toggle('open');
})

window.addEventListener("scroll", () => {
    if (styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
})


// Theme colors
const setActiveStyle = (color) => {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}


// Theme light and dark mode
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})


// typing animation
let typed = new Typed(".typing", {
    strings: ["Developer", "Coder", "Freelancer", "Programmer", ""],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})


// active link
const showSection = (element) => {
    const target = element.getAttribute("href").split("#")[1];
    sections.forEach((section) => {
        section.classList.remove("back-section");

        if (section.classList.contains("active")) {
            section.classList.remove("active");
            section.classList.add("back-section")
        }
        if (section.id === target) {
            section.classList.add("active");
        }
    })
}

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        navLinks.forEach((link) => {
            link.classList.remove("active");
        })
        link.classList.add("active");
        showSection(link)

        if (window.innerWidth < 1200) {
            toggleAsideSection();
        }
    })
})


// nav toggle
const toggleAsideSection = () => {
    aside.classList.toggle("open");
    navToggleBtn.classList.toggle("open");
    sections.forEach((section) => {
        section.classList.toggle("open");
    })
}

const updaetNav = (element) => {
    const target = element.getAttribute("href").split("#")[1];
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").split("#")[1] === target) {
            link.classList.add("active");
        }
    })
}

navToggleBtn.addEventListener("click", () => {
    toggleAsideSection();
})


// contact button
contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(contactBtn);
    updaetNav(contactBtn);
})
