import mongoose from "mongoose";

const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: String,
  releaseYear: Number,
  MpaaRating: String,
  cast:[String],
  nowShowing: Boolean,
})