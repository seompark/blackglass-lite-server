import * as mongoose from 'mongoose';

export const FactorySchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
  name: String,
  bio: String,
  description: String,
  logoPath: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  readCount: {
    type: Number,
    default: 0,
  },
});
