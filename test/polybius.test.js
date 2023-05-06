const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
  it("should encode the message into number pairs", () => {
    const input = "hey there delilah";
    const expected = "325145 4432512451 41511342131132";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it("should translate 'i' and 'j' to '42'", () => {
    const input = "elijah";
    const expected = "511342421132";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it("should leave symbols and spaces", () => {
    const input = "hey there delilah";
    const expected = "325145 4432512451 41511342131132";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const input = "Hey there delilah";
    const expected = "325145 4432512451 41511342131132";
    const actual = polybius(input);

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode number strings into letters", () => {
    const input = "325145 4432512451 41511342131132";
    const expected = "hey there deli/jlah";
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });

  it("should translate '42' to 'i/j'", () => {
    const input = "511342421132";
    const actual = polybius(input, false);

    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("should leave spaces", () => {
    const input = "325145 4432512451 41511342131132";
    const expected = "hey there deli/jlah";
    const actual = polybius(input, false);

    expect(actual).to.equal(expected);
  });

  it("should return false if the length of all numbers is odd", () => {
    const input = "2345 235134341122514";
    const actual = polybius(input, false);

    expect(actual).to.be.false;
  });
});
