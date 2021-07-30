/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    if (n == 1) return true
    else if (n <= 9) return false
    else {
        let sum = 0;
        for (const digit of n.toString().split('')) {
            sum += Number(digit) ** 2
        }
        isHappy(sum)
    }
};

console.log(isHappy(19));