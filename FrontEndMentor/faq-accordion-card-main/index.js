let answers = document.querySelectorAll('.answer')
let questions = document.querySelectorAll('.question')
function showAnswer() {
    let answerClass = this.nextElementSibling.classList
    let h2TitleClass = this.firstElementChild.classList
    let arrowClass = this.lastElementChild.classList
    if (answerClass.contains('invisible')) {
        answerClass.replace('invisible', 'visible')
        h2TitleClass.add('h2-bold')
        arrowClass.add('rotate')
    }
    else if (answerClass.contains('visible')) {
        answerClass.replace('visible', 'invisible')
        h2TitleClass.remove('h2-bold')
        arrowClass.remove('rotate')
    }
}

for (const question of questions) { 
    question.onclick = showAnswer
}
