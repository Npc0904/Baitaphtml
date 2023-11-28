render = () => {
    text = '';
    for (let i = 1; i < 11; i++) {
        text += `<li class = 'clickLi' onclick = 'clickPoint(${i})'>${i}</li>`
    }
    document.getElementsByClassName('container__point__list')[0].innerHTML = `${text}`
}
render();
let number;
clickPoint = (detail) => {
    number = detail;
    for (let i = 0; i < 10; i++) {
        clickLi = document.getElementsByClassName('clickLi')
        if (detail - 1 == i) {
            /* document.getElementsByClassName('container__feedback__main__point')[0].innerHTML = `<p style = 'background-color : red'>${i + 1}</p>` */
            clickLi[i].style = 'background-color : red'
        } else {
            clickLi[i].style = 'background-color : beige'
        }
        /* hoặc có thể tạo thêm css của 1 class 'pick'
        sau đó thêm class cho thằng clickLi
        if(i = detail){
            clickLi[i].classList.add('pick')
        }else{
            clickLi[i].classList.remove('pick)
        }
         */
    }
}
/* let clickButton = document.getElementsByClassName('container__review__button')[0];
clickButton.addEventListener('click', () => {
    let review = document.getElementById('text').value
    document.getElementsByClassName('container__feedback__main__review')[0].innerHTML = `<p>${review}</p>`
})
let clickEdit = document.getElementsByClassName('edit')[0];
clickEdit.addEventListener('click', () => {
    document.getElementsByClassName('container__feedback__main__review')[0].innerHTML = '';
    document.getElementsByClassName('container__feedback__main__point')[0].innerHTML = '';

})
let clickClose = document.getElementsByClassName('close')[0];
clickClose.addEventListener('click', () => {
    document.getElementsByClassName('container__feedback__main__review')[0].innerHTML = '';
    document.getElementsByClassName('container__feedback__main__point')[0].innerHTML = '';
    document.getElementById('text').value = '';
    for (let i = 0; i < 10; i++) {
        document.getElementsByClassName('clickLi')[i].style.backgroundColor = 'beige'
    }
})
 */
let comments = [];
let clickButton = document.getElementsByClassName('container__review__button')[0];
clickButton.addEventListener('click', () => {
    console.log();
    let text = document.getElementById('text').value;
    let info = {
        content : text,
        score : number,
        id : Math.floor(Math.random()*54321)
    }
    comments.push(info);
    console.log(comments);
})
renderComment = () => {
    let result = '';
    for(let i = 0 ; i < comments.length;i++){
        result += `<ul>
        <li>${comments[i].score}</li>
        <p>${comments[i].content}</p>
        <button>edit</button>
        <button>delete</button>
        </ul>`
    }
    document.getElementsByClassName('container__feedback')[0].innerHTML = result
}
    