const { medians, primes } = require('../src/math')

describe('/src/math.js', () => {
  describe('medians()', () => {
    it('returns an empty array if empty array supplied', () => {
      const result = medians([])
      expect(result).toEqual([])
    })

    it('returns a single median when an odd number of integers is supplied', () => {
      const result = medians([1, 2, 3])
      expect(result).toEqual([2])
    })

    it('returns 2 medians when 2 integers are supplied', () => {
      const result = medians([2, 3])
      expect(result).toEqual([2, 3])
    })

    it('returns 2 medians when an even number of integers are supplied', () => {
      const result = medians([1, 2, 3, 4])
      expect(result).toEqual([2, 3])
    })
  })

  describe('primes()', () => {
    it('returns known prime numbers up to 1', () => {
      const result = primes(1)
      expect(result).toEqual([])
    })

    it('returns known prime numbers up to 2', () => {
      const result = primes(2)
      expect(result).toEqual([2])
    })

    it('returns known prime numbers up to 3', () => {
      const result = primes(3)
      expect(result).toEqual([2, 3])
    })

    it('returns known prime numbers up to 23', () => {
      const result = primes(23)
      expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23])
    })

    it('returns known prime numbers up to 100', () => {
      const result = primes(100)
      expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
    })
  })
})