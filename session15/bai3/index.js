let text = document.getElementsByClassName('text')[0];
let clickB = document.getElementsByClassName('click')[0];
clickB.addEventListener('click', () => {
    let arr = [];
    let result = text.value;
    arr.push(result);
    console.log(arr);
})