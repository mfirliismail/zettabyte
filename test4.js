/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
    // Your Code Here
    for (let i = 0; i < numbers.length - 1; i++) {

        for (let j = 0; j < numbers.length - 1; j++) {

            if (numbers[j] > numbers[j + 1]) {

                let tuker = numbers[j]
                numbers[j] = numbers[j + 1]
                numbers[j + 1] = tuker
            }
        }
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != i) {
            return i
        }
    }
}

console.log(result(numbers));