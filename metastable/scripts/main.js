newdiv = document.createElement('div');
document.querySelector('body').appendChild(newdiv);
console.log('HI IM WORKING');

const obj = { name: 'omar' };
const words1 = ['theorization', 'at best', 'resistance', 'ability', 'recognize', 'cultivate', 'exploration']

/*do {
    return words1
    while:HTMLDivElement=
}
*/

let view = document.getElementById('images-next');
let close = document.getElementById('images-static');

let open = function() {
    images-next.style.display , 'block';
    images-static.style.display , 'block';
}

let hide = function() {
    images-next.style.display , 'none';
    images-static.style.display , 'none';
}

view.addEventListener('click', open);
close.addEventListener('click', hide);