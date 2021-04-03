let burgerBtn = document.querySelector('.hamburger-button')

const elementVisible = e => {
    e.classList.toggle('visible')
} 

burgerBtn.addEventListener('click', () => {
    let navBar = document.querySelector('.nav-bar')
    elementVisible(navBar)
})

let headerUlCTAs = document.querySelectorAll(".nav-ul ul p")

for (const headerUlCTA of headerUlCTAs) {
    let hiddenLis = document.querySelectorAll(".hidden-li")
    headerUlCTA.addEventListener('click', () => {
        for (const hiddenLi of hiddenLis) {
            hiddenLi.classList.remove('visible')
        }
        
        for (const headerUlCTA of headerUlCTAs) {
            headerUlCTA.firstElementChild.classList.remove('arrow-reverse')
        }

        let divLi = headerUlCTA.nextElementSibling
        elementVisible(divLi)
        headerUlCTA.firstElementChild.classList.add('arrow-reverse')
    })
}