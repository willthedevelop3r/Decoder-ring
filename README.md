# Decoder-Ring Project

This is a project I completed as a student at Thinkful bootcamp. I wrote the javascript and tests for this project.

## Caesar Shift Function

The Caesar Shift Function takes three arguments and encodes or decodes a message input by a shift number amount and then returns the encoded or decoded message with the help of three helper functions.

### Example

caesar("hello world", 3, true) returns an encoded message of "khoor zruog". Here the letters have shifted by 3 places making "h" to "k" and "e" to "h" and so on, this also works in the negative direction and both will wrap around the alphabet. To decode a message, the encoded message is passed as the input, the shift amount and finally false is passed as the third argument. False checks whether or not the message needs to be encoded or decoded. For example, caesar("khoor zruog", 3, false) would return "hello world".

## Polybius Square Function

The Polybius Square Function takes two arguments and encodes or decodes a message input with the help of two helper functions. For this function, a Polybius Code object was made with a Decoder Key that matches the corresponding key-value pairs of the Polybius Code object.

### Example

polybius("hello world", "true") would return the encoded message "3251131343 2543241341" and vice-versa after passing false for the second argument to decode.

## Substitution Function

The Substitution Cipher Function takes three arguments and encodes or decodes a message input with the help of two helper functions. For this function, any alphabet code (including symbols) can be inserted as the second argument of the function as long as the alphabet code has a length of 26 and doesn't contain any doubles.

### Example

substitution("hello world", "$wae&zrdxtfcygvuhbijnokmpl", true) would return the encoded message "d&ccv kvbce" and vice-versa after passing false for the third argument to decode.
