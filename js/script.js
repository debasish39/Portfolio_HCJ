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

const form=document.getElementById("contactForm");
form.addEventListener("submit",async(e)=>{
  e.preventDefault();
  const formData=new FormData(form);
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });
const result=await response.json();
console.log(result);
if(result.success){
  alert(`Thank you, ${result.data.name}, for reaching out. we will get back to you soon.`);
    form.reset();
}
else{
      alert(`Something went wrong! ${result.message}`);

}
})
