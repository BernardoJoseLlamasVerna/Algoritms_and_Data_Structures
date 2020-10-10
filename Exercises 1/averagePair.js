// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the
// target average. There may be more than one pair that matches the average target.

// Time Complexity O(N)
// Space Complexity O(1)

// averagePair([1, 2, 3], 2.5) ----------------------> true.
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) ---> true.
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) ------------> true.

function averagePair(arrayToCheck, targetAverage) {
    let start = 0;
    let next = arrayToCheck.length - 1;
    while (start < next) {
        let average = (arrayToCheck[start] + arrayToCheck[next])/2;
        if (average === targetAverage) {
            return true;
        } else if (average < targetAverage) {
            start++;
        } else {
            next--;
        }
    }
    return false;
}
