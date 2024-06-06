import data from "../data/data.js";
const itemObj = {}








// jsx fucntion
function creatSlaydCard(catigory,boxs,re='') {
    const slaydBox = document.querySelector('.slayd_box');
    const caption = document.querySelector('.caption');
    caption.innerHTML = localStorage.getItem('catigory');
    // slaydBox.classList.add(`.${boxs}`);
    let count = 0
    data[catigory].map(item => {
        count ++
        if(count > 7){
            return
        }
        const creatItem = document.createElement('a');
        creatItem.dataset.id = item.id
        creatItem.dataset.catigory = item.catigory
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
        creatItem.addEventListener('click', parseCard)
        slaydBox.append(creatItem)
    })
}
function itemParsePages(catigory){
    let count = 1
    itemObj['itemPage'+count] = [];

    data[catigory].forEach(item=>{
        if(itemObj['itemPage'+count].length >= 4){
            count++
            itemObj['itemPage'+count] = []
        }
        itemObj['itemPage'+count].push(item)
    })
}
function creatItemList(i = 1){
    const itemContainer = document.querySelector('.item_container');
    itemContainer.innerHTML = ''
    itemObj['itemPage' + i].map(item => {
        const creatElem = document.createElement('a');
        creatElem.dataset.id = item.id;
        creatElem.dataset.catigory = item.catigory
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
        creatElem.addEventListener('click', parseCard)
        itemContainer.append(creatElem)
    })
}
function creatPageNumber(length){
    const pageControlsNum = document.querySelector('.page_controls-num');
    for(let num = 1;num<=length;num++){
        const itemNum = document.createElement('div');
        itemNum.dataset.pageid = num;
        itemNum.innerHTML = num;
        itemNum.addEventListener('click',itemNumPageEvent);
        pageControlsNum.append(itemNum)
    }
}
creatSlaydCard(localStorage.getItem('catigory'));
itemParsePages(localStorage.getItem('catigory'));
creatItemList()
const itemObjLength = Object.keys(itemObj).length;
creatPageNumber(itemObjLength)





// DOM
const slaydCards = document.querySelectorAll('.slayd_card')
const navSearchLink = document.querySelector('.nav_search-link');
const navbarInput = document.querySelector('.navbar_input');
const navLinks = document.querySelectorAll('.nav_links');
const burger = document.querySelector('.burger');
const navbarMobileContent = document.querySelector('.navbar_mobile-content');
const pageBtnPlus = document.querySelector('.page_btn-plus');
const pageBtnMinus = document.querySelector('.page_btn-minus');
// 
let countPageii = 1


// Event
navSearchLink.addEventListener('click', () => {
    navbarInput.classList.toggle('input_active')
})
navLinks.forEach(link =>{
    link.addEventListener('click',pullDataCatigory)
})
burger.addEventListener('click',() =>{
    navbarMobileContent.classList.toggle('nav_mobile-active')
})
pageBtnPlus.addEventListener('click',() => {
    if(countPageii >= itemObjLength){
        countPageii = 1
        return creatItemList(countPageii)
    }
    countPageii++
    creatItemList(countPageii)
})
pageBtnMinus.addEventListener('click',() => {
    if(countPageii <= 1){
        countPageii = itemObjLength
        return creatItemList(countPageii)
    }
    countPageii--
    creatItemList(countPageii)
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
function parseCard(){
    let catigory = this.dataset.catigory
    let id = this.dataset.id
    let value = data[catigory].find((el)=>el.id == id)
    localStorage.setItem('moveItem',JSON.stringify(value))
}
function itemNumPageEvent(){
   creatItemList(+this.dataset.pageid)
}


// Interval
setInterval(() => {
    eventSlayder(slaydCards)
}, 3200);