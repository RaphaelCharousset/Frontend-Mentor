const input = document.getElementById('email')
const btn = document.getElementById('submit')

function verification() {
    if (input.value.includes('@')) {

    } else {
        const wrongBtn = document.createElement('div')
        const form = document.getElementById('form')
        const wrongMsg = document.createElement('div')
        const msg = "Please provide a valid email"

        form.appendChild(wrongBtn)
        form.appendChild(wrongMsg)
        wrongMsg.innerText = msg

        wrongBtn.classList.add('wrong-button')
        wrongMsg.classList.add('wrong-msg')
        btn.classList.replace('btn-bc', 'btn-bc-wrong-side')

        setTimeout(function endverif() {
            wrongBtn.classList.add('fade-out')
            wrongMsg.classList.add('fade-out')
        },4000)

        setTimeout(function endverif2() {
            wrongBtn.remove()
            wrongMsg.remove()
        },5000)
    }
}

btn.addEventListener('click', verification)
