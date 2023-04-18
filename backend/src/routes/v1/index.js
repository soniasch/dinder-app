const router = require('express').Router()
const { demo, dog } = require('../../api')

router.use('/demo', demo.index)
router.use('/dog', dog.index)


module.exports = router
