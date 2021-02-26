let elem = document.querySelector('ol')
console.log(elem)

function clear(elem) {
    while (elem.firstChild)
    elem.firstChild.remove()
}

clear(elem)