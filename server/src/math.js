function primes(max) {
  const sieve = Array(max+1).fill(true)

  for (let i = 2; i <= Math.sqrt(max); i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= max; j += i) {
        sieve[j] = false
      }
    }
  }

  const primes = []
  for (let i = 2; i <= max; i++) {
    if (sieve[i]) {
      primes.push(i)
    }
  }

  return primes
}

function medians(primes) {
  const medians = []

  if (primes.length == 0) {
    return medians
  }

  const midPoint = Math.floor(primes.length / 2)
  if (primes.length % 2 === 0) {
    medians.push(primes[midPoint - 1], primes[midPoint])
  } else {
    medians.push(primes[midPoint])
  }

  return medians
}

module.exports.medians = medians
module.exports.primes = primes
