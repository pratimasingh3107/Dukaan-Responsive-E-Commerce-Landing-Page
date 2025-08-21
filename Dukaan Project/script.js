const hamburger = document.getElementById("hamburger");
const dropdown = document.getElementById("dropdown");

hamburger.addEventListener("click", () => {
    dropdown.style.display =
    dropdown.style.display === "flex" ? "none" : "flex";
});

// Optional: close dropdown when clicking a link
const links = dropdown.querySelectorAll("a");
links.forEach(link => {
    link.addEventListener("click", () => {
    dropdown.style.display = "none";
});
});
