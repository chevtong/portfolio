const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("open");
})


function addAnimation(){
    
    const contactAnimation = document.querySelector(".contacts-container ")
    const nameAnimation = document.querySelector(".name-container")

    const namePosition = nameAnimation.getBoundingClientRect().top
   const titlePosition = contactAnimation.getBoundingClientRect().top

   const screenPosition = window.innerHeight / 1.4;





   if(namePosition==0){console.log('yes')}

    console.log('namePosition: ', namePosition)
   console.log('screenPosition: ', screenPosition)
   console.log('window.innerHeight: ', window.innerHeight)

   if (titlePosition < screenPosition){
    contactAnimation.classList.add('animation')
   } else{
    contactAnimation.classList.remove('animation')
   }
    
}

window.addEventListener('scroll',addAnimation )


