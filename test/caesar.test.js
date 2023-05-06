const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handling", () => {
  it("should return false if shift amount is 0", () => {
    const input = "hello";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("should return false if shift amount is greater than 25", () => {
    const input = "hello";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("should return false if shift amount is less than -25", () => {
    const input = "hello";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });
});

describe("encoding a message", () => {
  it("should encode input by positive shift amount", () => {
    const input = "hello";
    const expected = "khoor";
    const shift = 3;
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });

  it("should encode input by negative shift amount", () => {
    const input = "hello";
    const shift = -3;
    const expected = "ebiil";
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "Hello";
    const shift = -3;
    const expected = "ebiil";
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });

  it("should wrap around alphabet when positive shift is given", () => {
    const input = "zebra";
    const shift = 3;
    const expected = "cheud";
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });

  it("should wrap around alphabet when negative shift is given", () => {
    const input = "apple";
    const shift = -3;
    const expected = "xmmib";
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });

  it("should leave symbols and spaces", () => {
    const input = "hello world!";
    const shift = 3;
    const expected = "khoor zruog!";
    const actual = caesar(input, shift);

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode input by positive shift amount", () => {
    const input = "khoor";
    const shift = 3;
    const expected = "hello";
    const actual = caesar(input, shift, false);

    expect(actual).to.equal(expected);
  });

  it("should decode input by negative shift amount", () => {
    const input = "ebiil";
    const shift = -3;
    const expected = "hello";
    const actual = caesar(input, shift, false);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "Ebiil tloia!";
    const shift = -3;
    const expected = "hello world!";
    const actual = caesar(input, shift, false);

    expect(actual).to.equal(expected);
  });

  it("should leave symbols and spaces", () => {
    const input = "ebiil tloia!";
    const shift = -3;
    const expected = "hello world!";
    const actual = caesar(input, shift, false);

    expect(actual).to.equal(expected);
  });
});
