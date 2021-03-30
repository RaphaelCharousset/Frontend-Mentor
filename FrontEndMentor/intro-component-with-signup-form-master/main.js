const form = document.getElementById('form')
const allInputDiv = form.querySelectorAll('div:nth-child(1), div:nth-child(2), div:nth-child(3), div:nth-child(4)')
const btn = document.getElementById('form-btn')
const inputEmail = document.getElementById('input-email')

for (const inputDiv of allInputDiv) {
    inputDiv.style.position = "relative"
    inputEmail.setAttribute("pattern", "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}")
}

const erreurItems = (e) => {
    let wrongIcon = document.createElement('div')
    wrongIcon.classList.add('wrong-icon')

    let wrongMsgDiv = document.createElement('div')
    wrongMsgDiv.classList.add('wrong-msg')

    let input = e.firstElementChild

    let wrongMsgEmpty = input.placeholder + " cannot be empty"
    let regex = RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$")

    
    e.appendChild(wrongIcon)
    e.appendChild(wrongMsgDiv)
    e.style.marginBottom = '30px'
    input.style.border = "1px solid var(--Red)"

    if (!e.firstElementChild.classList.contains('input-email')) {
        wrongMsgDiv.innerHTML = wrongMsgEmpty
    } else if (e.firstElementChild.classList.contains('input-email') && input.value == "") {
        let wrongMsgEmail = "Looks like this is not email ಥ_ಥ"
        wrongMsgDiv.innerHTML = wrongMsgEmail
    } else if (e.firstElementChild.classList.contains('input-email') && !regex.test(input.value) && input.value != "") {
        let wrongMsgEmail = "Nice try ( ͡° ͜ʖ ͡°)"
        wrongMsgDiv.innerHTML = wrongMsgEmail
        inputEmail.style.color = "var(--Red)"
    }
    if (e == allInputDiv.item(0)) {
        wrongIcon.style.top = "calc((52.59px * 0.5) + 24px)"
    }
}

const verification = () => {
    for (const inputDiv of allInputDiv) { 
        let input = inputDiv.firstElementChild

        while (inputDiv.children.length > 1) {
            let enfantUnique = inputDiv.firstElementChild
            enfantUnique.nextElementSibling.remove()
            input.style.border = "1px solid rgba(0, 0, 0, 0.2)"
        }

        if (!input.classList.contains('input-email') && input.value == "") {
            erreurItems(inputDiv)
        }

        if (inputDiv.firstElementChild.classList.contains('input-email')) {
            let regex = RegExp("^([a-zA-Z0-9_-])+([.]?[a-zA-Z0-9_-]{1,})*@([a-zA-Z0-9-_]{2,}[.])+[a-zA-Z]{2,3}$")
            if (input.value == "") {
                erreurItems(inputDiv)
            }
            if (input.value != "" && !regex.test(input.value)) {
                erreurItems(inputDiv)
            }
            if (input.value != "" && regex.test(input.value)) {
                input.style.color = "var(--Dark-Blue)"
            }
        }
    }
} 

btn.addEventListener('click', verification)