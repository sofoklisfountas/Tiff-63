const mobileMenu = document.querySelector(".mobile-menu");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list-container");
const navLinks = document.querySelectorAll(".nav-links");
const body = document.querySelector('body');

mobileMenu.addEventListener("click", e => {
    console.log('click: ', e);
    navList.classList.toggle('menu-open');
    mobileMenu.classList.toggle('menu-open');
    body.classList.toggle('prevent-scroll');
    body.classList.toggle('content-shift-fix');

    console.log(e.target);

    if (e.target.classList.contains('nav-link')) {
        navLinks.forEach(navLink => {
            navLink.classList.remove("active");
        })
        e.target.classList.add("active");
    }
});