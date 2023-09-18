let a = prompt("Mời nhập số nguyên thứ 1");
let b = prompt("Mời nhập số nguyên thứ 2");
let c = prompt("Mời nhập số nguyên thứ 3");
if (a > b && a > c) {
    console.log(`Số lớn nhất là ${a}`);
} else if (b > a && b > c) {
    console.log(`Số lớn nhất là ${b}`);
} else {
    console.log(`Số lớn nhất là ${c}`);
}