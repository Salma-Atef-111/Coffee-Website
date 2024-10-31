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
  const windowHeight = window.innerHeight; // ارتفاع نافذة المتصفح

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect(); // للحصول على موقع السيكشن
    if (rect.top < windowHeight * 0.9) {
      // إذا كان السيكشن داخل النافذة
      section.classList.add("visible"); // أضف كلاس visible
    }
  });
}

// تنفيذ الوظيفة عند التمرير
window.addEventListener("scroll", showSections);
// تنفيذ الوظيفة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", showSections);
window.scrollTo(0, 0);

// document.addEventListener("DOMContentLoaded", function () {
//   const sections = document.querySelectorAll("section");

//   const observerOptions = {
//     root: null, // يعتبر النافذة الخاصة بالمتصفح
//     rootMargin: "0px",
//     threshold: 0.1, // يظهر السيكشن لما 10% منه يكون ظاهر
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible"); // أضف كلاس visible
//         observer.unobserve(entry.target); // وقف المراقبة للسيكشن بعد ما يظهر
//       }
//     });
//   }, observerOptions);

//   sections.forEach((section) => {
//     observer.observe(section); // ابدأ بمراقبة كل سيكشن
//   });
// });
