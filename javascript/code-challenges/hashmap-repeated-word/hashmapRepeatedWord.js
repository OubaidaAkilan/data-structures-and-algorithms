'use strict';

function repeatedWord(str) {

    const paragraph = str.split(/[, ]+/);
    let array = [];
    for (let i = 0; i < paragraph.length; i++) {
        let find = paragraph[i];
        const includingReapeted = array.includes(find);

        if (includingReapeted) return find;
        array.push(find);
    }
    return "no repeated words!";
}

module.exports = repeatedWord;