let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () => {
  search.classList.toggle("active");
  navbar.classList.remove("active");
};
/////////////////////////////////
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () => {
  navbar.classList.toggle("active");
  search.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
};
//////////////////////////////////////////////////

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

/////////////////////////////
function showSections() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < windowHeight * 0.9) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showSections);
document.addEventListener("DOMContentLoaded", showSections);
window.scrollTo(0, 0);
