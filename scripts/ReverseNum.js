function reverseNumber(number) {
    let numString = number.toString();
    let reversedString = numString.split('').reverse().join('');
    let reversedNumber = parseInt(reversedString);
    return reversedNumber;
}

let inputNumber = 12345;
let reversed = reverseNumber(inputNumber);
console.log("Input:", inputNumber);
console.log("Reversed:", reversed);
