import * as mongoose from "mongoose";

export const FactorySchema = new mongoose.Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    unique: true
  },
  bio: String,
  description: String,
  logoPath: String,
  likeCount: {
    type: Number,
    default: 0
  },
  readCount: {
    type: Number,
    default: 0
  }
});
