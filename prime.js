const isPrime = n => n > 1 && [...Array(n).keys()].slice(2).every(i => n % i !== 0);

console.log(isPrime(127)); 
