// var i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i <= 100);

// var i = 1;
// while (i <= 10) {
//     if (i % 3 == 0) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }
var total = 0;
var i = 0;
var n;
var odd;
var even;
function checkInput(){
    n = parseInt(document.getElementById("number").value);
    odd = document.getElementById("odd").value;
    even = document.getElementById("even").value;
    if (even.checked) {
        while (i <= n) {
            if (i % 2 == 0){
                total += i;
            }
            i++;
        }

    } else {
        while (i <= n) {
            if (i % 2 != 0){
                total += i;
            }
            i++;
        }
    }
    document.write(total);
}