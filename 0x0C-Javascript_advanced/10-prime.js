const countPrimeNumbers = () => {
    const n = 100;
    const primes = Array(n).fill(1);
    (primes[0] = 0), (primes[1] = 0);
    for (let i = 2; i < Math.sqrt(n); i++)
        if (primes[i])
            for (let j = i * i; j < n; j += i) primes[j] = 0;
    return primes.reduce((a, b) => a + b, 0);
};

const t0 = performance.now();
for (let i = 0; i < 100; i++) countPrimeNumbers();
const t1 = performance.now();
console.log(
    `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);
