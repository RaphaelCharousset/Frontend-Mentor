let rulesBtn = document.getElementById('rules');

rulesBtn.addEventListener('click', () => {
    let rulesContainer = document.querySelector('.rules-big-container');
    rulesContainer.classList.remove('invisible');
    let closeRulesBtn = document.getElementById('close-rules');
    closeRulesBtn.addEventListener('click', () => {
        let rulesContainer = document.querySelector('.rules-big-container');
        rulesContainer.classList.add('invisible');
    });
});

let rockImage = document.querySelector('.rock-image-container');
let paperImage = document.querySelector('.paper-image-container');
let scisorsImage = document.querySelector('.scisors-image-container');
let choosingTime = document.querySelector('.choosing-item');
let gameResult = document.querySelector('.game-container');

let playerValue;
let houseValue;
let score = 0;

const changingToGameResult = () => {
    choosingTime.classList.add('invisible');
    gameResult.classList.remove('invisible');
};

const playerPlayed = () => {
    let playerItem = document.querySelector('.player-item');
    if (playerItem.childElementCount == 0) {
        let itemContainer = document.createElement('div');
        let itemImage = document.createElement('div');
        playerItem.appendChild(itemContainer);
        itemContainer.appendChild(itemImage);
    };
    let firstChild = playerItem.firstElementChild;
    let secondChild = firstChild.firstElementChild;

    if (playerValue == "rock") {
        firstChild.classList.add('rock-image-container');
        secondChild.classList.add('rock-image');
    };
    if (playerValue == "paper") {
        firstChild.classList.add('paper-image-container');
        secondChild.classList.add('paper-image');
    };
    if (playerValue == "scisors") {
        firstChild.classList.add('scisors-image-container');
        secondChild.classList.add('scisors-image');
    };
};

const housePlayed = () => {
    let houseItem = document.querySelector('.house-item');
    if (houseItem.childElementCount != 0) {
        let firstChild = houseItem.firstElementChild;
        let secondChild = firstChild.firstElementChild;
    };

    let random = Math.floor(Math.random() * 100);
    while (random == 0) {
        random = Math.floor(Math.random() * 100);
    };

    if (houseItem.childElementCount == 0) {
        let itemContainer = document.createElement('div');
        let itemImage = document.createElement('div');
        houseItem.appendChild(itemContainer);
        itemContainer.appendChild(itemImage);
    };
    let firstChild = houseItem.firstElementChild;
    let secondChild = firstChild.firstElementChild;

    if (random >= 1 && random <= 33) {
        firstChild.classList.add('rock-image-container', 'fade-in');
        secondChild.classList.add('rock-image', 'fade-in');
        return houseValue = "rock";
    } else if (random > 33 && random <= 66) {
        firstChild.classList.add('paper-image-container', 'fade-in');
        secondChild.classList.add('paper-image', 'fade-in');
        return houseValue = "paper";
    } else if (random > 66) {
        firstChild.classList.add('scisors-image-container', 'fade-in');
        secondChild.classList.add('scisors-image', 'fade-in');
        return houseValue = "scisors";
    };
};

const gameConsequences = () => {
    let gameResultAnnouncement = document.querySelector('.game-result-announcement');
    let scoreCounting = document.getElementById('score-counting');
    let houseChild = document.querySelector('.house-item').firstElementChild;
    let playerChild = document.querySelector('.player-item').firstElementChild;

    if (playerValue == "rock") { //rock choice
        if (houseValue ==  "rock") {
            gameResultAnnouncement.innerText = "Draw";
            gameResultAnnouncement.classList.add('fade-in');
        };
        if (houseValue ==  "paper") {
            gameResultAnnouncement.innerHTML = "You lose";
            gameResultAnnouncement.classList.add('fade-in');
            houseChild.classList.add('box-shadow');
            score--;
            scoreCounting.innerText = score;
        };
        if (houseValue ==  "scisors") {
            gameResultAnnouncement.innerHTML = "you win";
            gameResultAnnouncement.classList.add('fade-in');
            playerChild.classList.add('box-shadow');
            score++;
            scoreCounting.innerText = score;
        };
    };
    if (playerValue == "paper") { // paper choice
        if (houseValue ==  "paper") {
            gameResultAnnouncement.innerText = "Draw";
            gameResultAnnouncement.classList.add('fade-in');
        };
        if (houseValue ==  "scisors") {
            gameResultAnnouncement.innerHTML = "You lose";
            gameResultAnnouncement.classList.add('fade-in');
            houseChild.classList.add('box-shadow');
            score--;
            scoreCounting.innerText = score;
        };
        if (houseValue ==  "rock") {
            gameResultAnnouncement.innerHTML = "you win";
            gameResultAnnouncement.classList.add('fade-in');
            playerChild.classList.add('box-shadow');
            score++;
            scoreCounting.innerText = score;
        };
    };
    if (playerValue == "scisors") { // scisors choice
        if (houseValue ==  "scisors") {
            gameResultAnnouncement.innerText = "Draw";
            gameResultAnnouncement.classList.add('fade-in');
        };
        if (houseValue ==  "rock") {
            gameResultAnnouncement.innerHTML = "You lose";
            gameResultAnnouncement.classList.add('fade-in');
            houseChild.classList.add('box-shadow');
            score--;
            scoreCounting.innerText = score;
        };
        if (houseValue ==  "paper") {
            gameResultAnnouncement.innerHTML = "you win";
            gameResultAnnouncement.classList.add('fade-in');
            playerChild.classList.add('box-shadow');
            score++;
            scoreCounting.innerText = score;
        };
    };
};

rockImage.addEventListener('click', () => {
    playerValue = "rock";
    
    changingToGameResult();
    playerPlayed();

    setTimeout(() => {
        housePlayed();
        gameConsequences();
    }, 1000);
});
paperImage.addEventListener('click', () => {
    playerValue = "paper";
    
    changingToGameResult();
    playerPlayed();

    setTimeout(() => {
        housePlayed();
        gameConsequences();
    }, 1000);
});
scisorsImage.addEventListener('click', () => {
    playerValue = "scisors";
    
    changingToGameResult();
    playerPlayed();

    setTimeout(() => {
        housePlayed();
        gameConsequences();
    }, 1000);
});

let playAgain = document.getElementById('play-again');

playAgain.addEventListener('click', () => {
    choosingTime.classList.remove('invisible');
    gameResult.classList.add('invisible');
    
    let playerItem = document.querySelector('.player-item');
    playerItem.firstElementChild.classList.remove('paper-image-container', 'rock-image-container', 'scisors-image-container', 'fade-in');
    playerItem.firstElementChild.firstElementChild.classList.remove('paper-image', 'rock-image', 'scisors-image', 'fade-in');    
    let houseItem = document.querySelector('.house-item');
    houseItem.firstElementChild.classList.remove('paper-image-container', 'rock-image-container', 'scisors-image-container', 'fade-in');
    houseItem.firstElementChild.firstElementChild.classList.remove('paper-image', 'rock-image', 'scisors-image', 'fade-in');

    let gameResultAnnouncement = document.querySelector('.game-result-announcement');
    gameResultAnnouncement.innerHTML = "";
    gameResultAnnouncement.classList.remove('fade-in');
    
    let houseChild = document.querySelector('.house-item').firstElementChild;
    let playerChild = document.querySelector('.player-item').firstElementChild;
    houseChild.classList.remove('box-shadow');
    playerChild.classList.remove('box-shadow');
});