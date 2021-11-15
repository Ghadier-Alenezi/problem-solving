// Your task is to take a given range and return an array of the prime numbers in that range.
// You will write a function with the following parameters:
// start is the integer from which your range starts. (inclusive)
// end is the integer at which your range ends. (inclusive)
// If the range does not contain any prime numbers return null.
// Examples:
// primes(5, 7)

let primeArr = [];
function primes(start, end) {
  if (start % 2 == 1 && start % 3 !== 3) {
    for (let i = start; i <= end; i++) {
      primeArr.push(i);
    }
    return primeArr;

  }
}
primes(1, 10);

// not passed after more than one hour of trying