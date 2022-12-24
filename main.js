function countBits(n) {
    // Initialize a count variable to 0
    let count = 0;
    // Loop while n is greater than 0
    while (n > 0) {
      // If the remainder of n divided by 2 is 1, increment the count
      if (n % 2 === 1) {
        count += 1;
      }
      // Divide n by 2 and floor the result, so that it is an integer
      n = Math.floor(n / 2);
    }
    // Return the count of ones
    return count;
  }