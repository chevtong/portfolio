const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navLinksTag = document.querySelectorAll(".nav-links li a");
const emailBtn = document.querySelector(".email-btn");
const mainImg = document.querySelector(".project-img-main");
const thumbnailsImg = document.querySelectorAll(".project-img-thumbnail");
const mainImg2 = document.querySelector(".project-img-main2");
const thumbnailsImg2 = document.querySelectorAll(".project-img-thumbnail2");
const mainImg1 = document.querySelector(".project-img-main1");
const thumbnailsImg1 = document.querySelectorAll(".project-img-thumbnail1");


thumbnailsImg.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImg.src = thumbnail.src;
  });
});
thumbnailsImg1.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImg1.src = thumbnail.src;
  });
});
thumbnailsImg2.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImg2.src = thumbnail.src;
  });
});

function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function addAnimation() {
  const contactAnimation = document.querySelector(".contacts-container");
  const projectAnimation = document.querySelector(".projects-title");
  const profileAnimation = document.querySelector(".profile-title");
  const nameAnimation = document.querySelector(".name");
  const cvAnimation = document.querySelector(".cv-title");

  const landingTab = document.querySelector(".landing-tab");
  const projectTab = document.querySelector(".projects-tab");
  const contactsTab = document.querySelector(".contacts-tab");
  const cvTab = document.querySelector(".cv-tab");

  const cvPosition = document
    .querySelector(".cv-img-container")
    .getBoundingClientRect().top;

  const projectPostion = document
    .querySelector(".projects-container")
    .getBoundingClientRect().top;
  const namePosition = document
    .querySelector(".landing-container")
    .getBoundingClientRect().top;
  const contactsPosition = contactAnimation.getBoundingClientRect().top;
  const profilePosition = profileAnimation.getBoundingClientRect().top;

  const screenPosition = window.innerHeight / 1.4;

  if (namePosition == 0) {
    nameAnimation.classList.add("name-animation");
    toggleNav(landingTab);
  } else {
    nameAnimation.classList.remove("name-animation");
  }
  if (profilePosition < screenPosition) {
    profileAnimation.classList.add("animation");
    toggleNav(projectTab);
  } else {
    profileAnimation.classList.remove("animation");
  }
  if (projectPostion < screenPosition) {
    projectAnimation.classList.add("animation");
    toggleNav(projectTab);
  } else {
    projectAnimation.classList.remove("animation");
  }

  if (contactsPosition < screenPosition) {
    contactAnimation.classList.add("animation");
  } else {
    contactAnimation.classList.remove("animation");
  }

  if (contactsPosition < 500 && contactsPosition > -200) {
 
    toggleNav(contactsTab);
  }

  if (cvPosition < screenPosition) {
    cvAnimation.classList.add("animation");
    toggleNav(cvTab)
  } else {
    cvAnimation.classList.remove("animation");
  }

}

function toggleNav(elem) {
  navLinksTag.forEach((tag) => {
    tag.classList.remove("nav-active");
  });

  elem.classList.add("nav-active");
}

navLinksTag.forEach((tag) => {
  tag.addEventListener("click", () => {
    toggleNav(tag);
  });
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) =>
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    })
  );
});

window.addEventListener("scroll", addAnimation);
