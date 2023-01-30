// Variables
const model = document.querySelector('#model');
const minium = document.querySelector('#minium');
const maximum = document.querySelector('#maximum')
const capacity = document.querySelector('#capacity');
const color = document.querySelector('#color');

// Data to search

const dataSearch = {
    model: '',
    minium: '',
    maximum: '',
    capacity: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', () => {
    showIphones(iphones);
})


// Functions

model.addEventListener('input', e => {
    dataSearch.model = e.target.value;
    filterIphone();
})

minium.addEventListener('input', e => {
    dataSearch.minium = e.target.value;
    filterIphone();
})

maximum.addEventListener('input', e => {
    dataSearch.maximum = e.target.value;
    filterIphone();
})

capacity.addEventListener('input', e => {
    dataSearch.capacity = e.target.value;
    filterIphone();
})

color.addEventListener('input', e => {
    dataSearch.color = e.target.value;
    filterIphone();
})


function cleanHTML() {
    const container = document.querySelector('#products');

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    } 
}


function showIphones(iphones) {
    cleanHTML();

    const container = document.querySelector('#products');
    
    iphones.forEach(iphone => {
        const iphoneHTML = document.createElement('card');
        iphoneHTML.innerHTML = `
        <div class="product my-1.5">
            
            <div class="info-product">
                <h3 class="header-iphone">${iphone.model}</h3>
                <img src=${iphone.img} class="img-iphone">
                
            </div>
            <div class="specif-product p-2">
                <p class="capacity">Capacity: ${iphone.capacity}</p>
                <p class="color">Color: ${iphone.color}</p>
                
            </div>
            <div>
                <p class="text-center font-medium p-4">${iphone.price} €</p>
            </div>
            <div clas="mt-3 mb-1">
                <a href="#" class="text-center p-4" data-id="1">Add to cart</a>
            </div>
            
        </div> 
        `;
        container.appendChild(iphoneHTML); 
    }) 
}

function noResult() {
    cleanHTML();
    const noResult = document.createElement('div');
    noResult.classList.add('alert', 'error');
    noResult.appendChild(document.createTextNode("There aren't results"));
    document.querySelector('#products').appendChild(noResult); 
}

function filterIphone() {
    const result = iphones.filter(filterModel).filter(filterMinium).filter(filterMaximum).filter(filterCapacity).filter(filterColor);

    if (result.length) {
        showIphones(result)
    } else {
        noResult();
    }
}

function filterModel(iphone) {
    if(dataSearch.model) {
        return iphone.model === dataSearch.model;
    }
    return iphone;
}

function filterMinium(iphone) {
    if(dataSearch.minium) {
        return iphone.price >= dataSearch.minium;
    }
    return iphone;
}

function filterMaximum(iphone) {
    if(dataSearch.maximum) {
        return iphone.price <= dataSearch.maximum;
    }
    return iphone;
}

function filterCapacity(iphone) {
    if(dataSearch.capacity) {
        return iphone.capacity === dataSearch.capacity;
    }
    return iphone;
}

function filterColor(iphone) {
    if(dataSearch.color) {
        return iphone.color === dataSearch.color;
    }
    return iphone;
}