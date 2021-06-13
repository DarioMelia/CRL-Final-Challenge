const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');



navToggle.addEventListener('click', () => {

    nav.classList.toggle('nav--visible');
})


window.addEventListener("resize", () =>{
  const width = window.innerWidth;

  if(width >= 700 && nav.classList.contains("nav--visible")){
    nav.classList.remove("nav--visible");
  }
})
