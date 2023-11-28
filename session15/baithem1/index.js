let images = ["../anh/anh1.jpg", "../anh/anh2.jpg", "../anh/anh3.jpg", "../anh/anh4.jpg",
    "../anh/anh5.jpg", "../anh/anh6.jpg", "../anh/anh7.jpg"];
let count = 0;
renderImg = (params) => {
    let text = "";
    for (let i = 0; i < 4; i++) {
        if (i == 0) {
            text += `<li><img class='img' onclick='clickImg(${i})' src="${params[i]}" alt=""></li>`;
            document.getElementsByClassName('container__main__show')[0].src = images[i];
        } else {
            text += `<li><img class='img' onclick='clickImg(${i})' style='opacity:0.1' src="${params[i]}" alt=""></li>`;
        }
    }
    document.getElementsByClassName('container__menu__list')[0].innerHTML =
        `
    <li onclick ='preImg()' class="btn">&#10094;</li>
    ${text}
    <li onclick ='nextImg()' class="btn btn__next"><span>&#10095;</span></li>
    `
    if (count != -1) {
        for (let j = 0; j < 4; j++) {
            if (j == count) {
                document.getElementsByClassName('img')[j].style.opacity = 1;
            } else {
                document.getElementsByClassName('img')[j].style.opacity = 0.1;
            }
        }
        document.getElementsByClassName('container__main__show')[0].src = images[count];
    }
}
renderImg(images)
nextImg = () => {
    result = images.shift()
    images.push(result)
    renderImg(images)
}
preImg = () => {
    result = images.pop()
    images.unshift(result)
    renderImg(images)
}
clickImg = (detailImg) => {
    count = detailImg;
    result = document.getElementsByClassName('img')
    for (let i = 0; i < 4; i++) {
        if (i == detailImg) {
            result[i].style.opacity = 1;
        } else {
            result[i].style.opacity = 0.1;
        }
        document.getElementsByClassName('container__main__show')[0].src = images[detailImg]
    }
}