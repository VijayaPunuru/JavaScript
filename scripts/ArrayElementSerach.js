function linearSearch(arr, target) {
    if (!Array.isArray(arr)) {
        return "Invalid input";
    }
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

const numbers = [10, 20, 30, 40, 50, 60];
const target = 40;
const index = linearSearch(numbers, target);
if (index !== -1) {
    console.log("Element", target, "found at index", index);
} else {
    console.log("Element", target, "not found in the array");
}
