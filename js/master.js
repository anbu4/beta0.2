import data from "../data/data.js";


// jsx fucntion
function creatSlaydCard(arr, boxs, re='') {
    const slaydBox = document.querySelector('.slayd_box');
    // slaydBox.classList.add(`.${boxs}`);
    let count = 0
    if(arr == 'films'){
        arr = data.films
    }
    if(arr == 'serials'){
        arr = data.serials
    }
    if(arr == 'anime'){
        arr = data.anime
    }
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
function creatItemList(arr){
    const itemContainer = document.querySelector('.item_container');
    if(arr == 'films'){
        arr = data.films
    }
    if(arr == 'serials'){
        arr = data.serials
    }
    if(arr == 'anime'){
        arr = data.anime
    }
    arr.map(item => {
        const creatElem = document.createElement('a');
        creatElem.classList.add('item');
        creatElem.href = 'move.html';
        creatElem.innerHTML = `
        <div class="item_img">
            <img src="${item.img}" alt="">
        </div>
        <div class="item_content">
            <div class="item_con-title">${item.title}</div>
            <div class="item_con-dp">
            <p class="item_con-genre">${item.genres}</p>
            <b class="item_con-year">${item.year}</b>
            </div> 
        </div>
        `;
        itemContainer.append(creatElem)
    })
}
creatSlaydCard(localStorage.getItem('catigory'))
creatItemList(localStorage.getItem('catigory'))

// DOM
const filmSlaydCards = document.querySelector('.slayd_box').querySelectorAll('.slayd_card');
const navSearchLink = document.querySelector('.nav_search-link');
const navbarInput = document.querySelector('.navbar_input');


navSearchLink.addEventListener('click', () => {
    navbarInput.classList.toggle('input_active')
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
setInterval(() => {
    eventSlayder(filmSlaydCards)
}, 3200);

// Event
const navLinks = document.querySelectorAll('.nav_links')
navLinks.forEach(link =>{
    link.addEventListener('click',pullDataCatigory)
})
function pullDataCatigory(){
    localStorage.setItem('catigory', this.dataset.catigory)
}
const Caption = document.querySelector('.caption');
Caption.innerHTML = localStorage.getItem('catigory');