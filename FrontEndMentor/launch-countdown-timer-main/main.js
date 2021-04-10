let daysTimer = document.querySelector('.days-timer');
let hoursTimer = document.querySelector('.hours-timer');
let minutesTimer = document.querySelector('.minutes-timer');
let secondsTimer = document.querySelector('.seconds-timer');


daysTimer.innerText = 14;
hoursTimer.innerText = "00";
minutesTimer.innerText = "00";
secondsTimer.innerText =  "01"; 

const alwaysTwoNumbers = () => {
    let allTimers = document.querySelectorAll('.timer');
    
    for (const timer of allTimers) {
        if (timer.innerText.length == 1) {
            timer.innerText = "0" + timer.innerText;
        };
    };
};

const rotation = (e) => {
    setTimeout(() => {
        e.classList.add('animation');
    }, 800);

    setTimeout(() => {
        e.classList.remove('animation');
    }, 1100);
};

const verifIfRotation = (a, b, c, d) => {
    if (a.innerText == 0) {
        rotation(b.parentElement);
    };
    if (a.innerText == 0 && b.innerText == 0) {
        rotation(c.parentElement);
    };
    if (a.innerText == 0 && b.innerText == 0 && c.innerText == 0) {
        rotation(d.parentElement);
    };
};

const actualiseCountDown = (a, b, c, d) => {
    if (a.innerText < 0) {
        a.innerText = 59;
        b.innerText = b.innerText - 1;
    };
        
    if (b.innerText < 0) {
        b.innerText = 59;
        c.innerText = c.innerText - 1;
    };

    if (c.innerText < 0) {
        c.innerText = 23;
        d.innerText = d.innerText - 1;
    };

    if (a.innerText == 0 && b.innerText == 0 && c.innerText == 0 && d.innerText == 0 ) {
        clearInterval(counting);

        setTimeout(() => {
            window.alert("Waiting for this for so long !");
        }, 1000);
    };

    verifIfRotation(a, b, c, d);
    alwaysTwoNumbers();
};

const countDown = () => {
    rotation(secondsTimer.parentElement);
    secondsTimer.innerText = secondsTimer.innerText - 1;
    actualiseCountDown(secondsTimer, minutesTimer, hoursTimer, daysTimer);
};

let counting = setInterval(countDown, 1000);
rotation(secondsTimer.parentElement);