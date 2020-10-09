// Given 2 positive integers, find out if the two numbers have the same frequency digits
// Time Complexity O(N)
// sameFrequency(182, 281) ---> true
// sameFrequency(34, 43)   ---> true
// sameFrequency(22, 222)  ---> false

function sameFrequency(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();

    if (num1.length !== num2.length) return false;

    const lookup = {};

    for (let i = 0; i < num1.length; i++) {
        let letter = num1[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] =1;
    }

    for (let i = 0; i < num2.length; i++) {
        let letter = num2[i];

        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}
