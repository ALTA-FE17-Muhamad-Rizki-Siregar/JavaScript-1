function pairSum(arr: number[], target: number): number[] | null {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const currentSum = arr[left] + arr[right];
  
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    // Jika tidak ada pasangan yang ditemukan
    return null;
  }
  
  console.log(pairSum([1, 2, 3, 4, 6], 6)); // [1, 3]
  console.log(pairSum([2, 5, 9, 11], 11));   // [0, 2]
  console.log(pairSum([1, 3, 5, 7], 12));    // [2, 3]
  console.log(pairSum([1, 4, 6, 8], 10));    // [1, 2]
  console.log(pairSum([1, 5, 6, 7], 6));     // [0, 1]
  