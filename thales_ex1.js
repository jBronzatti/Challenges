/*  1- Write the program that monitor a possibly infinite stream of characters from the keyboard (standard
    input). If it detects the sequence "aaa" it outputs a "0". If it detects the sequence "aba" it outputs a
    "1". DO NOT detect sequences within sequences. The program should exit cleanly when it detects
    an <End Of Line>. For example:
    The following sequence aababaaabaaa<End Of Line> would produce the following result: 100
    While the following sequence aaababaaaabbababa<End Of Line> would produce the following
    result: 0101 */

function pasringABTo01(string) {
    let i = 0
    let parsed = ''
    while (i < string.length) {
        let substring = string.substring(i, i + 3);
        if (substring === 'aaa' || substring === 'aba') {
            i += 3;
            parsed += (substring === 'aaa') ? '0' : '1';
        } else {
            i++
        }
    }
    return parsed;
}

console.log(pasringABTo01('aaababaaaabbababa'))