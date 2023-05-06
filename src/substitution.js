const substitutionModule = (function () {
  // THIS IS A HELPER FUNCTION TO ENCODE THE INPUT MESSAGE
  const encoder = (input = "", alphabet = "") => {
    const message = input.toLowerCase(); // MESSAGE INPUT IS SET TO LOWERCASE

    const regularAlphabet = "abcdefghijklmnopqrstuvwxyz"; // REGULAR ALPHABET

    const codeAlphabet = alphabet.toLowerCase(); // CODED ALPHABET IS SET TO LOWERCASE

    let encoded = ""; // EMPTY STRING

    // LOOP THROUGH THE INPUT MESSAGE
    for (let i = 0; i < message.length; i++) {
      const messages = message[i];

      // THIS ASSIGNS THE REGULAR ALPHABET TO THE INPUT MESSAGES ACCORDINGLY BY THEIR INDICES
      const messageIndex = regularAlphabet.indexOf(messages);

      /* IF THE REGULAR ALPHABET INCLUDES ANYTHING FROM THE MESSAGE WE ADD THE CODED ALPHABET ACCORDINGLY BY THEIR MATCHING INDICES INTO THE EMPTY STRING. THE ELSE STATEMENT IS TO ADD SPACES TO THE STRING */
      if (regularAlphabet.includes(messages)) {
        encoded += codeAlphabet[messageIndex];
      } else {
        encoded += messages;
      }
    }

    return encoded; // THE ENCODED MESSAGE IS THEN RETURNED
  };

  /* THIS IS A HELPER FUNCTION TO DECODE THE INPUT MESSAGE AND WORKS SIMILARLY TO THE ENCODER HELPER FUNCTION */
  const decoder = (input = "", alphabet = "") => {
    const code = input.toLowerCase();
    const regularAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const codeAlphabet = alphabet.toLowerCase();
    let decoded = "";

    for (let i = 0; i < code.length; i++) {
      const codes = code[i];
      const codeIndex = codeAlphabet.indexOf(codes);

      /* THIS IF STATEMENT IS THE MAIN DIFFERENCE BETWEEN THE ENCODER AND DECODER HELPER FUNCTIONS */
      if (codeIndex >= 0) {
        decoded += regularAlphabet[codeIndex];
      } else {
        decoded += codes;
      }
    }

    return decoded;
  };

  /* THIS IS THE "MAIN" FUNCTION THAT USES THE HELPER FUNCTIONS */
  function substitution(input = "", alphabet = "", encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }
    if (encode) {
      return encoder(input, alphabet);
    } else {
      return decoder(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
