function searchTheory() {
    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search.includes("big")) {
        window.location.href = "bigbang.html";
    } else if (search.includes("evolution")) {
        window.location.href = "evolution.html";
    } else if (search.includes("fermi")) {
        window.location.href = "fermi.html";
    } else {
        alert("Theory not found!");
    }
}
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("themeBtn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
}
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});
const elements = document.querySelectorAll(".theory-card, .category-box");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("fade-in");
});
// Active Navigation
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
