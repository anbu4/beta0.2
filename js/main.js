import data from "../data/data.js";
// const data = JSON.parse(dataJson)

// jsx fucntion
function creatSlaydCard(arr, boxs, re='') {
    const slaydBox = document.querySelector(`.${boxs}`);
    let count = 0
    arr.map(item => {
        count ++
        if(count <= 7){
          const creatItem = document.createElement('a');
          creatItem.classList.add('slayd_card');
          creatItem.id = 'item' + re + count;
          creatItem.href = 'move.html';
          creatItem.innerHTML = ` 
          <div class="slayd_item">
              <img src="${item.img}" alt="">
              <div class="slayd_card-content">
                    <h5 class="slayd_card-title">${item.title}</h5>
                    <div>
                        <p class="slayd_card-genres">${item.genres}</p>
                        <p class="slayd_card-year">${item.year}</p>
                    </div>
              </div>
          </div>`
          slaydBox.append(creatItem)
        }
    })
}
creatSlaydCard(data.films ,'film_card-slayd')
creatSlaydCard(data.serials , 'serial_card-slayd','Re')
creatSlaydCard(data.anime, 'anime_card-slayd')



// DOM
const filmSlaydCards = document.querySelector('.film_card-slayd').querySelectorAll('.slayd_card');
const serialSlaydCards = document.querySelector('.serial_card-slayd').querySelectorAll('.slayd_card');
const animeSlaydCards = document.querySelector('.anime_card-slayd').querySelectorAll('.slayd_card');
const cartonSlaydCards = document.querySelector('.carton_card-slayd').querySelectorAll('.slayd_card');
const recapSlaydCards = document.querySelector('.recap_card-slayd').querySelectorAll('.slayd_card');
const navSearchLink = document.querySelector('.nav_search-link');
const navbarInput = document.querySelector('.navbar_input');

const navLinks = document.querySelectorAll('.nav_links')

// Event
navSearchLink.addEventListener('click', () => {
    navbarInput.classList.toggle('input_active')
})
navLinks.forEach(link =>{
    link.addEventListener('click',pullDataCatigory)
})


// function
function eventSlayder(slaydBoxCards) {
    slaydBoxCards.forEach(function (card) {
        let i = card.id.replace(/[A-z]/g, '')
        let ii = --i
        if (ii < 1) {
            ii = 7
        }
        card.id = card.id.replace(/.$/, ii);
    })
}
function pullDataCatigory(){
    localStorage.setItem('catigory', this.dataset.catigory)
}

// setInterval
setInterval(() => {
    eventSlayder(filmSlaydCards)
}, 3200);

setInterval(() => {
    eventSlayder(serialSlaydCards)
}, 4700);

setInterval(() => {
    eventSlayder(animeSlaydCards)
}, 5500);

setInterval(() => {
    eventSlayder(cartonSlaydCards)
}, 6200);

setInterval(() => {
    eventSlayder(recapSlaydCards)
}, 7500);