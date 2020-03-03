let c = 1.01 + 2.02;
//c = 3.03
console.log(c);

function wat(thingy){
    console.log('wat'+ thingy);

}

wat(2);

const button = document.body.children[1];
console.log(button);

button.addEventListener('click', function(e){
    const el = document.createElement('em');
    el.innerText('Something');
    document.body.appendChild(el);
})