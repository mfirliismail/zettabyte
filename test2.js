/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
    // Your Code Here
    let hasil = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i] == data[j] && i != j) {
                data.splice(i, 1)
            }

        }
    }
    for (let i = 0; i < data.length - 1; i++) {

        for (let j = 0; j < data.length - 1; j++) {

            if (data[j] > data[j + 1]) {

                let tuker = data[j]
                data[j] = data[j + 1]
                data[j + 1] = tuker
            }
        }
    }
    return data
}

console.log(result(data));