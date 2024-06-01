// DOM
const navSearchLink = document.querySelector('.nav_search-link');
const navbarInput = document.querySelector('.navbar_input');
const navLinks = document.querySelectorAll('.nav_links');
const header = document.querySelector('.header');
let itemObj = JSON.parse(localStorage.getItem('moveItem'));

// jsx
function creatHeader(){
    header.innerHTML = `
    <div class="header_item-img">
        <img src="${itemObj.img}" alt="">
    </div>
    <div class="header_item-content">
        <h1 class="header_title">${itemObj.title}</h1>
        <div class="header_content">
            <div class="head_genre">
                <ul>Жанр:</ul>
                <p class="head_genre-volue">${itemObj.genres}</p>
            </div>
            <div class="head_year">
                <ul>Год:</ul>
                <p class="head_year-volue">${itemObj.year}</p>
            </div>
            <div class="head_year">
                <ul>Страна:</ul>
                <p class="head_year-volue">${itemObj.count}</p>
            </div>
            <div class="head_description">
                <ul>Опсисания:</ul>
                <p class="head_description-volue">${itemObj.summary}</p>
            </div>
        </div>
    </div>
    `
}
creatHeader()

// Event
navSearchLink.addEventListener('click', () => {
    navbarInput.classList.toggle('input_active')
})
navLinks.forEach(link =>{
    link.addEventListener('click',pullDataCatigory)
})

// function
function pullDataCatigory(){
    localStorage.setItem('catigory', this.dataset.catigory)
}
