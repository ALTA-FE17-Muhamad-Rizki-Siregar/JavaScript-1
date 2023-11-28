function findMaxSumSubArray(k: number, arr: number[]): number {
    let maxSum = 0;
    let windowSum = 0;
    let windowStart = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
  
      if (windowEnd >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return maxSum;
  }
  
  // Test Cases
  console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])); // Output: 9
  console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]));    // Output: 7
  console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]));    // Output: 5
  console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]));    // Output: 7
  console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]));    // Output: 8
  