const router = require('express').Router()
const authRoutes = require('./auth.routes')
const data = require("../db/data/phones.json")

/* GET home page */
router.get('/', (req, res, next) => {
  res.json('All good in here')
})

router.get('/phones', (req, res, next) => {
  res.json(data)
})

router.get('/phones/:id', (req, res, next) => {
  const {id} = req.params
  console.log(req.params)
  const foundPhones = data.filter(element => element.id == id)
  res.json(foundPhones)
})

router.use('/auth', authRoutes)

module.exports = router
