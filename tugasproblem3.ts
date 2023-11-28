function printDiamond(letter: string): void {
    const startChar = 'A';
    const endChar = letter.toUpperCase();
    const diamondSize = endChar.charCodeAt(0) - startChar.charCodeAt(0) + 1;
  
    for (let i = 0; i < diamondSize; i++) {
      const currentChar = String.fromCharCode(startChar.charCodeAt(0) + i);
      const spaces = ' '.repeat(diamondSize - i - 1);
  
      if (i === 0 || i === diamondSize - 1) {
        // First and last row
        console.log(spaces + currentChar);
      } else {
        // Rows with two identical letters
        const middleSpaces = ' '.repeat(2 * i - 1);
        console.log(spaces + currentChar + middleSpaces + currentChar);
      }
    }
  
    for (let i = diamondSize - 2; i >= 0; i--) {
      const currentChar = String.fromCharCode(startChar.charCodeAt(0) + i);
      const spaces = ' '.repeat(diamondSize - i - 1);
  
      if (i === 0 || i === diamondSize - 1) {
        // First and last row of the bottom half
        console.log(spaces + currentChar);
      } else {
        // Rows with two identical letters in the bottom half
        const middleSpaces = ' '.repeat(2 * i - 1);
        console.log(spaces + currentChar + middleSpaces + currentChar);
      }
    }
  }
  
  // Test Case 1
  console.log('Test Case 1:');
  printDiamond('C');
  console.log();
  
  // Test Case 2
  console.log('Test Case 2:');
  printDiamond('E');
  console.log();
  