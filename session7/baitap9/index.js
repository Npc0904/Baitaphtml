let a = prompt('Hãy nhập số cần tính giai thừa');
giaiThua = 1;
if (a < 0) {
    alert('Số nhập phải là số nguyên dương')
} else {
    for (let i = 1; i <= a; i++) {
        giaiThua *= i;
    }
}
console.log(`Giai thừa của ${a} là : ${giaiThua}`);