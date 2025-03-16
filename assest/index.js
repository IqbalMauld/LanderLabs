const navbarNav = document.querySelector('.navbar-nav')
const menu = document.getElementById('menu')


menu.addEventListener('click', ()=>{

    navbarNav.classList.toggle('active')
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