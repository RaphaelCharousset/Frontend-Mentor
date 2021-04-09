let switchZone = document.querySelector('.switch-container');

let changePrice = () => {
    let monthlyPrices = document.querySelectorAll('.monthly')
    let yearlyPrices = document.querySelectorAll('.yearly')

    for (const monthlyPrice of monthlyPrices) {
        monthlyPrice.classList.toggle('inactive')
    }
    for (const yearlyPrice of yearlyPrices) {
        yearlyPrice.classList.toggle('inactive')
    }
}

let buttonMoving = () => {
    changePrice()
    let switchButton = document.querySelector('.switch-button');

    if (switchButton.classList.contains('annualy-proposal')) {
        switchButton.classList.replace('annualy-proposal', 'monthly-proposal')
    } else if (switchButton.classList.contains('monthly-proposal')) {
        switchButton.classList.replace('monthly-proposal', 'annualy-proposal')
    }
}

switchZone.addEventListener('click', buttonMoving);

// l'event listener ne marche pas