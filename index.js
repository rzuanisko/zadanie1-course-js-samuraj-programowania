const btn = document.querySelector('button');
let counter = 1;

btn.addEventListener('click', function(){
const newLi = document.createElement('li');
newLi.textContent = counter;
document.querySelector('ul').appendChild(newLi);
if(counter % 3 == 0){
    newLi.classList.add('big');
}
counter +=2;

});