const lowest = [10, 50, 52, 55, 8, 15, 5, 84];

function getMin(numbers) {
    let min=numbers[0];
    for (const num of numbers) {
    if (num < min) {
        min = num;
    }
    }
    return min;
}

const min = getMin(lowest);
console.log("The height number is:",min);
