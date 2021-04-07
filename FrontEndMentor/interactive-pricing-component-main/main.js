/* MODIFIER LE CURSOR CONTAINER */
const rangeInput = document.getElementById('range-input');
const cursor = document.getElementsByClassName('cursor').item(0)
const numberPageviews = document.getElementById('number-of-pageviews')
const dollarAmount = document.getElementById('dollar-amount')
const checkboxInput = document.getElementById('checkbox-input');

class value {
    constructor (cursorLeftPosition, pageviews, price) {
        this.cursorLeftPosition = cursorLeftPosition;
        this.pageviews = pageviews;
        this.price = price;
    };
};
const value1 = new value ("2%", "10K ", 8);
const value2 = new value ("27.5%", "50K ", 12);
const value3 = new value ("50%", "100K ", 16);
const value4 = new value ("72.5%", "500K ", 24);
const value5 = new value ("98%", "1M ", 36);

numberPageviews.innerText = value1.pageviews;
dollarAmount.innerText = value1.price;

const changeProposition = () => {
    switch (rangeInput.value) {
        case '1':
            cursor.style.left = value1.cursorLeftPosition;
            numberPageviews.innerText = value1.pageviews;
            dollarAmount.innerText = value1.price;
            rangeInput.style.background = "hsl(224, 65%, 95%)";
            break;

        case '2':
            cursor.style.left = value2.cursorLeftPosition;
            numberPageviews.innerText = value2.pageviews;
            dollarAmount.innerText = value2.price;
            rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 27.5%,hsl(224, 65%, 95%) 28%)";
            break;

        case '3':
            cursor.style.left = value3.cursorLeftPosition;
            numberPageviews.innerText = value3.pageviews;
            dollarAmount.innerText = value3.price;
            rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 50%,hsl(224, 65%, 95%) 51%)";
            break;

        case '4':
            cursor.style.left = value4.cursorLeftPosition;
            numberPageviews.innerText = value4.pageviews;
            dollarAmount.innerText = value4.price;
            rangeInput.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 72.5%,hsl(224, 65%, 95%) 73%)";
            break;
            
        case '5':
            cursor.style.left = value5.cursorLeftPosition;
            numberPageviews.innerText = value5.pageviews;
            dollarAmount.innerText = value5.price;
            rangeInput.style.background = "hsl(174, 77%, 80%)";
            break;
    };
    if (checkboxInput.checked) {
        dollarAmount.innerText = dollarAmount.innerText * 0.75;
    };
};

rangeInput.onchange = changeProposition;

/* FAIRE SUIVRE L'AFFICHAGE POUR PGVIEWS ET $ */ 
/* MODIF BUTTON-CHOICE ET ENCHAINER SUR UN CHANGEMENT DU PRIX */ 

let label = document.getElementsByClassName('switch').item(0);

const labelSwitcher = () => {
    let slider = document.getElementsByClassName('slider').item(0);

    label.classList.toggle('switch-active');
    slider.classList.toggle('slider-active');

    if (checkboxInput.checked) {
        dollarAmount.innerText = dollarAmount.innerText * 0.75
    };
    if (!checkboxInput.checked) {
        dollarAmount.innerText = dollarAmount.innerText * 100 / 75
    };
};

label.onchange = labelSwitcher;