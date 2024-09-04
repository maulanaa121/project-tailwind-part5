const btnHamburger = document.querySelector('.hamburger--elastic')
const Navigasi = document.querySelector('.navigasi')

btnHamburger.addEventListener('click',()=>{
    Navigasi.classList.toggle('nav-is-open');
    btnHamburger.classList.toggle('is-active');
})
