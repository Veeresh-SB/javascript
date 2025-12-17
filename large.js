const numbers = [10, 45, 2, 99, 23];

let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Largest number:", max);
