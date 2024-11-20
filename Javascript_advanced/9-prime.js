function countPrimeNumbers() {
  let count = 0;
  for (let num = 2; num <= 100; num++) {
    if (isPrime(num)) {
      count++;
    }
  }
  return count;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log("Number of prime numbers between 2 and 100:", countPrimeNumbers());

const startTime = performance.now();

console.log("Execution time of printing countPrimeNumbers was", performance.now() - startTime, "milliseconds");
