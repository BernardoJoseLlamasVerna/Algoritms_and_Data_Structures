function sumZero(arr) {
    // two pointers:
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]; //while loop finish here if sum equals to zero
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// Time Complexity O(N)
// Space Complexity O(1)
