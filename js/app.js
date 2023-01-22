// Variables
const model = document.querySelector('#model');
const minium = document.querySelector('#min');
const maximum = document.querySelector('#max')
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

document.addEventListener('DOMContentLoaded', () => {
    showIphones();
})


// Functions

model.addEventListener('input', e=> {
    dataSearch.model = e.target.value
    filterIphone();
})

minium.addEventListener('input', e=> {
    dataSearch.minium = e.target.value
    filterIphone();
})

maximum.addEventListener('input', e=> {
    dataSearch.maximum = e.target.value
    filterIphone();
})

capacity.addEventListener('input', e=> {
    dataSearch.capacity = e.target.value
    filterIphone();
})

color.addEventListener('input', e=> {
    dataSearch.color = e.target.value
    filterIphone();
})


function cleanHTML() {
    const container = document.querySelector('#products');

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    } 
}


function showIphones() {
    cleanHTML();

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
        return iphone.minium >= dataSearch.minium;
    }
    return iphone;
}

function filterMaximum(iphone) {
    if(dataSearch.maximum) {
        return iphone.maximum <= dataSearch.maximum;
    }
    return iphone;
}gi

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