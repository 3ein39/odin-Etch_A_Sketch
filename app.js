let cont = document.querySelector('.container');

for (let i = 0; i < 16*16; ++i) {
    let child = cont.appendChild(document.createElement('div'));
    child.classList.add('square');
}

let grid = cont.querySelectorAll('div');

grid.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        if (!square.classList.contains('blur'))
            square.classList.add('blur');
    })
})