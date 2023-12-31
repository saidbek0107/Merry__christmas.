/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}





/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add("bg-header")
        : header.classList.remove("bg-header")
}
window.addEventListener('scroll', scrollHeader)


/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== PARALLAX ===============*/
let parallax = new Rellax('.parallax')

/*=============== GSAP ANIMATION ===============*/

gsap.from('.home__village', 1.2, { opacity: 0, y: 100, delay: .1 })
gsap.from('.home__pine', 1.2, { opacity: 0, y: 150, delay: .3 })
gsap.from('.home__mountain-2', 1.2, { opacity: 0, x: 150, delay: .5 })
gsap.from('.home__mountain-3', 1.2, { opacity: 0, x: -150, delay: .6 })
gsap.from('.home__mountain-1', 1.2, { opacity: 0, y: 250, delay: .7 })
gsap.from('.home__moon', 1.2, { opacity: 0, y: 200, delay: .8 })
gsap.from('.home__trineo', 1.2, { opacity: 0, x: -200, delay: .8 })
gsap.from('.home__title', 1.2, { opacity: 0, y: -60, delay: .1 })


/*=============== NEW SWIPER  for gift cards ==================*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: "auto",
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        992: {
            spaceBetween: 80,
        },
    },
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.about__data, .celebrate__img`, { origin: 'right' })
sr.reveal(`.about__img, .celebrate__data`, { origin: 'left' })
sr.reveal(`.send__card`, { interval: 100 })
sr.reveal(`.new-swiper`, { interval: 100 })
sr.reveal(`.contact`, { interval: 100 })
sr.reveal(`.footer`)



// ======================= Validation form Js ==================

// var userName = document.getElementById('name')
// var phone = document.getElementById('phone');
// var email = document.getElementById('email')
// function sendEmail() {


//     var messageBody = "Name " + userName +
//         "<br/> Phone " + phone +
//         "<br/> Email " + email;
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Username: "saidbekochilov86@gmail.com",
//         Password: "C0FB27AFE517D7C082C1AC141F888519C307",
//         To: "saidbekochilov86@gmail.com",
//         From: "saidbekdev07@gmail.com",
//         Subject: "This is the subject",
//         Body: messageBody
//     }).then(
//         message => {
//             if (message == 'OK') {
//                 swal("Good job!", "You clicked the button!", "success");
//             }

//         }
//     );
// }

const form = document.querySelector("form")
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")

function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}
     <br> Message: ${message.value}`

    Email.send({
        SecureToken: "5a4031aa-383d-4bf2-b1c1-5d12d54d7f4c",
        // Host: "smtp.elasticemail.com",
        // Username: "saidbekochilov86@gmail.com",
        // Password: "C0FB27AFE517D7C082C1AC141F888519C307",
        To: "saidbekdev07@gmail.com",
        From: "saidbekochilov86@gmail.com",
        Subject: "New Message!",
        Body: bodyMessage

    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success",
                    text: "Message sent successfully",
                    icon: "success",
                    timer: 1500
                });
            }
        }
    );
}



function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (let item of items) {
        if (item.value == "") {
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }

            else {
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })

    }
}


function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error")
        email.parentElement.classList.add("error")

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }

        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }

    }
    else {
        email.classList.remove("error")
        email.parentElement.classList.remove("error")
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") &&
        !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false
    }
})