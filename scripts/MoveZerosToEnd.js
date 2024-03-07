function moveZerosToEnd(arr) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }

    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}

const numbers = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(numbers);
console.log("Result:", result);
