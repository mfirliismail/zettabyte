/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
    // Your Code Here
    let n = words.length;
    let hasil = commonPrefix(words, n);
    return hasil

}

console.log(result(words));

function commonPrefixUtil(kata1, kata2) {
    let result = "";
    let n1 = kata1.length,
        n2 = kata2.length;
    // Compare kata1 and kata2
    for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
        if (kata1[i] != kata2[j]) {
            break;
        }
        result += kata1[i];
    }
    console.log("ini common", result)
    return (result);
}

function commonPrefix(arr, n) {
    let kataAwalan = arr[0];

    for (let i = 1; i <= n - 1; i++) {
        kataAwalan = commonPrefixUtil(kataAwalan, arr[i]);
    }

    return (kataAwalan);
}