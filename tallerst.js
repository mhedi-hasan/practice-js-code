const height = [10, 50, 52, 55, 8, 15, 5, 84];

function getMax(numbers) {
    let max=numbers[0];
    for (const num of numbers) {
    if (num > max) {
        max = num;
    }
    }
    return max;
}

const max = getMax(height);
console.log("The height number is:",max);
