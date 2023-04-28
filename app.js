let cont = document.querySelector('.container');

for (let i = 0; i < 16*16; ++i) {
    let child = cont.appendChild(document.createElement('div'));
    child.classList.add('square');
}