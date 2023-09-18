let a = prompt('Hãy nhập độ dài chuỗi Fibonaci')
let n1 = 0;
let n2 = 1;
console.log(n1);
console.log(n2);
for (let i = 1; i < a - 1; i++) {
    n = n1 + n2;
    n1 = n2;
    n2 = n;
    console.log(n);
}