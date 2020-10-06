function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    // this 2 arrays are going to store how many times each array element is repeated:
    // they avoid to use O(N²) operations.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1;
    }
    for (let val of arr2) {
        frequencyCounter1[val] = (frequencyCounter2[val] || 0) +1;
    }

    for(let key in frequencyCounter1) {
        if (!(key**2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}

// [1, 2, 3, 2] & [9, 1, 4, 4]

