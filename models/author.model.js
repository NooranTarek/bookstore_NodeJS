import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
  },
  email: {
    type: String,
    required: [true, 'Author email is required'],
    unique: [true, 'Author email must be unique'],
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  bio: {
    type: String,
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book',
  }],
});


const Author = model('Author', authorSchema);

export default Author;
