import { Schema, model } from 'mongoose';

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
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
