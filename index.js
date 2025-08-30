const dot = document.getElementById('dot');

window.addEventListener('mousemove', e => {
    dot.style.left = e.pageX + 'px';
    dot.style.top = e.pageY + 'px';
});

document.addEventListener("mousemove", (e) => {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);
    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    setTimeout(() => {
        trail.remove();
    }, 500);
});

function scrollToEducation() {
    document.getElementById("edu").scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToContacts() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function scrollToProjects() {
    document.getElementById("carousel").scrollIntoView({
        behavior: "smooth"
    });
}


const typeText = document.getElementById("type-text");
const text = "Hello Everyone! I am Lavanya Rastogi, a passionate Developer, full time learner and mass explorer. \
        From chaos to discipline my personality pendulums both. Perfectionism flows in my blood(as if my OCD won't let it🙄). \
        I can slip inside a team like butter and also work independantly like a lone wolf. It's nice to see you here! \
        My space welcomes You!🌏🪐✨";

let i = 0;
typeText.textContent = "";
function typeWriter() {
    if (i < text.length) {
        typeText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}

typeWriter();

function renderHomePage() {
    window.location.href = "index.html";
}

const slides = document.getElementById('slides');
const carousel = document.getElementById('carousel');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const totalSlides = slides.children.length;

let index = 0;
let interval = setInterval(autoSlide, 5000);

function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function autoSlide() {
    index = (index + 1) % totalSlides;
    updateSlide();
}

prev.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlide();
});

next.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    updateSlide();
});