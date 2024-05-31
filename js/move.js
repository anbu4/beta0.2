const navSearchLink = document.querySelector('.nav_search-link');
const navbarInput = document.querySelector('.navbar_input');


navSearchLink.addEventListener('click', () => {
    navbarInput.classList.toggle('input_active')
})
// Event
const navLinks = document.querySelectorAll('.nav_links')
navLinks.forEach(link =>{
    link.addEventListener('click',pullDataCatigory)
})
function pullDataCatigory(){
    localStorage.setItem('catigory', this.dataset.catigory)
}