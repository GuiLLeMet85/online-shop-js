// Variables
const model = document.querySelector('#model');
const minium = document.querySelector('#min');
const maxim = document.querySelector('#max')
const capacity = document.querySelector('#capacity');
const color = document.querySelector('#color');
const result = document.querySelector('#products');

// Data to search

const dataSearch = {
    model: '',
    min: '',
    max: '',
    capacity: '',
    color: ''
}

// Functions

document.addEventListener('DOMContentLoaded', () => {
    showIphones();
})


function showIphones() {
    iphones.forEach( iphone => {
        const iphoneHTML = document.createElement('card');

        iphoneHTML.innerHTML = `
        <img src=${iphone.img} class="img-iphone">
        <div class="info-product">
            <h3>Mode: ${iphone.model}</h3>
            <p class="capacity">Capacity: ${iphone.capacity}</p>
            <p class="price">price: ${iphone.price} €</p>
            <p class="color">Color: ${iphone.color}</p>
        </div> 
        
        `;
        result.appendChild(iphoneHTML); 
    }) 
}

/* <img src=${iphone.img} class="img-iphone">
        <div class="info-product">
            <h3>Mode: ${iphone.model}</h3>
            <p class="capacity">Capacity: ${iphone.capacity}</p>
            <p class="price">price: ${iphone.price}</p>
            <p class="color">${iphone.color}</p>
        </div> */

// model.addEventListener('input', e=> {
//     dataSearch.model = e.target.value
//     filterIphone();
// })

// minium.addEventListener('input', e=> {
//     dataSearch.minium = e.target.value
//     filterIphone();
// })

// maxim.addEventListener('input', e=> {
//     dataSearch.maxim = e.target.value
//     filterIphone();
// })

// capacity.addEventListener('input', e=> {
//     dataSearch.capacity = e.target.value
//     filterIphone();
// })

// color.addEventListener('input', e=> {
//     dataSearch.color = e.target.value
//     filterIphone();
// })

// function cleanHTML() {
//     const container = document.querySelector('#products');

//     while(container.firstChild) {
//         container.removeChild(container.firstChild);
//     } 
// }
