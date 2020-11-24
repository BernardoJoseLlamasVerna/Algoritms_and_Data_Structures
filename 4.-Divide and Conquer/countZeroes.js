// Given an array of 1s and 0s, write a function that returns the number of 0s and 1s:
function countZeroes(arr){
    if(arr[arr.length - 1] === 1 || !arr.length) return 0;
    if(arr[0] === 0) return arr.length;
    return countZeroes(arr.slice(0, Math.floor(arr.length/2))) +
        countZeroes(arr.slice( Math.floor(arr.length/2)));
}
