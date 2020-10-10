// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string
// appear somewhere in the second string, without their order changing.

// Time Complexity O(N+M)
// Space Complexity O(1)

// isSubsequence('hello', 'hello world') ---> true
// isSubsequence('sing', 'sting')        ---> true
// isSubsequence('abc', 'acb')           ---> false

function isSubsequence(str1, str2) {
    if (str2.length === 0) return 0;

    // recorremos str2 ---> si se encuentra una letra de str2 igual a str1(0), se almacena como true
    //                 ---> si se encuentra una letra de str2 igual a str1(1), se almacena como true

    var i = 0;
    for (var j = 0; j < str2.length; j++) {
        if (str1[i] !== str2[j]) {
            i++;
        }
    }
}
