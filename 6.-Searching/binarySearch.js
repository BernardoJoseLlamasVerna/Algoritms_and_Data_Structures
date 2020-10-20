// Write a function called binarySearch which accepts a sorted array and a value and
// returns the index at which the value exists. Otherwise, return -1.

// The algorithm should be more efficient than linearSearch.

// Create a left pointer at the start of the array, and a right pointer at the end of the array.

// While the left pointer comes before the right pointer:
// * create a pointer in the middle
// * if you find the value you want, return the index
// * if the value is too small, move the left pointer up
// * if the value is too large, move the right pointer down
// If you never find the value, return -1.

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length -1;
    var middle = Math.floor((start + end)/2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle +1;
        middle = Math.floor((start + end)/2);
    }
    return arr[middle] === elem ? middle : -1;
}
