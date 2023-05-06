const polybiusModule = (function () {
  // HERE I CREATED THE POLYBIUS CODE OBJECT
  const polybiusCode = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  // HERE I CREATED A DECODER KEY OBJECT FOR THE POLYBIUS CODE
  const decoderKey = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  // THIS IS A HELPER FUNCTION TO ENCODE A MESSAGE
  const encoder = (input = "", polybiusCode = {}) => {
    // THE INPUT MESSAGE IS SET TO LOWERCASE THEN SPLIT INTO AN ARRAY
    const message = input.toLowerCase().split("");

    // LOOP THROUGH THE INPUT MESSAGE
    for (let i = 0; i < message.length; i++) {
      const messages = message[i];

      // AFTER LOOPING THROUGH THE MESSAGE, THE POLYBIUS CODE OBJECT IS LOOPED THROUGH AND THE MESSAGE IS ASSIGNED TO THE POLYBIUS CODE KEY ACCORDINGLY
      for (let key in polybiusCode) {
        if (key === messages) {
          message[i] = polybiusCode[key];
        }
      }
    }

    // THE ARRAY WITH THE ENCODED MESSAGE IS THEN JOINED BACK INTO A STRING
    return message.join("");
  };

  // THIS IS A HELPER FUNCTION TO DECODE THE INPUT MESSAGE AND WORKS SIMILAR TO THE ENCODER HELPER FUNCTION.
  const decoder = (input = "", decoderKey = {}) => {
    // THIS PAIRS THE INPUT NUMBER STRINGS INTO 2 DIGIT PAIRS AND MATCH SPACES "GLOBALLY"
    const code = input.match(/\d{2}|\s/g);

    // THE REST OF DECODER HELPER FUNCTION WORKS SIMILARILY TO ENCODER HELPER FUNCTION
    for (let i = 0; i < code.length; i++) {
      const codes = code[i];
      for (let key in decoderKey) {
        if (key === codes) {
          code[i] = decoderKey[key];
        }
      }
    }

    return code.join("");
  };

  // THIS IS THE "MAIN" FUNCTION THAT USES THE HELPER FUNCTIONS
  function polybius(input = "", encode = true) {
    if (encode) {
      return encoder(input, polybiusCode);
    } else {
      // THIS CHECKS IF THE INPUT'S LENGTH IS AN EVEN OR ODD NUMBER
      if (input.split(" ").join("").length % 2 !== 0) {
        return false;
      }

      return decoder(input, decoderKey);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
