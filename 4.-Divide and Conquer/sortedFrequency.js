// Given a sorted array and a number, write a function
// that counts the occurrences of the number in the array.
function sortedFrequency(arr, n){
    if(arr.length === 0) return -1;
    let middle = Math.floor(arr.length/2);
    if(arr[0] === n && arr[arr.length -1] === n) return arr.length;
    if(arr[middle] === n){
        let count = 1;
        let i = middle - 1;
        let j = middle + 1;
        while(arr[i] === n && i >= 0){
            if(arr[i] === n) count ++;
            i --;
        }
        while(arr[j] === n && j < arr.length){
            if(arr[j] === n) count ++;
            j++;
        }
        return count;
    }else if(arr[middle] > n){
        return sortedFrequency(arr.slice(0, middle), n);
    }else{
        return sortedFrequency(arr.slice(middle + 1, arr.length), n);
    }
}
