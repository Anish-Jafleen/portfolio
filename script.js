// ===============================
// PORTFOLIO JAVASCRIPT
// ===============================


// ===============================
// NAVBAR ACTIVE LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".project-card,.skill-card,.certificate-card,.achievement-card,.timeline-item,.experience-card,.info-card"
);

function reveal() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


// ===============================
// SKILL BAR ANIMATION
// ===============================

const fills = document.querySelectorAll(".fill");

function animateSkills() {

    fills.forEach(fill => {

        const width =
            fill.classList.contains("html") ? "95%" :
            fill.classList.contains("css") ? "90%" :
            fill.classList.contains("js") ? "85%" :
            fill.classList.contains("python") ? "90%" :
            fill.classList.contains("java") ? "75%" :
            fill.classList.contains("mysql") ? "85%" :
            "80%";

        fill.style.width = "0";

        setTimeout(() => {

            fill.style.transition = "2s";
            fill.style.width = width;

        }, 300);

    });

}

animateSkills();


// ===============================
// COUNTER
// ===============================

const counters = document.querySelectorAll(".count");

counters.forEach(counter => {

    counter.innerText = "0";

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00e5ff";
topBtn.style.color = "#000";
topBtn.style.fontSize = "24px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};


// ===============================
// TYPING EFFECT
// ===============================

const roles = [
    "B.Tech IT Student",
    "Full Stack Developer",
    "UI/UX Designer"
];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeRole() {

    if (!typing) return;

    if (charIndex < roles[roleIndex].length) {

        typing.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 120);

    }

    else {

        setTimeout(eraseRole, 1800);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        typing.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 60);

    }

    else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        setTimeout(typeRole, 300);

    }

}

typeRole();


// ===============================
// PORTFOLIO LOADED
// ===============================

console.log("Portfolio Loaded Successfully");