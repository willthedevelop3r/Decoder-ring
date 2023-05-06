const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("error handling", () => {
  it("should return false if alphabet is not given", () => {
    const input = "hello";
    const actual = substitution(input);

    expect(actual).to.be.false;
  });

  it("should return false if alphabet characters length do not equal to 26", () => {
    const input = "hello";
    const alphabet = "abcdefg";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });

  it("should return false if there are duplicate alphabet characters", () => {
    const input = "hello";
    const alphabet = "ababababababababababababab";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode a message with the alphabet code", () => {
    const input = "hello";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "rmwwl";
    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with special unique characters", () => {
    const input = "hello!";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "d&ccv!";
    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });

  it("should leave symbols and spaces", () => {
    const input = "hello world!";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "d&ccv kvbce!";
    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "Hello World!";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "d&ccv kvbce!";
    const actual = substitution(input, alphabet);

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message with the alphabet code", () => {
    const input = "rmwwl";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "hello";
    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });

  it("should work with any kind of key with special unique characters", () => {
    const input = "d&ccv!";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "hello!";
    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });

  it("should leave symbols and spaces", () => {
    const input = "d&ccv kvbce!";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "hello world!";
    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "D&ccv Kvbce!";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "hello world!";
    const actual = substitution(input, alphabet, false);

    expect(actual).to.equal(expected);
  });
});
