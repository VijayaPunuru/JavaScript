function findMinMax(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "Invalid input";
    }

    let min = numbers[0];
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return { min, max };
}

const numbers = [5, 10, 2, 8, 15];
const result = findMinMax(numbers);
console.log("Minimum:", result.min);
console.log("Maximum:", result.max);
