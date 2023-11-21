import { Schema } from 'mongoose'

const bookSchema = new Schema({
    title: String,
    author: String,
    genre: String
})