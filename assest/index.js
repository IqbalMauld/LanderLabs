
document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll(".navbar-nav a");
  
    navItems.forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: index * 0.8, // Stagger the animation
            ease: "power2.out"
        });
    });
  });

  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  
  gsap.from('.cron', {duration: 1.5, delay: 1.5, x: -100, opacity: 0});
  gsap.from('.lett', {duration: 1.5, delay: 1.5, x: 100, opacity: 0});
  gsap.to(".lead", { duration: 2 , delay: 2.5, text : 'Ga cuma bikin website, tapi juga buat design keren'});
  gsap.from('#cta', {duration: 3, delay: 3, opacity: 0});
  



const navbarNav = document.querySelector('.navbar-nav')
const menu = document.getElementById('menu')


menu.addEventListener('click', ()=>{

    navbarNav.classList.toggle('active')
})

document.addEventListener('click', function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

const pertama = document.getElementById('pertama')
const pertamaP = document.getElementById('pertamaP')
const kedua = document.getElementById('kedua')
const keduaP = document.getElementById('keduaP')
const ketiga = document.getElementById('ketiga')
const ketigaP = document.getElementById('ketigaP')
const keempat = document.getElementById('keempat')
const keempatP = document.getElementById('keempatP')

pertama.addEventListener('click', ()=>{
    pertamaP.classList.toggle('active')
})
kedua.addEventListener('click', ()=>{
    keduaP.classList.toggle('active')
})
ketiga.addEventListener('click', ()=>{
    ketigaP.classList.toggle('active')
})
keempat.addEventListener('click', ()=>{
    keempatP.classList.toggle('active')
})
