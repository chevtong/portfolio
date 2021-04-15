const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const navLinksTag = document.querySelectorAll(".nav-links li a")


function toggleNav(elem) {

    navLinksTag.forEach(tag=>{
        tag.classList.remove("nav-active")
    })
    elem.classList.add("nav-active")
    
}
navLinksTag.forEach(tag=>{
    tag.addEventListener("click", ()=>{toggleNav(tag)})
})


function addAnimation() {
  const contactAnimation = document.querySelector(".contacts-container");
  const projectAnimation = document.querySelector(".projects-title");
  const nameAnimation = document.querySelector(".name");

  const landingTab = document.querySelector(".landing-tab")
  const projectTab = document.querySelector(".projects-tab")
  
  const contactsTab = document.querySelector(".contacts-tab")

  const projectPostion =  document.querySelector(".projects-container").getBoundingClientRect().top;
  const namePosition = document.querySelector(".name-container").getBoundingClientRect().top;
  const titlePosition = contactAnimation.getBoundingClientRect().top;

  const screenPosition = window.innerHeight/ 1.4;

  if (namePosition == 0) {
    nameAnimation.classList.add("name-animation");
    toggleNav(landingTab)
  } else {
    nameAnimation.classList.remove("name-animation");
  }
  if (projectPostion < screenPosition) {
    projectAnimation.classList.add("animation");
    toggleNav(projectTab)
  } else {
    projectAnimation.classList.remove("animation");
  }
  if (titlePosition < screenPosition) {
    contactAnimation.classList.add("animation");
    toggleNav(contactsTab)
  } else {
    contactAnimation.classList.remove("animation");
  }

  console.log('titlePosition', titlePosition)
  console.log('screenPosition', screenPosition)
}



window.addEventListener('scroll', ()=>{
    addAnimation()
}, 3000)