var calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
};
console.log(calcTip(100)); // Output: 15
var bills = [125, 555, 44];
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1]),];
// Output: 41.25
console.log(bills);
console.log(tips);
var total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[bills.length - 1] + tips[tips.length - 1])];
// Output: 146.25
console.log(total);
