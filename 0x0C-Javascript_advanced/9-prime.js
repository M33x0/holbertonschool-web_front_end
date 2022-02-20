function countPrimeNumbers () {
  const sieve = [];
  let total = 0;

  for (let i = 2; i <= 100; ++i) {
    if (!sieve[i]) {
      total += 1;
      for (let j = i << 1; j <= 100; j += i) {
        sieve[j] = true;
      }
    }
  }
  return total;
}

const startTime = window.performance.now();
countPrimeNumbers();
const endTime = window.performance.now();

console.log('Execution time of printing countPrimeNumbers was ' + (endTime - startTime) + ' milliseconds.');