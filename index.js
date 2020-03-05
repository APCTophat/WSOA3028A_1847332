const button = document.querySelector('button');
const article = document.querySelector('article');

button.addEventListener('click', function(){
    const el = document.createElement('em');
    el.innerText = 'something';
    article.prepend(el);
})
