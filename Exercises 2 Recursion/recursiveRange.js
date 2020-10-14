// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function.

// recursiveRange(6)  ---> 21
// recursiveRange(10) ---> 55

function recursiveRange(num){
    let total = 0;

    for (let i = 0; i <= num; i++) {
        total = total+i;
    }

    return total;
}
