const Mobile_toggle = document.getElementById('mobile_toggle');
const Nav_links = document.querySelector('.nav_link');

Mobile_toggle.addEventListener('click', ()=>{
    Nav_links.classList.toggle('active');
});