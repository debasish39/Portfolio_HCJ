const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const scrollTopBtn = document.getElementById("scrollTopBtn");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu after clicking a link
navItems.forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
 if(window.scrollY>300){
     scrollTopBtn.style.display="flex";
 }
 else{
    scrollTopBtn.style.display="none";
 }});
 scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Hide loader after page load
window.addEventListener("load", () => {
  const loader = document.getElementById("pageLoader");
  loader.style.opacity = "0";
  loader.style.pointerEvents = "none";

  setTimeout(() => {
    loader.style.display = "none";
  }, 300);
});

