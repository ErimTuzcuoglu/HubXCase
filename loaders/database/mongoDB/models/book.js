import mongoose from 'mongoose';
import { Author } from './author.js'; // Import the Author model

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',  // Reference to the Author model
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  ISBN: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    trim: true,
  },
  numberOfPages: {
    type: Number,
    required: true,
    min: 1,
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
  }
}, { timestamps: true });

export const Book = mongoose.model('Book', bookSchema);