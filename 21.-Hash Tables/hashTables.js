/*function hashForStrings(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total*WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}*/



let ht = new HashTable(17);
ht.set("hello world", "goodbye!!");
ht.set("cats", "good!!");
ht.set("dogs", "bad!!");
