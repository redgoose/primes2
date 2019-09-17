const express = require('express')
const router = express.Router()

const { medians, primes } = require('./math')

router.get('/median-primes/:max', function (req, res, next) {
  let { max } = req.params
  max = parseInt(max)

  if (!Number.isInteger(max)) {
    res.status(400).json({ message: 'invalid_number' })
    return next()
  }

  if (max < 0) {
    res.status(400).json({ message: 'negative_number' })
    return next()
  }

  if (max > 30000000) {
    res.status(400).json({ message: 'too_large' })
    return next()
  }

  const data = medians(primes(max))
  res.json(data)
})

module.exports = router