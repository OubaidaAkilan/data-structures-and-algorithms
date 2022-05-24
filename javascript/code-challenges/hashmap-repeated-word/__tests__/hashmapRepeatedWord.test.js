"use strict";

const repeatedWord = require("../hashmapRepeatedWord");
const pragraph = "Once upon a time, there was a brave princess who...";
const p2 = "Once upon a time";
const jhinFav = "In carnage, I bloom, like a flower at the dawn";

describe("Repeated Word Test", () => {
    it("finds the first word to occur more than once in a string", () => {
        expect(repeatedWord(pragraph)).toBe("a");
    });
    it("finds the no repeated words", () => {
        expect(repeatedWord(p2)).toBe("no repeated words!");
    });

    it('most repeateWord', () => {
        const str = 'Once upon a time, there was a brave princess who...';
        const str2 = 'it was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way  in short, the period was so far like the present period, that some of it is noisiest authorities insisted on it is being received, for good or for evil, in the superlative degree of comparison only...';
        const str3 = 'It was a queer, sultry summer, The summer they electrocuted the Rosenbergs, and I did not know what I was doing in New York...';
        expect(repeatedWord(str)).toEqual('a');
        expect(repeatedWord(str2)).toEqual("it");
        expect(repeatedWord(str3)).toEqual("summer");
    });

});