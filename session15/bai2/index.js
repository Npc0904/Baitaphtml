let changeX = document.getElementById('emo');
let changeB = document.getElementsByClassName('changeB')[0];
let container = document.getElementsByClassName('container')[0];
changeB.addEventListener('click',()=>{
    container.style.display = 'block'
})
changeX.addEventListener('click',()=>{
    container.style.display = 'none'

})