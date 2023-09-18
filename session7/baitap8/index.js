let a = prompt('Hãy nhập số cần kiểm tra');
let total = 0;
if (a <= 0) {
    console.log(a + ' không phải số hoàn hảo');
} else {
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            total += i;
        }
    }
}
(total === a) ? console.log(a + ' là số hoàn hảo') : console.log(a + ' không phải số hoàn hảo');