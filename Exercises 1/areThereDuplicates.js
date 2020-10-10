// Accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in.
// Can be solved using the freq. counter pattern or the multiple pointers pattern.
// Restrictions:
// * Time Complexity O(N)
// * Space Complexity O(N)
// Bonus:
// * Time Complexity O(NlogN)
// * Space Complexity O(1)

// areThereDuplicates(1, 2, 3) ---> false
// areThereDuplicates(1, 2, 2) ---> true
// areThereDuplicates('a', 'b', 'c', 'a) ---> true

function areThereDuplicates() {
    let collection = {};
    for(let val in arguments) {
        collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
    }
    for(let key in collection) {
        if(collection[key] > 1) return true;
    }
    return false;
}

function areThereDuplicates_2(args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true;
        }
        start++;
        next++;
    }
    return false;
}

function areThereDuplicates_3() {
    return new Set(arguments).size !== arguments.length;
}
