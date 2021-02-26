const btn = document.querySelector("div > button")
btn.addEventListener('click', dissapear) 

function dissapear() {
    this.hidden = true;
}
