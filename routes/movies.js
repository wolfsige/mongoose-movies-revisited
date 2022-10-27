import { Router } from 'express'

const router = Router()
import * as moviesCtrl from '../controller/movies.js'


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

// GET
router.get('/new', moviesCtrl.new)

// POST
router.post('/', moviesCtrl.create)

export {
  router
}
