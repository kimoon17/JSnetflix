//1
const btn = document.querySelector('button')
const txt = document.getElementById('text')
btn.addEventListener('click', dissapear)

function dissapear() {
    txt.hidden = true
}