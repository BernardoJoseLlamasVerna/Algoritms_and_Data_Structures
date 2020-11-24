// function accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array.
// If the value is not found, return -1.
const findRotatedIndex = (array, num) => {
    let j = 1;
    let i = 0;
    while (i < j && j < array.length) {
        if (array[i] === num) return i;
        if (array[j] === num) return j;
        if (array[i] > array[j]) break;
        else {
            i++;
            j++;
        }
    }
    array.splice(0, j);

    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((end + start) / 2);
        if (array[middle] === num) return j + middle;
        if (array[middle] < num) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}
