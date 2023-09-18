let a = prompt('Hãy nhập số cần kiểm tra')
let kiemTra = true;
if (a < 2) {
    kiemTra = false;
} else {
    for (let i = 2; i < a - 1; i++) {
        if (a % i == 0) {
            kiemTra = false;
            break;
        }
    }
}
(kiemTra == true) ? console.log(a + ' là số nguyên tố') : console.log(a + ' không phải số nguyên tố');
