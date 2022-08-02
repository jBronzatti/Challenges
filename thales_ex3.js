/*  Given an array of strings with file names you must check that you don ́t have duplicate file names
in the array. In case you found repeated names you should rename the file adding “(x)” .... X is the
smallest integer such that the obtained name is not used yet.
a. Example: ["txt", "txt", "image", "txt(1)", "txt"] – Answer: ["txt", "txt(1)", "image", "txt(1)(1)",
"txt(2)"]
b. Other arrays to test:
i. ["file","file","file(1)","file(3)","file(2)","file(2)"] – Answer:
["file","file(1)","file(1)(1)","file(3)","file(2)","file(2)(1)"]
ii. ["b(1)","b(6)","b","b","b","b","b","b","b","b","b","b"] – Answer:
["b(1)","b(6)","b","b(2)","b(3)","b(4)","b(5)","b(7)","b(8)","b(9)","b(10)","b(11)"] */

function eliminateDoubledNames(arr) {
    const set = Array.from(new Set(arr));
    let obj = []
    if (set.length === arr.length) {
        return arr;
    } else {
        set.filter(item => obj.hasOwnProperty(item) ? false : (obj[item] = true));
    }

    return console.log(set)
}

console.log(eliminateDoubledNames(['a', 'a', 'b', 'c', 'b', 'e']))