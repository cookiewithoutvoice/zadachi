1.

inp.addEventListener("keydown", function (event) {
    event.preventDefault();
});

2.
window.onload=function() {
    let addBlockBtn = document.getElementById('add_block');
    let blockcontainer = document.getElementById('block_container');
    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function delElem () {
        this.parentNode.remove();
    }

    function addChild(parent){
        let divChild = document.createElement("div");
        divChild.className="child col-5";
        let childElem = document.createElement("a");
        childElem.className="color-block";
        childElem.href="#";
        childElem.style.backgroundColor=getRandomColor();
        childElem.addEventListener('click', delElem);
        divChild.appendChild(childElem);
        parent.appendChild(divChild);
    }

    addBlockBtn.addEventListener('click', function() {
        addChild(blockcontainer);
    });
}

3.
const rgb = () => `rgb(${[...Array(3)].map(_ => Math.floor(Math.random() * 256))})`;
const elem = (aim, tag) => aim.appendChild(document.createElement(tag));
const body = ['table', 'tbody'].reduce((a, b) => elem(a, b), document.body);
const text = document.getElementById('text');
((row, cell) => {
    for(let i = 0; i < row; i++) {
        let tr = elem(body, 'tr');
        for(let j = 0; j < cell; j++) {
            let td = elem(tr, 'td');
            let clr = rgb();
            td.dataset.color = clr;
            Object.assign(td.style, {
                padding: '20px',
                cursor: 'pointer',
                backgroundColor: clr
            });
        }
    }
})(2, 8);

body.addEventListener('click', e => {
    if(e.target.tagName !== 'TD') return;
    text.style.color = e.target.dataset.color;
});

4.
const dependence = [
        [':gx:', 'https://i.smiles2k.net/aiwan_smiles/yahoo.gif'],
        [':gy:', 'https://i.smiles2k.net/aiwan_smiles/tongue.gif'],
        [':gz:', 'https://i.smiles2k.net/aiwan_smiles/yu.gif'],
],

idElems = ['form', 'textarea', 'comments', 'smiles'],
[form, textarea, comments, smiles] = idElems.map(id => document.getElementById(id)),
createIMG = () => {
    for(let [code, path] of dependence) {
        smiles.insertAdjacentHTML('beforeEnd', `<img src="${path}" alt="${code}" />`);
    }
},

replacer = txt => {
    for(let [code, path] of dependence) {
        txt = txt.replaceAll(code, `<img src="${path}" />`);
    }
    return txt;
},

addSmile = e => {
    if(e.target.tagName !== 'IMG') return;
    let val = textarea.value,
    start = textarea.selectionStart,
    end = textarea.selectionEnd,
    ins = val.substring(0, start) + e.target.alt;
    textarea.value = ins + val.substring(end, val.length);
    textarea.setSelectionRange(ins.length, ins.length);
    textarea.focus();
},

send = e => {
    e.preventDefault();
    comments.insertAdjacentHTML('beforeEnd', `<p>${replacer(textarea.value)}</p>`);
    textarea.value = '';
};

createIMG();
smiles.addEventListener('click', addSmile);
form.addEventListener('submit', send);

5.
window.onload=function() {
    let countries = [
        "Россия",
        "Украина",
        "Соединенные Штаты Америки",
        "Абхазия",
    ];

    function getCountries(query, countries) {
        let result = [];
        query = query.trim();
        if(query.length == 0) return [];
        for (let country of countries) {
            if( country.indexOf(query) != -1) {
            result.push(country);
            console.log(result);
            }
        }
        return result;
    }

    function setValueFromHint (hintsContainer, inputCountry, countryValue){
        inputCountry.value = countryValue;
    }

    function createHint(hintsContainer, hintsArray, inputCountry){
        hintsContainer.replaceChildren();
        if (hintsArray.length != 0) {
            for (let country of hintsArray) {
                let li_elem = document.createElement('li');
                let p_elem  = document.createElement('p');
                p_elem.textContent = country;
                p_elem.addEventListener('click', function(e){
                inputCountry.value=p_elem.textContent;
                hintsContainer.replaceChildren();
                })
                li_elem.appendChild(p_elem);
                hintsContainer.appendChild(li_elem);
            }
        }
    }

    let inputCountry = document.querySelector('input[name="country"]');
    let country_list = document.getElementById('country_list');
    inputCountry.addEventListener("input", function(){
        let queryString = inputCountry.value;
        let hintCountries = getCountries(queryString, countries);
        if(hintCountries.length != 0) {
            createHint(country_list, hintCountries, inputCountry);
        }
    });
}