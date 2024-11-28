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
    return
  }

const startTime = performance.now();

HighCountNumbers();

setTimeout(() => {
function HighCountNumbers() {
  for (let i = 0; i <= 100; i++) {
    countPrimeNumbers();
  };
};
    },0);
console.log("Execution time of calculating prime numbers 100 times was", performance.now() - startTime, "milliseconds");
