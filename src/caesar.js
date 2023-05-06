const caesarModule = (function () {
  // THIS IS A HELPER FUNCTION TO SHIFT THE ALPHABETS
  const shiftAlphabet = (shift = 0) => {
    // HERE I CREATED AN ALPHABET OBJECT
    const alphabetObj = {
      a: "a",
      b: "b",
      c: "c",
      d: "d",
      e: "e",
      f: "f",
      g: "g",
      h: "h",
      i: "i",
      j: "j",
      k: "k",
      l: "l",
      m: "m",
      n: "n",
      o: "o",
      p: "p",
      q: "q",
      r: "r",
      s: "s",
      t: "t",
      u: "u",
      v: "v",
      w: "w",
      x: "x",
      y: "y",
      z: "z",
    };

    // THE OBEJECT VALUES ARE EXTRACTED INTO AN ARRAY
    let alphabetValues = Object.values(alphabetObj);

    // WHILE THE SHIFT IS GREATER THAN 0, WE SHIFT THE VALUE AND PUSH IT BACK INTO THE END OF THE ARRAY UNTIL THE SHIFT IS EQUAL TO 0
    while (shift > 0) {
      let shifted = alphabetValues.shift();
      alphabetValues.push(shifted);
      shift--;
    }

    // WHILE THE SHIFT IS LESS THAN 0, WE POP THE VALUE AND PUT THEM INTO THE BEGINNING OF THE ARRAY UNTIL THE SHIFT IS EQUAL TO 0
    while (shift < 0) {
      let popped = alphabetValues.pop();
      alphabetValues.unshift(popped);
      shift++;
    }

    // THE ALPHABET KEY IS THEN ASSIGNED TO THE NEW CORRESPONDING VALUE
    let i = 0;
    for (let key in alphabetObj) {
      alphabetObj[key] = alphabetValues[i];
      i++;
    }

    return alphabetObj;
  };

  // THIS IS A HELPER FUNCTION TO ENCODE THE INPUT MESSAGE
  const encoder = (input = "", alphabet = {}) => {
    // THE INPUT MESSAGE IS SET TO LOWERCASE THEN SPLIT INTO AN ARRAY
    const message = input.toLowerCase().split("");

    // LOOP THROUGH INPUT MESSAGE
    for (let i = 0; i < message.length; i++) {
      const messages = message[i];

      // AFTER LOOPING THROUGH THE MESSAGE WE LOOP THROUGH THE ALPHBET OBJECT AND ASSIGN THE MESSAGE TO THE ALPHABET KEY ACCORDINGLY
      for (let key in alphabet) {
        if (key === messages) {
          message[i] = alphabet[key];
        }
      }
    }

    // THE ARRAY WITH THE ENCODED MESSAGE IS THEN JOINED BACK INTO A STRING
    return message.join("");
  };

  // THIS IS A HELPER FUNCTION TO DECODE THE INPUT MESSAGE AND WORKS SIMILARLY TO THE ENCODER HELPER FUNCTION
  const decoder = (input = "", alphabet = {}) => {
    const code = input.toLowerCase().split("");
    for (let i = 0; i < code.length; i++) {
      const codes = code[i];
      for (let key in alphabet) {
        const alphabetKey = alphabet[key];
        if (alphabetKey === codes) {
          code[i] = key;
        }
      }
    }
    return code.join("");
  };

  // THIS IS THE "MAIN" FUNCTION WITH THE HELPER FUNCTIONS BEING USED
  function caesar(input = "", shift = 0, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }
    const shiftedAlphabet = shiftAlphabet(shift);
    if (encode) {
      return encoder(input, shiftedAlphabet);
    } else {
      return decoder(input, shiftedAlphabet);
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
