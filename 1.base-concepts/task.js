"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d > 0) {
        arr[0] = (-b + Math.sqrt(d)) / (2 * a);
        arr[1] = (-b - Math.sqrt(d)) / (2 * a);
    } else if (d === 0) {
        arr[0] = -b / (2 * a);
    } else if (d < 0) {
        return arr;
    }
    return arr;
}
console.log(solveEquation(2, 14, 9));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    percent = percent / 1200;
    let body = amount - contribution;
    let payment =
        body * (percent + percent / ((1 + percent) ** countMonths - 1));
    let sum = payment * countMonths;
    return parseFloat(sum.toFixed(2));
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
