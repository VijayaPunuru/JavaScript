function reverseNumber(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    return reversed;
}
const inputNumber = 12345;
console.log(reverseNumber(inputNumber));
