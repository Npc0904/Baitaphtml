let click = document.getElementsByClassName('click')
let arr = ['https://fastly.picsum.photos/id/1019/200/300.jpg?hmac=HLUPqgTMOzQ6-GDkgZZ3NXQqJyl5m6iX_MXvS3Xqt3Q',
    'https://fastly.picsum.photos/id/1024/200/300.jpg?hmac=Zf-5s5sbTMmFYhm-_rzZXktzs5i_ES8dVOzXPCS6zxU',
    'https://fastly.picsum.photos/id/571/200/300.jpg?hmac=M2JAmSQct67FkQUX0_IWCUClgxf45dexs4oYKhpFDLA']
let count = 0;
changeImg = () => {
    count++;
    if (count == 3) {
        count = 0;
    }
    document.getElementById('anh').src = arr[count]
}
click[0].addEventListener('click', changeImg)
