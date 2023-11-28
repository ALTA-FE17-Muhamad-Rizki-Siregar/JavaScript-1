function cetakTablePerkalian(number: number): void {
    for (let i = 1; i <= number; i++) {
      let row = '';
      for (let j = 1; j <= number; j++) {
        row += `${i * j}\t`;
      }
      console.log(row);
    }
  }
  
  cetakTablePerkalian(9);
  