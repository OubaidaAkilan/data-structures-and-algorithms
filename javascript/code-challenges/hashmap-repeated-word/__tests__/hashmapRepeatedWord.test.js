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
});