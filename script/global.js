const navSlide = ()=>{
  const sideButtom = document.querySelector('.sideButton')
  const nav = document.querySelector('.nav-links')
  const navLinks =document.querySelectorAll('.nav-links li')
  
  sideButtom.addEventListener('click',()=>{
    // Toggle nav 
    nav.classList.toggle('nav-active');
      
    // Animate Links
      navLinks.forEach((link,index) => {
        if(link.style.animation) {
          link.style.animation = ';'
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`
        }
  })
      //Side button rotate
      sideButtom.classList.toggle('toggle')
  })
}

navSlide();






// function changeHeaderColor() {
//   let nav = document.querySelector("#header-page");
//   if (window.scrollY < 100) {
//     nav.classList.remove("bg-dark");
//     nav.classList.add("bg-transparent");
//   }else if(window.scrollY >= 100){
//     nav.classList.remove("bg-transparent");
//     nav.classList.add("bg-dark");
//   }
// }

// window.addEventListener('load', changeHeaderColor);
// window.addEventListener("scroll", changeHeaderColor);
