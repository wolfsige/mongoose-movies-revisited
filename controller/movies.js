import { Movie } from '../models/movie.js'

function newMovie(req, res){
  res.render('movies/new')
}

function create(req, res){
  
}

export {
  newMovie as new,
  create,
}