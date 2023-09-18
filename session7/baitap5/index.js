let a = prompt('Hãy nhập điểm bài kiểm tra');
let b = prompt('Hãy nhập điểm thi giữa kỳ');
let c = prompt('Hãy nhập điểm thi cuối kỳ');
let d = (a + b + c) / 3;
if (d > 8) {
    console.log('Học lực tốt');
} else if (d > 5) {
    console.log('Học lực khá');
} else {
    console.log('Học lực kém');
}