import * as mongoose from 'mongoose';

export const JobSchema = new mongoose.Schema({
  description: String,
  factory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Factory',
  },
  position: String,
  size: String,
});
