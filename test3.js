/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
    { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
    { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
    // Your Code Here
    let hasil = []
    for (let i = 0; i < data.length; i++) {
        if ((data[i].session_name !== null || data[i].session_name !== undefined) && data[i].classes[0].class_name == null || data[i].classes[0].class_name == undefined) {
            data[i].classes[0] = data[i].classes[0].students

            hasil.push(data[i])
        } else if ((data[i].session_name == null || data[i].session_name == undefined) && data[i].classes[0].class_name !== null || data[i].classes[0].class_name !== undefined) {
            data[i] = data[i].classes

            hasil.push(data[i][0])
        }
    }
    return hasil
}

console.log(result(data));